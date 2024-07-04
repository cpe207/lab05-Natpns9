// Define interface for Hero object
interface Hero {
  items: string[];
  gold: number;
}

// Define interface for Shop object
interface Shop {
  item: string;
  price: number;
}

// Function that uses Hero and Shop interfaces
function buyItem(hero: Hero, shop: Shop): Hero {
  if (hero.gold >= shop.price) {
    // Create a new array of items with the new item added
    const newItems = [...hero.items, shop.item];

    // Return an updated Hero object
    return {
      ...hero,
      items: newItems,
      gold: hero.gold - shop.price
    };
  } else {
    // If hero doesn't have enough gold, return the hero as-is
    return hero;
  }
}

// Test cases with proper typing
const hero1: Hero = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop1: Shop = {
  item: "armor",
  price: 20,
};

const hero2: Hero = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop2: Shop = {
  item: "legendary armor",
  price: 200,
};

console.log(buyItem(hero1, shop1));
console.log(buyItem(hero2, shop2));

export default buyItem;
