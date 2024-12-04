document.addEventListener("scroll", () => {
    const fixedHeader = document.getElementById("fixed-header");
    const scrollTrigger = 200;

    if (window.scrollY > scrollTrigger) {
        fixedHeader.classList.add("visible");
        fixedHeader.classList.remove("hidden");
    } else {
        fixedHeader.classList.remove("visible");
        fixedHeader.classList.add("hidden");
    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function goToIndex() {
    window.location.href = "index.html";
}