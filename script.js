const rand2ndWord = () =>{
    const words = ['are', 'are going to', 'will'];
    return words[Math.floor(Math.random()* 3)];
};
const rand3rdWordNotAre = () => {
    const words = ['be', 'make', 'create',];
    return words[Math.floor(Math.random()* 3)];
};
const rand3rdWordForAre = () => {
    const words = ['being', 'making', 'creating'];
    return words[Math.floor(Math.random()* 3)];
};
const complimentsForBe = () => {
    const compliments = ['great.', 'someone different.', 'the exception for better.'];
    return compliments[Math.floor(Math.random()* 3)];
};
const complimentsForMake = () => {
    const compliments = ['big things.', 'the world a better place.', 'great changes.'];
    return compliments[Math.floor(Math.random()* 3)];
};