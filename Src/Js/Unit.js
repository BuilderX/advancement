
function Unit(upn,ad,e,cd){
	this.Unit = 'Unit';
	this.hp = 0;
	this.def = 0;
	this.abilities = [];
	this.unitName = upn;
	this.position = [0,0];
	this.abilityDesc = ad;
	this.energy = e;
	this.coolDown = cd;
    
      this.castAbility = function(i,obj){
      	  var keys = Object.keys(obj);
      	    return this.abilities[i];
      }
      this.setPosition = function(x,y){
      	     this.position[0] = x;
      	     this.position[1] = y;
      }
      this.getPosition = function(){
      	    return this.position;
      }
      this.warp = function(x,y,map){
      	var r = Math.random(0) * map.length - 1;
      	if(map.length < x){
      		    x = r;
      		    this.setPosition(x,y);
      		
      	}
      }
     	return this;
}

