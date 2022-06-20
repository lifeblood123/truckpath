const hbsptForm = function() {
    function t() {
        clearInterval(a),
        r.classList.add(s),
        o.forEach(function(t) {
            document.getElementById(t).classList.add(s)
        })
    }
    function e() {
        var e = 5;
        c.innerHTML = e,
        a = setInterval(function() {
            e--,
            e < 0 && t(),
            c.innerHTML = e
        }, 1e3)
    }
    function n() {
        l.classList.add(s),
        e(),
        r.classList.remove(s)
    }
    var s = "displayNone"
      , a = null
      , o = []
      , l = document.getElementsByClassName("handlerHbsptDialog")[0]
      , d = document.getElementsByClassName("handlerHbsptDialogTitle")[0]
      , i = document.getElementsByClassName("handlerHbsptClose")[0]
      , m = document.getElementsByClassName("handlerHbsptSubmitClose")[0]
      , c = document.getElementsByClassName("handlerHbsptSubmitNum")[0]
      , r = document.getElementsByClassName("handlerHbsptSubmitDialog")[0]
      , u = document.getElementsByClassName("handlerHbsptWarper")[0];
    m.addEventListener("click", t),
    window.createHbsptForm = function(t) {
        var e = document.createElement("div");
        e.setAttribute("id", t.target),
        e.setAttribute("class", s),
        e.classList.add("form-dialog-content"),
        u.appendChild(e),
        setTimeout(function() {
            o.push(t.target),
            hbspt && hbspt.forms.create({
                region: t.region,
                portalId: t.portalId,
                formId: t.formId,
                target: "#" + t.target
            })
        }, 20)
    }
    ,
    window.showHbsptForm = function(t) {
        d.innerHTML = t.title || "",
        t.width && (u.style.width = t.width + "px"),
        l.classList.remove(s),
        document.getElementById(t.target).classList.remove(s)
    }
    ,
    window.closeHbsptForm = function(t) {
        document.getElementById(t.target).classList.add(s)
    }
    ,
    console.log(window, "window"),
    i.addEventListener("click", function() {
        o.forEach(function(t) {
            document.getElementById(t).classList.add(s)
        }),
        l.classList.add(s)
    }),
    window.addEventListener("message", function(t) {
        if("hsFormCallback" === t.data.type && "onFormSubmitted" === t.data.eventName){
            n()
        }
    });
    for (var g = document.getElementsByClassName("demo-btn"), b = 0; b < g.length; b++)
        g[b].classList.remove("visibilityBtn")
};
