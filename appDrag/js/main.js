const SERVER_URL = "https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/a-password-json-c13688/";

const PASSWORD_URL = SERVER_URL + "password.json";

const PRODUCTS_URL = SERVER_URL + "products.json";

const productsList = document.getElementById("products-list");

function displayProducts(products) {
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerText = `${product.name} - ${product.price}€`;
    productsList.appendChild(li);
  });
}

function getProducts() {
  fetch(PRODUCTS_URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then(products => {
      displayProducts(products);
    })
    .catch(error => {
      console.log(error);
    });
}

function checkPassword(password) {
  fetch(PASSWORD_URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then(data => {
      if (password === data.password) {
        getProducts();
      } else {
        alert("Mot de passe incorrect !");
      }
    })
    .catch(error => {
      console.log(error);
    });
}

const password = prompt("Entrez le mot de passe :");

checkPassword(password);