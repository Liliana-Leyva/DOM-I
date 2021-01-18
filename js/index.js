const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//document.querySelector('body').appendChild(logo)

//navigation Bar
const navBar = document.querySelectorAll("nav a");
 navBar.forEach((item,i) => {
   item.textContent = siteContent["nav"][`nav-item-${i + 1}`]
 });

 //adding h1, button and logo cta
 const h1Cta = document.querySelector('h1')
 h1Cta.textContent= siteContent["cta"]["h1"];

 const buttonCta= document.querySelector('button')
 buttonCta.textContent = siteContent["cta"]["button"]

 const imgFirst = document.getElementById("cta-img");
 imgFirst.setAttribute('src', siteContent["cta"]["img-src"])
 


 //adding main content
 const h4OneTop = document.querySelector(".main-content .top-content .text-content:nth-child(1) h4");
 h4OneTop.textContent = siteContent["main-content"]["features-h4"];

 const h4TwoTop = document.querySelector(".main-content .top-content .text-content:nth-child(2) h4");
 h4TwoTop.textContent = siteContent["main-content"]["about-h4"];
 
 const pOneTop = document.querySelector(".main-content .top-content .text-content:nth-child(1) p");
 pOneTop.textContent = siteContent["main-content"]["features-content"];
 
 const pTwoTop = document.querySelector(".main-content .top-content .text-content:nth-child(2) p");
 pTwoTop.textContent = siteContent["main-content"]["about-content"];

 const middleImg = document.querySelector(".main-content .middle-img")
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"])
 

//adding bottom content
//h4
const h4OneBottom = document.querySelector(".main-content .bottom-content .text-content:nth-child(1) h4");
 h4OneBottom.textContent = siteContent["main-content"]["services-h4"];
 const h4TwoBottom = document.querySelector(".main-content .bottom-content .text-content:nth-child(2) h4");
 h4TwoBottom.textContent = siteContent["main-content"]["product-h4"];
 const h4ThreeBottom = document.querySelector(".main-content .bottom-content .text-content:nth-child(3) h4");
 h4ThreeBottom.textContent = siteContent["main-content"]["vision-h4"];
//P

 const pOneBottom = document.querySelector(".main-content .bottom-content .text-content:nth-child(1) p");
 pOneBottom.textContent = siteContent["main-content"]["services-content"];

 const pTwoBottom = document.querySelector(".main-content .bottom-content .text-content:nth-child(2) p");
 pTwoBottom.textContent = siteContent["main-content"]["product-content"];

 const pThreeBottom = document.querySelector(".main-content .bottom-content .text-content:nth-child(3) p");
 pThreeBottom.textContent = siteContent["main-content"]["vision-content"];


 //contact information

 const h4Contact = document.querySelector(".contact h4");
 h4Contact.textContent = siteContent["contact"]["contact-h4"]

//  const p1Contact = document.querySelector(".contact:nth-child(1) p");
//  p1Contact.textContent = siteContent["contact"]["address"];

//  const p2Contact = document.querySelector(".contact:nth-child(2) p");
//  p2Contact.textContent = siteContent["contact"]["email"];

