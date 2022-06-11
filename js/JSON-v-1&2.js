const user = {
    id: 11,
    name: 'Gorib Amir',
    job: 'Actor'
};
console.log(user);
//API mane server theke data load kore dekhai
//JSON- JavaScript Object Notation
// const stringified = JSON.stringify(user);
// console.log(user, stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Kapor',
    profit: 15000,
    products: ['laptop', 'mobile', 'computer accessories'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);

