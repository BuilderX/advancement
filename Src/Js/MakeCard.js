function makeCard(card){
  var unit = card;

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
	nameLabel.innerHTML ='<span id ="BlueName">' + unit.cardName.split('').join(' ') + '</span>';
  fullCard.style.cssText = 'background:brown;width:150px;height:200px';
    
	fullCard.appendChild(nameLabel);
    var crea = document.createElement('div');
    crea.id = unit.cardName + 'Name'; 
    fullCard.appendChild(crea);
    
	var bn = document.getElementById(crea.id); 
	var ele = document.createElement('span');
	ele.innerHTML = '<img id = "'+unit.type +'" src = "'+ unit.image + '" style="width:130px;height:80px;position:relative;left:10px;top:1.5px"/>';
	bn.appendChild(ele);
	
	var img = unit.element ;
	var imgCont = setUpEle('div','imgBox');
	imgCont.innerHTML = '<img src = "'+img+'" style="position:relative;left:105px;width:30px;height:20px;"/>'
	
  fullCard.appendChild(imgCont);
	
	var descr = setUpEle('div','description');
	descr.innerHTML = unit.abilityDesc;
	 
	fullCard.appendChild(descr);
	var st = 
	document.createElement('span');
  st.textContent +=  '_ATK/ '+ unit.att + ' | DEF/ ' + unit.def + ' _';
    
    st.style.position = "relative";
    st.style.left = "3px";
    st.style.top = "20px";
    
    st.style.border = "1px solid black"; 
	  
	st.className = 'stat' + unit.unitName;
	descr.appendChild(st);
 		
    	}
 }

function card(cardName,t,l,e){
   this.cardName = cardName;
   this.image =t;
   this.type = l;
   this.abilityDesc = 'This dragon is mighty and a killer [ careful ]. ';
   this.att = 40;
   this.def = 30;
   this.element = e;
}  
//test
var c = new card('BlueEyesWhite',"https://s-media-cache-ak0.pinimg.com/736x/1d/6e/89/1d6e89e2ba27fe3ffbb0156937592f65--water-dragon-sea-dragon.jpg",'light','https://yt3.ggpht.com/-qRzMm6YHv8E/AAAAAAAAAAI/AAAAAAAAAAA/pa_rn6HlQTI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'); 

makeCard(c);
