function hotelCost(days){
      var amount = 0;
      if (days<=10){
      amount=days*100;
 
    } else if (days<=20){
      var firstPart =10*100;
      var remaining=days-10;
      var secondPart= remaining*80;
      amount= firstPart+secondPart;
    } else{
      var firstPart =10*100;
      var secondPart= 10*80;
      var remaining= days-20;
      var thirdPart= remaining*50;
      amount= firstPart+secondPart+thirdPart;
    }
    return amount;
}
