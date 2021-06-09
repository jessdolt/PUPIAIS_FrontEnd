/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/card.js":
/*!***************************!*\
  !*** ./assets/js/card.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst card = {\r\n    init:() => {\r\n        //variable----------------------------------------------\r\n        const svg = document.querySelectorAll(\".card-svg\")\r\n        let colorChoices = [\"#C5C5C5\",\"#DCDCDC\",\"#9B9B9B\"]\r\n        //alumniJobPage\r\n        const archiveFil = document.querySelector(\".card-filter\")\r\n        const archiveCon = document.querySelector(\".archive\")\r\n        \r\n        //functions----------------------------------------------\r\n        if(svg){\r\n            svg.forEach(element => {\r\n                const listOfVector = element.children\r\n                //Fill array with color\r\n                if(colorChoices.length == 0){\r\n                    colorChoices = [\"#C5C5C5\",\"#DCDCDC\",\"#9B9B9B\"]\r\n                }\r\n                //------------------------------------------------\r\n                //loop through every vector\r\n                for(let i=0;i<listOfVector.length;i++){\r\n                   const selectedColor = rand(colorChoices)\r\n                    listOfVector[i].style.fill = selectedColor\r\n                }\r\n                //------------------------------------------------\r\n            })\r\n            //select a random color from the given array and delete the one selected\r\n            function rand(colorChoices){\r\n                let colorIndex = Math.floor(Math.random() * colorChoices.length)\r\n                const selectedColor = colorChoices[colorIndex]\r\n                let remove = colorChoices.splice(colorIndex, 1)\r\n                return selectedColor\r\n            }\r\n        }\r\n        if(archiveFil){\r\n            archiveFil.addEventListener(\"click\",()=>{\r\n                archiveFil.classList.add(\"active\")\r\n                archiveCon.style.overflowY = \"auto\"\r\n            })\r\n        }\r\n        \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);\n\n//# sourceURL=webpack://PUPIAIS/./assets/js/card.js?");

/***/ }),

