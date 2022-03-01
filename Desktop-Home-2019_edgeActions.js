/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
             var mouse = {'x': 0, 'y': 0};
             
             homex = 0;
             homey = 0;
         	forcex = 8;
         	forcey = 8;
             magnet = 500;
         
         
             $(document).bind('mousemove', function(e) {
                 mouse = {'x': e.pageX, 'y': e.pageY};
             });
         
         
         $('.box').each(function(index, el){
         $(el).data( "homex", parseInt($(el).position().left));
         $(el).data( "homey", parseInt($(el).position().top));
         });
         
         $('.box').css('position','absolute');
             setInterval(function () {
                 $('.box').each(function(index, el){
                     el = $(el);
                     position = el.position();
                     x0 = el.offset().left;
                     y0 = el.offset().top;
                     x1 = mouse.x;
                     y1 = mouse.y;
                     distancex = x1-x0;
                     distancey = y1-y0;
         
                     distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
         
                     /*
                     magnet = 2600 - distance*20;
                     if(distance>130) {
                        magnet=0; 
                     }
                     */
         
                     powerx = x0 - (distancex / distance) * magnet / distance;
                     powery = y0 - (distancey / distance) * magnet / distance;
         
                     forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
                     forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;
         
         
                     el.css('left', powerx + forcex);
                     el.css('top',  powery + forcey);
                     //el.text(parseInt( distance));
                 });
             }, 15);
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
          position:   "absolute",
          top:        "0px",
          height:     "1300%",
          visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop != lastScrollTop) {
           lastScrollTop = scrollTop;
           var maxScroll = $(document).height()-$(window).height();
           var scrollPos = scrollTop / maxScroll;
           // scrollPos is 0..1
           sym.stop( scrollPos * sym.getDuration() );
          }
          requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_UIUX-ani}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("UiUx/uiux_selection.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ICON-ani}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Icons/SVG-anim-desktop.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_animte-apps-section}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Apps/Apps_selection.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_motion-animated-1}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("motion/motion.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ID-animted2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("ID/ID_selection.html", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'h'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2Copy}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // insert code to be run when the mouse enters an element
         // insert code to be run when an element gains focus
             var mouse = {'x': 0, 'y': 0};
         
             homex = 0;
             homey = 0;
         	forcex = 9;
         	forcey = 9;
             magnet = 200;
         
         
             $(document).bind('mousemove', function(e) {
                 mouse = {'x': e.pageX, 'y': e.pageY};
             });
         
         
         $('.cc').each(function(index, el){
         $(el).data( "homex", parseInt($(el).position().left));
         $(el).data( "homey", parseInt($(el).position().top));
         });
         
         $('.cc').css('position','absolute');
             setInterval(function () {
                 $('.cc').each(function(index, el){
                     el = $(el);
                     position = el.position();
                     x0 = el.offset().left;
                     y0 = el.offset().top;
                     x1 = mouse.x;
                     y1 = mouse.y;
                     distancex = x1-x0;
                     distancey = y1-y0;
         
                     distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
         
                     /*
                     magnet = 2600 - distance*20;
                     if(distance>130) {
                        magnet=0; 
                     }
                     */
         
                     powerx = x0 - (distancex / distance) * magnet / distance;
                     powery = y0 - (distancey / distance) * magnet / distance;
         
                     forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
                     forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;
         
         
                     el.css('left', powerx + forcex);
                     el.css('top',  powery + forcey);
                     el.text(parseInt( distance));
                 });
             }, 15);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2Copy4}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // insert code to be run when the mouse enters an element
         // insert code to be run when an element gains focus
             var mouse = {'x': 0, 'y': 0};
         
             homex = 0;
             homey = 0;
         	forcex = 9;
         	forcey = 9;
             magnet = 200;
         
         
             $(document).bind('mousemove', function(e) {
                 mouse = {'x': e.pageX, 'y': e.pageY};
             });
         
         
         $('.cc').each(function(index, el){
         $(el).data( "homex", parseInt($(el).position().left));
         $(el).data( "homey", parseInt($(el).position().top));
         });
         
         $('.cc').css('position','absolute');
             setInterval(function () {
                 $('.cc').each(function(index, el){
                     el = $(el);
                     position = el.position();
                     x0 = el.offset().left;
                     y0 = el.offset().top;
                     x1 = mouse.x;
                     y1 = mouse.y;
                     distancex = x1-x0;
                     distancey = y1-y0;
         
                     distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
         
                     /*
                     magnet = 2600 - distance*20;
                     if(distance>130) {
                        magnet=0; 
                     }
                     */
         
                     powerx = x0 - (distancex / distance) * magnet / distance;
                     powery = y0 - (distancey / distance) * magnet / distance;
         
                     forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
                     forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;
         
         
                     el.css('left', powerx + forcex);
                     el.css('top',  powery + forcey);
                     el.text(parseInt( distance));
                 });
             }, 15);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2Copy3}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // insert code to be run when an element gains focus
             var mouse = {'x': 0, 'y': 0};
         
             homex = 0;
             homey = 0;
         	forcex = 9;
         	forcey = 9;
             magnet = 200;
         
         
             $(document).bind('mousemove', function(e) {
                 mouse = {'x': e.pageX, 'y': e.pageY};
             });
         
         
         $('.cc').each(function(index, el){
         $(el).data( "homex", parseInt($(el).position().left));
         $(el).data( "homey", parseInt($(el).position().top));
         });
         
         $('.cc').css('position','absolute');
             setInterval(function () {
                 $('.cc').each(function(index, el){
                     el = $(el);
                     position = el.position();
                     x0 = el.offset().left;
                     y0 = el.offset().top;
                     x1 = mouse.x;
                     y1 = mouse.y;
                     distancex = x1-x0;
                     distancey = y1-y0;
         
                     distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
         
                     /*
                     magnet = 2600 - distance*20;
                     if(distance>130) {
                        magnet=0; 
                     }
                     */
         
                     powerx = x0 - (distancex / distance) * magnet / distance;
                     powery = y0 - (distancey / distance) * magnet / distance;
         
                     forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
                     forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;
         
         
                     el.css('left', powerx + forcex);
                     el.css('top',  powery + forcey);
                     el.text(parseInt( distance));
                 });
             }, 15);
         

      });
      //Edge binding end

   })("h");
   //Edge symbol end:'h'

})(jQuery, AdobeEdge, "Portfolio_RajRitesh");