
function finalScore(omr){
    if(typeof omr !== 'object'){
        return 'Invalid';
    }
    else if(Array.isArray(omr) !== 'object'){
        return 'Invalid';
    }
    else if(omr.skip < 1 ){
        return 'Invalid';
    }
    const r = 1;
    const w = -0.5;
    const s = 0;
    const cN = omr.right * r;
    const wN = omr.wrong * w;
    const sN = omr.skip * s;
    const finalMarks = Math.round(cN+wN+sN);
    return finalMarks;
}


const bcsMarks = finalScore(["Raj"]);//Invalid
// const bcsMarks = finalScore("!@#");//Invalid
// const bcsMarks = finalScore({ right: 30, wrong: 30, skip: 40 });//15
// const bcsMarks = finalScore({ right: 50, wrong: 10, skip: 40 });//45
// const bcsMarks = finalScore({ right: 80, wrong: 25, skip: 0 });//Invalid
// const bcsMarks = finalScore({ right: 67, wrong: 23, skip: 10 });//56
console.log('BCS Total Marks is : ',bcsMarks);