/***/ "./assets/js/forum.js":
/*!****************************!*\
  !*** ./assets/js/forum.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forum = {\r\n    init:() => {\r\n        /* const replyBtn = document.querySelectorAll(\".reply\") */\r\n        const cancelReply = document.querySelectorAll(\".btn-con2 > .cancel\")\r\n        /* const submitReply = document.querySelectorAll(\".btn-con2 > .submit-reply\") */\r\n\r\n        if(cancelReply){\r\n            /* replyBtn.forEach(element => element.addEventListener(\"click\", ()=>{\r\n                let parentli = element.parentElement.parentElement.parentElement\r\n                parentli.classList.add(\"active\")\r\n            })) */\r\n\r\n            cancelReply.forEach(element => element.addEventListener(\"click\", ()=>{\r\n                let parentli = element.parentElement.parentElement.parentElement\r\n                parentli.classList.remove(\"active\")\r\n            }))\r\n\r\n            /* submitReply.forEach(element => element.addEventListener(\"click\", ()=>{\r\n                let parentli = element.parentElement.parentElement.parentElement\r\n                parentli.classList.remove(\"active\")\r\n            })) */\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forum);\n\n//# sourceURL=webpack://PUPIAIS/./assets/js/forum.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./assets/js/nav.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./assets/js/modal.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ \"./assets/js/table.js\");\n/* harmony import */ var _inputFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputFunctions */ \"./assets/js/inputFunctions.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ \"./assets/js/card.js\");\n/* harmony import */ var _forum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forum */ \"./assets/js/forum.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_nav__WEBPACK_IMPORTED_MODULE_0__.default.init();\r\n_modal__WEBPACK_IMPORTED_MODULE_1__.default.init();\r\n_table__WEBPACK_IMPORTED_MODULE_2__.default.init();\r\n_inputFunctions__WEBPACK_IMPORTED_MODULE_3__.default.init();\r\n_card__WEBPACK_IMPORTED_MODULE_4__.default.init();\r\n_forum__WEBPACK_IMPORTED_MODULE_5__.default.init();\r\n/* if(module.hot){\r\n    module.hot.accept()\r\n}   */ \n\n//# sourceURL=webpack://PUPIAIS/./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/inputFunctions.js":
/*!*************************************!*\
  !*** ./assets/js/inputFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst inputUtil = {\r\n    init:() => {\r\n        //--------------------Variable Declaration------------------------\r\n        const codeTextBox = document.querySelector(\"#verification-code\");\r\n        const batchComboBox = document.querySelector(\"#batch-id\");\r\n        const studentIdBox = document.querySelector(\"#student-id\");\r\n        const altTextArea = document.querySelectorAll('[role=\"textbox\"]');\r\n        const editBtnManageAcc = document.querySelector('.managePage .btn-con .edit');\r\n        const cancelBtnManageAcc = document.querySelector('.managePage .btn-con .cancel');\r\n        const cardCon = document.querySelector('.managePage .card-con');\r\n        const inputs = document.querySelectorAll('.managePage .card-con #edit-form input');\r\n\r\n        //--------------------Event Listeners------------------------\r\n        //for verification code to fill the box\r\n        if(codeTextBox){\r\n            codeTextBox.addEventListener(\"input\",(e) => {\r\n                let codeTexField = e.target;\r\n                if(codeTexField.value.length > codeTexField.maxLength - 1){\r\n                    codeTexField.value = codeTexField.value.slice(0, codeTexField.maxLength)\r\n                    const moveToLeft = setInterval(function(){\r\n                        if(codeTexField.scrollLeft > 0){\r\n                            codeTexField.scrollLeft = \"0px\";\r\n                        }\r\n                        else{\r\n                            clearInterval(moveToLeft)\r\n                        }\r\n                    }, 10);\r\n                    \r\n                }\r\n            })\r\n        }\r\n        if(batchComboBox){\r\n            batchComboBox.addEventListener(\"change\", setStudentId)\r\n        }\r\n\r\n        altTextArea.forEach(element => element.addEventListener(\"input\",(event)=>{\r\n            if(event.key != 'Backspace'){\r\n                let charValue = event.target.textContent\r\n                let charSize = charValue.length\r\n                let maxSize = event.target.attributes.maxLength.value\r\n                console.log()\r\n                if(charSize >= maxSize){\r\n                    event.preventDefault()\r\n                    event.target.textContent = charValue.slice(0,maxSize)\r\n                    /* this code below just to make the cursor stay at the end\r\n                    contentEditable when it reach the limit of characters allowed */\r\n                    let range = document.createRange()\r\n                    let selection = window.getSelection()\r\n                    range.selectNodeContents(event.target)\r\n                    range.collapse(false)\r\n                    selection.removeAllRanges();\r\n                    selection.addRange(range)\r\n                }\r\n                console.log(charSize)\r\n            }\r\n        }))\r\n\r\n        if(editBtnManageAcc){\r\n            editBtnManageAcc.addEventListener(\"click\", ()=>{\r\n                cardCon.classList.add('active')\r\n                inputs.forEach(element => {\r\n                    element.removeAttribute('readonly')\r\n                })\r\n            })\r\n            cancelBtnManageAcc.addEventListener(\"click\", ()=>{\r\n                cardCon.classList.remove('active')\r\n                inputs.forEach(element => {\r\n                    element.setAttribute('readonly','true')\r\n                    element.value = \"\"\r\n                })\r\n            })\r\n        }\r\n        //--------------------functions------------------------\r\n\r\n        function setStudentId(e){\r\n            try{\r\n                let selectedBatch = e.target.selectedOptions[0].attributes[\"data-batch\"].value;\r\n                \r\n                studentIdBox.value = selectedBatch - 3 + \"-\";\r\n            }\r\n            catch{\r\n                studentIdBox.value = \"\";\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputUtil);\n\n//# sourceURL=webpack://PUPIAIS/./assets/js/inputFunctions.js?");

/***/ }),

