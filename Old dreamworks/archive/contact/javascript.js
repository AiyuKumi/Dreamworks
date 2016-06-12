//<!--






// Ouvrir une fenêtre POPUP -------------------------------------------------------------------------------
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
/***********************************************
A mettre dans le BODY:
<a href="#" onclick="MM_openBrWindow('newsletter.html','nom','scrollbars=yes,width=200,height=300')">test</a>
***********************************************/
// FIN Ouvrir une fenêtre POPUP -------------------------------------------------------------------------------






//Permutation d'images et Preload images ------------------------------------------------------------------
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
/***********************************************
A mettre dans le BODY:
1) <body onLoad="MM_preloadImages('../images/accueil_b.jpg','../images/galeriephotos_b.jpg','../images/contact_b.jpg')">
2) <a href="extensions_fr.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('extensions','','images/extensions_b.jpg',1)"><img src="images/extensions_a.jpg" name="extensions" width="126" height="35" border="0"></a>
***********************************************/
//FIN Permutation d'images et Preload images -----------------------------------------------------------------------







// Popup qui se redimensionne à la taille de l'image ------------------------------------------------------------------
var BrowserDetect = {
 init: function () {
  this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
  this.version = this.searchVersion(navigator.userAgent)
   || this.searchVersion(navigator.appVersion)
   || "an unknown version";
  this.OS = this.searchString(this.dataOS) || "an unknown OS";
 },
 searchString: function (data) {
  for (var i=0;i<data.length;i++) {
   var dataString = data[i].string;
   var dataProp = data[i].prop;
   this.versionSearchString = data[i].versionSearch || data[i].identity;
   if (dataString) {
    if (dataString.indexOf(data[i].subString) != -1)
     return data[i].identity;
   }
   else if (dataProp)
    return data[i].identity;
  }
 },
 searchVersion: function (dataString) {
  var index = dataString.indexOf(this.versionSearchString);
  if (index == -1) return;
  return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
 },
 dataBrowser: [
  {  string: navigator.userAgent,
   subString: "OmniWeb",
   versionSearch: "OmniWeb/",
   identity: "OmniWeb"
  },
  {
   string: navigator.vendor,
   subString: "Apple",
   identity: "Safari"
  },
  {
   prop: window.opera,
   identity: "Opera"
  },
  {
   string: navigator.vendor,
   subString: "iCab",
   identity: "iCab"
  },
  {
   string: navigator.vendor,
   subString: "KDE",
   identity: "Konqueror"
  },
  {
   string: navigator.userAgent,
   subString: "Firefox",
   identity: "Firefox"
  },
  {
   string: navigator.vendor,
   subString: "Camino",
   identity: "Camino"
  },
  {  // for newer Netscapes (6+)
   string: navigator.userAgent,
   subString: "Netscape",
   identity: "Netscape"
  },
  {
   string: navigator.userAgent,
   subString: "MSIE",
   identity: "Explorer",
   versionSearch: "MSIE"
  },
  {
   string: navigator.userAgent,
   subString: "Gecko",
   identity: "Mozilla",
   versionSearch: "rv"
  },
  {   // for older Netscapes (4-)
   string: navigator.userAgent,
   subString: "Mozilla",
   identity: "Netscape",
   versionSearch: "Mozilla"
  }
 ],
 dataOS : [
  {
   string: navigator.platform,
   subString: "Win",
   identity: "Windows"
  },
  {
   string: navigator.platform,
   subString: "Mac",
   identity: "Mac"
  },
  {
   string: navigator.platform,
   subString: "Linux",
   identity: "Linux"
  }
 ]
 
};
BrowserDetect.init();
//alert(''+BrowserDetect.version);


