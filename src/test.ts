function greeting (name: string) {
    console.log(`Hello, ${name}`);
};

const age = (age: number) => {
    return `Your age is ${age}`
};

console.log(age(23));

export { greeting };