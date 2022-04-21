//dictionary data
//storing the JSON file
const requestURL = "https://the-last-draconian.github.io/dragontongue/json/dictionary.json";

//fetching the URL and making a Promise
fetch(requestURL)
    .then((response) => response.json())
    .then((dictionary) => {
        console.log(dictionary);

        let firstArray = dictionary.dictionary;
            console.log(firstArray.length);
        let firstLimit = firstArray.length;

        for (i=0; i < firstLimit; i++) {
            let fldata = dictionary.dictionary[i];
            let flDiv = document.createElement("div");
            flDiv.setAttribute("id", "fl-" + fldata.first);
            
            //first-letter heading
            let flh2 = document.createElement("h2");
            flh2.textContent = fldata.first;

            //ordering the content
            flDiv.appendChild(flh2);
            document.querySelector("#wrapper").appendChild(flDiv);
           
           
            //second-letter heading 
            let secondArray = fldata.second;
                console.log(secondArray.length);
            let secondLimit = secondArray.length;

            for (u=0; u < secondLimit; u++) {
                let sldata = fldata.second;
                let slSection = document.createElement("section");

                let slh3 = document.createElement("h3");
                slh3.textContent = sldata[u].secondletter;

                let test2 = document.createElement("p");
                test2.textContent = "this is test "+sldata[u].secondletter;
            
                flDiv.appendChild(slSection);
                slSection.appendChild(slh3);
                slSection.appendChild(test2); 
            }
        }
    });