function newPrice(money,discount){
    if(typeof money !== 'number'|| typeof discount !== 'number'){
        return 'Invalid';
    }
    else if(discount < 0 || discount > 100){
        return 'Invalid';
    }
    const currentPrice = money;
    const discountPrice = (currentPrice * discount) / 100;
    const payAmount = currentPrice - discountPrice;
    const finalPayment = payAmount.toFixed(3);
    return finalPayment;   
}

const price = newPrice(500,"5");
console.log('Payable Amount is (-discount amt) : ',price);