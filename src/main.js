'use strict'

    /* Checking Arithmetic and Geometric*/
    
    const aritGeo = (arr) =>{
        if (arr.length === 0 ){
            return "0"
        }
        if (isArithmetic(arr)){
            return "Arithmetic";
        } 
        if(isGeometric(arr)){
            return "Geometric";
        }
        if (!isArithmetic || isGeometric) {
            return "-1";
        }
    }
    
    const isArithmetic = (arr) => {
        const diff = arr[1]-arr[0];
        for (let i = 2; i <= arr.length; i++){
            if((arr[i+1] - arr[i]) == diff){
                return true;
            }
        }
        return false;
    }
    
    const isGeometric = (arr) => {
        const div =(arr[1]/arr[0])
        for (let i = 2; i <= arr.length; i++){
            if (arr[i+1] / arr[i] == div){
                return true
            }
        }
        return false
    }
    
         
module.exports = {
    aritGeo: aritGeo,
    isArithmetic: isArithmetic,
    isGeometric: isGeometric
}
