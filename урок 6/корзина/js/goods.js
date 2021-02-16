function shopping(e) {
    var product = document.getElementById(e.target.id), title = product.querySelector("h3").innerHTML, price = product.querySelector("p").innerHTML;
    prodList = document.querySelector("ul");
    prod = document.createElement("li");
    prod.innerHTML = title + " - " + price;
    prodList.append(prod)
    document.getElementById("basket").append(prodList);
    finalPrice = document.querySelector("p"); 
    finalPrice.innerText =" итоговая стоимость: " + (parseInt(price.match(/\d+/)) + parseInt(finalPrice.innerHTML.match(/\d+/)));
    document.getElementById("basket").append(finalPrice);
    finalPrice.classList.remove("visually-hidden")
}

var goods = [
    {
        title:"product_1",
        img:"img/p0.png",
        price:"50 р"
    },
    {
        title:"product_2",
        img:"img/p1.png",
        price:"100 р"
    },
    {
        title:"product_3",
        img:"img/p2.png",
        price:"150 р"
    }
]

for( item of goods) {
    var product = document.createElement("div"),
    title = document.createElement("h3");
    title.innerText = item.title;
    product.id = item.title;
    product.append(title);
    var img = document.createElement("img");
    img.src = item.img;
    product.append(img);
    var price = document.createElement("p");
    price.innerText = item.price;
    price.id = item.title;
    product.append(price);
    var button = document.createElement("button");
    button.innerText = "купить";
    button.id = item.title;
    button.onclick = shopping;
    product.append(button);
    document.getElementById("shop").append(product)
}