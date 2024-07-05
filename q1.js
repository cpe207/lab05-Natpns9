// assign interface/type to the function definition properly
function buyItem(hero, shop) {
    if (hero.gold >= shop.price) {
        hero.items.push(shop.item);
        hero.gold -= shop.price;
    }
    return hero;
}
// Test cases with proper typing
var hero1 = {
    items: ["sword", "potion"],
    gold: 50,
};
var shop1 = {
    item: "armor",
    price: 20,
};
var hero2 = {
    items: ["sword", "potion"],
    gold: 50,
};
var shop2 = {
    item: "legendary armor",
    price: 200,
};
console.log(buyItem(hero1, shop1));
console.log(buyItem(hero2, shop2));
module.exports = buyItem;
