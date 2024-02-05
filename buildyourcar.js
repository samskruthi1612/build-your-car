async function productCardsFetch(){
    const productData = await fetch(`buildyourcar.json`);
    productInfo = await productData.json();
    console.log(productInfo);
    for(i=0;i<productInfo.length;i++){
        const productDiv = document.createElement('div');
        console.log(productDiv);
        productDiv.classList.add("car-cards");
        productDiv.innerHTML = `
        <img src= ${productInfo[i].productImg} alt="">
        <h3>${productInfo[i].productName}</h3>
        <h5>${productInfo[i].productDescription}</h5>
        <button><a href="buildyourcar2.html">Build And Buy</a></button>
        `
        document.querySelector('.product-cards').append(productDiv)
    }
}
var dropDown = document.getElementsByClassName("filtering")
for (var i = 0; i < dropDown.length; i++) {
    dropDown[i].addEventListener("click", function () {
        var tog = this.nextElementSibling
        console.log(dropDown);
        if (tog.style.display == 'block') {
            tog.style.display = 'none'
        }
        else {
            tog.style.display = 'block'
        }
    })

}


// let red = document.querySelector("#red")
// red.addEventListener('click',function() {
    
// })
// var brandCheckboxes = document.getElementsByClassName(".product-checkbox")
// for (var i = 0; i < brandCheckboxes.length; i++) {
//     brandCheckboxes[i].addEventListener("click", function () {
//         var checkedboxeslist = []
//         for (var j = 0; j < brandCheckboxes.length; j++) {
//             if (brandCheckboxes[j].checked) {
//                 // checkedboxeslist.push(brandCheckboxes[j].name)
//                 img.src='images/rollsRoyce6.png'
//             }
//         }
//         var filtered_products = []
//         for (var a = 0; a < mobile.length; a++) {
//             for (var b = 0; b < checkedboxeslist.length; b++) {
//                 if (mobile[a].brand.toLowerCase() == checkedboxeslist[b].toLowerCase()) {
//                     filtered_products.push(mobile[a])
//                 }
//             }
//         }
//         document.getElementById("mobile2").innerHTML = ''
//         filtered_mobiles.length == 0 ? display(mobile) : display(filtered_mobiles)
//     })
// }

function init(){
    productCardsFetch()
}

document.addEventListener('DOMContentLoaded', init);