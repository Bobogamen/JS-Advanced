//1.Fruit

function buyingFruit(name, weight, price,) {

      let money = price * weight / 1000;
      weight = weight / 1000;

      console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${name}.`)

}

// buyingFruit('orange', 2500, 1.80);
// buyingFruit('apple', 1563, 2.35);