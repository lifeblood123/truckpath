var trimSlashes=function(e){return"/"===e?e:e.replace(/^\/|\/$/g,"")},hasAnyPattern=function(e){return-1!==e.indexOf("*")},startsWith=function(e,t){if(hasAnyPattern(e)){return new RegExp("^"+e.replace("*","")).test(t)}return(e=trimSlashes(e.replace("*","")))===t},sysGetCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},sysSetCookie=function(e,t,n){n=n||{},n.path=n.path||"/";var r=n.expires||31536e3;if("number"==typeof r&&r){var o=new Date;o.setTime(o.getTime()+1e3*r),r=n.expires=o}r&&r.toUTCString&&(n.expires=r.toUTCString()),t=encodeURIComponent(t);var i=e+"="+t;for(var a in n){i+="; "+a;var s=n[a];!0!==s&&(i+="="+s)}document.cookie=i};