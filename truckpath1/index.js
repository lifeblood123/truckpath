var homepageHead = function() {
    homepageHead.$head = $(".index-head"),
    homepageHead.$buttonsTpp = $(".scroll-to-tpp", homepageHead.$head),
    homepageHead.$buttonsTl = $(".scroll-to-tl", homepageHead.$head),
    homepageHead.$buttons = homepageHead.$buttonsTpp.add(homepageHead.$buttonsTl),
    homepageHead.$tppPhone = $(".head-phone-ios", homepageHead.$head),
    homepageHead.$tp = $(".scroll-to-tp", homepageHead.$head),
    homepageHead.$cm = $(".scroll-to-tm", homepageHead.$head),
    homepageHead.$tlPhone = $(".head-phone-android", homepageHead.$head),
    homepageHead.$phones = homepageHead.$tppPhone.add(homepageHead.$tlPhone),
    homepageHead.duration = 280,
    homepageHead.$buttons.on("mouseenter", homepageHead.updateCover),
    homepageHead.$buttonsTpp.on("click", function() {
        $.scrollTo($(".index-tpp"), 600, {
            offset: -66
        })
    }),
    homepageHead.$buttonsTl.on("click", function() {
        $.scrollTo($(".index-tl"), 600, {
            offset: -66
        })
    }),
    homepageHead.$tp.on("click", function() {
        $.scrollTo($(".index-tp"), 600, {
            offset: -66
        })
    }),
    homepageHead.$cm.on("click", function() {
        $.scrollTo($(".index-cm-to"), 600, {
            offset: -66
        })
    })
};
homepageHead.updateCover = function() {
    if (homepageHead.$head.hasClass("head-phones-inaction"))
        return !1;
    $(this).hasClass("scroll-to-tpp") && homepageHead.$tlPhone.hasClass("head-phone-ztop") || $(this).hasClass("scroll-to-tl") && homepageHead.$tppPhone.hasClass("head-phone-ztop")
}
,
homepageHead.updateCover.toSides = function(e) {
    homepageHead.$head.addClass("head-phones-inaction")
}
,
homepageHead.updateCover.changeTo = function(e) {
    var a = "tpp" == e ? "tl" : "tpp";
    homepageHead.$phones.removeClass("head-phone-ztop"),
    homepageHead["$" + e + "Phone"].addClass("head-phone-ztop"),
    homepageHead.$tppPhone.animate({
        top: "tpp" == a ? "14px" : 0,
        left: "+=40px"
    }, homepageHead.duration),
    homepageHead.$tlPhone.animate({
        top: "tl" == a ? "14px" : 0,
        left: "-=40px"
    }, homepageHead.duration, function() {
        homepageHead.$head.removeClass("head-phones-inaction")
    })
}
;
var homepageTruckloads = function() {
    homepageTruckloads.$tl = $(".index-tl"),
    homepageTruckloads.$buttons = $(".index-tl-buttons", homepageTruckloads.$tl),
    homepageTruckloads.$buttonsTlc = $(".index-tl-button-carriers", homepageTruckloads.$buttons),
    homepageTruckloads.$buttonsTlb = $(".index-tl-button-brokers", homepageTruckloads.$buttons),
    homepageTruckloads.$art = $(".index-tl-art", homepageTruckloads.$tl),
    homepageTruckloads.duration = 280,
    homepageTruckloads.markerCarriers = "index-tl-art-carriers",
    homepageTruckloads.markerBrokers = "index-tl-art-brokers",
    homepageTruckloads.$buttonsTlc.add(homepageTruckloads.$buttonsTlb).on("mouseenter", function() {
        $(this).hasClass("index-tl-button-carriers") ? homepageTruckloads.$art.removeClass("index-tl-art-brokers").addClass("index-tl-art-carriers") : homepageTruckloads.$art.removeClass("index-tl-art-carriers").addClass("index-tl-art-brokers")
    })
}
  , homepageCommand = function(e) {
    function a(e) {
        e !== d && ($(t[d]).removeClass("tab-active"),
        $(p[d]).removeClass("tab-active"),
        d = e,
        $(t[d]).addClass("tab-active"),
        $(p[d]).addClass("tab-active"))
    }
    var o = $(".index-cm")
      , t = $(".tab", o)
      , n = t.length
      , p = $(".tabs-content-container", o)
      , d = 0;
    e({
        ele: $(".animate-wrapper", o),
        moveleft: function(e) {
            e.preventDefault()
        },
        moveright: function(e) {
            e.preventDefault()
        },
        left: function(e) {
            e.preventDefault(),
            a((d + 1) % n)
        },
        right: function(e) {
            e.preventDefault(),
            a((d + n - 1) % n)
        }
    });
    for (var s = 0; s < n; s++)
        $(t[s]).mouseenter(a.bind(this, s))
}
  , indexOpinion = function(e) {
    e({
        onGo: function(e, a, o, t) {
            var n = t.duration;
            "mobile" === o ? (e.css({
                "margin-top": "20px"
            }).animate({
                "margin-top": "0"
            }, n),
            a.animate({
                "margin-top": "20px"
            }, n)) : a.css({
                "margin-top": "0"
            })
        },
        onSet: function(e, a, o, t) {
            "mobile" === o ? (e.css({
                "margin-top": "0"
            }),
            setTimeout(function() {
                a.css({
                    "margin-top": "20px"
                })
            })) : a.css({
                "margin-top": "0"
            })
        }
    })
};
window.addEventListener('DOMContentLoaded', (event) => {
    homepageTruckloads();

    indexOpinion(function(o) {
        slideshow(o, startTouch)
    });
    // pressAndSupport(function(o) {
    //     slideshow(o, startTouch)
    // });
});

