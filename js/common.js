function show(){$(sectionID).removeClass("screen"),adress=$(this).attr("id"),$(sectionID).css("background-color","rgba(0,0,0,0.2)"),$(".content"+adress).css("background","#1B1B1C"),$("html, body").animate({scrollTop:$(sectionID).offset().top},400),$(sectionID).animate({height:wHeight},400,function(){$(".content"+adress).css("display","flex"),$(".firstScreen").css("display","none"),$(".screen").css("display","none"),$(".downButton").css("display","block"),function(t){t.fn.animated=function(e){t(this).each(function(){var o=t(this);o.css("opacity","0").addClass("animated").waypoint(function(i){t(sectionID).height()==wHeight?"down"===i&&o.addClass(e).css("opacity","1"):o.removeClass(e).css("opacity","0")},{offset:"100%"})})}}(jQuery),$("html, body").scrollTop(0),$(".left").animated("fadeInLeft"),$(".right").animated("fadeInRight"),$(".person:nth-child(even)").animated("fadeInLeft"),$(".person:nth-child(odd)").animated("fadeInRight"),$(".workExapmle h2").animated("fadeInUp"),$(".information p").animated("fadeInUp"),$(".flip-container").animated("fadeInUp")})}function hide(t){$(".close").css("display","none"),$(sectionID).addClass("screen"),$("html, body").animate({scrollTop:$(sectionID).offset().top},t,function(){$(".firstScreen").css("display","flex"),$(".screen").css("display","flex"),$(".content").css("display","none"),$("html, body").scrollTop($(sectionID).offset().top),setTimeout(function(){$(sectionID).animate({height:.5*wHeight},300),$("html, body").animate({scrollTop:$(sectionID).offset().top-wHeight/4},300),$(sectionID).css("background-color","rgba(0,0,0,0.6)"),$("#navHeader").css("display","none"),$(".left").removeClass("animated").removeClass("fadeInLeft").css("opacity","0"),$(".right").removeClass("animated").removeClass("fadeInRight").css("opacity","0"),$(".person:nth-child(even)").removeClass("animated").removeClass("fadeInLeft").css("opacity","0"),$(".person:nth-child(odd)").removeClass("animated").removeClass("fadeInRight").css("opacity","0"),$(".information p").removeClass("animated").removeClass("fadeInUp").css("opacity","0"),$(".flip-container").removeClass("animated").removeClass("fadeInUp").css("opacity","0"),$(".workExapmle h2").removeClass("animated").removeClass("fadeInUp").css("opacity","0"),$(".downButton").css("display","none")},110)})}!function(t,e){var o,i=t.jQuery||t.Cowboy||(t.Cowboy={});i.throttle=o=function(t,o,n,r){function s(){function i(){l=+new Date,n.apply(s,h)}var s=this,c=+new Date-l,h=arguments;r&&!a&&i(),a&&clearTimeout(a),r===e&&c>t?i():!0!==o&&(a=setTimeout(r?function(){a=e}:i,r===e?t-c:t))}var a,l=0;return"boolean"!=typeof o&&(r=n,n=o,o=e),i.guid&&(s.guid=n.guid=n.guid||i.guid++),s},i.debounce=function(t,i,n){return n===e?o(t,i,!1):o(t,n,!1!==i)}}(this),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t:t(jQuery)}(function(t){function e(e){var s=e||window.event,a=l.call(arguments,1),c=0,d=0,u=0,f=0,p=0,w=0;if(e=t.event.fix(s),e.type="mousewheel","detail"in s&&(u=-1*s.detail),"wheelDelta"in s&&(u=s.wheelDelta),"wheelDeltaY"in s&&(u=s.wheelDeltaY),"wheelDeltaX"in s&&(d=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(d=-1*u,u=0),c=0===u?d:u,"deltaY"in s&&(u=-1*s.deltaY,c=u),"deltaX"in s&&(d=s.deltaX,0===u&&(c=-1*d)),0!==u||0!==d){if(1===s.deltaMode){var m=t.data(this,"mousewheel-line-height");c*=m,u*=m,d*=m}else if(2===s.deltaMode){var g=t.data(this,"mousewheel-page-height");c*=g,u*=g,d*=g}if(f=Math.max(Math.abs(u),Math.abs(d)),(!r||r>f)&&(r=f,i(s,f)&&(r/=40)),i(s,f)&&(c/=40,d/=40,u/=40),c=Math[c>=1?"floor":"ceil"](c/r),d=Math[d>=1?"floor":"ceil"](d/r),u=Math[u>=1?"floor":"ceil"](u/r),h.settings.normalizeOffset&&this.getBoundingClientRect){var y=this.getBoundingClientRect();p=e.clientX-y.left,w=e.clientY-y.top}return e.deltaX=d,e.deltaY=u,e.deltaFactor=r,e.offsetX=p,e.offsetY=w,e.deltaMode=0,a.unshift(e,c,d,u),n&&clearTimeout(n),n=setTimeout(o,200),(t.event.dispatch||t.event.handle).apply(this,a)}}function o(){r=null}function i(t,e){return h.settings.adjustOldDeltas&&"mousewheel"===t.type&&e%120==0}var n,r,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],l=Array.prototype.slice;if(t.event.fixHooks)for(var c=s.length;c;)t.event.fixHooks[s[--c]]=t.event.mouseHooks;var h=t.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var o=a.length;o;)this.addEventListener(a[--o],e,!1);else this.onmousewheel=e;t.data(this,"mousewheel-line-height",h.getLineHeight(this)),t.data(this,"mousewheel-page-height",h.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var o=a.length;o;)this.removeEventListener(a[--o],e,!1);else this.onmousewheel=null;t.removeData(this,"mousewheel-line-height"),t.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var o=t(e),i=o["offsetParent"in t.fn?"offsetParent":"parent"]();return i.length||(i=t("body")),parseInt(i.css("fontSize"),10)||parseInt(o.css("fontSize"),10)||16},getPageHeight:function(e){return t(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})}),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";function e(e){return!e.nodeName||-1!==t.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])}function o(e){return t.isFunction(e)||t.isPlainObject(e)?e:{top:e,left:e}}var i=t.scrollTo=function(e,o,i){return t(window).scrollTo(e,o,i)};return i.defaults={axis:"xy",duration:0,limit:!0},t.fn.scrollTo=function(n,r,s){"object"==typeof r&&(s=r,r=0),"function"==typeof s&&(s={onAfter:s}),"max"===n&&(n=9e9),s=t.extend({},i.defaults,s),r=r||s.duration;var a=s.queue&&1<s.axis.length;return a&&(r/=2),s.offset=o(s.offset),s.over=o(s.over),this.each(function(){function l(e){var o=t.extend({},s,{queue:!0,duration:r,complete:e&&function(){e.call(d,f,s)}});u.animate(p,o)}if(null!==n){var c,h=e(this),d=h?this.contentWindow||window:this,u=t(d),f=n,p={};switch(typeof f){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)){f=o(f);break}f=h?t(f):t(f,d);case"object":if(0===f.length)return;(f.is||f.style)&&(c=(f=t(f)).offset())}var w=t.isFunction(s.offset)&&s.offset(d,f)||s.offset;t.each(s.axis.split(""),function(t,e){var o="x"===e?"Left":"Top",n=o.toLowerCase(),r="scroll"+o,m=u[r](),g=i.max(d,e);c?(p[r]=c[n]+(h?0:m-u.offset()[n]),s.margin&&(p[r]-=parseInt(f.css("margin"+o),10)||0,p[r]-=parseInt(f.css("border"+o+"Width"),10)||0),p[r]+=w[n]||0,s.over[n]&&(p[r]+=f["x"===e?"width":"height"]()*s.over[n])):(o=f[n],p[r]=o.slice&&"%"===o.slice(-1)?parseFloat(o)/100*g:o),s.limit&&/^\d+$/.test(p[r])&&(p[r]=0>=p[r]?0:Math.min(p[r],g)),!t&&1<s.axis.length&&(m===p[r]?p={}:a&&(l(s.onAfterFirst),p={}))}),l(s.onAfter)}})},i.max=function(o,i){var n="scroll"+(r="x"===i?"Width":"Height");if(!e(o))return o[n]-t(o)[r.toLowerCase()]();var r="client"+r,s=(a=o.ownerDocument||o.document).documentElement,a=a.body;return Math.max(s[n],a[n])-Math.min(s[r],a[r])},t.Tween.propHooks.scrollLeft=t.Tween.propHooks.scrollTop={get:function(e){return t(e.elem)[e.prop]()},set:function(e){var o=this.get(e);if(e.options.interrupt&&e._last&&e._last!==o)return t(e.elem).stop();var i=Math.round(e.now);o!==i&&(t(e.elem)[e.prop](i),e._last=this.get(e))}},i}),function(){"use strict";function t(i){if(!i)throw new Error("No options passed to Waypoint constructor");if(!i.element)throw new Error("No element option passed to Waypoint constructor");if(!i.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,i),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=i.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),o[this.key]=this,e+=1}var e=0,o={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete o[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var i in o)e.push(o[i]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+o,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,i[t.waypointContextKey]=this,o+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var o=0,i={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete i[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var o in e){var i=e[o],n=i.newScroll>i.oldScroll?i.forward:i.backward;for(var r in this.waypoints[o]){var s=this.waypoints[o][r],a=i.oldScroll<s.triggerPoint,l=i.newScroll>=s.triggerPoint,c=a&&l,h=!a&&!l;(c||h)&&(s.queueTrigger(n),t[s.group.id]=s.group)}}for(var d in t)t[d].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var o in this.waypoints[e])t.push(this.waypoints[e][o]);for(var i=0,n=t.length;n>i;i++)t[i].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,o=e?void 0:this.adapter.offset(),i={};this.handleScroll(),t={horizontal:{contextOffset:e?0:o.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:o.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,c,h,d,u,f=this.waypoints[r][a],p=f.options.offset,w=f.triggerPoint,m=0,g=null==w;f.element!==f.element.window&&(m=f.adapter.offset()[s.offsetProp]),"function"==typeof p?p=p.apply(f):"string"==typeof p&&(p=parseFloat(p),f.options.offset.indexOf("%")>-1&&(p=Math.ceil(s.contextDimension*p/100))),l=s.contextScroll-s.contextOffset,f.triggerPoint=m+l-p,c=w<s.oldScroll,h=f.triggerPoint>=s.oldScroll,d=c&&h,u=!c&&!h,!g&&d?(f.queueTrigger(s.backward),i[f.group.id]=f.group):!g&&u?(f.queueTrigger(s.forward),i[f.group.id]=f.group):g&&s.oldScroll>=f.triggerPoint&&(f.queueTrigger(s.forward),i[f.group.id]=f.group)}}return n.requestAnimationFrame(function(){for(var t in i)i[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in i)i[t].refresh()},e.findByElement=function(t){return i[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function o(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),i[this.axis][this.name]=this}var i={vertical:{},horizontal:{}},n=window.Waypoint;o.prototype.add=function(t){this.waypoints.push(t)},o.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},o.prototype.flushTriggers=function(){for(var o in this.triggerQueues){var i=this.triggerQueues[o],n="up"===o||"left"===o;i.sort(n?e:t);for(var r=0,s=i.length;s>r;r+=1){var a=i[r];(a.options.continuous||r===i.length-1)&&a.trigger([o])}}this.clearTriggerQueues()},o.prototype.next=function(e){this.waypoints.sort(t);var o=n.Adapter.inArray(e,this.waypoints);return o===this.waypoints.length-1?null:this.waypoints[o+1]},o.prototype.previous=function(e){this.waypoints.sort(t);var o=n.Adapter.inArray(e,this.waypoints);return o?this.waypoints[o-1]:null},o.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},o.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},o.prototype.first=function(){return this.waypoints[0]},o.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},o.findOrCreate=function(t){return i[t.axis][t.name]||new o(t)},n.Group=o}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,o=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,o){t.prototype[o]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[o].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(o,i){t[i]=e[i]}),o.adapters.push({name:"jquery",Adapter:t}),o.Adapter=t}(),function(){"use strict";function t(t){return function(){var o=[],i=arguments[0];return t.isFunction(arguments[0])&&(i=t.extend({},arguments[1]),i.handler=arguments[0]),this.each(function(){var n=t.extend({},i,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),o.push(new e(n))}),o}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();var wHeight=$(window).height(),wWidth=$(window).width();$(".flip-container").click(function(t){$(this).hasClass("hover")?$(this).removeClass("hover"):$(this).addClass("hover")}),$(document).ready(function(){$("#inputContainer").submit(function(){var t=$(this);return $.ajax({type:"POST",url:"../mail.php",data:t.serialize()}).done(function(){alert("Thank you!"),setTimeout(function(){t.trigger("reset")},1e3)}),!1})}),wWidth>500&&$(".section").hover(function(){$(this).css("background-color","rgba(0,0,0,0.4)")},function(){$(this).height()!=wHeight&&$(this).css("background-color","rgba(0,0,0,0.6)")}),wWidth<500&&$(".section").height(.5*wHeight),$(".headButton").click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:$("#secondScreen").offset().top},speed1)});var adress=0,sectionID=0;$(window).scroll(function(){var t=$(window).scrollTop();$(".section"+adress).height()!=wHeight||$(sectionID).hasClass("screen")||(t>wHeight?$(".close").fadeIn("0"):$(".close").fadeOut("0"))}),$(".close").click(function(){hide(700)});var id=0;$(".section").click($.debounce(440,function(){$(this).height()==.5*wHeight?(sectionID=this,id="#"+$(this).attr("id"),show()):(sectionID=this,hide(300))}));var heightScreen=wHeight;$("a.footerSection").click(function(){var t=$(this).attr("href"),e="#thirdScreen"==id?2e3:800,o=2e3==e?2400:1200;t==id?$("html, body").animate({scrollTop:$(id).offset().top},e):$(sectionID).height()==heightScreen?(hide(e),$(".close").css("display","none"),setTimeout(function(){sectionID=t,id=t,$("html, body").animate({scrollTop:$(id).offset().top-heightScreen/4},500),setTimeout(function(){show()},1200)},o)):(sectionID=t,id=t,$("html, body").animate({scrollTop:$(id).offset().top},speed1),setTimeout(function(){showSection()},speed6))}),wWidth>500&&($(".downButton").click(function(){$("html, body").scrollTo(".content"+adress,700)}),$(".workExapmle").click($.debounce(100,function(){$("html, body").animate({scrollTop:$(this).next(".workExapmle").offset().top},800)})));