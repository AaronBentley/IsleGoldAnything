!function e(a,r,t){function n(i,o){if(!r[i]){if(!a[i]){var c="function"==typeof require&&require;if(!o&&c)return c(i,!0);if(s)return s(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var f=r[i]={exports:{}};a[i][0].call(f.exports,function(e){var r=a[i][1][e];return n(r||e)},f,f.exports,e,a,r,t)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<t.length;i++)n(t[i]);return n}({1:[function(e,a,r){"use strict";$(document).ready(function(){$("html").toggleClass("no-js js"),$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length)return $("html, body").animate({scrollTop:e.offset().top-48},1e3,"easeInOutExpo"),!1}}),$(".js-scroll-trigger").click(function(){$(".navbar-collapse").collapse("hide")}),$("body").scrollspy({target:"#mainNav",offset:48}),$(window).scroll(function(){$("#mainNav").offset().top>100?$("#mainNav").addClass("navbar-shrink"):$("#mainNav").removeClass("navbar-shrink")}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),{instaToken:"9700759.a732fca.e265c272ae60468d866b57716c76d167",instaID:"a732fcac5ce041e087136c1053ef9459",init:function(){$.fn.spectragram.accessData={accessToken:this.instaToken,clientID:this.instaID},$(".spectragram").spectragram("getUserFeed",{max:12,size:"big",query:"iowgold",wrapEachWith:'<div class="col-sm-6 col-md-4 col-lg-3 spectragram-item"></div>'})}}.init()})},{}]},{},[1]);
//# sourceMappingURL=app.js.map
