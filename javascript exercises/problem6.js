
//create a function which shows the properties of object of type only string

const movie={
    
    title:'a',
    releaseYear:2021,
    ratings:4.5,
    director:'b',

};

function showProperties(obj){
    for(let key in obj)
    if(typeof obj[key]==='string')
    console.log(key,obj[key]);

}

showProperties(movie);
