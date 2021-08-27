//javascrip object

const user = {
    id: 11, name: 'Gorib amir', job: 'actor'
};
const stringified = JSON.stringify(user);

// console.log(stringified);
// console.log(user);

const shop = {
    name: 'ALia store',
    address: 'ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);