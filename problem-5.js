function analyzeText(str){
    if(typeof str !== 'string' || str === ""){
        return 'Invalid';
    }
    const convertStrToArray = str.split(' ');
    const token = str.replaceAll(" ","").length;
    let longestWord = convertStrToArray[0];
    for(const sword of convertStrToArray){
        if(sword.length > longestWord.length ){
            longestWord = sword;
        }
    }
    return {longwords :longestWord, token : token };
}

// const text = analyzeText("Programming is fun");//{ longwords: 'Programming', token: 16 }
// const text = analyzeText("I am a little honest person");//{ longwords: "little", token: 22 }
// const text = analyzeText("Hello world");//{ longwords: "Hello", token: 10 }
// const text = analyzeText("Keep coding keep shining");//{ longwords: "shining", token: 21 }
const text = analyzeText("A quick brown fox");//{ longwords: "quick", token: 14 }
// const text = analyzeText(12345);//Invalid
// const text = analyzeText("");//Invalid
console.log(text);