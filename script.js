let username = document.getElementById("username");
let password = document.getElementById("password");
let sectionContent = document.querySelector("section");

let textInfo = document.getElementById("textInfo");
let cardDaftar = document.getElementById("cardDaftar");

let btnDaftar = document.getElementById("btnDaftar");
let btnLogin = document.getElementById("btnLogin");
let btnLogout = document.getElementById("btnLogout");

btnLogout.style.display = "none";
sectionContent.style.display = "none";

function onDaftar() {
    // Ini untuk membuat data pendaftar di local storage browser
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    if(username.value == "admin" && password.value == "admin123") {
        // Ini data yang dibuat untuk admin
        localStorage.setItem("role", "admin");
        localStorage.setItem("pwAdmin", "admin123");
    } else if(username.value == "coAdmin" && password.value == "coAdmin123") {
        // Ini data yang dibuat untuk coAdmin
        localStorage.setItem("role", "coAdmin");
        localStorage.setItem("pwPremium", "coAdmin123")
    } else {
        // Ini data yang dibuat untuk akun biasa
        localStorage.setItem("role", "basic")
        localStorage.setItem("pwBasic", password.value)
    }
}

function onLogin() {
    // Ini untuk validasi akun yang mau login
    let user = localStorage.getItem("username");
    let pw = localStorage.getItem("password");
    let admin = localStorage.getItem("role");
    let pwAdmin = localStorage.getItem("pwAdmin");
    let coAdmin = localStorage.getItem("role");
    let pwCoAdmin = localStorage.getItem("pwPremium");
    console.log(coAdmin)
    if(username.value == admin && password.value == pwAdmin) {
        sectionContent.style.display = "block";
        cardDaftar.style.display = "none";
        btnLogout.style.display = "block";
    } else if(username.value == coAdmin && password.value == pwCoAdmin) {
        cardDaftar.style.display = "none";
        btnLogout.style.display = "block";
        sectionContent.style.display = "block";
    } else if(user == username.value && pw == password.value) {
        cardDaftar.style.display = "none";
        btnLogout.style.display = "block";
        sectionContent.style.display = "block";
    } else {
        textInfo.textContent = "Lu belum daftar GOBLOK!!!...."
    }
}

if(localStorage.getItem("username")) {
    cardDaftar.style.display = "none";
    btnLogout.style.display = "block";
    if(localStorage.getItem("role" == "admin")) {
        sectionContent.style.display = "block";
    } else if (localStorage.getItem("role" == "coAdmin")) {
        sectionContent.style.display = "block";
    } else {
        sectionContent.style.display = "block";
    }
}

function onLogout() {
    localStorage.clear();
    location.reload();
}