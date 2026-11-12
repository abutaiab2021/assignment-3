function analyzeText(str){
    if(typeof str !== 'string'){
        return 'Invaid';
    }
    console.log(str);
}

const text = analyzeText(10);
console.log(text);