
function Unit(hp,att,def,abi,ty,upn,ad,e,cd){
	this.Unit = 'Unit';
	this.hp = hp;
	this.att = att;
	this.def = def;
	this.abilities = abi;
	this.unitName = upn;
	this.position = [0,0];
	this.abilityDesc = ad;
	this.type = ty;
	this.energy = e;
	this.occupied = false;
	this.coolDown = cd;
	this.currentTarget = '';
    
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
     	return this;
}
