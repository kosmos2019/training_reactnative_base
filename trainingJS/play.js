const person = {
    name: 'Ali',
    age: 29,
    greet: function() {
        console.log('Hi, I am ' + this.name);
    }
};

// person.greet();
// console.log(person);

const copiedPerson = {...person};
// console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking']

// for(let hobby of hobbies) {
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => {
//     return 'Hobby: ' + hobby;
// }));

// hobbies.push('Programming');

// Spread operator
const copiedArray = [...hobbies]    // hobbies.slice();
// console.log(copiedArray);

// Rest parameters
const toArray = (...args) => {
    return [args];
};
// console.log(toArray(1, 2, 3, 4));

// Desctructing
const printName = ({ name }) => {
    console.log(name)
};
// printName(person);

const {name, age} = person;
// console.log(name, age);

const [h1, h2] = hobbies;
// console.log(h1, h2);

// Async code & Promises
// fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!')
//     }, 1500);
// };
// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     });
// }, 2000)

fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
    });
}, 2000)
console.log('Hello!');
console.log('Hi!');