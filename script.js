let btn1 = document.querySelector(".cat-btn");
let btn2 = document.querySelector(".dog-btn");
let img1 = document.querySelector(".cat-img");
let img2 = document.querySelector(".dog-img");

let url1 = ("https://api.thecatapi.com/v1/images/search");
let url2 = ("https://api.thedogapi.com/v1/images/search");

async function getCat() {
    try {
        let res = await axios.get(url1);
        img1.src = res.data[0].url;
    } catch(err) {
        console.log("Cat Error: ", err);
    }
}

async function getdog() {
    try {
        let res = await axios.get(url2);
        img2.src = res.data[0].url;
    } catch(err) {
        console.log("Dog Error: ", err);
    }
}

btn1.addEventListener("click", getCat);
btn2.addEventListener("click", getdog);