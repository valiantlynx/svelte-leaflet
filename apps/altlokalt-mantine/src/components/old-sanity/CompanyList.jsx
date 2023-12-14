import React, { useState, useEffect } from 'react';
import client from './sanity'



function CompanyList() {

    const [message, setMessage] = useState(['']);

    function ficUpMultiple() {
        const fetchDocuments = () =>
            client.fetch(`*[_type == 'warehouse' && defined(name)][0...100] {_id, _rev, name}`)

        const buildPatches = docs =>
            docs.map(doc => ({

                id: doc._id,
                patch: {
                    set: { name: "warehouse" },
                    // unset: ['name'],

                    // this will cause the transaction to fail if the documents has been
                    // modified since it was fetched.
                    ifRevisionID: doc._rev
                }
            }))

        const createTransaction = patches =>
            patches.reduce((tx, patch) => tx.patch(patch.id, patch.patch), client.transaction())


        const commitTransaction = tx => tx.commit()

        const migrateNextBatch = async () => {
            const documents = await fetchDocuments()
            const patches = buildPatches(documents)
            console.log(patches)

            if (patches.length === 0) {
                console.log('No more documents to migrate!')
                return null
            }

            console.log(
                `Migrating batch:\n %s`,
                patches.map(patch => `${patch.id} => ${JSON.stringify(patch.patch)}`).join('\n')
            )

            const transaction = createTransaction(patches)
            //console.log(transaction)
            await commitTransaction(transaction)
            return migrateNextBatch()
        }

        migrateNextBatch().catch(err => {
            console.error(err)
            process.exit(1)
        })
    }


    async function name() {
        data.map(doc => (
            console.log(doc.organisasjonsnummer)
        ))
    }


    async function test() {
        const fetchDocuments = () =>
            client.fetch(`*[_type == 'warehouse']`)

        const documents = await fetchDocuments()

        console.log(documents)

    }

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://data.brreg.no/enhetsregisteret/api/enheter/lastned');

            console.log(response._embedded)
            const json = await response.json();
            console.log(json._embedded.enheter)
            setData(json._embedded.enheter);
        };
        fetchData();
    }, []);



    async function generateOrganisasjonsnummer() {
        let nummer = '9';
        for (let i = 0; i < 7; i++) {
            nummer += Math.floor(Math.random() * 10);
        }

        const weights = [3, 2, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 8; i++) {
            sum += weights[i] * nummer[i];
        }

        const controlDigit = (11 - (sum % 11)) % 11;
        nummer += controlDigit;


        return nummer;
    }



    const handleImport = async () => {

        for (const component of data) {


            try {
                const documentId = `${component.organisasjonsnummer}`;
                const result = await client.createIfNotExists({
                    _id: documentId,
                    _type: 'organization',
                    ...component
                });

                setMessage([...message, `Document created or updated: ${result._id}`]);

            } catch (error) {
                setMessage(`Error importing data: ${error.message}`);
            }
        }
    };


    // const handleImport = async () => {
    //     const stream = fs.createReadStream('data.json', { encoding: 'utf8' });

    //     let buffer = '';
    //     let count = 0;

    //     stream.on('data', async chunk => {
    //         buffer += chunk;

    //         while (true) {
    //             try {
    //                 const component = JSON.parse(buffer);
    //                 buffer = '';

    //                 count += 1;

    //                 const documentId = `${component.organisasjonsnummer}`;
    //                 const result = await client.createOrReplace({
    //                     _id: documentId,
    //                     _type: 'organization',
    //                     ...component
    //                 });

    //                 setMessage(`Document created or updated: ${result._id}`);
    //             } catch (error) {
    //                 if (error instanceof SyntaxError) {
    //                     break;
    //                 } else {
    //                     throw error;
    //                 }
    //             }
    //         }
    //     });


//     stream.on('end', () => {
//         setMessage(`Data imported successfully! ${count} components processed.`);
//     });

//     stream.on('error', error => {
//         setMessage(`Error importing data: ${error.message}`);
//     });
// };


return (
    <div>
        <button className="btn btn-warning" onClick={handleImport}>Import data</button>

        <ul>{message.map((message, index) => <li key={index}>{message}</li>)}</ul>
    </div>
)
}

export default CompanyList