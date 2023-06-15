// Good Luck 💪🏾
function calculatetPrice(Service) {
    let tPrice = 0;
    for (let i = 0; i < Service.length; i++) {
        tPrice += Service[i].quantity * Service[i].price;
    }
    return tPrice;
  }
  
  const Service = [
    {
      "product": "Milk",
      "quantity": 1,
      "price": 1.50
    },
    {
      "product": "Bread",
      "quantity": 2,
      "price": 2.00
    },
    {
      "product": "Eggs",
      "quantity": 12,
      "price": 0.25
    }
  ];
  
  console.log(calculatetPrice(Service))