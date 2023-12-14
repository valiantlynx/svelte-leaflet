import React from 'react'
import Gun from 'gun/gun';


function ProcessMessage(props) {
    const gun = Gun(
        // { peers: ['http://localhost:8765/gun'] }
        { peers: ['https://chat.valiantlynx.com/gun'] }
    );

    const message = props.message;


    function processMessage(message) {
        if (message.includes('@help')) {
            console.log('help');
            addsearchTermMessage('I can help with that! Here are some commands you can try:`\n-` @weather [city]: Get the current weather for a city\n- @news: Get the latest news headlines\n- @wiki [search term]: Search Wikipedia for an article');
        } else if (message.includes('@weather')) {
            weather(message);
        } else if (message.includes(`@news`)) {
            newsapi(message);
        } else if (message.includes('@wiki')) {
            wikipedia(message);
        }
        else if (message.includes('@ai')) {
            ai(message);
        }
    }

    function wikipedia(message) {
        const searchTerm = message.split('@wiki ')[1];
        console.log(searchTerm);
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&utf8=&format=json&origin=*`)
            .then(response => response.json())
            .then(data => {
                const pages = data.query.search;
                //console.log(pages);
                const pageTitles = pages.map(page => page.title);
                //console.log(pageTitles);
                addsearchTermMessage(`Here are some Wikipedia articles that match your search:\n${pageTitles.join('\n')}`);
            })
            .catch(() => {
                addsearchTermMessage(`Sorry, I couldnt find any Wikipedia articles for ${searchTerm}.`);
            });
    }

    function newsapi(message) {
        const emne = message.split('@news ')[1];
        console.log(emne);
        fetch(`https://newsapi.org/v2/top-headlines?country=no&apiKey=838674747d4742299653d7e6d252ae35&q=${emne}`)
            .then(response => response.json())
            .then(data => {

                const articles = data.articles;
                //console.log(articles);
                const headlines = articles.map(article => article.title);
                console.log(headlines);
                addsearchTermMessage(`Here are the latest news headlines:\n${headlines.join('\n')}`);
            })
            .catch(() => {
                addsearchTermMessage('Sorry, I couldnt get the latest news.');
            });
    }

    function weather(message) {
        const city = message.split('@weather ')[1];
        console.log(city);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba5cd6df97458072af2feb17bcfdf75c`)
            .then(response => response.json())
            .then(data => {
                const { main, weather } = data;
                const temp = Math.round(main.temp - 273.15);
                console.log(temp);
                const description = weather[0].description;
                console.log(description);
                addsearchTermMessage(`The current weather in ${city} is ${temp}°C with ${description}.`);
            })
            .catch(() => {
                addsearchTermMessage(`Sorry, I couldnt get the weather for ${city}.`);
            });
    }

    async function ai(message) {
        console.log('ai');
        const searchTerm = message.split('@ai ')[1];
        addsearchTermMessage(`Hello! How can I assist you today?${searchTerm}`);
        async function generateText(searchTerm) {
          const response = await fetch('http://localhost:5000/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input_text: searchTerm })
          });

          const data = await response.json();
          return data.generated_text;
        }

    //     async function generateText(searchTerm) {

    //         let pyodide = await loadPyodide();
    //         var data = {
    //             'message': ['Hello', 'How are you?', 'Goodbye', 'Nice to meet you'],
    //             'label': ['greeting', 'question', 'farewell', 'introduction']
    //         }

    //         await pyodide.loadPackage("micropip");

    //         const micropip = pyodide.pyimport("micropip");
    //         await micropip.install("numpy")
    //         await micropip.install(" scikit-learn")
    //         await micropip.install("pandas")
    //         console.log("Installed packages");
    //         await pyodide.runPython(`
    //   import pandas as pd

    //   from sklearn.feature_extraction.text import CountVectorizer
    //   from sklearn.naive_bayes import MultinomialNB

    //   # Step 1: Collect chat data
    //   df = pd.DataFrame(${JSON.stringify(data)})
    //   print(df)

    //   # Step 2: Preprocess the data
    //   vectorizer = CountVectorizer(stop_words='english')
    //   X = vectorizer.fit_transform(df['message'])
    //   y = df['label']

    //   # Step 3: Build the chatsearchTerm model
    //   model = MultinomialNB()

    //   # Step 4: Train the model
    //   model.fit(X, y)

    //   # Step 5: Test and refine the chatsearchTerm
    //   message = "${searchTerm}"
    //   X_test = vectorizer.transform([message])
    //   prediction = model.predict(X_test)

    //   print(prediction)
      

    // `);


    //         const prediction_string = pyodide.globals.get("prediction").toString();
    //         const prediction_array = prediction_string.split("'"); // ['[', 'greeting', ']']
    //         const prediction = prediction_array[1]; // greeting

    //         console.log("prediction_string", prediction_string);
    //         console.log("prediction_array", prediction_array);


    //         return prediction;

    //     }

    //     // Example usage
    //     const generatedText = await generateText(searchTerm);
    //     addsearchTermMessage(generatedText);
    //     console.log("generatedText", generatedText);

    }

    function addsearchTermMessage(message) {
        const time = new Date().getTime();
        const id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36)
        const data = { username: 'bot', message, time, id };
        gun.get('messages').set(data);
    }

    return (
        <div>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js"></script>
            <script>
                {processMessage()}
            </script>

        </div>
    )
}

export default ProcessMessage