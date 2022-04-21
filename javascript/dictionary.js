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
        let firstLimit = firstArray.length + 1;

        for (i=0; i < firstLimit; i++) {
            let fldata = dictionary.dictionary[i];
            let flDiv = document.createElement("div");
            //first-letter heading
            let flh2 = document.createElement("h2");
            flh2.textContent = fldata.first;
                
            let test1 = document.createElement("p");
            test1.textContent = "this is test 1";

            //ordering the content
            flDiv.appendChild(flh2);
            flDiv.appendChild(test1);

            //second-letter heading
            let secondArray = fldata.second;
                console.log(secondArray.length);
            let secondLimit = secondArray.length + 1;
            console.log(fldata.second[1].define);
            
            for (u=0; u < secondLimit; u++) {
                let sldata = fldata.second;
                
                let slSection = document.createElement("section");

                let test2 = document.createElement("p");
                test2.textContent = "this is test 2";
                
                
                flDiv.appendChild(slSection);
                slSection.appendChild(test2);
            }           

            //exporting the content to the restaurants section
            document.querySelector("#wrapper").appendChild(flDiv);

        }
    });