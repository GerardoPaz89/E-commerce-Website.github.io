const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 110,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code:"darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 160,
        colors: [
            {
                code: "lighgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 145,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 130,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 155,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductIcon = document.querySelector(".productIcon");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //Cambiar zapato
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //Cambiar producto
        choosenProduct = products[index];
        //Cambiar el texto del producto
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price + "€";
        currentProductIcon.src = choosenProduct.colors[0].img
        //Cambiando los colores
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductIcon.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex"
})

close.addEventListener("click", () => {
    payment.style.display = "none"
})


