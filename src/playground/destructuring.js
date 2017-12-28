// const person = {
//     name:'Mohammad',
//     age: 27,
//     location: {
//         city:'tehran',
//         temp: 94,
//     }
// };

// const {name:firstName= 'Reza', age} = person;

// console.log(`${firstName} is ${age}.`);
// const {city,temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature}in ${city}.`)
// }

// const book = {
//     title:'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'penguin'
//     }
// };

// const {name:publisherName = 'self-Published'} = book.publisher


// console.log(publisherName);

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, , state = 'New York',] = address;
// console.log(`You are in  ${state}.`);

const item = ['Coffe (hot)' , '$2.00' , '$2.50' , '2.75'];
const [itemName, ,medium] = item

console.log(`A medium ${itemName}costs ${medium}`)