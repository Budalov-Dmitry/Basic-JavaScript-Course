function replace(e) {
    //var pict = document.getElement(e.target);
    e.target.src = "img2/" + e.target.id + ".jpg"
}
var mass = document.querySelectorAll("img");
for(var item of mass) {
    item.onclick = replace
}