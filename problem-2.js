function validOtp(otp){
    if(typeof otp !== 'string'){
        return 'Invalid';
    }
    else if(otp.length !== 8 ){
        return false;
    }
    const otpStr = otp;
    if(otpStr.startsWith('ph-')){
        return true;
    }
    else{
        return false;
    }
}

const str = validOtp("ph-10985");
console.log(str);



