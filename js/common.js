(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{ top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();


var wHeight = $(window).height();
var wWidth = $(window).width();
$('.flip-container').click( function(e) {
    if ($(this).hasClass('hover')) {
        $(this).removeClass('hover');
    } else {
        $(this).addClass('hover');
    }
});
$(document).ready(function() {
    
});

/*
$('.flip-container').on('touchstart', function(e) {
    $('.flip-container').addClass('hover');
    
}).on('touchmove', function(e) {
    console.log('mousemove: remove highlight');
    $('.flip-container').removeClass('hover');
    
}).mouseenter( function(e) {
    $('.flip-container').addClass('hover');

}).mouseleave( function(e) {
    $('.flip-container').removeClass('hover');

}).click( function(e) {
    $('.flip-container').removeClass('hover');
 
});*/
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
    var speed1 = 900,
        speed2 = 1400,
        speed3 = 1250,
        speed4 = 1100,
        speed5 = 700,
        speed6 = 1600, 
        speed7 = 800;
}

if (wWidth > 500) {
    $(".section").hover(function() {
        $(this).css("background-color", "rgba(0,0,0,0.4)");
    }, function() {
        if ($(this).height() != wHeight) {
            $(this).css("background-color", "rgba(0,0,0,0.6)");
        }
    });
}

if (wWidth < 500) {
    $(".section").height(wHeight*0.5);
}

$(".headButton").click(function(ev) {
    ev.preventDefault();
    $("html, body").animate({scrollTop: $("#secondScreen").offset().top }, speed1);
});
var adress = 0;
var sectionID = 0;

function show() {
    $(sectionID).removeClass('screen');
    adress = $(this).attr('id');
    $(sectionID).css("background-color", "rgba(0,0,0,0.2)");
    $(".content"+adress).css('background',  '#1B1B1C');
    $('html, body').animate({ scrollTop: $(sectionID).offset().top  }, 400);
    $(sectionID).animate({height: wHeight}, 400, function() {
            $(".content"+adress).css('display', 'flex');
            $(".firstScreen").css("display", "none"); 
            $(".screen").css("display", "none"); 
             $(".downButton").css("display", "block");
            (function($) {
    $.fn.animated = function(inEffect) {
       
            $(this).each(function() {
            var ths = $(this);
            ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if($(sectionID).height() == wHeight) {
                if (dir === "down") {
                    ths.addClass(inEffect).css("opacity", "1");
                }; }
                else { ths.removeClass(inEffect).css('opacity', '0');}
            }, {
                offset: "100%"
            });

        });
    };

})(jQuery);
            $('html, body').scrollTop(0);
            $('.left').animated('fadeInLeft');
            $('.right').animated('fadeInRight');
            $('.person:nth-child(even)').animated('fadeInLeft');
            $('.person:nth-child(odd)').animated('fadeInRight');
            $('.workExapmle h2').animated('fadeInUp');
            $('.information p').animated('fadeInUp');
            $('.flip-container').animated('fadeInUp');

        });
}

function hide(speedTopScroll) {$('.close').css('display', 'none');
    $(sectionID).addClass('screen');
    $('html, body').animate({ scrollTop: $(sectionID).offset().top }, speedTopScroll, function() {
        $('.firstScreen').css('display', 'flex');
        $('.screen').css('display', 'flex');
       $('.content').css('display', 'none');
        $('html, body').scrollTop($(sectionID).offset().top);
        
        setTimeout(function() {
                
            $(sectionID).animate({height: wHeight*0.5}, 300);
            $('html, body').animate({ scrollTop: $(sectionID).offset().top - wHeight/4}, 300); 
            $(sectionID).css("background-color", "rgba(0,0,0,0.6)");
            $("#navHeader").css("display", "none");
                       
            $('.left').removeClass('animated').removeClass('fadeInLeft').css('opacity', '0');
           $('.right').removeClass('animated').removeClass('fadeInRight').css('opacity', '0');
             $('.person:nth-child(even)').removeClass('animated').removeClass('fadeInLeft').css('opacity', '0');
             $('.person:nth-child(odd)').removeClass('animated').removeClass('fadeInRight').css('opacity', '0');
             $('.information p').removeClass('animated').removeClass('fadeInUp').css('opacity', '0');
             $('.flip-container').removeClass('animated').removeClass('fadeInUp').css('opacity', '0');
            $('.workExapmle h2').removeClass('animated').removeClass('fadeInUp').css('opacity', '0');
            $(".downButton").css("display", "none"); 

        }, 110);  
    });
}



