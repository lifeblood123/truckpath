

function onYouTubePlayerAPIReady() {
    YTApiInitialized = !0
}
var YTPlayers = []
  , YTApiInitialized = !1;
if (!YTApiInitialized) {
    var tag = tag = document.createElement("script");
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}
var YoutubePlayer = function(t, e, i, s, a, n) {
    this.elementId = t,
    this.selector = $("#" + t),
    this.parent = this.selector.parent(),
    this.mute = s || !1,
    this.repeat = a || !1,
    this.scaleParent = n || !1,
    this.tv = null,
    this.state = 0,
    this.playingNotifier = null,
    this.playerDefaults = $.extend({
        autoplay: 0,
        autohide: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        controls: 1,
        disablekb: 1,
        enablejsapi: 1,
        iv_load_policy: 1
    }, i),
    this.video = e,
    YTPlayers.push(this);
    var r = setInterval(function() {
        YTApiInitialized && (this.tv = new YT.Player(this.elementId,{
            events: {
                onReady: this.onPlayerReady.bind(this),
                onStateChange: this.onPlayerStateChange.bind(this)
            },
            playerVars: this.playerDefaults
        }),
        clearInterval(r))
    }
    .bind(this), 1e3)
};
YoutubePlayer.prototype.on = function(t, e) {
    switch (t) {
    case "ready":
        this.onReady = e;
        break;
    case "playing":
        this.onPlaying = e;
        break;
    case "stopped":
        this.onStopped = e;
        break;
    case "progress":
        this.onProgress = e
    }
    return this
}
,
YoutubePlayer.prototype.onPlayerReady = function() {
    this.vidRescale(),
    $(window).on("load resize", this.vidRescale.bind(this)),
    this.playerDefaults.autoplay ? this.tv.loadVideoById(this.video) : this.tv.cueVideoById(this.video),
    this.mute && this.tv.mute(),
    this.onReady && this.onReady(this),
    this.scaleParent && this.vidRescale()
}
,
YoutubePlayer.prototype.onPlayerStateChange = function(t) {
    this.state = t.data,
    1 === t.data ? (null === this.playingNotifier && (this.playingNotifier = setInterval(function() {
        this.onProgress && this.onProgress(parseInt(t.target.getCurrentTime() / t.target.getDuration() * 100))
    }
    .bind(this), 1e3)),
    this.onPlaying && this.onPlaying(this)) : 2 === t.data ? this.repeat && this.tv.loadVideoById(this.video) : 0 === t.data && (null !== this.playingNotifier && (clearInterval(this.playingNotifier),
    this.playingNotifier = null,
    this.onProgress && this.onProgress(100)),
    this.onStopped && this.onStopped(this),
    this.repeat && t.target.playVideo())
}
,
YoutubePlayer.prototype.vidRescale = function() {
    var t = this.parent.width()
      , e = this.parent.height();
    t / e > 16 / 9 ? (this.tv.setSize(t, t / 16 * 9),
    this.selector.css({
        left: "0"
    })) : (this.tv.setSize(e / 9 * 16, e),
    this.selector.css({
        left: -(this.selector.outerWidth() - t) / 2
    })),
    this.scaleParent && this.parent.css({
        height: t / 16 * 9 + "px"
    })
}
,
$.fn.youtube = function(t, e, i, s, a) {
    return new YoutubePlayer(this.attr("id"),t,e,i,s,a)
}
;


var Modal = function(o, e) {
    var t = [".js-modal-close", ".js-modal-shadow"];
    this.modal = jQuery(o),
    this.shadow = jQuery('<div class="shadow shadow_fullscreen js-modal-shadow"></div>'),
    this.closes = t.join(","),
    e = e || !1,
    this.elementExeptions = [".js-modal"],
    e && (this.elementExeptions = this.elementExeptions.concat(e),
    this.elementExeptions = this.elementExeptions.join(",")),
    this.setListeners(),
    this.wrapper = jQuery(o).parent(),
    this.setWindowPosition(),
    jQuery(window).on("resize", this.setWindowPosition.bind(this))
};
Modal.prototype.setWindowPosition = function() {
    var o = jQuery(window).height()
      , e = this.modal.innerHeight()
      , t = (o - e) / 2;
    return e > o - 28 && (t = 28),
    this.modal.css({
        top: t
    }),
    this
}
,
Modal.prototype.setListeners = function() {
    jQuery(document).on("click", this.hide.bind(this)),
    jQuery(document).on("mouseenter", this.elementExeptions, this.move).on("mouseleave", this.elementExeptions, this.leave),
    jQuery(document).on("keyup", this.hide.bind(this))
}
,
Modal.prototype.move = function() {
    jQuery("body").addClass("js-downmodal-hovered")
}
,
Modal.prototype.leave = function() {
    jQuery("body").removeClass("js-downmodal-hovered")
}
,
Modal.prototype.show = function() {
    this.modal.addClass("active"),
    this.appendShadow(),
    jQuery("body").css({
        overflow: "hidden"
    }),
    this.wrapper.addClass("wrapper_modal_active"),
    this.setWindowPosition(),
    this.onShown && this.onShown()
}
,
Modal.prototype.hide = function(o) {
    jQuery("body").hasClass("js-downmodal-hovered") && !jQuery(o.target).hasClass("js-modal-close") || (this.modal.removeClass("active"),
    this.removeShadow(),
    jQuery("body").css({
        overflow: "auto"
    }),
    this.wrapper.removeClass("wrapper_modal_active"),
    this.onHidden && this.onHidden())
}
,
Modal.prototype.appendShadow = function() {
    jQuery("body").prepend(this.shadow),
    this.shadow.animate({
        opacity: .12
    })
}
,
Modal.prototype.removeShadow = function() {
    this.shadow.animate({
        opacity: 0
    }, function() {
        this.shadow.remove()
    }
    .bind(this))
}
,
Modal.prototype.on = function(o, e) {
    switch (o) {
    case "shown":
        this.onShown = e;
        break;
    case "hidden":
        this.onHidden = e
    }
    return this
}
;

var ModalYoutube = function(t, o) {
    Modal.apply(this, arguments)
};
ModalYoutube.prototype = Object.create(Modal.prototype),
ModalYoutube.prototype.constructor = ModalYoutube;
var modal;
jQuery(function() {
    var modalStr=`<div class="wrapper wrapper_modal">
    <div
      id="video-1"
      class="modal modal_default modal_video js-modal active"
      style="top: 255.5px"
    >
      <div class="modal__close js-modal-close"></div>
      <div class="video"><div id="video-1-tv" class="video__tv"></div></div>
    </div>
    </div>`;

    $(modalStr)
    .appendTo($('body'));


    jQuery("[data-trigger=modal]").each(function() {
        modal = new ModalYoutube(jQuery(this).data("target"),["#" + jQuery(this).attr("id")]),
        jQuery(this).on("click", modal.show.bind(modal));
        var t = new YoutubePlayer(jQuery(jQuery(this).data("target")).find(".video__tv").attr("id"),{
            videoId: $(this).data("youtube-id"),
            suggestedQuality: "default"
        },{},!1,!1,!0);
        modal.on("hidden", function() {
            void 0 !== t.tv.getPlayerState && t.tv.pauseVideo()
        }
        .bind(this)),
        modal.on("shown", function() {
            void 0 !== t.tv.getPlayerState && t.tv.playVideo()
        }
        .bind(this))
    })
});
