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
            flDiv.setAttribute("class", "fl hide");
1

            //heading
            let flh1 = document.createElement("h1");
            flh1.textContent = fldata.first;
            let hideFl = `toggleDiv("fl-${fldata.first}")`;
            flh1.setAttribute("onclick", hideFl);

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
                    slSection.setAttribute("class", "sl hide");

                    let slh2 = document.createElement("h2");
                    slh2.textContent = sldata.secondletter;
                    let hideSl = `toggleDiv("sl-${sldata.secondletter}")`;
                    slh2.setAttribute("onclick", hideSl);

                    flDiv.appendChild(slSection);
                    slSection.appendChild(slh2);

                    //WORDS!!!
                    let wordArray = sldata.words;
                    console.log(wordArray.length);

                    let wordLimit = wordArray.length;
                    for (w=0; w < wordLimit; w++) {
                        let wdata = sldata.words[w];

                        //word div
                        let wordDiv = document.createElement("div");
                        wordDiv.setAttribute("class", "word-div");

                        let wh3 = document.createElement("h3");
                        wh3.textContent = wdata.name;

                        let hspan = document.createElement("span");
                        hspan.setAttribute("class", "pronounce");
                        hspan.textContent = wdata.h_pron;

                        //let dspan = document.createElement("span");
                        //dspan.textContent = wdata.d_pron;
                    
                        slSection.appendChild(wordDiv);
                        wordDiv.appendChild(wh3);
                        wordDiv.appendChild(hspan);
                        //wordDiv.appendChild(dspan);


                        //DEFINITION ARRAY
                        let defArray = wdata.definition;
                        console.log(defArray.length);

                        //make sure there is actually a second definition
                        if (1 < defArray.length) {
                        let defLimit = defArray.length;
                            for (d=0; d < defLimit; d++) {
                                let defdata = wdata.definition[d];

                                //definition section
                                let defDiv = document.createElement("div");
                                
                                let h_example = document.createElement("p");
                                h_example.textContent = defdata.examples[0].h_example;

                                let d_example = document.createElement("p");
                                d_example.textContent = defdata.examples[0].d_example;

                                let number = document.createElement("span");
                                number.setAttribute("class", "order");
                                let n = d + 1;
                                number.textContent = n + "." ;

                                let meaning = document.createElement("p");
                                meaning.textContent = defdata.meaning;

                                wordDiv.appendChild(defDiv);
                                //defDiv.appendChild(h_example);
                                //defDiv.appendChild(h_example);
                                defDiv.appendChild(number);
                                defDiv.appendChild(meaning);
                            }
                        } else {
                            let defdata = wdata.definition[0];

                            //second-letter section
                            let defDiv = document.createElement("div");
                                
                            let h_example = document.createElement("p");
                            h_example.textContent = defdata.examples[0].h_example;

                            let d_example = document.createElement("p");
                            d_example.textContent = defdata.examples[0].d_example;

                            let meaning = document.createElement("p");
                            meaning.textContent = defdata.meaning;
                                
                            wordDiv.appendChild(defDiv);
                            //defDiv.appendChild(h_example);
                            //defDiv.appendChild(d_example);
                            defDiv.appendChild(meaning);
                        }
                    }
                }
            }

            document.querySelector("#wrapper").appendChild(flDiv);
        }
    });