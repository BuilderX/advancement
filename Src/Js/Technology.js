function Technology(tpn,ad,e,cd){
	this.Technology = '';
	this.TechName = tpn;
	this.abilityDesc = ad;
	this.type = '';
	this.energy = e;
	this.coolDown = cd;
	this.active = false;
	this.isPermenant = false;
    this.Technology0 = [];	
    
    this.getType = function(g){
       var types = ['LargePerm','SmallPerm','FieldPerm','UnitAffectPerm','Temporary','LastAFewTurns','EasilyBroken','Invincible'];
          return types[g];
    };
    
    this.SetCheckType = function(g){
         if(g >= 0){
    	  return this.getType(g);
         }   	
    };
    this.setTarget = function(board,x,y,castAbility){castAbility(board[x][y])}
    this.castAbility = function(){
    	
    }
    this.isPermenant = function(){
      if(this.type !== ''){
       if(this.type === 'LargePerm' || 'SmallPerm' || 'FieldPerm' ||'UnitAffectPerm'){
    	  this.isPermenant = true;		
       }else{
    	  this.isPermenant = false;			
       }
     }
    };
    this.lockEnergy = function(){
        var e = this.energy;
    	 while(this.active === false){this.energy = e}
    };
    
    this.OnOrOff = function(){
        if(this.active){this.active = true;}
   	    else{this.active = false}
    };
    
    
	return this;
}

