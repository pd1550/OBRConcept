document.addEventListener("DOMContentLoaded", () => {

    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    mobileMenu.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
    const selectionItems = document.querySelectorAll(".selection-item");
    const categoryContainers = document.querySelectorAll(".category-container");

    selectionItems.forEach(item => {
        item.addEventListener("click", () => {

            selectionItems.forEach(item => item.classList.remove("active"));

            categoryContainers.forEach(container => {
                container.style.display = "none";
            });

            item.classList.add("active");   

            const category = item.getAttribute("data-category");
            document.getElementById(category).style.display = "flex";
        });
    });

    document.querySelector('.selection-item.active').click();
});
