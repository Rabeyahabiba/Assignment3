function budgetCalculator(watch,phone,laptop){
    
    var result = (watch*50 )+ (phone*100) +(laptop*500) ;
    return result;

}
var sum=budgetCalculator(2,4,3);
console.log (sum);