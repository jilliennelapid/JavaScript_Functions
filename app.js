console.log("Hello World!\n==========\n");

// Exercise 1: Print Odds with a Function
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    for(let i = 1; i <= count; i ++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100);

/* Arrow Notation:
const printOdds = (count) => {
    for(let i = 1; i <= count; i ++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}
*/

// Exercise 2: Legally Driving?
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = (`Congrats ${userName}, you can drive!`);
    let belowSixteen = (`Sorry ${userName}, but you need to wait until you're 16.`);
    
    if(age < 16){
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge("Charlie", 15);
checkAge("Nick", 16);
checkAge("Jill", 18);


//Exercise 3: Which Quadrant?
console.log("EXERCISE 3:\n==========\n");

function quadrantCheck (x,y){
    let isOrigin = (`(0,0) is the origin.`);
    let onX = (`(${x},${y}) is on the x-axis.`);
    let onY = (`(${x},${y}) is on the y-axis.`);
    let firstQuadrant = (`(${x},${y}) is in the Quadrant 1.`);
    let secondQuadrant = (`(${x},${y}) is in the Quadrant 2.`);
    let thirdQuadrant = (`(${x},${y}) is in the Quadrant 3.`);
    let fourthQuadrant = (`(${x},${y}) is in the Quadrant 4.`);

    if (x === 0 && y === 0){
        console.log(isOrigin);
    } else if (x === 0){
        console.log(onX);
    } else if (y === 0){
        console.log(onY);
    } else if (x > 0 && y > 0){
        console.log(firstQuadrant);
    } else if (x < 0 && y > 0){
        console.log(secondQuadrant);
    } else if (x < 0 && y < 0){
        console.log(thirdQuadrant);
    } else if (x > 0 && y < 0){
        console.log(fourthQuadrant);
    } else {
        console.log("I'm not sure if that's a coordinate...")
    }
}

quadrantCheck(0,0);
quadrantCheck(0,2);
quadrantCheck(2,0);
quadrantCheck(2,-2);
quadrantCheck(-3,-5);
quadrantCheck(-4,2);
quadrantCheck(6,2);
quadrantCheck("a","f");

//Exercise 4: What type of triangle?
console.log("EXERCISE 4:\n==========\n");

function ascertainTri (a,b,c){
    let equilTri = (a === b && a === c);
    let isosTri = (a === b || b === c || c === a);
    let scalTri = (a !== b && a!== c);

    let equilTriStatement = (`The triangle, lengths (${a},${b},${c}), is equilateral.`);
    let isosTriStatement = (`The triangle, lengths (${a},${b},${c}), is an isosceles.`);
    let scalTriStatement = (`The triangle, lengths (${a},${b},${c}), is scalene.`);
    let notTriangle = (`Sorry, the lengths given do not produce a triangle.`)

    if (equilTri == true){
        console.log(equilTriStatement);
    } else if(isosTri == true){
        console.log(isosTriStatement);
    } else if(scalTri == true){
        console.log(scalTriStatement);
    } else{
        console.log(notTriangle);
    }
} 

function verifyTri (a,b,c){
    let tester = ((a + b) > c);

    if (tester == true){
        return ascertainTri(a,b,c);
    }
}

verifyTri(3,4,5);
verifyTri(8,8,6);
verifyTri(7,7,7);
verifyTri(4,46,2);


//Exercise 5
console.log("EXERCISE 5:\n==========\n");

function dataUsage (planLimit, day, usage){
    
    let daysRemaining = (30 - day);
    let dailyUsage = (planLimit / 30);
    let userDailyUsage = (usage / day);
    let excessUse = ((userDailyUsage) * daysRemaining);
    let allowedDailyUse = ((planLimit - usage) / daysRemaining);

    if(day >= 0){
    console.log(`${day} days used, ${daysRemaining} days remaining. Average daily use: ${dailyUsage} GB/day.`);
    } if (userDailyUsage < dailyUsage){
        console.log(`You are NOT EXCEEDING your average daily use (${userDailyUsage} GB/day).`);
    } if (userDailyUsage > dailyUsage){
        console.log(` You are EXCEEDING your average daily use (${userDailyUsage }GB/day), continuing this high usage, you'll exceed your data plan by
                    ${excessUse} GB. To stay below your data plan, use no more than ${allowedDailyUse} GB/day.`);
    }
}

dataUsage (100,15,56);