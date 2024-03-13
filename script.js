document.addEventListener('DOMContentLoaded', function () {
    var typed1 = new Typed(".mytext", {
        strings: ["a Web Developer", "in my Second year of Engineering", "also a Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

function showportfoliopage() {
    window.location.href = "portfolio.html";
}

function showaboutpage() {
    window.location.href = "about.html";
}

function showaccomppage() {
    window.location.href = "achievements.html";
}

function showcontactpage() {
    window.location.href = "contact.html";
}


function github() {
    window.open("https://github.com/aanchalagnihotri", '_blank', 'noopener noreferrer');
}

function linkedin() {
    window.open("https://www.linkedin.com/in/aanchal-agnihotri-187a67256/", '_blank', 'noopener noreferrer');
}

function instagram() {
    window.open("https://www.instagram.com/aanchal_agnihotri/", '_blank', 'noopener noreferrer');
}
