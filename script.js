const rand2ndWord = () =>{
    const words = [' are', ' are going to', ' will'];
    return words[Math.floor(Math.random()* 3)];
};
//Function that generates 3rd word
const rand3rdWordNotAre = () => {
    const words = [' be', ' make', ' create',];
    return words[Math.floor(Math.random()* 3)];
};
//Functions that generate compliments for each result of the 3rd word generator

//Creates compliments if the sentences goes like You are going to/ will be
const complimentsForBe = () => {
    const compliments = [' great.', ' someone different.', ' the exception for better.'];
    return compliments[Math.floor(Math.random()* 3)];
};

//Creates compliments if the sentences goes like You are going to/ will make
const complimentsForMake = () => {
    const compliments = [' big things.', ' the world a better place.', ' great changes.'];
    return compliments[Math.floor(Math.random()* 3)];
};

//Creates compliments if the sentences goes like You are going to/ will create
const complimentsForCreate = () => {
    const compliments = [' new stuff.', ' big things.', ' a new life.'];
    return compliments[Math.floor(Math.random()* 3)];
};


//Function for 3rd word for are
const rand3rdWordForAre = () => {
    const words = [' doing', ' making', ' creating'];
    return words[Math.floor(Math.random()* 3)];
};

//Creates compliments if the sentences goes like You are doing
const complimentsForDoing = () => {
    const compliments = [' great.', ' amazing things.', ' your best.'];
    return compliments[Math.floor(Math.random()* 3)];
};

//Creates compliments if the sentences goes like You are making
const complimentsForMaking = () => {
    const compliments = [' big changes.', ' huge progress.', ' the world a better place.'];
    return compliments[Math.floor(Math.random()* 3)];
};

//Creates compliments if the sentences goes like You are creating
const complimentsForCreating = () => {
    const compliments = [' cool stuff.', ' big projects.', ' a better world for next generations.'];
    return compliments[Math.floor(Math.random()* 3)];
};


//Message generator func

const createMessage = () => {
    let secondWord = rand2ndWord();
    let thirdWordForAre = rand3rdWordForAre();
    let thirdWordForNotAre = rand3rdWordNotAre();
    if (secondWord === ' are'){
        if (thirdWordForAre === ' doing'){
            return 'You' + secondWord + thirdWordForAre + complimentsForDoing();
        } else if (thirdWordForAre === ' making'){
            return 'You' + secondWord + thirdWordForAre + complimentsForMaking();
        } else if (thirdWordForAre === ' creating'){
            return 'You' + secondWord + thirdWordForAre + complimentsForCreating();
        };
    };
    if (secondWord === ' are going to' || secondWord === ' will'){
        if (thirdWordForNotAre === ' be'){
            return 'You' + secondWord + thirdWordForNotAre + complimentsForBe();
        } else if (thirdWordForNotAre === ' make'){
            return 'You' + secondWord + thirdWordForNotAre + complimentsForMake();
        } else if (thirdWordForNotAre === ' create'){
            return 'You' + secondWord + thirdWordForNotAre + complimentsForCreate();
        };
    };
};
console.log(createMessage())