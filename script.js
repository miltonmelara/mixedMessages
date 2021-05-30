const rand2ndWord = () =>{
    const words = ['are', 'are going to', 'will'];
    return words[Math.floor(Math.random()* 3)];
};
const rand3rdWordNotAre = () => {
    const words = ['be', 'make', 'create',]
    return words[Math.floor(Math.random()* 3)];
};
const rand3rdWordForAre = () => {
    const words = ['being', 'making', 'creating']
    return words[Math.floor(Math.random()* 3)];
};