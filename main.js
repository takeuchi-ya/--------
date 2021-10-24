const fizzbazz = (val) =>{
  if (val%3==0 && val%5==0){
    return "fizzbazz";
  }else if(val%3==0){
    return "fizz";
  }else if(val%5 == 0){
    return "bazz";
  }
  return val
}

x=1
while(x<100){
  console.log(fizzbazz(x));
  x++;
}