PositionX = 100;
PositionY = 100;
defaultWidth  = 500;
defaultHeight = 500;
var AutoClose = true;
if (parseInt(navigator.appVersion.charAt(0))>=4){
var isNN=(navigator.appName=="Netscape")?1:0;
var isIE=(navigator.appName.indexOf("Microsoft")!=-1)?1:0;}
var optNN='scrollbars=no,width='+defaultWidth+',height='+defaultHeight+',left='+PositionX+',top='+PositionY;
var optIE='scrollbars=no,width=150,height=100,left='+PositionX+',top='+PositionY;
function popImage(imageURL,imageTitle){
if (isNN){imgWin=window.open('about:blank','',optNN);}
if (isIE){imgWin=window.open('about:blank','',optIE);}
with (imgWin.document){
writeln('<html><head><title>Loading...</title><style>body{margin:0px;}</style>');
writeln('<sc'+'ript>');
writeln('var isNN,isIE;');
writeln('if (parseInt(navigator.appVersion.charAt(0))>=4){');
writeln('isNN=(navigator.appName=="Netscape")?1:0;');
writeln('isIE=(navigator.appName.indexOf("Microsoft")!=-1)?1:0;}');
writeln('function reSizeToImage(){');
writeln('if (isIE){');
writeln('window.resizeTo(100,100);');
writeln('width=100-(document.body.clientWidth-document.images[0].width);');
writeln('height=100-(document.body.clientHeight-document.images[0].height);');
if ( BrowserDetect.version == 7 ) {
writeln('width=width+150;');
}
writeln('window.resizeTo(width,height);}');
writeln('if (isNN){');       
writeln('window.innerWidth=document.images["TheImage"].width;');
writeln('window.innerHeight=document.images["TheImage"].height;}}');
writeln('function doTitle(){document.title="'+imageTitle+'";}');
writeln('</sc'+'ript>');
if (!AutoClose) writeln('</head><body bgcolor=000000 scroll="no" onload="reSizeToImage();doTitle();self.focus()">')
else writeln('</head><body bgcolor=000000 scroll="no" onload="reSizeToImage();doTitle();self.focus()" onblur="self.close()">');
writeln('<img name="TheImage" src='+imageURL+' style="display:block"></body></html>');
close();  
}}

/***********************************************
A mettre dans le BODY:
<a href="javascript:popImage('images/test.jpg','nom de la fenêtre');"><img src="images/petit_test.jpg" border="0"></a>

Avec un effet d'opacité au survol (voir script plus bas):
<a href="javascript:popImage('images/test.jpg','nom de la fenêtre');"><img src="images/petit_test.jpg" alt="" border="0" style="filter:alpha(opacity=100);-moz-opacity:1" onmouseover="rendrevisible(this,0)" onmouseout="rendrevisible(this,1)"></a>
***********************************************/
// FIN Popup qui se redimensionne à la taille de l'image ---------------------------------------------------------------------------











// Opacité diminue au survol des images ------------------------------------------------------------------------------------------------
function rendrevisible(timide,superman) 
{ 
force=(superman==1)? 1 : 0.5 
  
if (timide.style.MozOpacity) 
timide.style.MozOpacity=force 
else if (timide.filters) 
timide.filters.alpha.opacity=force*100 
} 
/***********************************************
A mettre dans le BODY (compatible Mozilla Firefox):
<a href="#"><img src="images/test.jpg" alt="SURPRISE !" border="0" width="193" height="73" style="filter:alpha(opacity=100);-moz-opacity:1" onmouseover="rendrevisible(this,0)" onmouseout="rendrevisible(this,1)"></a>
***********************************************/
// FIN Opacité diminue au survol des images --------------------------------------------------------------------------------------------








// Fade-In Slideshow ------------------------------------------------------------------------------------------------
var fadeimages=new Array()
//SET IMAGE PATHS. Extend or contract array as needed
fadeimages[0]=["images/1.jpg", "", ""]
fadeimages[1]=["images/2.jpg", "", ""]
fadeimages[2]=["images/3.jpg", "", ""] 
fadeimages[3]=["images/4.jpg", "", ""]
 
var fadebgcolor="white"
 
////NO need to edit beyond here/////////////
 
var fadearray=new Array() //array to cache fadeshow instances
var fadeclear=new Array() //array to cache corresponding clearinterval pointers
 
var dom=(document.getElementById) //modern dom browsers
var iebrowser=document.all
 
function fadeshow(theimages, fadewidth, fadeheight, borderwidth, delay, pause, displayorder){
this.pausecheck=pause
this.mouseovercheck=0
this.delay=delay
this.degree=10 //initial opacity degree (10%)
this.curimageindex=0
this.nextimageindex=1
fadearray[fadearray.length]=this
this.slideshowid=fadearray.length-1
this.canvasbase="canvas"+this.slideshowid
this.curcanvas=this.canvasbase+"_0"
if (typeof displayorder!="undefined")
theimages.sort(function() {return 0.3 - Math.random();}) //thanks to Mike (aka Mwinter) :)
this.theimages=theimages
this.imageborder=parseInt(borderwidth)
this.postimages=new Array() //preload images
for (p=0;p<theimages.length;p++){
this.postimages[p]=new Image()
this.postimages[p].src=theimages[p][0]
}
 
var fadewidth=fadewidth+this.imageborder*2
var fadeheight=fadeheight+this.imageborder*2
 
if (iebrowser&&dom||dom) //if IE5+ or modern browsers (ie: Firefox)
document.write('<div id="master'+this.slideshowid+'" style="position:relative;width:'+fadewidth+'px;height:'+fadeheight+'px;overflow:hidden;"><div id="'+this.canvasbase+'_0" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);-moz-opacity:10;-khtml-opacity:10;background-color:'+fadebgcolor+'"></div><div id="'+this.canvasbase+'_1" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);-moz-opacity:10;background-color:'+fadebgcolor+'"></div></div>')
else
document.write('<div><img name="defaultslide'+this.slideshowid+'" src="'+this.postimages[0].src+'"></div>')
 
if (iebrowser&&dom||dom) //if IE5+ or modern browsers such as Firefox
this.startit()
else{
this.curimageindex++
setInterval("fadearray["+this.slideshowid+"].rotateimage()", this.delay)
}
}

