


var type = { 'Sand':{hp:-2,att:2,def:6,speed:10,energy:10,coolDown:4},
	     'Forest':{hp:6,att:7,def:1,speed:3,energy:5,coolDown:-1},
             'Cold':{hp:-10,att:9,def:2,speed:-2,energy:4,coolDown:-7},
             'Plains':{hp:2,att:2,def:10,speed:3,energy:4,coolDown:-20},
             'Mountain':{hp:-6,att:12,def:3,speed:3,energy:7,coolDown:-4},
             'Aqua':{hp:14,att:0,def:-8,speed:8,energy:12,coolDown:-5},
             'Swamp':{hp:10,att:1,def:3,speed:2,energy:6,coolDown:-10}};

function unitTypeController(a){
	this.endTimer = function(){};
	this.setTimer = function(n){
	setTimeout(function(){
       if(a.coolDown){}},n);
	};
}

function positionOccupied(x,y){return board.gameBoard[x][y].occupied ? true:false}

//console.log(Math.floor(1/2 + 2 * (4/5) + 1));

function damage(a,b){
	  if(a.Entities === 'Entities'){
	  	   // a.att * (a.att/a.def) -= b.hp;
	  	   }
  	  if(a.Spell === 'Spell'){
	  	
	  }
	  if(a.Technology === 'Technology'){
	  	
	  }
}
function unitTypeController(a){
	this.endTimer = function(){};
	this.setTimer = function(n){
	setTimeout(function(){
       if(a.coolDown){}},n);
	};
}


function Entities(hp,att,def,sped,abi,ty,upn,ad,e,cd){
	this.Entities = 'Entities';
	this.hp = hp;
	this.att = att;
	this.def = def;
	this.speed = sped;
	this.abilities = abi;
	this.unitName = upn;
	this.position = [0,0];
	this.abilityDesc = ad;
	this.type = ty;
	this.equipment = null;
	this.energy = e;
	this.occupied = false;
	this.coolDown = cd;
	this.currentTargets = [];
	this.attachments = null;
    this.hasAttachment = false;
    
    if(ty !== undefined){ 
		this.hp += type[ty]['hp'];
		this.att += type[ty]['att'];
		this.def += type[ty]['def'];
		this.speed += type[ty]['speed'];
	    this.energy += type[ty]['energy'];
	   if(this.coolDown === undefined)
	    this.coolDown = 0;
	    this.coolDown += type[ty]['coolDown'];
    }
    
   
    
    
      this.setOpponentTarget = function(arr){
    	for(var i = 0; i < arr.length;i++){
    		
        	 this.currentTargets.push(arr[i]);
    	}
      }
      this.castAbility = function(i,obj){
      	  var keys = Object.keys(obj);
      	    return this.abilities[i];
      }
      this.setPosition = function(x,y){
      	if(positionOccupied(x,y)){
      	     this.position[0] = x;
      	     this.position[1] = y;
      	}
      }
      this.getPosition = function(){
      	    return this.position;
      }
      this.warp = function(x,y,map){
      	var r = Math.random(0) * map.length - 1;
      	if(map.length < x){
      		    x = r;
      		  if(positionOccupied(x,y))
      		    this.setPosition(x,y);
      		
      	}
      }
      
      
	
	this.isEquipment = function(){
		   
	};
	this.deEquip = function(u,h){
		
		var b = u.attachTo;
	 if(typeof u === 'object'){
		   if(u.hasAttachment){
		   	h.attachedTo = null;
		   	u.hasAttachment = false;
		    u.attachment = '';
		   }
	 }	
		   return b;
	}
      
     	return this;
}