/***/ "./assets/js/modal.js":
/*!****************************!*\
  !*** ./assets/js/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst alertModalObj = {\r\n    init:() => {\r\n        let page = document.body.id;\r\n        switch(page){\r\n            case 'Alumni':\r\n                const optionBtnAlum = document.querySelector(\".optionCon\")\r\n                const deletePostBtn = document.querySelector(\".btnDeletePost\")\r\n                const bgModal = document.querySelector(\".alertModalContainer\")\r\n                const alertDelete = document.querySelector(\".deleteAlert\")\r\n                const canBtn = document.querySelector(\".cancelBtn\")\r\n                //forum form\r\n                const forumBg = document.querySelector(\".modalConFilterNav\")\r\n                const forumModal = document.querySelector(\".newCourse\")\r\n                const editPostBtn = document.querySelector(\".btnEditPost\")\r\n                const modalDeleteForum = document.querySelector(\".modalDeleteInline\");\r\n                const addPostBtn = document.querySelector(\".newDis button\")\r\n                const xBtn = document.querySelector(\".modalFilterNav > svg\")\r\n\r\n                if(optionBtnAlum){\r\n                    optionBtnAlum.addEventListener(\"click\", ()=>{\r\n                        optionBtnAlum.classList.toggle(\"active\")\r\n                    })\r\n                }\r\n                if(deletePostBtn){\r\n                    deletePostBtn.addEventListener(\"click\", ()=>{\r\n                        let dataId = deletePostBtn.getAttribute(\"data-id\");\r\n                            let dataUrl = deletePostBtn.getAttribute(\"data-url\");\r\n                            let actualURL;\r\n                            if(dataId){\r\n                                actualURL = dataUrl + \"/\" + dataId;\r\n                            }\r\n                            else{\r\n                                actualURL = dataUrl;\r\n                            }\r\n                        \r\n                        modalDeleteForum.setAttribute(\"href\", actualURL);\r\n                        bgModal.classList.add(\"show\")\r\n                        alertDelete.classList.add(\"show\")\r\n                    })\r\n                    editPostBtn.addEventListener(\"click\",()=>{\r\n                        forumBg.classList.add(\"show\")\r\n                        forumModal.classList.add(\"show\")\r\n                    })\r\n                }\r\n                if(addPostBtn){\r\n                    addPostBtn.addEventListener(\"click\",()=>{\r\n                        forumBg.classList.add(\"show\")\r\n                        forumModal.classList.add(\"show\")\r\n                    })\r\n                }\r\n                if(canBtn){\r\n                    canBtn.addEventListener(\"click\",()=>{\r\n                        bgModal.classList.remove(\"show\")\r\n                        alertDelete.classList.remove(\"show\")\r\n                    })\r\n                }\r\n                if(xBtn){\r\n                    xBtn.addEventListener(\"click\", ()=>{\r\n                        forumBg.classList.remove(\"show\")\r\n                        forumModal.classList.remove(\"show\")\r\n                    })\r\n                }\r\n                break;\r\n            case 'Admin':\r\n                    //this to get inline delete btn\r\n                    const generateDeleteModal = function(element) {\r\n                        return function curried_func(e) {\r\n                            let dataId = element.getAttribute(\"data-id\");\r\n                            let dataUrl = element.getAttribute(\"data-url\");\r\n                            let actualURL;\r\n                            if(dataId){\r\n                                actualURL = dataUrl + \"/\" + dataId;\r\n                            }\r\n                            else{\r\n                                actualURL = dataUrl;\r\n                            }\r\n                            modalBtnDelete.setAttribute(\"href\", actualURL);\r\n                            modalBackground.classList.add(\"show\");\r\n                            modalDelete.classList.add(\"show\");\r\n                        }\r\n                    }\r\n                    //--------------------Variable Declaration------------------------\r\n                    //for logout and delete in table\r\n                    const btnLogout = document.querySelector(\".adminNav button\")\r\n                    const btnDelete = document.querySelector(\".deleteSelected\");\r\n                    const btnDeleteInline = document.querySelectorAll(\".btnDeleteInline\");\r\n                    const modalBackground = document.querySelector(\".alertModalContainer\");\r\n                    const modalLogout = document.querySelector(\".logoutAlert\");\r\n                    const modalDelete = document.querySelector(\".deleteAlert\");\r\n                    const modalDeleteAll = document.querySelector(\".deleteAlertAll\");\r\n                    const modalBtnCancel = document.querySelectorAll(\".alertModal div .cancelBtn\");\r\n                    const modalBtnDelete = document.querySelector(\".modalDeleteInline\");\r\n\r\n                    //for user import preview\r\n                    const modalPreviewBackground = document.querySelector(\".modalContainer\");\r\n                    const modalPreview = document.querySelector(\".modalPreview\");\r\n                    const previewBtnCancel = document.querySelector(\".pagination .btnContainer .cancel\");\r\n                    const previewBtnImport = document.querySelector(\".importBtn\");\r\n                    const previewFileInput = document.querySelector(\".input-file-hidden\");\r\n                    const previewFormHidden = document.querySelector(\"#preview-form-hidden\");\r\n\r\n                    //manage\r\n\r\n                    //modal for questionair add question\r\n                    const btnDeleteAccount = document.querySelector(\".btnDeleteAccount\")\r\n                    const deleteAccountForm = document.querySelector(\".delete-acc-form\")\r\n                    //--------------------Event Listeners------------------------\r\n                    if(btnLogout){\r\n                        btnLogout.addEventListener(\"click\", generateLogoutModal);\r\n                    }\r\n\r\n                    if(btnDelete){\r\n                        btnDelete.addEventListener(\"click\", generateDeleteModalAll);\r\n                        \r\n                    }\r\n                    if(btnDeleteInline){\r\n                        btnDeleteInline.forEach(element => element.addEventListener(\"click\", generateDeleteModal(element)));\r\n                    }\r\n\r\n                    if(modalPreviewBackground){\r\n                        previewBtnImport.addEventListener(\"click\", generatePreviewModal);\r\n                        previewFileInput.addEventListener(\"change\", submitForm);\r\n                    }\r\n                    if(btnDeleteAccount){\r\n                        btnDeleteAccount.addEventListener(\"click\",()=>{\r\n                            let dataId = btnDeleteAccount.getAttribute(\"data-id\");\r\n                            let dataUrl = btnDeleteAccount.getAttribute(\"data-url\");\r\n                            let actualURL;\r\n                            if(dataId){\r\n                                actualURL = dataUrl + \"/\" + dataId;\r\n                            }\r\n                            else{\r\n                                actualURL = dataUrl;\r\n                            }\r\n                            deleteAccountForm.setAttribute(\"action\", actualURL);\r\n                            modalBackground.classList.add(\"show\");\r\n                            modalDelete.classList.add(\"show\");\r\n                        })\r\n                    }\r\n\r\n                    //--------------------functions------------------------\r\n                    modalBtnCancel.forEach(element => element.onclick = () => {\r\n                        modalBackground.classList.remove(\"show\");\r\n                        modalDelete.classList.remove(\"show\");\r\n                        modalDeleteAll.classList.remove(\"show\");\r\n                        modalLogout.classList.remove(\"show\");\r\n                    })\r\n\r\n                    function generateDeleteModalAll(){\r\n                        modalBackground.classList.add(\"show\");\r\n                        modalDeleteAll.classList.add(\"show\");\r\n                    }\r\n\r\n                    function generateLogoutModal(){\r\n                        modalBackground.classList.add(\"show\");\r\n                        modalLogout.classList.add(\"show\");\r\n                    }\r\n                    function generatePreviewModal(){\r\n                        previewFileInput.click();\r\n                    }\r\n                    function submitForm(){\r\n                        previewFormHidden.submit();\r\n                    }\r\n                    function refreshPage(){\r\n                        document.location.reload();\r\n                    }\r\n                    \r\n                    \r\n                break;\r\n        }\r\n        \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alertModalObj);\n\n//# sourceURL=webpack://PUPIAIS/./assets/js/modal.js?");

/***/ }),

