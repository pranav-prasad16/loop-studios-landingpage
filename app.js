// let image = document.createElement('img');
const navContent = document.getElementById("nav")
console.log(nav)
navContent.innerHTML = `    
    <div class="nav-bar">
        <ul>
            <li><h2>loopstudios</h2></li>
            <li class="navbar-child">About</li>
            <li class="navbar-child">Careers</li>
            <li class="navbar-child">Events</li>
            <li class="navbar-child">Products</li>
            <li class="navbar-child">Support</li>
        </ul>
    </div>
    <div id="heading">IMMERSIVE EXPERIENCES THAT DELIVER</div>
    `

const headerContent = document.getElementById("header");
const headerContentDiv = document.createElement("div");

headerContentDiv.innerHTML = `
    <h2 id = "heading-2">THE LEADER IN INTERACTIVE VR</h2>
    
    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
        projects for some of the best companies around the globe. Our award-winning 
        creations have transformed businesses through digital experiences that bind 
        to their brand.
    </p>
`

headerContentDiv.setAttribute("id", "header-content");

const myImage = new Image(700, 450);
myImage.src = "images/desktop/image-interactive.jpg";
myImage.setAttribute("id", "interactive-img");

headerContent.appendChild(myImage);
headerContent.appendChild(headerContentDiv);

const home = document.getElementById("home");
const homeTitle = document.createElement("div");
homeTitle.innerHTML =`
    <div id="home-heading">
        <span>OUR CREATIONS</span>
        <button>SEE ALL</button>
    </div>
`

const homeContent1 = document.createElement("span");
homeContent1.textContent = `DEEP EARTH`
homeContent1.setAttribute("class", "home-content-heading")

const homeContent2 = document.createElement("span");
homeContent2.textContent = `NIGHT ARCADE`
homeContent2.setAttribute("class", "home-content-heading")

const homeContent3 = document.createElement("span");
homeContent3.textContent = `SOCCER TEAM VR`
homeContent3.setAttribute("class", "home-content-heading")

const homeContent4 = document.createElement("span");
homeContent4.textContent = `THE GRID`
homeContent4.setAttribute("class", "home-content-heading")

const homeContent5 = document.createElement("span");
homeContent5.textContent = `FROM UP ABOVE VR`
homeContent5.setAttribute("class", "home-content-heading")

const homeContent6 = document.createElement("span");
homeContent6.textContent = `POCKET BOREALIS`
homeContent6.setAttribute("class", "home-content-heading")

const homeContent7 = document.createElement("span");
homeContent7.textContent = `THE CURIOSITY`
homeContent7.setAttribute("class", "home-content-heading")

const homeContent8 = document.createElement("span");
homeContent8.textContent = `MAKE IT FISHEYE`
homeContent8.setAttribute("class", "home-content-heading")

let homeContentArray = []

for (let index = 0; index < 8; index++) {
    homeContentArray.push("homeContent" + index);
}
console.log(homeContentArray)

const homeImages = document.createElement("div");
homeImages.setAttribute("class", "home-images-grid")
const homeImage1 = new Image(220, 400);
const homeImage2 = new Image(220, 400);
const homeImage3 = new Image(220, 400);
const homeImage4 = new Image(220, 400);
const homeImage5 = new Image(220, 400);
const homeImage6 = new Image(220, 400);
const homeImage7 = new Image(220, 400);
const homeImage8 = new Image(220, 400);
let imagesArray = []

for (let index = 0; index < 8; index++) {
    imagesArray.push("homeImage" + index);
}
console.log(imagesArray)
homeImage1.src = "images/desktop/image-deep-earth.jpg";
homeImage1.setAttribute("class", "home-image");

homeImage2.src = "images/desktop/image-night-arcade.jpg";
homeImage2.setAttribute("class", "home-image");

homeImage3.src = "images/desktop/image-soccer-team.jpg";
homeImage3.setAttribute("class", "home-image");

homeImage4.src = "images/desktop/image-grid.jpg";
homeImage4.setAttribute("class", "home-image");

