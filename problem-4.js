function gonoVote(array){
    if(Array.isArray(array) === false){
        return 'Invalid';
    }
    let haCount = 0;
    let naCount = 0;
    for(const arr of array){
        if(arr == 'ha'){
            haCount++;
        }
        else if(arr === 'na'){
            naCount++;
        }
    }
    if(haCount > naCount){
        return true;
    }
    else if(haCount === naCount){
        return "equal";
    }
    else{
        return false;
    }
}

// const vote = gonoVote(["ha", "na", "na"]);//false
// const vote = gonoVote(["ha", "ha", "ha", "na"]);//true
// const vote = gonoVote(["ha", "na", "ha", "na"]);//equal
// const vote = gonoVote("ha, na");//Invalid
const vote = gonoVote(12345);//Invalid
console.log('Final Vote Result is : ',vote);