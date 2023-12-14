import * as IPFS from 'ipfs-core';

const main = async () => {
    // "await" logic to spawn a node
    const node = await IPFS.create();

    const fileAdded = await node.add({
        path: "test2.txt",
        content: "this is completely different content",
    });

    console.log("Added file:", fileAdded.path, fileAdded.cid);

    const chunks = [];
    for await (const chunk of node.cat(fileAdded.cid)) {
        chunks.push(chunk);
    }

    console.log("Retrieved file contents:", chunks.toString());

    // pin files
    for await (const data of node.pin.ls()) {
        for await (const data1 of node.pin.addAll(data)) {
            console.log("pinned ", data1)
        }
        console.log("ls data", data.cid.toString(), "type", data.type)
    }

    // publish files
    await node.name.publish(fileAdded.cid.toString(), { resolve: false }).then((res) => {
        console.log("published ", res)
    })

    console.log("published ", fileAdded.cid.toString())
}

main()