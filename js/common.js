(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});

var wHeight = $(window).height();
var wWidth = $(window).width();
if(wWidth >500 ) {
var speed1 = 500,
    speed2 = 600,
    speed3 = 520,
    speed4 = 400,
    speed5 = 300,
    speed6 = 650, 
    speed7 = 800;
}
else {
    speed1 = 900,
    speed2 = 1300,
    speed3 = 1250,
    speed4 = 1100,
    speed5 = 700,
    speed6 = 1800, 
    speed7 = 800;
}
$(".section").hover(function() {
    $(this).css("background-color", "rgba(0,0,0,0.4)");
}, function() {
    if ($(this).height() != wHeight) {
        $(this).css("background-color", "rgba(0,0,0,0.6)");
    }
});

$(".headButton").click(function(ev) {
    ev.preventDefault();
    $("html, body").animate({scrollTop: $("#secondScreen").offset().top}, speed1);
});
var adress = 0;
var sectionID = 0;
function showSection() {
            $(sectionID).removeClass("screen");
            $("html, body").animate({ scrollTop: $(sectionID).offset().top }, speed1);
            if (wWidth > 500) {
            $(sectionID).animate({height: wHeight}, speed1); }
            else {
                            $(sectionID).animate({height: "700px"}, speed1); }

            
            $(sectionID).css("background-color", "rgba(0,0,0,0.4)");
            //$("#navHeader").css("display", "block"); 
            
            adress = $(this).attr('id');
            $(".content"+adress).css('background',  '#1B1B1C');
             setTimeout(function() {
            if(id == "#thirdScreen") {
          $(".downButton").css("display", "block"); }
            }, speed2);
            setTimeout(function() {
                $(".navUl").height(200);
                 $(".content"+adress).css('display', 'flex');
            },speed2);
            setTimeout(function() {
                $(".firstScreen").css("display", "none"); 
                $(".screen").css("display", "none"); 
                if (navigator.userAgent.search("Firefox") >= 0)  {             
                    $('html, body').animate({ scrollTop: $(sectionID).offset().top }, 0); 
                }
            }, speed3);
}

function hideSection() {
                $(sectionID).addClass('screen');
                $("html, body").animate({ scrollTop:$(sectionID).offset().top}, speed4, function() {
                $(".firstScreen").css("display", "flex");
                $(".screen").css("display", "flex");
                $('.content').css("display", "none");
                $(this).animate({ scrollTop: $(sectionID).offset().top }, 0);
                 if (wWidth > 500) {
             $(sectionID).animate({height: wHeight*0.5}, speed5);}
            else {
                            $(sectionID).animate({height: "200px"}, speed5); }
                if (wWidth > 500) {
                $(this).animate({ scrollTop: $(sectionID).offset().top - wHeight/4}, speed5); }
                else {  }
                $(sectionID).css("background-color", "rgba(0,0,0,0.6)");
                $("#navHeader").css("display", "none");
                 $(".downButton").css("display", "none"); 
                });

}
var id = 0;

$(".section").click($.debounce(250, function() {
         if (wWidth > 500) {
             if ($(this).height() == wHeight*0.5) { 
            sectionID = this;
            id = '#' + $(this).attr('id');
            showSection();
            
        } else {
            sectionID = this;
            hideSection(); 
          } }
            else {  if ($(this).height() == 200)  { 
            sectionID = this;
            id = '#' + $(this).attr('id');
            showSection();
            
        } else {
            sectionID = this;
            hideSection(); 
          }
                         }
      
}));
if (wWidth > 500){ 
var heightScreen = wHeight;
} else {
    var heightScreen = 700;

}
$("a.footerSection").click(function() {
    var linkID = $(this).attr("href");
    if (linkID == id) {
        $('html, body').animate({ scrollTop: $(id).offset().top  },speed1); 
    } else {
        if ($(sectionID).height() == heightScreen) {
            hideSection();
            setTimeout(function() {
            sectionID = linkID;
            id = linkID;
            if(wWidth > 500) {
            $('html, body').animate({ scrollTop: $(id).offset().top - heightScreen/4 }, speed1); }
            else {}
            setTimeout(function() { showSection(); }, speed6);
            }, speed2);
        } else {
            sectionID = linkID;
            id = linkID;
                      if(wWidth > 500) {
            $('html, body').animate({ scrollTop: $(id).offset().top - heightScreen/4 }, speed1); }
            else {$('html, body').animate({ scrollTop: $(id).offset().top  }, speed1);}

            setTimeout(function() { showSection(); }, speed6);
          }       
      }
});

$("a.navSection").click(function() {
   var linkID = $(this).attr("href");
    if (linkID == id) {
        if (($(id).offset().top - $(window).scrollTop()) != 0) {
            $('html, body').animate({ scrollTop: $(id).offset().top  },speed1); 
        } 
    }
    else  {
        hideSection();
        setTimeout(function() {
        sectionID = linkID;
        id = linkID;
        $('html, body').animate({ scrollTop: $(id).offset().top - wHeight/4 }, speed2); 
        setTimeout(function() { showSection(); }, speed7);
        }, speed6);
    } 
});

/*
$(".workExapmle").click($.debounce(100,(function() {
    $('html').scrollTo($(this).next('.workExapmle'), 300);
    
})));
$("#thirdScreen").bind('mousewheel', function(e) {
       if(e.originalEvent.wheelDelta / 100 < 0 && $("#thirdScreen").height() == wHeight) {
    $('html').scrollTo(('.workExapmle'), 300);
    $('.navUl').animate({opacity: 0}, 300);
    }
});
$(".workExapmle").bind('mousewheel',function(e) {
    
     if(e.originalEvent.wheelDelta / 123000 > 0) {
     
    
    if ($(this).attr('id') == 'workExapmle1')
    {  
            $('html').scrollTo($(".section"), 300); 

    } 
}
    else { $('html').scrollTo($(this).next('.workExapmle'), 300);
if ($(this).attr('id') == 'workExapmle6')
    {  
            $('html').scrollTo($("footer"), 300); 

    } }
    }); 
    */


$(".downButton").click(function() {
    $('html, body').scrollTo('#workExapmle1', 700);
  
})

$(".workExapmle").click($.debounce(100,(function() {
    
    $('html, body').animate({ scrollTop: $(this).next('.workExapmle').offset().top  },800);
})));


