requirejs.config({
    urlArgs: function(o, e) {
        return "?" + document.querySelector('meta[name="build"]').getAttribute("content")
    }
}),
require(["../app"], function() {
    app(["scrollto", "transit", "tools/mpevent", "tools/topbar", "tools/main"], function(o) {
        topbar(),
        scrollMarker(),
        moveToTop(),
        o.require(["homepage"], ["website/index", "tools/forms", "tools/modal", "tools/press-and-support", "tools/youtube-player", "tools/slideshow", "tools/touch"], function() {
            homepageHead(),
            homepageTruckloads(),
            homepageCommand(startTouch),
            indexOpinion(function(o) {
                slideshow(o, startTouch)
            }),
            pressAndSupport(function(o) {
                slideshow(o, startTouch)
            }),
            forms(),
            $("#index-yt-bg").youtube({
                videoId: "9WbznLXmDyo",
                suggestedQuality: "default"
            }, {
                controls: 0,
                autoplay: 1
            }, !0, !0).on("playing", function(o) {
                $(".index-head-graphic-tonality").addClass("revealed"),
                o.parent.addClass("loaded")
            }),
            o.require(["tools/modal-bottom"], function() {
                o.require(["tools/sms-form"], function() {
                    smsForm()
                })
            }),
            hbspt.forms.create({
                region: "na1",
                portalId: "6474818",
                formId: "e865943a-6171-4dcd-8744-2c9bc2f85ac7",
                target: "#hbspt-form-container"
            }),
            window.addEventListener("message", function(o) {
                "hsFormCallback" === o.data.type && "onFormSubmitted" === o.data.eventName && document.body.classList.remove("tpweb-noscroll-truckpath")
            }),
            document.getElementsByClassName("dispatch-close")[0].addEventListener("click", function() {
                document.body.classList.remove("tpweb-noscroll-truckpath")
            }),
            document.getElementsByClassName("dispatch-start")[0].addEventListener("click", function() {
                document.body.classList.add("tpweb-noscroll-truckpath")
            })
        }),
        o.require(["tl-load-board", "truckloads-mobile-app"], ["website/tl-load-board"], function() {
            tllb()
        }),
        o.require(["truckerpath-app", "truck-parking", "weigh-stations-new"], ["tools/forms", "tools/modal", "tools/modal-bottom"], function() {
            forms(),
            o.require(["tools/sms-form-inline"], function() {
                smsFormInline()
            }),
            o.require(["weigh-stations-new"], ["tools/youtube-player"], function() {
                $("#statuses-video").youtube({
                    videoId: "1sjgVVYDEgE",
                    suggestedQuality: "default"
                }, {
                    controls: 0,
                    autoplay: 1
                }, !0, !0).on("playing", function(o) {})
            })
        }),
        o.require(["night-mode"], ["tools/forms", "tools/modal", "tools/modal-bottom", "website/nightmode"], function() {
            forms(),
            o.require(["tools/sms-form"], function() {
                smsForm()
            })
        }),
        o.require(["truck-stops"], ["tools/forms", "website/tp-truck-stops"], function() {
            forms(),
            tpTruckStops(),
            o.require(["tools/modal", "tools/modal-bottom", "tools/sms-form"], function() {
                smsForm()
            })
        }),
        o.require(["tlb-truck-search-video"], ["tools/youtube-player"], function() {
            $("#yt-bg").youtube({
                videoId: "94nytqkGWRI",
                suggestedQuality: "default"
            }, {
                controls: 0,
                autoplay: 1
            }, !0, !0).on("playing")
        }),
        o.require(["tlb-truck-search"], ["website/tlb-truck-search"], function() {
            tlbTruckSearch()
        }),
        o.require(["tp-feature-1"], ["tools/opinions"], function() {
            opinion()
        }),
        o.require(["new-carriers", "truckloads-mobile-app"], ["tools/forms", "tools/youtube-player"], function() {
            o.require(["tools/modal", "tools/modal-bottom", "tools/sms-form"], function() {
                forms(),
                smsForm(),
                o.require(["tools/modal-youtube"])
            })
        }),
        o.require(["truckloads-ascend"], ["tools/forms", "website/ascend"], function() {
            forms(),
            ascendToggleContent(),
            o.require(["tools/forms.extension.agreement", "tools/forms.extension.dotmc.tumbler"], function() {
                forms.extension.dotmcTumbler(),
                forms.extension.agreement()
            })
        }),
        o.require(["brokers-sign-up"], ["tools/forms"], function() {
            o.require(["website/tlb-signup", "tools/forms.extension.agreement", "tools/forms.extension.dotmc.tumbler"], function() {
                tlbSignUp(),
                tlbSignUpLogic(),
                forms(),
                forms.extension.dotmcTumbler(),
                forms.extension.agreement(),
                tlbSignUpFormData()
            })
        }),
        o.require(["brokers-sign-up-iframe"], ["website/tlb-signup-iframe"]),
        o.require(["instapay-new"], ["tools/forms", "tools/modal"], function() {
            forms()
        }),
        o.require(["careers"], ["website/careers"], function() {
            careers()
        }),
        o.require(["contacts"], ["tools/forms"], function() {
            forms()
        }),
        o.require(["business"], ["tools/youtube-player"], function() {
            o.require(["tools/modal"], function() {
                o.require(["tools/modal-youtube"])
            })
        }),
        o.require(["premium-membership"], ["tools/forms", "tools/table"], function() {
            forms()
        }),
        o.require(["ip-popup-1", "ip-popup-2"], ["tools/modal", "tools/modal-load"], function() {
            o.require(["ip-popup-1"], ["website/ip-popups"], function() {
                ipPopup1()
            }),
            o.require(["ip-popup-2"], ["website/ip-popups"], function() {
                ipPopup2()
            })
        }),
        o.require(["ip-landing-2", "ip-factoring", "ip-what-is-fuel-advances", "ip-fuel-advances"], ["tools/opinions"], function() {
            opinion()
        }),
        o.require(["press"], ["website/press"], function() {
            new Press
        }),
        o.require(["eld-promo"], ["website/eld-promo"], function() {
            new EldPromoPage
        }),
        o.require(["eld-index"], ["website/eld-index"], function() {
            new EldIndexPage
        }),
        o.require(["cmd-free-trial"], ["website/cmd-free-trial", "tools/press-and-support", "tools/touch", "tools/slideshow", "config"], function() {
            pressAndSupport(function(o) {
                slideshow(o, startTouch)
            }),
            CMDFreeTrial(slideshow, getConfig())
        }),
        o.require(["cmd-dispatch"], ["website/cmd-dispatch"], function() {
            CMDDispatch()
        }),
        o.require(["eld-landing-ev"], ["website/eld-landing-ev"], function() {
            new EldIndexPage
        }),
        o.require(["banner-bid-now"], ["tools/modal-load", "tools/modall", "tools/skyBanner", "website/bidNowModal"], function() {
            var o = new SkyBanner("bidNow");
            o.click(function() {
                new bidNowModal(o)
            }),
            window.location.href.indexOf("#requestBidNow") > -1 && new bidNowModal(o)
        }),
        o.require(["pdf-loader"], ["tools/pdf-loader"], function() {
            pdfLoader()
        }),
        o.require(["tlb-truckloads-brokers-2"], ["tools/broker-form"], function() {
            brokerForm()
        }),
        o.require(["new-carriers", "truckloads-mobile-app"], ["tools/tl-table"], function() {
            tlTable()
        }),
        o.require(["new-carriers"], ["tools/tl-court"], function() {
            tlCourt()
        }),
        function() {
            $.ajax({
                url: "https://smallcall-api.truckerpath.com/tic/v1.0/apollo/truckerpath.notice.top",
                async: !0,
                success: function(o) {
                    if (o.show) {
                        var e = document.createElement("style")
                          , t = ".option-sidebar {padding-top:  " + o.desk_height + "px;} @media screen and (max-width: 736px) {.option-sidebar {padding-top: " + (o.mobile_height + 56) + "px;}"
                          , r = ".ead{overflow: hidden;color:" + o.color + "};} .ea { background: " + o.background + "; height: " + o.desk_height + "px; line-height: " + o.desk_height + "px} @media screen and (max-width: 736px) {.ea {height: " + o.mobile_height + "px; line-height: " + o.mobile_height + "px}}"
                          , i = ".wrapper_topbar {top:  " + o.desk_height + "px;}@media screen and (max-width: 736px) {.wrapper_topbar {top: " + o.mobile_height + "px;}} ";
                        $("#notice-text").text(o.text),
                        $("#notice-link").attr("href", o.link),
                        e.innerText = t + r + i,
                        console.log(e.innerText),
                        document.head.appendChild(e)
                    }
                }
            })
        }()
    })
});
