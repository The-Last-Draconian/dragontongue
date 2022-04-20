//dictionary data
//storing the JSON file
const requestURL = "https://the-last-draconian.github.io/dragontongue/json/dictionary.json";

//fetching the URL and making a Promise
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        //Array function based off Virtual Lab example
         const dictionaryData = jsonObject["dictionary"];
        //Filter out relevant data
        const firstLetter = dictionaryData.filter((letter) => letter.first-letter);
         firstLetter.forEach((letter) => {
            //first-letter div
            let flDiv = document.createElement("div");
            flDiv.setAttribute("class", "first-letter");

            //first-letter heading
            let flh2 = document.createElement("h2");
            flh2.textContent = "testing";
            //flh2.textContent = `${letter.first-letter}`;
            
            //ordering the content
            flDiv.appendChild(flh2);

            //exporting the content to the restaurants section
            document.querySelector("#dictionary-wrapper").appendChild(flDiv);

        });
    });