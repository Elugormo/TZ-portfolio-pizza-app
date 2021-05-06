const Pizza = require("./models").Pizza;
const express = require("express");
const cors = require("cors");

require("./db");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("ok");
});

app.get("/pizza", async (req, res) => {
  const sort = req.query.sort;
  const category = req.query.category;
  if (category) {
    console.log(category);
    const pizzas = await Pizza.findAll({
      where: {
        category,
      },
      order: [[sort, "DESC"]],
    });
    return res.status(200).send(pizzas);
  }
  const pizzas = await Pizza.findAll({
    order: [[sort, "DESC"]],
  });
  return res.status(200).send(pizzas);
});

app.listen(4000, () => console.log("Running server on port 4000"));
