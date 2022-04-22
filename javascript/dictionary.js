//dictionary data
//storing the JSON file
const requestURL = "https://the-last-draconian.github.io/dragontongue/json/dictionary.json";

//fetching the URL and making a Promise
fetch(requestURL)
    .then((response) => response.json())
    .then((dictionary) => {
        console.log(dictionary);
        
        //FIRST-LETTER HEADING
        let firstArray = dictionary.dictionary;
            console.log(firstArray.length);
        let firstLimit = firstArray.length;

        for (i=0; i < firstLimit; i++) {
            let fldata = dictionary.dictionary[i];

            //first-letter div
            let flDiv = document.createElement("div");
            flDiv.setAttribute("id", "fl-" + fldata.first);
            flDiv.setAttribute("class", "fl-" + fldata.first);
            
            //heading
            let flh1 = document.createElement("h2");
            flh1.textContent = fldata.first;

            //ordering the content
            flDiv.appendChild(flh1);
            
           
           
            //SECOND-LETTER HEADING
            let secondArray = fldata.second;
                console.log(secondArray.length);

            //make sure there is actually a second letter
            if (0 < secondArray.length) {
            let secondLimit = secondArray.length;
                for (u=0; u < secondLimit; u++) {
                    let sldata = fldata.second[u];

                    //second-letter section
                    let slSection = document.createElement("section");
                    slSection.setAttribute("id", "sl-" + sldata.secondletter);
                    slSection.setAttribute("class", "sl-" + sldata.secondletter);

                    let slh3 = document.createElement("h3");
                    slh3.textContent = sldata.secondletter;

                    flDiv.appendChild(slSection);
                    slSection.appendChild(slh3);

                    //WORDS!!!
                    let wordArray = sldata.words;
                    console.log(wordArray.length);

                    let wordLimit = wordArray.length;
                    for (w=0; w < wordLimit; w++) {
                        let wdata = sldata.words[w];

                        //word div
                        let wordDiv = document.createElement("div");
                        wordDiv.setAttribute("class", "word-div");

                        let wh4 = document.createElement("h4");
                        wh4.textContent = wdata.name;

                        let hspan = document.createElement("span");
                        hspan.textContent = wdata.h_pron;

                        let dspan = document.createElement("span");
                        dspan.textContent = wdata.d_pron;
                    
                        slSection.appendChild(wordDiv);
                        wordDiv.appendChild(wh4);
                        wordDiv.appendChild(hspan);
                        wordDiv.appendChild(dspan);


                        //DEFINITION ARRAY
                        let defArray = wdata.definition;
                        console.log(defArray.length);

                        //make sure there is actually a second letter
                        if (1 < defArray.length) {
                        let secondLimit = defArray.length;
                            for (d=0; d < defLimit; d++) {
                                let defdata = wdata.definition[d];

                                //second-letter section
                                let defDiv = document.createElement("div");
                                
                                let h_example = document.createElement("p");
                                h_example.textContent = defdata.examples[0].h_example;

                                let d_example = document.createElement("p");
                                d_example.textContent = defdata.examples[0].d_example;
                                
                                wordDiv.appendChild(defDiv);
                                defDiv.appendChild(h_example);
                                defDiv.appendChild(h_example);
                            }
                        } else {
                            let defdata = wdata.definition[0];

                            //second-letter section
                            let defDiv = document.createElement("div");
                                
                            let h_example = document.createElement("p");
                            h_example.textContent = defdata.examples[0].h_example;

                            let d_example = document.createElement("p");
                            d_example.textContent = defdata.examples[0].d_example;
                                
                            wordDiv.appendChild(defDiv);
                            defDiv.appendChild(h_example);
                            defDiv.appendChild(d_example);
                        }
                    }
                }
            }

            document.querySelector("#wrapper").appendChild(flDiv);
        }
    });