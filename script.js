const btn_moon = document.getElementById("moon_sun");  
const moon = document.getElementById("moon");  
const body = document.body;  
const nav = document.querySelector('nav');
const menu = document.querySelector(".menu_mobile");  
const btnMenu = document.querySelector(".menu_toggle");  
const ul = document.querySelector(".ul")
const aLink  = document.querySelectorAll(".li_header")

function btn_change_mod() {
    const img_mod = btn_moon.querySelector("img:not(#moon)")

    if(!img_mod) {
        moon.style.display = 'none'
        const new_img = document.createElement("img")
        new_img.src = "./images/icons8-sun.svg"
        btn_moon.appendChild(new_img)
        body.style.backgroundColor = 'rgb(255, 255, 255)'
        body.style.setProperty("--h-color", "rgb(0, 0, 0)")
        body.style.setProperty("--color-relax", "rgb(0, 170, 255)")
        body.style.setProperty("--color-back-box", "rgb(238, 238, 238)")

    }else {
        btn_moon.removeChild(img_mod)
        moon.style.display = 'block'
        body.style.backgroundColor = 'rgb(34, 37, 41)'
        body.style.setProperty("--h-color", "rgb(255, 255, 255)")
        body.style.setProperty("--color-relax", "rgb(213, 241, 255)")
        body.style.setProperty("--color-back-box", "rgb(81, 81, 81)")  
        scrolled()      
    }
}

btn_moon.addEventListener("click", btn_change_mod);  

function scrolled() {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener("scroll", scrolled)

btnMenu.addEventListener("click", () => {  
    if (window.innerWidth <= 1024) {  
        if (menu.style.display === 'block') {
            menu.style.display = 'none';  
            ul.style.display = 'none'
        }else {  
            ul.style.display = 'flex'
            ul.style.flexDirection = 'column';
            menu.style.display = 'block'; 
            

            aLink.forEach(link => {  
                link.style.borderBottom = '1px solid gray';  
                link.style.padding = '10px 0px 10px 0px'
            });  
        }
    }  
});

window.addEventListener("resize", () => {  
    if (window.innerWidth > 1024) {  
        menu.style.display = 'none'; 
        ul.style.display = 'none';  

        aLink.forEach(link => {  
            link.style.borderBottom = ''; // پاک کردن خط زیر  
            link.style.padding = ''; // پاک کردن padding  
        });  

    }  
});  




