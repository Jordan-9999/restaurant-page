import "./styles.css";

import {createHome} from "./home.js";

import {createMenu} from "./menu.js";

import {createContact} from "./contact.js";

createHome();


const siteContent = document.getElementById("content");

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", function(){
    siteContent.textContent = "";
    createHome();
});

const menuButton = document.getElementById("menu-button")
menuButton.addEventListener("click", function() {
    siteContent.textContent = "";
    createMenu();
});

const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", function(){
    siteContent.textContent = "";
    createContact();
});






