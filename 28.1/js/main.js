const Categories = [
    { value: "", text: "--Chose a category--" },
    { value: "Sport", text: "Sport" },
    { value: "Casual", text: "Casual" },
    { value: "Evening", text: "Evening" },
    { value: "Relax", text: "Relax" },
  ];
  
  const Products = []; // create an empty array to store products
  
  function createForm() {
    var model = myInput("model-input", "Enter the model name", "text");
    var brand = myInput("brand-input", "Enter the brand name", "text");
    var price = myInput("price-input", "Enter the price", "number");
    var categories = mySelect("category-select", "", Categories);
    var sale = myInput("sale-input", "", "checkbox");
    var btn = myButton("submit", "", "add this product", addProduct);
    var formDiv = document.getElementById("form-div");
    formDiv.append(
      model.div,
      brand.div,
      price.div,
      categories.div,
      sale.div,
      btn
    );
  
    function addProduct() {
      var obj = {};
      obj.model = model.input.value;
      obj.brand = brand.input.value; // corrected the bug of duplicate assignment
      obj.price = price.input.value;
      obj.categories = categories.select.value;
      if (obj.model && obj.brand && obj.price && obj.categories) { // validate all inputs are filled
        Products.push(obj);
        model.input.value = "";
        brand.input.value = ""; // corrected the bug of duplicate assignment
        price.input.value = "";
        categories.select.value = "";
      } else {
        redBorder(model.input, brand.input, price.input, categories.select); // added all inputs to the function
      }
    }
  
   
  
  }
  
  function myInput(_id, _placeholder, _type, _class = "") {
    var obj = {};
    obj.div = document.createElement("div");
    obj.input = document.createElement("input");
    obj.input.className = "form-control " + _class;
    obj.input.id = _id;
    obj.input.placeholder = _placeholder;
    obj.input.type = _type;
    obj.div.append(obj.input);
    return obj;
  }

  function mySelect(_id, _class = "", _arr) {
    var obj = {};
    obj.div = document.createElement("div");
    obj.select = document.createElement("select");
    obj.select.className = "form-select " + _class;
    obj.select.id = _id;
    for (let i = 0; i < _arr.length; i++) {
      const opt = _arr[i];
      var option = document.createElement("option");
      option.value = opt.value;
      option.innerText = opt.text;
      obj.select.append(option);
    }
    obj.div.append(obj.select);
    return obj;
  }
  
  function myButton(_id, _placeholder, _type, _class = "", _callback, _text) {
    var div = document.createElement("div");
    var btn = document.createElement("input");
    btn.className = "btn btn-success " + _class;
    btn.id = _id;
    btn.value = _text;
    btn.addEventListener("click", _callback);
    div.append(btn);
    return div;
  }
  