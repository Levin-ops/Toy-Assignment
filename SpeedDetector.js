const vehicleSpeed=prompt(`Input vehicle speed `);

const speedLimit = 70;

const kmPerDemeritPoint= 5; 

function demeritsPointCalculator(speed){
    if (isNaN(speed)){
        console.log(`SPEED SHOULD BE A NUMERICAL VALUE!`)
    }else if (speed <=70){
        console.log(`OK`)
    }else{
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${demeritPoints}`);

        if (demeritPoints>12){
            console.log(`Licence suspended`)
        }

    return demeritPoints;
    }
}