function fadepic(obj){
if (obj.degree<100){
obj.degree+=10
if (obj.tempobj.filters&&obj.tempobj.filters[0]){
if (typeof obj.tempobj.filters[0].opacity=="number") //if IE6+
obj.tempobj.filters[0].opacity=obj.degree
else //else if IE5.5-
obj.tempobj.style.filter="alpha(opacity="+obj.degree+")"
}
else if (obj.tempobj.style.MozOpacity)
obj.tempobj.style.MozOpacity=obj.degree/101
else if (obj.tempobj.style.KhtmlOpacity)
obj.tempobj.style.KhtmlOpacity=obj.degree/100
}
else{
clearInterval(fadeclear[obj.slideshowid])
obj.nextcanvas=(obj.curcanvas==obj.canvasbase+"_0")? obj.canvasbase+"_0" : obj.canvasbase+"_1"
obj.tempobj=iebrowser? iebrowser[obj.nextcanvas] : document.getElementById(obj.nextcanvas)
obj.populateslide(obj.tempobj, obj.nextimageindex)
obj.nextimageindex=(obj.nextimageindex<obj.postimages.length-1)? obj.nextimageindex+1 : 0
setTimeout("fadearray["+obj.slideshowid+"].rotateimage()", obj.delay)
}
}
 
fadeshow.prototype.populateslide=function(picobj, picindex){
var slideHTML=""
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML='<a href="'+this.theimages[picindex][1]+'" target="'+this.theimages[picindex][2]+'">'
slideHTML+='<img src="'+this.postimages[picindex].src+'" border="'+this.imageborder+'px">'
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML+='</a>'
picobj.innerHTML=slideHTML
}
 
 
fadeshow.prototype.rotateimage=function(){
if (this.pausecheck==1) //if pause onMouseover enabled, cache object
var cacheobj=this
if (this.mouseovercheck==1)
setTimeout(function(){cacheobj.rotateimage()}, 100)
else if (iebrowser&&dom||dom){
this.resetit()
var crossobj=this.tempobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
crossobj.style.zIndex++
fadeclear[this.slideshowid]=setInterval("fadepic(fadearray["+this.slideshowid+"])",50)
this.curcanvas=(this.curcanvas==this.canvasbase+"_0")? this.canvasbase+"_1" : this.canvasbase+"_0"
}
else{
var ns4imgobj=document.images['defaultslide'+this.slideshowid]
ns4imgobj.src=this.postimages[this.curimageindex].src
}
this.curimageindex=(this.curimageindex<this.postimages.length-1)? this.curimageindex+1 : 0
}
 
fadeshow.prototype.resetit=function(){
this.degree=10
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
if (crossobj.filters&&crossobj.filters[0]){
if (typeof crossobj.filters[0].opacity=="number") //if IE6+
crossobj.filters(0).opacity=this.degree
else //else if IE5.5-
crossobj.style.filter="alpha(opacity="+this.degree+")"
}
else if (crossobj.style.MozOpacity)
crossobj.style.MozOpacity=this.degree/101
else if (crossobj.style.KhtmlOpacity)
crossobj.style.KhtmlOpacity=obj.degree/100
}
 
 
fadeshow.prototype.startit=function(){
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
this.populateslide(crossobj, this.curimageindex)
if (this.pausecheck==1){ //IF SLIDESHOW SHOULD PAUSE ONMOUSEOVER
var cacheobj=this
var crossobjcontainer=iebrowser? iebrowser["master"+this.slideshowid] : document.getElementById("master"+this.slideshowid)
crossobjcontainer.onmouseover=function(){cacheobj.mouseovercheck=1}
crossobjcontainer.onmouseout=function(){cacheobj.mouseovercheck=0}
}
this.rotateimage()
}

//-->
