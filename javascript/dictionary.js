//dictionary data
//storing the JSON file
const requestURL = "https://the-last-draconian.github.io/dragontongue/json/dictionary.json";

//fetching the URL and making a Promise
fetch(requestURL)
    .then((response) => response.json())
    .then((dictionary) => {
        console.log(dictionary);

        let firstLetter = dictionary.firstLetter;
        
        for (i=0; i < 4; i++) {
            let flDiv = document.createElement("div");
            flDiv.setAttribute("class", "first-letter");

            //first-letter heading
            let flh2 = document.createElement("h2");
            flh2.textContent = firstLetter[i];
                
            let testing = document.createElement("p");
            testing.textContent = "this is a test";

            //ordering the content
            flDiv.appendChild(flh2);
            flDiv.appendChild(testing);

            //exporting the content to the restaurants section
            document.querySelector("#dictionary-wrapper").appendChild(flDiv);

        }
    });