//1
function absoluteValue(value){
  if (typeof(value) !== 'number'){
      return null
  } else if ( 0 <= value){
      return value
  } else {
      return value * -1
  }
} 

console.log(absoluteValue('hello'))


function multiplesOfFourAndSix(){
    const answer = [];
    for (let i = 1; i <= 100; i++){
        if (i % 4 === 0 && i % 6 === 0){
             answer.push(i)   
        }
    }
    return answer
}

console.log(multiplesOfFourAndSix())