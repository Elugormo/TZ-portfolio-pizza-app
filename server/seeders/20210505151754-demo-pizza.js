"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Pizzas", [
      {
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
        name: "Цыпленок барбекю",
        types: JSON.stringify([0]),
        sizes: JSON.stringify([26, 40]),
        price: 295,
        category: 1,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
        name: "Кисло-сладкий цыпленок",
        types: JSON.stringify([1]),
        sizes: JSON.stringify([26, 30, 40]),
        price: 275,
        category: 2,
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
        name: "Чизбургер-пицца",
        types: JSON.stringify([0, 1]),
        sizes: JSON.stringify([26, 30, 40]),
        price: 415,
        category: 3,
        rating: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
        name: "Крэйзи пепперони",
        types: JSON.stringify([0]),
        sizes: JSON.stringify([30, 40]),
        price: 580,
        category: 2,
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
        name: "Пепперони",
        types: JSON.stringify([0, 1]),
        sizes: JSON.stringify([26, 30, 40]),
        price: 675,
        category: 1,
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
        name: "Маргарита",
        types: JSON.stringify([0, 1]),
        sizes: JSON.stringify([26, 30, 40]),
        price: 450,
        category: 4,
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
        name: "Четыре сезона",
        types: JSON.stringify([0, 1]),
        sizes: JSON.stringify([26, 30, 40]),
        price: 395,
        category: 5,
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
        name: "Овощи и грибы",
        types: JSON.stringify([0, 1]),
        sizes: JSON.stringify([26, 30, 40]),
        price: 285,
        category: 5,
        rating: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Pizzas", null, {});
  },
};
