
// (() => {
//     var $tabContents = document.getElementsByClassName(
//       "menu__item menu__item_hoverable"
//     );
//     var active = "active";
//     var inactive = "inactive";

//     function onClick(index) {
//       var $tab = $tabContents[index];
//       if ($tab.classList.contains(inactive)) {
//         $tab.classList.remove(inactive);
//         $tab.classList.remove(active);
//         setTimeout(() => $tab.classList.add(active));
//       } else if ($tab.classList.contains(active)) {
//         $tab.classList.add(inactive);
//       } else {
//         $tab.classList.add(active);
//       }
//     }
//     for (var i = 0; i < $tabContents.length; i++) {
//       $tabContents[i].addEventListener("click", onClick.bind(this, i));
//     }
//   })();

//   var topbar = function () {
//     topbar.top = 0;
//     topbar.toggleButton = $(".js-topbar-toggle");
//     topbar.body = $("body");
//     topbar.wrapper = $(".js-topbar-wrapper");
//     topbar.html = $("html");
//     topbar.fakeBody = $(".fakebody", topbar.body);
//     topbar.init();
//   };

//   topbar.toggle = function () {
//     if (!topbar.wrapper.hasClass("wrapper_topbar_expand")) {
//       topbar.expand();
//     } else {
//       topbar.collapse();
//     }

//     return false;
//   };

//   topbar.expand = function () {
//     topbar.top = topbar.body.scrollTop();
//     topbar.wrapper.addClass("wrapper_topbar_expand");
//     setTimeout(function () {
//       topbar.body.addClass("body_noscroll");
//     }, 300);
//   };

//   topbar.collapse = function () {
//     topbar.wrapper.removeClass("wrapper_topbar_expand");
//     topbar.body.removeClass("body_noscroll");
//     topbar.wrapper.scrollTop(0);
//     topbar.body.scrollTop(topbar.top);
//   };

//   topbar.init = function () {
//     topbar.toggleButton.on("click", topbar.toggle);
//   };
//   topbar();
//   (() => {
//     var type1Containers =
//       document.getElementsByClassName("menu-v2-type type1");
//     var type1ListItems = document.getElementsByClassName("type1-list-item");

//     function setLastHover(index) {
//       var cls = "last-hover";
//       for (var i = 0; i < type1ListItems.length; i++) {
//         if (i !== index) {
//           type1ListItems[i].classList.remove(cls);
//           type1Containers[0].classList.remove(
//             type1ListItems[i].attributes.getNamedItem("hover-class").value
//           );
//         } else if (!type1ListItems[i].classList.contains(cls)) {
//           type1ListItems[i].classList.add(cls);
//           const val =  type1ListItems[i].attributes.getNamedItem("hover-class").value;
//           type1Containers[0].classList.add(
//            val
//           );
//             if(val==='should-hide-0'){
//                 $('.truck_navigation').attr("href",'/fleet-app/');
//             }else{
//                 $('.truck_navigation').attr("href",'/trucker-path-app/truck-gps/');
//             }
//         }
//       }
//     }
//     for (var i = 0; i < type1ListItems.length; i++) {
//       type1ListItems[i].addEventListener(
//         "mouseenter",
//         setLastHover.bind(this, i)
//       );
//     }
//     setLastHover(0);
//   })();


//   (() => {
//     var m2 = document.getElementsByClassName("menu-v2")[0];
//     var els = document.getElementsByClassName("level1-warp");
//     var coverFooter = document.getElementsByClassName(
//       "menu-v2-cover-footer"
//     )[0];

//     function showCover() {
//       hideCover();
//       m2.classList.add("show-cover");
//     }

//     function hideCover() {
//       m2.classList.remove("show-cover");
//     }
//     for (var i = 0; i < els.length; i++) {
//       els[i].addEventListener("mouseenter", showCover);
//       els[i].addEventListener("mouseleave", hideCover);
//     }
//     setTimeout(function () {
//       var demoBth = document.getElementsByClassName("demo-btn");
//       console.log(demoBth);
//       for (var i = 0; i < demoBth.length; i++) {
//         demoBth[i].addEventListener("click", function () {
//           if (["/dispatch"].indexOf(window.location.pathname) !== -1) {
//             document.body.classList.add("tpweb-noscroll-truckpath");
//           } else {
//             dialogDialog.classList.remove(hiddenClass);
//           }
//         });
//       }
//     });
//     var demoBthHeader = document.getElementsByClassName("demo-btn")[0];
//     var telBtnHeader = document.getElementsByClassName("demo-tel")[0];

