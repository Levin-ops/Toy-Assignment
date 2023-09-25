const userInput = prompt(`student points: `);

function studentGradeGenerator(points){
    if (isNaN(points) || points>100 && points<0){
        return `Enter a value between 1 to 100`
    }else if(points>79){
        return `A`;
    }else if (points>=60 && points<=79){
        return `B`;
    }else if (points>=50 && points<=59){
        return `C`;
    }else if (points>=40 && points<49){
        return `D`;
    }else {
        return `E`;
    }
}


const grade=studentGradeGenerator(userInput);

console.log(grade);