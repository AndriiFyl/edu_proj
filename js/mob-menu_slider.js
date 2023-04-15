    (() => {
        const burgerBtn = document.querySelector(".header_burger-button");
        const svgOpenBurger = document.querySelector(".header_burger-icon");
        const slide_menu = document.querySelector(".header_navigation_list");
        const closeMenuBtn = document.querySelector(".header_close-item");
       
        burgerBtn.addEventListener("click", () => {
            slide_menu.style.transform = "translateY(133.5%)";
                svgOpenBurger.style.fill = "red";    
        })

        closeMenuBtn.addEventListener("click", () => {
            slide_menu.style.transform = "translateY(0)";
                svgOpenBurger.style.fill = "blue";    
            
        })
})();


