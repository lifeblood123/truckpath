var Modal=function(o,e){var t=[".js-modal-close",".js-modal-shadow"];this.modal=jQuery(o),this.shadow=jQuery('<div class="shadow shadow_fullscreen js-modal-shadow"></div>'),this.closes=t.join(","),e=e||!1,this.elementExeptions=[".js-modal"],e&&(this.elementExeptions=this.elementExeptions.concat(e),this.elementExeptions=this.elementExeptions.join(",")),this.setListeners(),this.wrapper=jQuery(o).parent(),this.setWindowPosition(),jQuery(window).on("resize",this.setWindowPosition.bind(this))};Modal.prototype.setWindowPosition=function(){var o=jQuery(window).height(),e=this.modal.innerHeight(),t=(o-e)/2;return e>o-28&&(t=28),this.modal.css({top:t}),this},Modal.prototype.setListeners=function(){jQuery(document).on("click",this.hide.bind(this)),jQuery(document).on("mouseenter",this.elementExeptions,this.move).on("mouseleave",this.elementExeptions,this.leave),jQuery(document).on("keyup",this.hide.bind(this))},Modal.prototype.move=function(){jQuery("body").addClass("js-downmodal-hovered")},Modal.prototype.leave=function(){jQuery("body").removeClass("js-downmodal-hovered")},Modal.prototype.show=function(){this.modal.addClass("active"),this.appendShadow(),jQuery("body").css({overflow:"hidden"}),this.wrapper.addClass("wrapper_modal_active"),this.setWindowPosition(),this.onShown&&this.onShown()},Modal.prototype.hide=function(o){jQuery("body").hasClass("js-downmodal-hovered")&&!jQuery(o.target).hasClass("js-modal-close")||(this.modal.removeClass("active"),this.removeShadow(),jQuery("body").css({overflow:"auto"}),this.wrapper.removeClass("wrapper_modal_active"),this.onHidden&&this.onHidden())},Modal.prototype.appendShadow=function(){jQuery("body").prepend(this.shadow),this.shadow.animate({opacity:.12})},Modal.prototype.removeShadow=function(){this.shadow.animate({opacity:0},function(){this.shadow.remove()}.bind(this))},Modal.prototype.on=function(o,e){switch(o){case"shown":this.onShown=e;break;case"hidden":this.onHidden=e}return this};