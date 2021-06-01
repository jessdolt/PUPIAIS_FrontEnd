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
                const navBtn = document.querySelector(".mainNav button");

                //--------------------Event Listeners------------------------
                hamburgerIcon.addEventListener("click", showMobileNav);
                closeIcon.addEventListener("click", hideMobileNav);
                navBtn.addEventListener("click", toggleNavModal);

                //--------------------functions------------------------
                //mobileNav Functions
                window.addEventListener("resize", () => {
                    if(window.innerWidth >= 1366){
                        showMobileNav();
                    }
                    else{
                        hideMobileNav();
                    }
                });
                function toggleNavModal(){
                    navBtn.classList.toggle("active");
                }
                function showMobileNav(){
                    mobileNav.classList.add("show");
                }
                function hideMobileNav(){
                    mobileNav.classList.remove("show");
                }
                break;
            case 'Admin':
                //check if filterNav is on the page
                let filterNav = document.querySelector(".filterNav");
                if(filterNav){
                    const allUser = document.querySelector(".allUser")
                    const manage = document.querySelector(".btnContainer")
                    const deptHead = document.querySelectorAll(".deptHead")
                    const groupHeader = document.querySelectorAll(".groupHeader")
                    manage.addEventListener("click",()=>{
                        let isActive = manage.classList.contains("active")
                        if(isActive){
                            manage.classList.remove("active")
                            deptHead.forEach(boom=>boom.classList.remove("active"))
                            groupHeader.forEach(boom=>boom.classList.remove("active"))
                            allUser.classList.remove("active")
                        }
                        else{
                            deptHead.forEach(boom=>boom.classList.add("active"))
                            groupHeader.forEach(boom=>boom.classList.remove("active"))
                            allUser.classList.remove("active")
                            manage.classList.add("active")
                        }
                    })
                    console.log(manage.classList.contains("active"))
                    
                    deptHead.forEach(element=>element.addEventListener("click",()=>{
                        if(manage.classList.contains("active") == false){
                            let isActive = element.classList.contains("active")
                            if(isActive){
                                element.classList.remove("active")
                            }
                            else{
                                deptHead.forEach(boom=>boom.classList.remove("active"))
                                groupHeader.forEach(boom=>boom.classList.remove("active"))
                                allUser.classList.remove("active")
                                element.classList.add("active")
                            }
                        }
                    }))
                    
                    
                    groupHeader.forEach(element=>element.addEventListener("click",()=>{
                        let isActive = element.classList.contains("active")
                        if(isActive){
                            element.classList.remove("active")
                        }
                        else{
                            groupHeader.forEach(boom=>boom.classList.remove("active"))
                            allUser.classList.remove("active")
                            element.classList.add("active")
                        }
                    }))

                    allUser.addEventListener("click", () => {
                            deptHead.forEach(boom=>boom.classList.remove("active"))
                            groupHeader.forEach(boom=>boom.classList.remove("active"))
                            allUser.classList.add("active")
                    })
                }
                //--------------------Variable Declaration------------------------
                //adminNav
                const adminHamburger = document.querySelector(".hamburgerAdmin");
                const sideNav = document.querySelector(".adminNav");
                const mainCategory = document.querySelectorAll(".mainCategory");
                
                //--------------------Event Listeners------------------------
                /* toggleSideNav */
                if(adminHamburger != null){
                    adminHamburger.addEventListener("click", toggleSideNav);
                }
                if(sideNav != null){
                    window.addEventListener("click", closeSideNav);
                }
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
                
        }
    }
}

export default nav