var CMDDispatch = function() {
    for (var t = document.getElementsByClassName("dispatch-start-btn"), e = 0; e < t.length; e++)
        t[e].addEventListener("click", function(e) {
            if (e && e.preventDefault) {
                e.preventDefault();
              } else {
                window.event.returnValue = false;
              }
            window.showHbsptForm({
                title: "See how Trucker Path’s Dispatch can scale up your business",
                target: "dispatchHbsptContent",
                width: 600
            })
        });
    window.createHbsptForm({
        region: "na1",
        portalId: "6474818",
        formId: "e865943a-6171-4dcd-8744-2c9bc2f85ac7",
        target: "dispatchHbsptContent"
    })
};