/***/ "./assets/js/nav.js":
/*!**************************!*\
  !*** ./assets/js/nav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst nav = {\r\n    init:() => {\r\n        let page = document.body.id;\r\n        switch(page){\r\n            case 'Alumni':\r\n                //--------------------Variable Declaration------------------------\r\n                //userNav\r\n                const hamburgerIcon = document.querySelector(\".hamburgerIcon\");\r\n                const closeIcon = document.querySelector(\".closeIcon\");\r\n                const mobileNav = document.querySelector(\".mainNav\");\r\n                const navBtn = document.querySelector(\".mainNav button\");\r\n\r\n                //--------------------Event Listeners------------------------\r\n                hamburgerIcon.addEventListener(\"click\", showMobileNav);\r\n                closeIcon.addEventListener(\"click\", hideMobileNav);\r\n                navBtn.addEventListener(\"click\", toggleNavModal);\r\n\r\n                //--------------------functions------------------------\r\n                //mobileNav Functions\r\n                window.addEventListener(\"resize\", () => {\r\n                    if(window.innerWidth >= 1366){\r\n                        showMobileNav();\r\n                    }\r\n                    else{\r\n                        hideMobileNav();\r\n                    }\r\n                });\r\n                function toggleNavModal(){\r\n                    navBtn.classList.toggle(\"active\");\r\n                }\r\n                function showMobileNav(){\r\n                    mobileNav.classList.add(\"show\");\r\n                }\r\n                function hideMobileNav(){\r\n                    mobileNav.classList.remove(\"show\");\r\n                }\r\n                break;\r\n            case 'Admin':\r\n                //check if filterNav is on the page\r\n                let filterNav = document.querySelector(\".filterNav\");\r\n                if(filterNav){\r\n                    const allUser = document.querySelector(\".allUser\")\r\n                    const manage = document.querySelector(\".btnContainer\")\r\n                    const deptHead = document.querySelectorAll(\".deptHead\")\r\n                    const groupHeader = document.querySelectorAll(\".groupHeader\")\r\n                    const settIcon = document.querySelectorAll(\".settings\")\r\n                    manage.addEventListener(\"click\",()=>{\r\n                        let isActive = manage.classList.contains(\"active\")\r\n                        if(isActive){\r\n                            manage.classList.remove(\"active\")\r\n                            deptHead.forEach(boom=>boom.classList.remove(\"active\"))\r\n                            groupHeader.forEach(boom=>boom.classList.remove(\"active\"))\r\n                            allUser.classList.remove(\"active\")\r\n                        }\r\n                        else{\r\n                            deptHead.forEach(boom=>boom.classList.add(\"active\"))\r\n                            groupHeader.forEach(boom=>boom.classList.remove(\"active\"))\r\n                            allUser.classList.remove(\"active\")\r\n                            manage.classList.add(\"active\")\r\n                        }\r\n                    })\r\n                    deptHead.forEach(element=>element.addEventListener(\"click\",()=>{\r\n                        if(manage.classList.contains(\"active\") == false){\r\n                            let isActive = element.classList.contains(\"active\")\r\n                            if(isActive){\r\n                                element.classList.remove(\"active\")\r\n                            }\r\n                            else{\r\n                                deptHead.forEach(boom=>boom.classList.remove(\"active\"))\r\n                                groupHeader.forEach(boom=>boom.classList.remove(\"active\"))\r\n                                allUser.classList.remove(\"active\")\r\n                                element.classList.add(\"active\")\r\n                            }\r\n                        }\r\n                    }))\r\n                    \r\n                    groupHeader.forEach(element=>element.addEventListener(\"click\",()=>{\r\n                        let isActive = element.classList.contains(\"active\")\r\n                        if(isActive){\r\n                            element.classList.remove(\"active\")\r\n                        }\r\n                        else{\r\n                            groupHeader.forEach(boom=>boom.classList.remove(\"active\"))\r\n                            allUser.classList.remove(\"active\")\r\n                            element.classList.add(\"active\")\r\n                        }\r\n                    }))\r\n                    \r\n                    settIcon.forEach(element=>element.addEventListener(\"click\",()=>{\r\n                        /* alert(\"allo\") */\r\n                    }))\r\n\r\n                    allUser.addEventListener(\"click\", () => {\r\n                            deptHead.forEach(boom=>boom.classList.remove(\"active\"))\r\n                            groupHeader.forEach(boom=>boom.classList.remove(\"active\"))\r\n                            allUser.classList.add(\"active\")\r\n                    })\r\n                }\r\n                //--------------------Variable Declaration------------------------\r\n                //adminNav\r\n                const adminHamburger = document.querySelector(\".hamburgerAdmin\");\r\n                const sideNav = document.querySelector(\".adminNav\");\r\n                const mainCategory = document.querySelectorAll(\".mainCategory\");\r\n                \r\n                //--------------------Event Listeners------------------------\r\n                /* toggleSideNav */\r\n                if(adminHamburger != null){\r\n                    adminHamburger.addEventListener(\"click\", toggleSideNav);\r\n                }\r\n                if(sideNav != null){\r\n                    window.addEventListener(\"click\", closeSideNav);\r\n                }\r\n                //toggleNavCategories\r\n                mainCategory.forEach(element => element.addEventListener(\"keydown\", tabSelectMainCategory));\r\n                mainCategory.forEach(element => element.addEventListener(\"click\", selectMainCategory));\r\n                \r\n                 //--------------------functions------------------------\r\n                  //adminSideNav Functions\r\n                function toggleSideNav(){\r\n                    const isOpen = sideNav.classList.contains(\"navOpen\");\r\n                    if(isOpen){\r\n                        sideNav.classList.remove(\"navOpen\");\r\n                    }\r\n                    else{\r\n                        sideNav.classList.add(\"navOpen\");\r\n                    }\r\n                }\r\n                function closeSideNav(e){\r\n                    let targetElem = e.target;\r\n                    //click inside or the humburger\r\n                    do{\r\n                        if(targetElem == sideNav || targetElem == adminHamburger){\r\n                            return;\r\n                        }\r\n                        targetElem = targetElem.parentNode;\r\n                    } while(targetElem);\r\n                    //click outside\r\n                    sideNav.classList.remove(\"navOpen\");\r\n                }\r\n                //adminNav Functions\r\n                function openSubCategory(element){\r\n                    mainCategory.forEach(list => list.classList.remove(\"open\"));\r\n                    element.classList.add(\"open\");\r\n                }\r\n                function closeSubCategory(element){\r\n                    element.classList.remove(\"open\");\r\n                }\r\n                function selectMainCategory(e){\r\n                    let element;\r\n                    if(e.type == \"click\"){\r\n                        element = this;\r\n                    }\r\n                    else{\r\n                        element = e;\r\n                    }\r\n                    const isOpen = element.classList.contains(\"open\");\r\n\r\n                    if(isOpen){\r\n                        closeSubCategory(element);\r\n                        \r\n                    }\r\n                    else{\r\n                        openSubCategory(element);\r\n                    }\r\n                }\r\n\r\n                function tabSelectMainCategory(event){\r\n                    if(event.key == \"Enter\"){\r\n                        selectMainCategory(this);\r\n                    }\r\n                }\r\n                break;\r\n            default:\r\n                \r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);\n\n//# sourceURL=webpack://PUPIAIS/./assets/js/nav.js?");

