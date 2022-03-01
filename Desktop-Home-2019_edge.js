/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {

   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
        
         {
            id:'BG-UX',
            type:'rect',
            rect:['0%','0%','100%','14.3%','auto','auto'],
            fill:["rgba(55, 104, 144,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'border-uiux',
            type:'rect',
            rect:['3.7%','13.5%','91.6%','62.3%','auto','auto'],
            fill:["rgba(55, 104, 144,1.00)"],
            stroke:[13,"rgba(55, 104, 144,1.00)","solid"]
         },
         {
            id:'border-web',
            type:'rect',
            rect:['102.8%','13.5%','91.6%','62.3%','auto','auto'],
            fill:["rgba(24,211,187,0.00)"],
            stroke:[13,"rgba(255,255,255,1.00)","solid"]
         },
         {
            id:'border-icon',
            type:'rect',
            rect:['102.8%','13.5%','91.6%','62.3%','auto','auto'],
            fill:["rgba(24,211,187,0.00)"],
            stroke:[13,"rgba(255,255,255,1.00)","solid"]
         },
         {
            id:'border-motion',
            type:'rect',
            rect:['104.5%','13.5%','91.6%','62.3%','auto','auto'],
            fill:["rgba(24,211,187,0.00)"],
            stroke:[13,"rgba(255,255,255,1.00)","solid"]
         },
         {
            id:'border-motionCopy',
            type:'rect',
            rect:['104.5%','13.5%','91.6%','62.3%','auto','auto'],
            fill:["rgba(24,211,187,0.00)"],
            stroke:[13,"rgba(255,255,255,1.00)","solid"]
         },
         {
            id:'UIUX-ani',
            type:'image',
            rect:['37.1%','21.9%','60%','45.1%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"UI-UX%20both-for%20home%20page.svg",'0px','0px','100%','100%'],
            userClass:"card"
         },
         {
            id:'WEB-ani2',
            type:'image',
            rect:['34.1%','48.5%','67.4%','35.1%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"WEB-ani2.svg",'0px','0px','100%','100%']
         },
         {
            id:'ICON-ani',
            type:'image',
            rect:['133.4%','49.2%','75%','35.1%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"ICON-ani.svg",'0px','0px','100%','100%']
         },
         {
            id:'border-apps',
            type:'rect',
            rect:['104.5%','13.5%','91.6%','62.3%','auto','auto'],
            fill:["rgba(24,211,187,0.00)"],
            stroke:[13,"rgba(255,255,255,1.00)","solid"]
         },
         {
            id:'animte-apps-section',
            type:'image',
            rect:['85.6%','28%','42.3%','35.1%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"animte-apps-section.svg",'0px','0px']
         },
         {
            id:'motion-animated-1',
            type:'image',
            rect:['0%','18.3%','100%','52.2%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"motion-animated-1.svg",'0px','0px']
         },
         {
            id:'ID-animted2',
            type:'image',
            rect:['108.3%','20.6%','85.8%','44.7%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"ID-animted2.svg",'0px','0px']
         },
         {
            id:'scroll-new',
            type:'image',
            rect:['44.5%','82%','10.9%','12.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",'scroll-new.svg','0px','0px']
         },
         {
            id:'progress_bar',
            type:'rect',
            rect:['0%','94.7%','0%','3px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'core',
            type:'ellipse',
            rect:['-0.7%','94.3%','10px','10px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_border-motionCopy}": [
            ["color", "background-color", 'rgba(24,211,187,0)'],
            ["style", "top", '13.54%'],
            ["style", "left", '104.5%'],
            ["style", "height", '62.34%'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '13px'],
            ["color", "border-color", 'rgba(55, 104, 144,1.00)']
         ],
         "${_border-web}": [
            ["color", "background-color", 'rgba(24,211,187,0.00)'],
            ["style", "top", '13.54%'],
            ["style", "left", '102.81%'],
            ["style", "height", '62.34%'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '13px'],
            ["color", "border-color", 'rgba(55, 104, 144,1.00)']
         ],
         "${_border-uiux}": [
            ["color", "background-color", 'rgba(24,211,187,0.00)'],
            ["style", "top", '13.54%'],
            ["style", "border-width", '13px'],
            ["style", "height", '62.34%'],
            ["color", "border-color", 'rgba(55, 104, 144,1.00)'],
            ["style", "left", '3.26%'],
            ["style", "border-style", 'solid']
         ],
         "${_UIUX-ani}": [
            ["style", "top", '21.87%'],
            ["style", "height", '45.07%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '19.93%'],
            ["style", "width", '60.01%']
         ],
         "${_border-icon}": [
            ["color", "background-color", 'rgba(24,211,187,0.00)'],
            ["color", "border-color", 'rgba(55, 104, 144,1.00)'],
            ["style", "border-width", '13px'],
            ["style", "height", '62.34%'],
            ["style", "border-style", 'solid'],
            ["style", "left", '102.81%'],
            ["style", "top", '13.54%']
         ],
         "${_border-motion}": [
            ["color", "background-color", 'rgba(24,211,187,0)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '13px'],
            ["style", "height", '62.34%'],
            ["color", "border-color", 'rgba(55, 104, 144,1.00)'],
            ["style", "left", '104.5%'],
            ["style", "top", '13.54%']
         ],
         "${_border-apps}": [
            ["color", "background-color", 'rgba(24,211,187,0)'],
            ["style", "top", '13.54%'],
            ["style", "left", '104.5%'],
            ["style", "height", '62.34%'],
            ["color", "border-color", 'rgba(55, 104, 144,1.00)'],
            ["style", "border-width", '13px'],
            ["style", "border-style", 'solid']
         ],
         "${_progress_bar}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '94.69%'],
            ["style", "height", '3px'],
            ["gradient", "background-image", [180,[['rgba(66,219,117,1.00)',0],['rgba(239,255,0,1.00)',100]]]],
            ["style", "left", '0%'],
            ["style", "width", '0%']
         ],
         "${_ICON-ani}": [
            ["style", "top", '26.77%'],
            ["style", "height", '38.3%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '121.18%'],
            ["style", "width", '81.84%']
         ],
         "${_animte-apps-section}": [
            ["style", "top", '17.7%'],
            ["style", "height", '53.61%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '118.9%'],
            ["style", "width", '64.61%']
         ],
         "${_core}": [
            ["style", "height", '10px'],
            ["style", "top", '94.3%'],
            ["style", "left", '0%'],
            ["style", "width", '10px']
         ],
         "${_WEB-ani2}": [
            ["style", "top", '21.3%'],
            ["style", "height", '48.7%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '104.03%'],
            ["style", "width", '91.04%']
         ],
         "${_BG-UX}": [
            ["color", "background-color", 'rgba(24,211,187,0.00)'],
            ["style", "top", '0%'],
            ["style", "height", '100%'],
            ["gradient", "background-image", [239,[['rgba(110,212,189,1.00)',0],['rgba(110,166,212,1.00)',100]]]],
            ["style", "left", '0%'],
            ["style", "opacity", '0']
         ],
         "${_motion-animated-1}": [
            ["style", "top", '18.33%'],
            ["style", "height", '52.15%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '102.6%'],
            ["style", "width", '100%']
         ],
         "${_scroll-new}": [
            ["style", "height", '12.28%'],
            ["style", "top", '81.95%'],
            ["style", "left", '44.51%'],
            ["style", "width", '10.92%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '376px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_ID-animted2}": [
            ["style", "top", '20.21%'],
            ["style", "height", '48.4%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '108.26%'],
            ["style", "width", '92.95%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4754,
         autoPlay: false,
         timeline: [
            { id: "eid167", tween: [ "color", "${_border-motion}", "border-color", 'rgba(55, 104, 144,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55, 104, 144,1.00)'}], position: 0, duration: 0 },
            { id: "eid146", tween: [ "style", "${_ID-animted2}", "top", '20.21%', { fromValue: '20.21%'}], position: 4754, duration: 0 },
            { id: "eid6", tween: [ "gradient", "${_BG-UX}", "background-image", [253,[['rgba(110,165,212,1.00)',0],['rgba(255,168,163,1.00)',100]]], { fromValue: [239,[['rgba(110,212,189,1.00)',0],['rgba(110,166,212,1.00)',100]]]}], position: 0, duration: 2377 },
            { id: "eid7", tween: [ "gradient", "${_BG-UX}", "background-image", [253,[['rgba(255,168,163,1.00)',0],['rgba(163,180,255,1.00)',100]]], { fromValue: [253,[['rgba(110,165,212,1.00)',0],['rgba(255,168,163,1.00)',100]]]}], position: 2377, duration: 2377 },
            { id: "eid93", tween: [ "style", "${_ICON-ani}", "left", '9.03%', { fromValue: '121.18%'}], position: 0, duration: 1000 },
            { id: "eid102", tween: [ "style", "${_ICON-ani}", "left", '-85.3%', { fromValue: '9.03%'}], position: 1500, duration: 750 },
            { id: "eid127", tween: [ "style", "${_ICON-ani}", "width", '81.84%', { fromValue: '81.84%'}], position: 1000, duration: 0 },
            { id: "eid116", tween: [ "style", "${_border-motion}", "left", '3.3%', { fromValue: '104.5%'}], position: 2754, duration: 856 },
            { id: "eid133", tween: [ "style", "${_border-motion}", "left", '-99.7%', { fromValue: '3.3%'}], position: 4004, duration: 750 },
            { id: "eid59", tween: [ "style", "${_border-icon}", "left", '3.26%', { fromValue: '102.81%'}], position: 0, duration: 1000 },
            { id: "eid98", tween: [ "style", "${_border-icon}", "left", '-97.8%', { fromValue: '3.26%'}], position: 1500, duration: 750 },
            { id: "eid100", tween: [ "style", "${_border-apps}", "left", '3.3%', { fromValue: '104.5%'}], position: 1500, duration: 856 },
            { id: "eid118", tween: [ "style", "${_border-apps}", "left", '-97.5%', { fromValue: '3.3%'}], position: 2754, duration: 750 },
            { id: "eid22", tween: [ "style", "${_BG-UX}", "height", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
            { id: "eid148", tween: [ "style", "${_animte-apps-section}", "height", '47.46%', { fromValue: '53.61%'}], position: 1504, duration: 856 },
            { id: "eid152", tween: [ "style", "${_animte-apps-section}", "top", '20.4%', { fromValue: '17.7%'}], position: 1398, duration: 106 },
            { id: "eid147", tween: [ "style", "${_animte-apps-section}", "top", '20%', { fromValue: '20.4%'}], position: 1504, duration: 856 },
            { id: "eid165", tween: [ "color", "${_border-motionCopy}", "border-color", 'rgba(55, 104, 144,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55, 104, 144,1.00)'}], position: 0, duration: 0 },
            { id: "eid130", tween: [ "style", "${_border-motionCopy}", "left", '3.3%', { fromValue: '104.5%'}], position: 4004, duration: 750 },
            { id: "eid164", tween: [ "style", "${_BG-UX}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_animte-apps-section}", "left", '23.7%', { fromValue: '118.9%'}], position: 1398, duration: 962 },
            { id: "eid150", tween: [ "style", "${_animte-apps-section}", "left", '-71.4%', { fromValue: '23.7%'}], position: 2754, duration: 750 },
            { id: "eid85", tween: [ "style", "${_ICON-ani}", "top", '26.88%', { fromValue: '26.77%'}], position: 0, duration: 1000 },
            { id: "eid126", tween: [ "style", "${_ICON-ani}", "height", '38.3%', { fromValue: '38.3%'}], position: 1000, duration: 0 },
            { id: "eid170", tween: [ "color", "${_border-uiux}", "border-color", 'rgba(55, 104, 144,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55, 104, 144,1.00)'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_border-uiux}", "left", '-97.2%', { fromValue: '3.26%'}], position: 0, duration: 1000 },
            { id: "eid122", tween: [ "style", "${_motion-animated-1}", "top", '18.33%', { fromValue: '18.33%'}], position: 3610, duration: 0 },
            { id: "eid145", tween: [ "style", "${_ID-animted2}", "width", '92.95%', { fromValue: '92.95%'}], position: 4754, duration: 0 },
            { id: "eid171", tween: [ "color", "${_border-apps}", "border-color", 'rgba(55, 104, 144,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55, 104, 144,1.00)'}], position: 1500, duration: 0 },
            { id: "eid28", tween: [ "style", "${_UIUX-ani}", "left", '-63.83%', { fromValue: '19.93%'}], position: 0, duration: 1000 },
            { id: "eid143", tween: [ "style", "${_ID-animted2}", "left", '3.54%', { fromValue: '108.26%'}], position: 4004, duration: 750 },
            { id: "eid158", tween: [ "style", "${_core}", "left", '100.1%', { fromValue: '0%'}], position: 0, duration: 4754 },
            { id: "eid175", tween: [ "style", "${_UIUX-ani}", "top", '21.87%', { fromValue: '21.87%'}], position: 0, duration: 0 },
            { id: "eid155", tween: [ "style", "${_progress_bar}", "width", '100%', { fromValue: '0%'}], position: 0, duration: 4754 },
            { id: "eid162", tween: [ "gradient", "${_progress_bar}", "background-image", [180,[['rgba(219,66,66,1.00)',0],['rgba(239,255,0,1.00)',100]]], { fromValue: [180,[['rgba(66,219,117,1.00)',0],['rgba(239,255,0,1.00)',100]]]}], position: 0, duration: 4754 },
            { id: "eid168", tween: [ "color", "${_border-icon}", "border-color", 'rgba(55, 104, 144,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55, 104, 144,1.00)'}], position: 0, duration: 0 },
            { id: "eid151", tween: [ "style", "${_animte-apps-section}", "width", '57.2%', { fromValue: '64.61%'}], position: 1504, duration: 856 },
            { id: "eid2", tween: [ "color", "${_BG-UX}", "background-color", 'rgba(23,177,211,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(24,211,187,0.00)'}], position: 0, duration: 2377 },
            { id: "eid3", tween: [ "color", "${_BG-UX}", "background-color", 'rgba(134,23,211,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(23,177,211,0.00)'}], position: 2377, duration: 2377 },
            { id: "eid123", tween: [ "style", "${_motion-animated-1}", "left", '0%', { fromValue: '102.6%'}], position: 2754, duration: 856 },
            { id: "eid135", tween: [ "style", "${_motion-animated-1}", "left", '-104.8%', { fromValue: '0%'}], position: 4004, duration: 750 },
            { id: "eid172", tween: [ "style", "${_border-uiux}", "top", '13.54%', { fromValue: '13.54%'}], position: 0, duration: 0 },
            { id: "eid144", tween: [ "style", "${_ID-animted2}", "height", '48.4%', { fromValue: '48.4%'}], position: 4754, duration: 0 }         ]
      }
   }
},
"h": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','20px','17px','auto','auto'],
      userClass: 'cc',
      id: 'Rectangle2',
      stroke: [13,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['0px','53px','20px','17px','auto','auto'],
      userClass: 'cc',
      id: 'Rectangle2Copy',
      stroke: [13,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['0px','104px','20px','17px','auto','auto'],
      userClass: 'cc',
      id: 'Rectangle2Copy2',
      stroke: [13,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['56px','0px','20px','17px','auto','auto'],
      userClass: 'cc',
      id: 'Rectangle2Copy5',
      stroke: [13,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['56px','53px','20px','17px','auto','auto'],
      userClass: 'cc',
      id: 'Rectangle2Copy4',
      stroke: [13,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['56px','104px','20px','17px','auto','auto'],
      userClass: 'cc',
      id: 'Rectangle2Copy3',
      stroke: [13,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2Copy4}": [
            ["style", "top", '53px'],
            ["style", "left", '56px']
         ],
         "${_Rectangle2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle2Copy2}": [
            ["style", "top", '104px'],
            ["style", "left", '0px']
         ],
         "${_Rectangle2Copy5}": [
            ["style", "left", '56px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle2Copy3}": [
            ["style", "top", '104px'],
            ["style", "left", '56px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "top", '53px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '147px'],
            ["style", "width", '102px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Portfolio_RajRitesh");