//     var nextBtn = document.getElementsByClassName("headler-btn")[0];
//     var handlerContent = document.getElementsByClassName("handlerContent")[0];
//     var dialogForm = document.getElementsByClassName("handlerForm");
//     var dialogClose = document.getElementsByClassName("handlerClose")[0];
//     var dialogDialog = document.getElementsByClassName("handlerDialog")[0];
//     var handlerItem = document.getElementsByClassName("handler-item");
//     var selectClass = "dialog-select";
//     var hiddenClass = "displayNone";

//     console.log(telBtnHeader);
//     if (["/dispatch"].indexOf(window.location.pathname) !== -1) {
//       console.log(telBtnHeader);
//       telBtnHeader.classList.remove("displayNone");
//     } else {
//       demoBthHeader.classList.remove("displayNone");
//     }
//   })();

//   (() => {
//     var nextBtn = document.getElementsByClassName("headler-btn")[0];
//     var handlerContent = document.getElementsByClassName("handlerContent")[0];
//     var dialogForm = document.getElementsByClassName("handlerForm");
//     var dialogClose = document.getElementsByClassName("handlerClose")[0];
//     var dialogDialog = document.getElementsByClassName("handlerDialog")[0];
//     var handlerItem = document.getElementsByClassName("handler-item");
//     var selectClass = "dialog-select";
//     var hiddenClass = "displayNone";
//     var formIdList = [
//       "f7a8e74f-3cdf-421b-bbb3-5a0bac2a0463",
//       "6a40b63e-9e7c-4c3e-b177-7ae09c6940c2",
//     ];
//     formIdList.forEach(function (item, index) {
//       hbspt.forms.create({
//         region: "na1",
//         portalId: "6474818",
//         formId: item,
//         target: "#form" + (index + 1),
//       });
//     });
//     var formIndex = 0;
//     for (let i = 0; i < handlerItem.length; i++) {
//       handlerItem[i].addEventListener("click", function () {
//         var selectNode = document.getElementsByClassName(selectClass)[0];
//         selectNode.classList.remove(selectClass);
//         handlerItem[i].classList.add(selectClass);
//         formIndex = i;
//       });
//     }
//     nextBtn.addEventListener("click", function () {
//       console.log(formIndex);
//       console.log(1231231);
//       handlerContent.classList.add(hiddenClass);
//       dialogForm[formIndex].classList.remove(hiddenClass);
//     });
//     function menuClose() {
//       dialogDialog.classList.add(hiddenClass);
//       var selectNode = document.getElementsByClassName(selectClass)[0];
//       selectNode.classList.remove(selectClass);
//       handlerItem[0].classList.add(selectClass);
//       formIndex = 0;
//       dialogForm[0].classList.add(hiddenClass);
//       dialogForm[1].classList.add(hiddenClass);
//       handlerContent.classList.remove(hiddenClass);
//     }
//     window.addEventListener("message", function (event) {
//       if (
//         event.data.type === "hsFormCallback" &&
//         event.data.eventName === "onFormSubmitted"
//       ) {
//         menuClose();
//       }
//     });
//     dialogClose.addEventListener("click", menuClose);
//     var m2 = document.getElementsByClassName("menu-v2")[0];
//     var els = document.getElementsByClassName("level1-warp");
//     var coverFooter = document.getElementsByClassName(
//       "menu-v2-cover-footer"
//     )[0];
//     function showCover() {
//       hideCover();
//       m2.classList.add("show-cover");
//     }
//     function hideCover() {
//       m2.classList.remove("show-cover");
//     }
//     for (var i = 0; i < els.length; i++) {
//       els[i].addEventListener("mouseenter", showCover);
//       els[i].addEventListener("mouseleave", hideCover);
//     }
//     // coverFooter.addEventListener("mouseenter", hideCover)
//     setTimeout(function () {
//       var demoBth = document.getElementsByClassName("demo-btn");
//       console.log(demoBth);
//       for (var i = 0; i < demoBth.length; i++) {
//         demoBth[i].addEventListener("click", function () {
//           if (["/dispatch"].indexOf(window.location.pathname) !== -1) {
//             document.body.classList.add("tpweb-noscroll-truckpath");
//           } else {
//             dialogDialog.classList.remove(hiddenClass);
//             // window.callDemo()
//           }
//         });
//       }
//     });
//     var demoBthHeader = document.getElementsByClassName("demo-btn")[0];
//     var telBtnHeader = document.getElementsByClassName("demo-tel")[0];
//     if (["/dispatch"].indexOf(window.location.pathname) !== -1) {
//       telBtnHeader.classList.remove("displayNone");
//     } else {
//       demoBthHeader.classList.remove("displayNone");
//     }

