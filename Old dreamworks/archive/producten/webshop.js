<!--
function getObj(name) {
	if (document.getElementById) {
		this.style = document.getElementById(name).style;
	} else
	if (document.all) {
		this.style = document.all[name].style;
	} else
	if (document.layers) {
		this.style = document.layers[name];
	}
}

function MKmenu(elmnt) {
var m = 0;
// verander naar juiste id waar items staan
var totaalAantal = document.getElementById("navigatie_shop").getElementsByTagName("ul").length;
var DHTML = (document.getElementById || document.all || document.layers);
if ( !DHTML ) alert('Uw browser ondersteund geen DHTML');
for (var m = 0; m < totaalAantal; m++) {	
	items=new getObj("sub"+m);
	AantalDivs=document.getElementById("navigatie_shop").getElementsByTagName("ul");
	if (elmnt=="alles") {
		items.style.display="block";
	} else if (elmnt=="niets") {
		items.style.display="none";
	} else {
		if (m == elmnt) {					
			items.style.display="block";
			alleLinksInDiv = AantalDivs[m].getElementsByTagName("a");
		} else {		
			items.style.display="none";
		}		
	} 

} 
}
-->