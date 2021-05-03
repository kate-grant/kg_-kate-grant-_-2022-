'use strict';

const cypher = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

const input = process.argv;
//console.log(input);

function getNumStringArray(inputString){
    let numArray = [];
    for (let i = 0; i < inputString.length; i++) {
        if(i > 1){
            numArray.push(inputString[i]);
        }
    }
    return numArray;
}

//console.log(getNumStringArray(input));

let myNumArray = getNumStringArray(input);

myNumArray.forEach(element => {
    let wordArr = [];
    let charArr = element.split("");
    charArr.forEach(charElement => {
        if((!parseInt(charElement)) && (charElement != "0")){
            console.log("Please only enter integers");
        }else if(parseInt(charElement) || charElement == "0"){
            let digit = parseInt(charElement);
            let wordDigit = cypher[digit];
            
            wordArr.push(wordDigit);
        }
        
    })
    //console.log(wordArr);
    wordArr = wordArr.join("");

    ansArray.push(wordArr);
    //console.log(ansArray);
    
});

//console.log(ansArray);
console.log(ansArray.join());