$(window).scroll(function(){
    var top = $(window).scrollTop();
 
    if($('.section' + adress).height() == wHeight && !($(sectionID).hasClass('screen'))) {
      if (top > wHeight) {

        $('.close').fadeIn('0');
        
    } else {
        $('.close').fadeOut('0');

    }
}
});
    

$('.close').click(function() {
    
    hide(700);

})


function showSection() {
            $(sectionID).removeClass("screen");
            $("html, body").animate({ scrollTop: $(sectionID).offset().top }, speed1);
            if(wWidth >500) {
                $(sectionID).animate({height: wHeight}, speed1); 
            } else {
                $(sectionID).animate({height: wHeight*1.15}, speed1); 
            }
            $(sectionID).css("background-color", "rgba(0,0,0,0.4)");
            //$("#navHeader").css("display", "block"); 
            adress = $(this).attr('id');
            $(".content"+adress).css('background',  '#1B1B1C');
            setTimeout(function() {
                if(id == "#thirdScreen") {
                    $(".downButton").css("display", "block"); 
                }
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
                $("html, body").animate({ scrollTop:$(sectionID).offset().top }, speed4, function() {
                $(".firstScreen").css("display", "flex");
                $(".screen").css("display", "flex");
                $('.content').css("display", "none");
                $(this).animate({ scrollTop: $(sectionID).offset().top }, 0);
                $(sectionID).animate({height: wHeight*0.5}, speed5);
                $(this).animate({ scrollTop: $(sectionID).offset().top - wHeight/4}, speed5); 
                $(sectionID).css("background-color", "rgba(0,0,0,0.6)");
                $("#navHeader").css("display", "none");
                $(".downButton").css("display", "none"); 
                });

}

var id = 0;

$(".section").click($.debounce(440, function() {
         if ($(this).height() == wHeight*0.5) { 
            sectionID = this;
            id = '#' + $(this).attr('id');
            show();
        } else {
            sectionID = this;
            hide(300); 
        }
}));


    var heightScreen = wHeight;


$("a.footerSection").click(function() {
    var linkID = $(this).attr("href");
    var speedTopScroll = ( id == '#thirdScreen') ? 2000 : 800;
    var bool = ( speedTopScroll == 2000 ) ? 2400 : 1200;
    if (linkID == id) {
        $('html, body').animate({ scrollTop: $(id).offset().top }, speedTopScroll); 
    } else {
        if ($(sectionID).height() == heightScreen) {
            hide(speedTopScroll);
            $('.close').css('display', 'none');
            setTimeout(function() {
            sectionID = linkID;
            id = linkID;
            $('html, body').animate({ scrollTop: $(id).offset().top - heightScreen/4 }, 500);
            setTimeout( function() {            show(); }, 1200);
          
            }, bool);
        } else {
            sectionID = linkID;
            id = linkID;
            $('html, body').animate({ scrollTop: $(id).offset().top}, speed1); 
            setTimeout(function() { 
                showSection(); 
            }, speed6);
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

if (wWidth > 500) {
$(".downButton").click(function() {
    $('html, body').scrollTo('.content' + adress, 700);
});

$(".workExapmle").click($.debounce(100,(function() {
    $('html, body').animate({ scrollTop: $(this).next('.workExapmle').offset().top  }, 800);
})));
}

$("#inputContainer").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });