function analyzeText(str){
    if(typeof str !== 'string'){
        return 'Invaid';
    }
    const convertStrToArray = str.split(' ');
    const arrayLength = convertStrToArray.length;
    const longestWord = convertStrToArray[0];
    for(const sword of convertStrToArray){
        if(sword > longestWord.length ){
            longestWord = sword;
        }
    }
    console.log(convertStrToArray,arrayLength);
    console.log(longestWord);
}

const text = analyzeText("Programming is fun");
console.log(text);