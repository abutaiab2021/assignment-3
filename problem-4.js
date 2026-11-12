function gonoVote(array){
    if(Array.isArray(array) === false){
        return 'Invalid';
    }
    console.log(array);
}

const vote = gonoVote(10);
console.log(vote);