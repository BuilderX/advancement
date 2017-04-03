
function makeCard(card){
	if(card !== null){
	var body = document.body;

	function setUpEle(tag,classN){
		 var a = document.createElement(tag);
		 a.className = classN;
 		   return a;
    } 
	
	var fullCard = setUpEle('div','box');
    body.appendChild(fullCard);
    
	var nameLabel = setUpEle('div','nameBox');
	nameLabel.innerHTML ='<span id ="BlueName">' + unit.cardName +'</span>';

	fullCard.appendChild(nameLabel);
	var bn = document.getElementById(unit.cardName + 'Name');
	var ele = document.createElement('span');
	ele.innerHTML = '<img id = "'+unit.type + "img" + '" src = "" style="width:10px;height:7px;position:relative;left:12px;top:1.5px"/>';
	bn.appendChild(ele);
	
	var img = unit.unitName + 'img';
	var imgCont = setUpEle('div','imgBox');
	imgCont.innerHTML = '<img src = "'+img+'" />'
	fullCard.appendChild(imgCont);
	
	var descr = setUpEle('div','description');
	descr.innerHTML = unit.abilityDesc;
	
	fullCard.appendChild(descr);
	var st = 
	 
	document.createElement('span');
	st.innerHTML = 'ATK/'+ unit.att + 'DEF/' + unit.def;
	st.className = 'stat' + unit.unitName;
	descr.appendChild(st);
		
	}
	
}
