//if speed limit <=75 then display ok message
//if speed limit is 5 point above 70 i.e.75 then 1 point display
//if there are 12 points then license suspended

function checkSpeed(speed){
    let speedLimit=70;
    const kmPerPoint= 5;

    if(speed< speedLimit + kmPerPoint)
    console.log("ok");
    else{
        const points = Math.floor((speed-speedLimit) / kmPerPoint);
        if(points>=12)
        console.log("license suspended");
    else
        console.log('point',points);
    }

}

checkSpeed(76);
