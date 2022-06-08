fetch("https://fakestoreapi.com/carts/1")
  .then((res) => res.json())
  .then((json) => {
    const { products } = json;
    const id = products[0].id;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(console.log);
  })
  .catch((err) => console.error(err));
