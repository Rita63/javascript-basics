//for..in loop is used to iterate over property of object


//here we created a person object with its properties name and age
let girl={
    name:"Rita",
    age:20,
}

for(let key in girl){
    //console.log(key);   //so,here we print only key i.e. name and age
    console.log(key,girl[key]); //if we want to print girl properties like name and age then
}


