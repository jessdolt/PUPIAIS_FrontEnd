const gallery = {
    init:() => {
        const picture = document.querySelectorAll('.view .galCon li')
        if(picture.length){
            const imageArr = new Array
            const imageIdArr = new Array
            picture.forEach(element => {
                let imgSrc = element.children[0].children[0].attributes[0].value
                //secondOption
                /* let imgSrc = element.children[0].children[0].src */
                let uniqueId = getRandomString(8)
                imageArr.push(imgSrc)
                imageIdArr.push(uniqueId)
                element.addEventListener('click', (e)=>{
                    
                    //prevent page from scrolling
                    document.body.classList.add('stop-scrolling')
                    //element creation
                    const imgViewBg = document.createElement('div')
                    const closeBtn = document.createElement('svg');
                    const prevBtn = document.createElement('svg');
                    const nextBtn = document.createElement('svg');
                    const imgViewModal = document.createElement('div')
                    
                    //create img and container element based on number
                    //of img in markup
                    imageArr.forEach(imageItem => {
                        const imgCon = document.createElement('div')
                        const img = document.createElement('img')
                        imgCon.classList.add('imgCon')
                        img.setAttribute('src', imageItem)

                        imgCon.append(img)
                        imgViewModal.append(imgCon)

                        
                        
                    })

                    //target the img that is selected
                    imageIdArr.forEach(uniqueImgId=>{
                        let selectedElement = uniqueId == uniqueImgId
                        
                        //if the selected element is the one on loop
                        if(selectedElement){
                            let firstImage = imgViewModal.children[0]
                            let nthPercent = imageIdArr.indexOf(uniqueImgId)
                            //condition to show what is selected
                            if(nthPercent == 0){
                                firstImage.style.marginLeft = `-${nthPercent}00%`
                            }
                            else{
                                firstImage.style.marginLeft = `-${nthPercent}00%`
                            }

                            let nextCount = imageIdArr.length - (nthPercent + 1)
                            let prevCount = (nthPercent)
                            //nextBtn function
                            nextBtn.addEventListener("click", ()=>{
                                //get the margin left at the moment
                                let marginLeft = firstImage.style.marginLeft[1]
                                console.log(marginLeft)
                                if(nextCount >=1){
                                    if(marginLeft == '%'){
                                        firstImage.style.marginLeft = "-100%"
                                        console.log(firstImage)
                                    }
                                    else{
                                        firstImage.style.marginLeft = `-${parseInt(marginLeft) + 1}00%`
                                    }
                                    nextCount--
                                    prevCount++
                                }
                                
                                
                            })
                            prevBtn.addEventListener("click", ()=>{
                                //get the margin left at the moment
                                let marginLeft = firstImage.style.marginLeft[1]
                                if(prevCount >=1){
                                    if(marginLeft != '%'){
                                        firstImage.style.marginLeft = `-${parseInt(marginLeft) - 1}00%`
                                    }
                                    nextCount++
                                    prevCount--
                                }
                                
                                
                            })
                        }
                    })
                    //add class to bg and image list container

                    imgViewBg.classList.add('imageViewModal','show')
                    imgViewModal.classList.add('imageViewCon','show')
                    
                    imgViewBg.append(closeBtn)
                    imgViewBg.append(prevBtn)
                    imgViewBg.append(nextBtn)
                    imgViewBg.append(imgViewModal)

                    
                    //close button function
                    closeBtn.addEventListener('click', ()=>{
                        imgViewBg.remove()
                        document.body.classList.remove('stop-scrolling')
                    })

                    document.body.append(imgViewBg)
                })
            })
            
            console.log(imageArr)
        }

        function getRandomString(length) {
            var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var result = '';
            for ( var i = 0; i < length; i++ ) {
                result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            }
            return result;
        }
    }
}

export default gallery