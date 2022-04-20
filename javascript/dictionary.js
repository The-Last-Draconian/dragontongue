//dictionary data
//storing the JSON file
const requestURL = "https://the-last-draconian.github.io/dragontongue/json/dictionary.json";

//fetching the URL and making a Promise
fetch(requestURL)
    .then((response) => response.json())
    .then((dictionary) => {
        console.log(dictionary);

        let data = dictionary;
        
        for (i=0; i < 4; i++) {
            let flDiv = document.createElement("div");
            //first-letter heading
            let flh2 = document.createElement("h2");
            flh2.textContent = `${data[0].firstLetter}`;
                
            let testing = document.createElement("p");
            testing.textContent = "this is a test";

            //ordering the content
            flDiv.appendChild(flh2);
            flDiv.appendChild(testing);

            //exporting the content to the restaurants section
            document.querySelector("#wrapper").appendChild(flDiv);

        }
    });