homeImage5.src = "images/desktop/image-from-above.jpg";
homeImage5.setAttribute("class", "home-image");

homeImage6.src = "images/desktop/image-pocket-borealis.jpg";
homeImage6.setAttribute("class", "home-image");

homeImage7.src = "images/desktop/image-curiosity.jpg";
homeImage7.setAttribute("class", "home-image");

homeImage8.src = "images/desktop/image-fisheye.jpg";
homeImage8.setAttribute("class", "home-image");

const homeSection1 = document.createElement("div");
const homeSection2 = document.createElement("div");
const homeSection3 = document.createElement("div");
const homeSection4 = document.createElement("div");
const homeSection5 = document.createElement("div");
const homeSection6 = document.createElement("div");
const homeSection7 = document.createElement("div");
const homeSection8 = document.createElement("div");
// homeSection1.innerHTML += homeContent1 + homeImage1
homeSection1.appendChild(homeImage1)
homeSection1.appendChild(homeContent1)

homeSection2.appendChild(homeImage2)
homeSection2.appendChild(homeContent2)

homeSection3.appendChild(homeImage3)
homeSection3.appendChild(homeContent3)

homeSection4.appendChild(homeImage4)
homeSection4.appendChild(homeContent4)

homeSection5.appendChild(homeImage5)
homeSection5.appendChild(homeContent5)

homeSection6.appendChild(homeImage6)
homeSection6.appendChild(homeContent6)

homeSection7.appendChild(homeImage7)
homeSection7.appendChild(homeContent7)

homeSection8.appendChild(homeImage8)
homeSection8.appendChild(homeContent8)

// console.log(homeContent1)
// console.log(homeImage1)
console.log(homeSection1)
homeImages.appendChild(homeSection1)
homeImages.appendChild(homeSection2)
homeImages.appendChild(homeSection3)
homeImages.appendChild(homeSection4)
homeImages.appendChild(homeSection5)
homeImages.appendChild(homeSection6)
homeImages.appendChild(homeSection7)
homeImages.appendChild(homeSection8)
// homeImages.appendChild(homeImage1)
// homeImages.appendChild(homeImage2)
// homeImages.appendChild(homeImage3)
// homeImages.appendChild(homeImage4)
// homeImages.appendChild(homeImage5)
// homeImages.appendChild(homeImage6)
// homeImages.appendChild(homeImage7)
// homeImages.appendChild(homeImage8)
home.appendChild(homeTitle)
home.appendChild(homeImages)

const footer = document.querySelector("#foot");
const footerHeading = document.createElement("div");
const footerContent = document.createElement("div");

footerHeading.setAttribute("class", "footer-heading")
footerContent.setAttribute("class", "footer-content nav-bar")

const facebookIcon = new Image(20, 20);
facebookIcon.src = "images/icon-facebook.svg"
facebookIcon.setAttribute("class", "footer-icon")

const twitterIcon = new Image(20, 20);
twitterIcon.src = "images/icon-twitter.svg"
twitterIcon.setAttribute("class", "footer-icon")

const pinterestIcon = new Image(20, 20);
pinterestIcon.src = "images/icon-pinterest.svg"
pinterestIcon.setAttribute("class", "footer-icon")

const instagramIcon = new Image(20, 20);
instagramIcon.src = "images/icon-instagram.svg"
instagramIcon.setAttribute("class", "footer-icon")

footerHeading.innerHTML =`
    <h2>loopstudios</h2>
    `
footerHeading.appendChild(facebookIcon)
footerHeading.appendChild(twitterIcon)
footerHeading.appendChild(pinterestIcon)
footerHeading.appendChild(instagramIcon)

footerContent.innerHTML = `
        <ul>
            <li class="navbar-child">About</li>
            <li class="navbar-child">Careers</li>
            <li class="navbar-child">Events</li>
            <li class="navbar-child">Products</li>
            <li class="navbar-child">Support</li>
            <li>© 2021 Loopstudios. All rights reserved.</li>
        </ul>
`

footer.appendChild(footerHeading)
footer.appendChild(footerContent)