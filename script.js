document.addEventListener('DOMContentLoaded', function() {
const loaderpage = document.querySelector(".loader-page");

loaderpage.style.visibility = 'visible';

window.addEventListener('load', function () {
loaderpage.style.visibility = 'hidden';
});

});
document.addEventListener("DOMContentLoaded", function () {
    var customCursor = document.querySelector(".custom-cursor");


    document.addEventListener("mousemove", function (e) {
        customCursor.style.left = e.clientX + "px";
        customCursor.style.top = e.clientY + "px";
    });

    var CursorMoving = false;

    document.addEventListener("mousemove", function () {
        CursorMoving = true;
    });

    function updateCursorPosition(e) {
        if (!CursorMoving) {
            customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
    }
    setInterval(updateCursorPosition, 16000);
});

