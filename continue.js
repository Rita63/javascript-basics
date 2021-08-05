
//when the compiler see the continue keyword then it jumps in the beginning of the loop and continue the execution.
let r=0;
while(r<=10){
    if(r%2===0)
    {
    r++;
        continue;}
        console.log(r);
        r++;
}