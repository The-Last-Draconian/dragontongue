//dictionary data
//storing the JSON file
//const requestURL = "https://the-last-draconian.github.io/dragontongue/json/dictionary.json";

//fetching the URL and making a Promise
fetch(requestURL)
    .then((response) => response.json())
    .then((dictionary) => {
        console.log(dictionary);
        
        //getting first letter
        let firstArray = dictionary.dictionary;
            console.log(firstArray.length);
        let firstLimit = firstArray.length;

        for (i=0; i < firstLimit; i++) {
            let fldata = dictionary.dictionary[i];

            //first-letter link
            let navlink = document.createElement("a");
            navlink.setAttribute("id", fldata.first);
            navlink.setAttribute("class", "nav");
            navlink.setAttribute("href", `#fl${fldata.first}`);

            //text content
            navlink.textContent = fldata.first;

            document.querySelector("#dictionary-nav").appendChild(navlink);
        }
    });