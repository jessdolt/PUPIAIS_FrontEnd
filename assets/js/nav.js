const nav = {
    init:() => {
        let page = document.body.id;
        switch(page){
            case 'Alumni':
                //--------------------Variable Declaration------------------------
                //userNav
                const hamburgerIcon = document.querySelector(".hamburgerIcon");
                const closeIcon = document.querySelector(".closeIcon");
                const mobileNav = document.querySelector(".mainNav");
                //--------------------Event Listeners------------------------
                /*open mobile nav*/
                hamburgerIcon.addEventListener("keydown", enterHamburgerIcon);
                hamburgerIcon.addEventListener("click", openMobileNav);
                /*close mobile nav*/
                closeIcon.addEventListener("keydown", enterCloseIcon);
                closeIcon.addEventListener("click", closeMobileNav);
                console.log("AlloYapo")
                //--------------------functions------------------------
                //mobileNav Functions
                window.addEventListener("resize", (event) => {
                    if(window.innerWidth >= 1280){
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
                break;
            case 'Admin':
                //check if filterNav is on the page
                let main = document.querySelector(".main");
                if(main.childNodes[3].classList.contains("filterNav")){
                    const groupHeader = document.querySelectorAll(".groupHeader")
                    groupHeader.forEach(element=>element.addEventListener("click",()=>{
                        let isActive = element.classList.contains("active")
                        if(isActive){
                            element.classList.remove("active")
                        }
                        else{
                            groupHeader.forEach(boom=>boom.classList.remove("active"))
                            element.classList.add("active")
                        }
                    }))
                }
                //--------------------Variable Declaration------------------------
                //adminNav
                const adminHamburger = document.querySelector(".hamburgerAdmin");
                const sideNav = document.querySelector(".adminNav");
                const mainCategory = document.querySelectorAll(".mainCategory");
                
                //--------------------Event Listeners------------------------
                /* toggleSideNav */
                adminHamburger.addEventListener("click", toggleSideNav);
                window.addEventListener("click", closeSideNav);
                //toggleNavCategories
                mainCategory.forEach(element => element.addEventListener("keydown", tabSelectMainCategory));
                mainCategory.forEach(element => element.addEventListener("click", selectMainCategory));
                
                 //--------------------functions------------------------
                  //adminSideNav Functions
                function toggleSideNav(){
                    const isOpen = sideNav.classList.contains("navOpen");
                    if(isOpen){
                        sideNav.classList.remove("navOpen");
                    }
                    else{
                        sideNav.classList.add("navOpen");
                    }
                }
                function closeSideNav(e){
                    let targetElem = e.target;
                    //click inside or the humburger
                    do{
                        if(targetElem == sideNav || targetElem == adminHamburger){
                            return;
                        }
                        targetElem = targetElem.parentNode;
                    } while(targetElem);
                    //click outside
                    sideNav.classList.remove("navOpen");
                }
                //adminNav Functions
                function openSubCategory(element){
                    mainCategory.forEach(list => list.classList.remove("open"));
                    element.classList.add("open");
                }
                function closeSubCategory(element){
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
                break;
            default:
                console.log("Allo")
        }
    }
}

export default nav