/***/ }),

/***/ "./assets/js/table.js":
/*!****************************!*\
  !*** ./assets/js/table.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst table = {\r\n    init:() => {\r\n        let page = document.body.id;\r\n        switch(page){\r\n            case 'Alumni':\r\n                //--------------------Variable Declaration------------------------\r\n                \r\n                break;\r\n            case 'Admin':\r\n                //--------------------Variable Declaration------------------------\r\n                //variables for inline option btn\r\n                const optionBtn = document.querySelectorAll(\".optionSpan\");\r\n                //variables for checkbox selection\r\n                const btnSelectAll = document.querySelector(\".selectAll\");\r\n                const btnDelete = document.querySelector(\".deleteSelected\");\r\n                const checkbox = document.querySelectorAll('tr input[type=\"checkbox\"]');\r\n                //--------------------Event Listeners------------------------\r\n                //Listeners for inline option btn\r\n                optionBtn.forEach(element => element.addEventListener(\"click\", toggleOptions));\r\n                window.addEventListener(\"click\", closeOptionModal);\r\n                //Listeners for checkbox selection\r\n                if(btnSelectAll != null){\r\n                    btnSelectAll.addEventListener(\"click\", selectAll);\r\n                }\r\n                checkbox.forEach(element => element.addEventListener(\"click\", select));\r\n                \r\n                //--------------------functions------------------------\r\n                //functions for inline option btn\r\n                function toggleOptions(e){\r\n                    const isOpen = e.target.classList.contains(\"active\");\r\n                    if(isOpen){\r\n                        e.target.classList.remove(\"active\")\r\n                    }\r\n                    else{\r\n                        optionBtn.forEach(element => element.classList.remove(\"active\"));\r\n                        e.target.classList.add(\"active\")\r\n                    }\r\n                }\r\n                function closeOptionModal(e){\r\n                    let targetElem = e.target;\r\n                    //click inside\r\n                    if(targetElem.classList.contains(\"active\")){\r\n                        \r\n                    }\r\n                    else{\r\n                        optionBtn.forEach(element => element.classList.remove(\"active\"));\r\n                    }\r\n                }\r\n                //functions for checkbox selection\r\n                function select(){\r\n                    let count = 0;\r\n                    checkbox.forEach(element => {\r\n                        if(element.checked){\r\n                            count++;\r\n                            btnDelete.classList.add(\"visible\");\r\n                        }\r\n                        else if(count == 0){\r\n                            btnDelete.classList.remove(\"visible\");\r\n                        }\r\n                        });\r\n                    }\r\n                \r\n                function selectAll(){\r\n                    let count = 0;\r\n                    checkbox.forEach(element => {\r\n                        if(element.checked){\r\n                            count++;\r\n                            if(count == checkbox.length){\r\n                                checkbox.forEach(element => element.click());\r\n                                btnDelete.classList.remove(\"visible\")\r\n                            }\r\n                        }\r\n                        else{\r\n                            element.click()\r\n                            btnDelete.classList.add(\"visible\")\r\n                        }\r\n                    });\r\n                }\r\n\r\n                /* function showDeleteAlert(){\r\n                    alertModal.classList.add(\"show\");\r\n                }\r\n                \r\n                function removeAlertModal(){\r\n                    alertModal.classList.remove(\"show\");\r\n                } */\r\n                break;\r\n            default:\r\n                \r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (table);\n\n//# sourceURL=webpack://PUPIAIS/./assets/js/table.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/index.js");
/******/ 	
/******/ })()
;