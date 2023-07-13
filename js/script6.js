const products = [
    { 
      name: "Apple", 
      price: 15, 
      quantity: 10,
    },
    {
      name: "Banana", 
      price: 5, 
      quantity: 5, 
    },
    { 
      name: "Orange", 
      price: 20, 
      quantity: 3, 
    },
  ];
  
  function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (let i = 0; i < allProducts.length; i++) {
      const product = allProducts[i];
      if (product.name === productName) {
        const price = product.price;
        const quantity = product.quantity;
        totalPrice += price * quantity;
      }
    }
  
    return totalPrice;
  }

  const totalPriceApple = calculateTotalPrice(products, "Apple");
  console.log(totalPriceApple);
  
  const totalPriceBanana = calculateTotalPrice(products, "Banana");
  console.log(totalPriceBanana);