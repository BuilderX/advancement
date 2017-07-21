var BattleFieldArray = [];


function CreateSpaces(divName,count){
      var arr = [];
      for(var i = 0; i < count;i++){
        var ele = document.createElement("div");
        ele.className = "CardSpace";
        arr.push(ele);
 document.getElementById(divName).appendChild(ele);
        
    }
    BattleFieldArray.push(arr);
}
//Set Up Game Board

CreateSpaces("Hand0",5);
CreateSpaces("GraveYard0",1);
CreateSpaces("SpellSpace0",5);
CreateSpaces("Side0",5);
CreateSpaces("Side1",5);
CreateSpaces("SpellSpace1",5);
CreateSpaces("GraveYard1",1);
CreateSpaces("Hand1",5);
function initdescHolder(statHolder,a){
  statHolder.className = 'Des';
  statHolder.innerHTML =a.desc;
  return statHolder;
}

function Card(Name,Type,attributes){
   var CardHolder = document.createElement("div");
   var CardContainer = document.createElement("div");
   var CName = document.createElement("div");
   var desc = document.createElement("div");
   var Health = document.createElement("div");
   var Image = document.createElement("div");
   var Mana = document.createElement("div");
   var Att = document.createElement("div");
   var Def = document.createElement("div");
   var statsHolder = document.createElement("div");
   var statsHolder1 = document.createElement("div");
   var statsHolder2 = document.createElement("div");
   
   var Description = document.createElement("div");
   
    CardHolder.appendChild(CardContainer);
    CardContainer.className = Type;
    CName.className = "CName";
    CName.innerHTML = '<span>'+attributes.name+'</span>';
    CardContainer.appendChild(CName);
    Image.className = "CardImage";
    Image.innerHTML = attributes.image;  
    CardContainer.appendChild(Image);
    statsHolder.className = "statHolder";
    statsHolder.innerHTML=attributes.Att;
    statsHolder1.className = "statHolder1";
    statsHolder1.innerHTML=attributes.Def;
    statsHolder2.className = "statHolder2";
    statsHolder2.innerHTML=attributes.spellDef;
  
  
    SH = initdescHolder(desc,attributes);
    CardContainer.appendChild(SH);
    CardContainer.appendChild(statsHolder); 
    CardContainer.appendChild(statsHolder1);
    CardContainer.appendChild(statsHolder2);
  
    return CardHolder;
}

var TestM = new Card("Otter5","Card_M",{Att: 10,Def:5,spellDef:20,name:"Dark Owl",image:'<img src = "https://s-media-cache-ak0.pinimg.com/236x/68/74/21/687421caac807ee07d0b1798e4db4bf4.jpg" style = "width:60px; height:30px"/>',desc:"SwiftOwl That gains power from moon light"});
BattleFieldArray[2][0].appendChild(TestM);

var TestM = new Card("Otter5","Card_M",{Att: 10,Def:5,spellDef:40,name:"Dark Owl",image:'<img src = "http://orig07.deviantart.net/44af/f/2013/098/0/f/dark_city___lizard_face_by_xxdark_seedxx-d60wisf.png" style = "width:60px; height:30px"/>',desc:"A creepy Reptile that devours all that are lured into it's gaze"});
BattleFieldArray[4][0].appendChild(TestM);


console.log(BattleFieldArray[3][0]); 
//for(var i = 0; i < BattleFieldArray[4].length;i++){
  
  
setTimeout(function(){
        BattleFieldArray[3][0].style = "background:purple";
   },1000);
 setTimeout(function(){
        BattleFieldArray[3][1].style = "background:purple";
   },2000);
 setTimeout(function(){
        BattleFieldArray[3][2].style = "background:purple";
   },3000);
 setTimeout(function(){
        BattleFieldArray[3][3].style = "background:purple";
   },2000);
 setTimeout(function(){
        BattleFieldArray[3][4].style = "background:purple";
   },1000);
 
