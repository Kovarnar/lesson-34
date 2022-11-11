// Мінімум

// 1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
// кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
let shoppingList = [];

function shoppingItem(name, amound, inCart, price) {
    shoppingList.push({
        name: name,
        name: name, 
        amound: amound, 
        inCart: inCart, 
        price: price, 
        sum: +(amound * price).toFixed(2),
    });
};
shoppingItem('carrot', 8, false, 35);
shoppingItem('tomato', 9, false, 50);
shoppingItem('zucchini', 6, false, 30);
shoppingItem('beetroot', 7, true, 40);
shoppingItem('pumpkin', 3, false, 25);
shoppingItem('cabbage', 2, false, 20);
console.log(shoppingList);

//     a) Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, 
//        а потім - ті, що вже придбали.
let getSort = function (x) {
    return x.sort((a, b) => (b.inCart - a.inCart));
}
getSort(shoppingList);

//     b) Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
let getPurchase = function(x, y) {
    let n = x.findIndex(item => item.name === y);
    return x[n].inCart = true;
};
getPurchase(shoppingList, 'pumpkin');

// Норма

// 1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
// в якому продукт, що ми шукаємо, буде відсутнім)
let newShoppingList;
let deletePurchase = function(x, y) {
    let n = x.findIndex(item => item.name === y);
    newShoppingList = x.concat();
    newShoppingList.splice(n, 1);
    return newShoppingList;
};
console.log(deletePurchase(shoppingList, 'zucchini'));

// 2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
let addItem = function(x, y, z, c, p) {
    let n = x.findIndex(item => item.name === y);
    if (n >= 0) {
        x[n].amound += z;
        x[n].sum = +(x[n].amound * x[n].price).toFixed(2);
        return x[n].amound, x[n].sum;
    } else return shoppingItem(y, z, c, p);
};
addItem(shoppingList, 'pumpkin', 2);
addItem(shoppingList, 'garlic', 1, false, 100);
console.log(shoppingList);

// Максимум

// 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
let calctSumAll = (x) => {
    let sumPurchase = 0;
    x.forEach(function(item){
        sumPurchase += item.sum;
    });
    return `Загальна сума всіх товарів в кошику становить: ${sumPurchase}`;
};
console.log(calctSumAll(shoppingList));
console.log(calctSumAll(newShoppingList));

// 2. Підрахунок суми всіх (не) придбаних продуктів.
let calcSumIsBought = function(x) {
    let isBuy = confirm('Підрахувати суму придбаних товарів натисни "Так", не придбаних товарів - "Ні"')
    let res = 0;
    x.filter( item => {
        if (item.inCart === isBuy) res += item.sum;
    });
    isBuy ? isBuy = 'придбаних': isBuy = 'не придбаних';
    return `Сума всіх ${isBuy} товарів становить: ${res}`;
};
console.log(calcSumIsBought(shoppingList));

// 3. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, 
// в залежності від параметра функції, який вона приймає)
let sortPrice = function (x) {
    y = confirm('Сортувати кошик: за зростанням ціни натисни "Так", за спаданням ціни - "Ні"?');
    return (y) ? x.sort((a, b) => (a.price - b.price)) : x.sort((a, b) => (b.price - a.price));
}
console.log(sortPrice(shoppingList));