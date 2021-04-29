//userNav
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const closeIcon = document.querySelector(".closeIcon");
const mobileNav = document.querySelector("nav");

//adminNav
const mainCategory = document.querySelectorAll(".mainCategory");

mainCategory.forEach(element => element.addEventListener("keydown", tabSelectMainCategory));
mainCategory.forEach(element => element.addEventListener("click", selectMainCategory));


/*open mobile nav*/
hamburgerIcon.addEventListener("keydown", enterHamburgerIcon);
hamburgerIcon.addEventListener("click", openMobileNav);

/*close mobile nav*/
closeIcon.addEventListener("keydown", enterCloseIcon);
closeIcon.addEventListener("click", closeMobileNav);


//mobileNav Functions
window.addEventListener("resize", (event) => {
    if(window.innerWidth >= 840){
        mobileNav.style.left = "0";
    }
    else{
        mobileNav.style.left = "-100%";
    }
});

function enterHamburgerIcon(event){
    if(event.key == "Enter"){
        console.log(event);
        openMobileNav();
    }
}

function openMobileNav(event){
    mobileNav.style.left = "0";
}

function enterCloseIcon(event){
    if(event.key == "Enter"){
        console.log(event);
        closeMobileNav();
    }
}

function closeMobileNav(event){
    mobileNav.style.left = "-100%";
}

//adminNav Functions

function openSubCategory(element){
    mainCategory.forEach(list => list.classList.remove("open"));
    element.classList.add("open");
}
function closeSubCategory(element){
    mainCategory.forEach(list => list.classList.remove("open"));
    element.classList.remove("open");
}

function selectMainCategory(e){
    let element;
    if(e.type == "click"){
        element = this;
    }
    else{
        element = e;
    }
    const isOpen = element.classList.contains("open");

    if(isOpen){
        closeSubCategory(element);
        
    }
    else{
        openSubCategory(element);
    }
}

function tabSelectMainCategory(event){
    if(event.key == "Enter"){
        selectMainCategory(this);
    }
}