//     if (window.location.pathname.indexOf("/blog") !== -1) {
//         document.querySelector('.demo-btn').classList.add('visibilityBtn')
//     }
//   })();
(()=>{
    var nextBtn = document.getElementsByClassName("headler-btn")[0]
    var handlerContent = document.getElementsByClassName("handlerContent")[0]
    var dialogForm = document.getElementsByClassName("handlerForm")
    var dialogClose = document.getElementsByClassName("handlerClose")[0]
    var dialogDialog = document.getElementsByClassName("handlerDialog")[0]
    var handlerItem = document.getElementsByClassName("handler-item")
    var selectClass = 'dialog-select'
    var hiddenClass = 'displayNone'
    var formIdList = ['f7a8e74f-3cdf-421b-bbb3-5a0bac2a0463', '6a40b63e-9e7c-4c3e-b177-7ae09c6940c2']
    var formIndex = 0
    for (let i = 0; i < handlerItem.length; i++) {
        handlerItem[i].addEventListener('click', function() {
            var selectNode = document.getElementsByClassName(selectClass)[0]
            selectNode.classList.remove(selectClass)
            handlerItem[i].classList.add(selectClass)
            formIndex = i
        })
    }
    nextBtn.addEventListener('click', function() {
        // handlerContent.classList.add(hiddenClass)
        dialogDialog.classList.add(hiddenClass)
        console.log(formIndex)
        window.showHbsptForm({
            title: 'See how Trucker Path’s platform can scale up your trucking company',
            target: 'mainHbs' + formIndex,
            width: 480
        })
    });
    function menuClose() {
        // window.closeHbsptForm({
        // target: 'mainHbs' + formIndex
        // })
        dialogDialog.classList.add(hiddenClass)
        var selectNode = document.getElementsByClassName(selectClass)[0]
        selectNode.classList.remove(selectClass)
        handlerItem[0].classList.add(selectClass)
        formIndex = 0
        dialogForm[0].classList.add(hiddenClass)
        dialogForm[1].classList.add(hiddenClass)
        handlerContent.classList.remove(hiddenClass)
    }
    // window.addEventListener('message', function(event){// if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted'){// menuClose()
    // }// });
    dialogClose.addEventListener('click', menuClose)
    var m2 = document.getElementsByClassName("menu-v2")[0]
    var els = document.getElementsByClassName("level1-warp")
    var coverFooter = document.getElementsByClassName("menu-v2-cover-footer")[0]
    function showCover() {
        hideCover()
        m2.classList.add('show-cover')
    }
    function hideCover() {
        m2.classList.remove('show-cover')
    }
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('mouseenter', showCover)
        els[i].addEventListener('mouseleave', hideCover)
    }
    var isFirst = true
    // coverFooter.addEventListener("mouseenter", hideCover)
    setTimeout(function() {
        var demoBth = document.getElementsByClassName("demo-btn")
        console.log(demoBth)
        for (var i = 0; i < demoBth.length; i++) {
            demoBth[i].addEventListener('click', function() {
                console.log(1231)
                if (['/dispatch'].indexOf(window.location.pathname) !== -1) {
                    document.body.classList.add("tpweb-noscroll-truckpath");
                } else {
                    dialogDialog.classList.remove(hiddenClass)
                    isFirst && formIdList.forEach(function(item, index) {
                        console.log(window)
                        window.createHbsptForm({
                            region: "na1",
                            portalId: "6474818",
                            formId: item,
                            target: 'mainHbs' + index
                        })
                    })
                    isFirst = false
                    // window.callDemo()
                }
            })
        }
    });
    var demoBthHeader = document.getElementsByClassName("demo-btn")[0]
    var telBtnHeader = document.getElementsByClassName("demo-tel")[0]
    console.log(telBtnHeader)
    if (['/dispatch'].indexOf(window.location.pathname) !== -1) {
        // console.log(telBtnHeader)
        telBtnHeader.classList.remove('displayNone')
    } else {
        demoBthHeader.classList.remove('displayNone')
    }
}
)()