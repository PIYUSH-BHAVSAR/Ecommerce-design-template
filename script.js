const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
       nav.classList.add('active'); 
    })
}
if(close){
    close.addEventListener('click',()=>{
       nav.classList.remove('active'); 
    })
}

const products = {
    1: {
        title: "Printed Night suit",
        image: "assets/product/1.jpg",
        category:"perifay fashion",
        price: "$20.00"
    },
    2: {
        title: "Chino shorts",
        image: "assets/product/2.jpg",
        category:"Q-O-S",
        price: "$15.00"
    },
    3: {
        title: "Leopad Mini Skirt",
        image: "assets/product/3.jpg",
        category:"Turm fashion",
        price: "$10.00"
    },
    4: {
        title: "Printed Yellow Dress",
        image: "assets/product/4.jpg",
        category:"zone fashion",
        price: "$30.00"
    },
    5: {
        title: "Blue shirt linen",
        image: "assets/product/B1.JPG",
        category:"zodo textile",
        price: "$23.00"
    },
    6: {
        title: "Printed abstract shirt",
        image: "assets/product/B7.jpg",
        category:"textilez",
        price: "$22.00"
    },
    7: {
        title: "Abstract Brown Shirt",
        image: "assets/product/B3.JPG",
        category:"textilez",
        price: "$23.00"
    },
    8: {
        title: "Printed Jumpsuit",
        image: "assets/product/11.JPG",
        category:"abibas",
        price: "$32.00"
    },
    9: {
        title: "Jeans Jacket",
        image: "assets/product/8r.jpg",
        category:"abibas",
        price: "$30.00"
    },
    10: {
        title: "Office Wear",
        image: "assets/product/g6.jpg",
        category:"abibas",
        price: "$32.00"
    },
    11: {
        title: "Kurti Jeans Combo",
        image: "assets/product/g7.jpg",
        category:"django",
        price: "$31.00"
    },
    12: {
        title: "Cyan Colored shirt",
        image: "assets/product/B5.jpg",
        category:"tango",
        price: "$21.00"
    },
    13: {
        title: "Printed Yellow Shirt",
        image: "assets/product/b6.jpg",
        category:"newbee",
        price: "$31.00"
    },
    14: {
        title: "Ganga Dress Material",
        image: "assets/shop/s1.jpg",
        category:"GANGA",
        price: "$31.00"
    },
    15: {
        title: "Ganga Dress Material",
        image: "assets/shop/s2.jpg",
        category:"GANGA",
        price: "$31.00"
    },
    16: {
        title: "Ganga Dress Material",
        image: "assets/shop/s3.jpg",
        category:"GANGA",
        price: "$31.00"
    },
    17: {
        title: "Ganga Dress Material",
        image: "assets/shop/s4.jpg",
        category:"GANGA",
        price: "$31.00"
    },
    18: {
        title: "Biege Dress",
        image: "assets/shop/s5.jpg",
        category:"Women Fashion",
        price: "$21.00"
    },
    19: {
        title: "Blue Kuti",
        image: "assets/shop/s6.jpg",
        category:"Dresshub",
        price: "$12.00"
    },
    20: {
        title: "Red Saree",
        image: "assets/shop/s7.jpg",
        category:"Women Fashion",
        price: "$50.00"
    },
    21: {
        title: "Green Designer Dress",
        image: "assets/shop/s8.jpg",
        category:"Perifay  ",
        price: "$35.00"
    },
    22: {
        title: "Ethinic Dress",
        image: "assets/shop/s9.jpg",
        category:"peryware",
        price: "$50.00"
    },
    23: {
        title: "Traditional Jacket Kurta",
        image: "assets/shop/s10.jpg",
        category:"Traditional",
        price: "$78.00"
    },
    24: {
        title: "Red Checks Shirt",
        image: "assets/shop/s12.jpg",
        category:"Fashion",
        price: "$20.00"
    },
    25: {
        title: "Printed Kurti",
        image: "assets/product/g5.jpg",
        category:"Feather",
        price: "$15.00"
    },
    



};

// Function to get URL parameters
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.slice(1);
    queryString.split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        params[key] = value;
    });
    return params;
}

// Function to update the product details
function updateProductDetails(productId) {
    const product = products[productId];
    if (product) {
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-category').textContent = product.category;
       document.getElementById('product-price').textContent = product.price;
    } else {
        document.getElementById('product-title').textContent = "Product not found";
        document.getElementById('product-image').style.display = "none";
        document.getElementById('product-category').textContent = "Product not found";
        document.getElementById('product-price').textContent = "";
    }
}

// Get the product ID from URL and update details
const params = getQueryParams();
const productId = params.id;
updateProductDetails(productId);


