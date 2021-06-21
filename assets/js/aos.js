let throttle = require('lodash.throttle');
const aos = {
    init:() => {
        const newsCardArr = document.querySelectorAll('.alumniNews .newsCon .news')
        const mainHeader = document.querySelector('.mainHeader')
        const mainShadow = document.querySelector('.headerShadow')
        const mainNav = document.querySelector('.mainNav')
        const heroBox = document.querySelector('.alumni .heroBox')
        const footer = document.querySelectorAll('.mainFooter > *')
        //specific for galleryView
        const galleryCover = document.querySelector('.alumni .mainContent.view > a')
        let lastScrollTop = 0
        if(mainNav){
            window.addEventListener('scroll', throttle(navToggle, 200))
        }

        if(newsCardArr != null){
            window.addEventListener('load', scrollAnimate)
            window.addEventListener('scroll', throttle(scrollAnimate, 200))
        }
        if(footer != null){
            window.addEventListener('scroll', throttle(scrollAnimateFooter, 200))
        }

        function navToggle(){
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                // downscroll code
                if(heroBox){
                    if(isNavLimit(heroBox)){
                        mainNav.classList.add('move')
                        mainHeader.classList.add('move')
                        mainShadow.classList.add('move')
                    }
                }
                if(galleryCover){
                    if(isNavLimit(galleryCover)){
                        mainNav.classList.add('move')
                        mainHeader.classList.add('move')
                        mainShadow.classList.add('move')
                    }
                }
            } else {
                // upscroll code
                mainNav.classList.remove('move')
                mainHeader.classList.remove('move')
                mainShadow.classList.remove('move')
            }
            lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
        }
        function isNavLimit(e){
            const elementDiv = e.getBoundingClientRect()
            let distanceFromBot = 104;
            return elementDiv.bottom < distanceFromBot ? true : false
        }

        //news card fade in
        function scrollAnimate(e){
            newsCardArr.forEach(element => {
                if(isVisible(element) && !isAppear(element)){
                    element.classList.add("appear")
                }
            })
        }
        function isAppear(element){
            return element.classList.contains("appear")
        }
        function isVisible(element){
            const elementDiv = element.getBoundingClientRect()
            if(window.innerWidth <= 800){
            let distanceFromTop = 660;
            return elementDiv.top < distanceFromTop ? true : false
            }
            if(window.innerWidth <= 1366){
            let distanceFromTop = 580;
            return elementDiv.top < distanceFromTop ? true : false
            }
            let distanceFromTop = 950;
            return elementDiv.top < distanceFromTop ? true : false
        }

        function scrollAnimateFooter(e){
            footer.forEach(element => {
                if(isFooterVisible(element) && !isAppear(element)){
                    element.classList.add("appear")
                }
            })
        }
        function isFooterVisible(element){
            const elementDiv = element.getBoundingClientRect()
            let distanceFromTop = window.innerHeight;
            return elementDiv.top < distanceFromTop ? true : false
        }
    }
}

export default aos