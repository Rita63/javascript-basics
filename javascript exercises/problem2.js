//divisible by 3 -> Fizz
//divisible by 5-> Buzz
//divisible by 3 and 5 -> FizzBuzz
//not divisible by 3 and 5 -> input return
//not a number -> "not a number"


function fizzBuzz(input){
    if(typeof input!=="number")
    return NaN;
    if(input%3===0 && input%5===0)
    return "FizzBuzz";
    if(input%3===0)
    return "Fizz";
    if(input%5===0)
    return "Buzz";
    else
    return input;


}

let output=fizzBuzz(false);
console.log(output);