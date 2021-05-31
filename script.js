const rand2ndWord = () =>{
    const words = ['are', 'are going to', 'will'];
    return words[Math.floor(Math.random()* 3)];
};
const rand3rdWordNotAre = () => {
    const words = ['be', 'make', 'create',];
    return words[Math.floor(Math.random()* 3)];
};
const rand3rdWordForAre = () => {
    const words = ['doing', 'making', 'creating'];
    return words[Math.floor(Math.random()* 3)];
};
const complimentsForBe = () => {
    const compliments = ['great.', 'someone different.', 'the exception for better.'];
    return compliments[Math.floor(Math.random()* 3)];
};
const complimentsForMake = () => {
    const compliments = ['big things.', 'the world a better place.', 'great changes.'];
    return compliments[Math.floor(Math.random()* 3)];
}; //Add compliments for create, and for all the compliments for be
const complimentsForCreate = () => {
    const compliments = ['new stuff.', 'big things.', 'a new life.'];
    return compliments[Math.floor(Math.random()* 3)];
};
const complimentsForDoing = () => {
    const compliments = ['great.', 'amazing things.', 'your best.'];
    return compliments[Math.floor(Math.random()* 3)];
}