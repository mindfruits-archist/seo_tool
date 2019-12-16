/*------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------*///https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript#answer-21015393
function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}
/*------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------*/
//https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript#answer-2117698
(function($) {

 $.textMetrics = function(el) {

  var h = 0, w = 0;

  var div = document.createElement('div');
  document.body.appendChild(div);
  $(div).css({
   position: 'absolute',
   left: -1000,
   top: -1000,
   display: 'none'
  });

  $(div).html($(el).html());
  var styles = ['font-size','font-style', 'font-weight', 'font-family','line-height', 'text-transform', 'letter-spacing'];
  $(styles).each(function() {
   var s = this.toString();
   $(div).css(s, $(el).css(s));
  });

  h = $(div).outerHeight();
  w = $(div).outerWidth();

  $(div).remove();

  var ret = {
   height: h,
   width: w
  };

  return ret;
 }

})(jQuery);
/*------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------*/
//https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript#answer-48172630
function measureText_(str, fontSize = 10) {
  const widths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2796875,0.2765625,0.3546875,0.5546875,0.5546875,0.8890625,0.665625,0.190625,0.3328125,0.3328125,0.3890625,0.5828125,0.2765625,0.3328125,0.2765625,0.3015625,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.2765625,0.2765625,0.584375,0.5828125,0.584375,0.5546875,1.0140625,0.665625,0.665625,0.721875,0.721875,0.665625,0.609375,0.7765625,0.721875,0.2765625,0.5,0.665625,0.5546875,0.8328125,0.721875,0.7765625,0.665625,0.7765625,0.721875,0.665625,0.609375,0.721875,0.665625,0.94375,0.665625,0.665625,0.609375,0.2765625,0.3546875,0.2765625,0.4765625,0.5546875,0.3328125,0.5546875,0.5546875,0.5,0.5546875,0.5546875,0.2765625,0.5546875,0.5546875,0.221875,0.240625,0.5,0.221875,0.8328125,0.5546875,0.5546875,0.5546875,0.5546875,0.3328125,0.5,0.2765625,0.5546875,0.5,0.721875,0.5,0.5,0.5,0.3546875,0.259375,0.353125,0.5890625]
  const avg = 0.5279276315789471
  return str
    .split('')
    .map(c => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg)
    .reduce((cur, acc) => acc + cur) * fontSize
}
/*------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("FontMetrics",[],e):"object"==typeof exports?exports.FontMetrics=e():t.FontMetrics=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/output/",e(0)}([function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},o=!1,i=void 0,r=void 0,a=void 0,c={chars:{capHeight:"S",baseline:"n",xHeight:"x",descent:"p",ascent:"h",tittle:"i"}},u=function(){a=document.createElement("canvas"),r=a.getContext("2d"),o=!0},f=function(t,e,n){o||u(),i=.5*e,a.width=2*e,a.height=2*e+i,r.font=n+" "+e+"px "+t,r.textBaseline="top",r.textAlign="center"},d=function(){var t=arguments.length<=0||void 0===arguments[0]?"top":arguments[0],e="bottom"===t?a.height:0;r.setTransform(1,0,0,1,0,e),r.textBaseline=t},s=function(t){r.clearRect(0,0,a.width,a.height),r.fillText(t,a.width/2,i,a.width)},h=function(){var t="A";d("bottom");var e=a.height-m(t);return d("top"),m(t)+e},l=function(t){return s(t),r.getImageData(0,0,a.width,a.height).data},p=function(t){for(var e=3,n=t.length;e<n;e+=4)if(t[e]>0)return(e-3)/4;return t.length},g=function(t){for(var e=t.length-1;e>=3;e-=4)if(t[e]>0)return e/4;return 0},v=function(t,e,n){var o={},i=t[n];for(var r in t)o[r]=(t[r]-i)/e;return o},x=function(t){return Math.round(p(l(t))/a.width)-i},m=function(t){return Math.round(g(l(t))/a.width)-i},b=function(){var t=arguments.length<=0||void 0===arguments[0]?c.chars:arguments[0];return{capHeight:x(t.capHeight),baseline:m(t.baseline),xHeight:x(t.xHeight),descent:m(t.descent),bottom:h(),ascent:x(t.ascent),tittle:x(t.tittle),top:0}},y=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=t.fontFamily,o=void 0===e?"Times":e,i=t.fontWeight,r=void 0===i?"normal":i,a=t.fontSize,c=void 0===a?200:a,u=t.origin,d=void 0===u?"baseline":u;return f(o,c,r),n({},v(b(),c,d),{fontFamily:o,fontWeight:r,fontSize:c})};y.settings=c,e.default=y,t.exports=e.default}])});
const metrics = FontMetrics({
  fontFamily: 'Roboto',
  // Optional (defaults)
  fontWeight: 'normal',
  fontSize: 200,
  origin: 'baseline'
})
console.log(metrics);
/*------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------*/
//https://www.html5canvastutorials.com/tutorials/html5-canvas-text-metrics/
function html5Canvas(str, font){
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2 - 10;
    var text = str || 'Hello World!';

    context.font = font || '20px arial,sans-serif';
    context.textAlign = 'center';
    context.fillStyle = 'blue';
    context.fillText(text, x, y);

    // get text metrics
    var metrics = context.measureText(text);
    var width = metrics.width;
    return width
}
//https://www.w3schools.com/tags/canvas_measuretext.asp
/*------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------*/
//https://www.sencha.com/products/extjs/
//https://docs.sencha.com/extjs/6.5.3/modern/Ext.util.TextMetrics.html
/*------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------*/
