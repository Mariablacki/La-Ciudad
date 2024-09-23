

document.getElementById("scroll-left").addEventListener("click", () => {
    const page = document.querySelector(".page");
    page.style.transform = "translateX(0)";
});

document.getElementById("scroll-right").addEventListener("click", () => {
    const page = document.querySelector(".page");
    page.style.transform = "translateX(-100%)";
});

document.getElementById("scroll-left").addEventListener("click", () => {
    const page1 = document.querySelector(".page1");
    page1.style.transform = "translateX(0)";
});

document.getElementById("scroll-right").addEventListener("click", () => {
    const page1 = document.querySelector(".page1");
    page1.style.transform = "translateX(-100%)";
});


