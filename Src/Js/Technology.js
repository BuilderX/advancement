function Technology(tpn,ad,e,cd){
	this.Technology = '';
	this.TechName = tpn;
	this.abilityDesc = ad;
	this.type = '';
	this.energy = e;
	this.coolDown = cd;
	this.active = false;
   	this.Technology0 = [];	
   
   	 this.getType = function(){
    	   this.types = ['LargePerm','SmallPerm','FieldPerm','UnitAffectPerm','Temporary','LastAFewTurns','EasilyBroken','Invincible'];
       
   	 };
    
   	 this.SetCheckType = function(i){
    	     if(i >= 0){
    		  return this.getType[i];
    	     }   	
  	  };
   	 this.isPermenant = function(){
    	  if(this.type !== ''){
     	  if(this.type === 'LargePerm' || 'SmallPerm' || 'FieldPerm' ||'UnitAffectPerm'){
    			
     	  }else{
    			
    	   }
    	 }
    	};
   	 this.lockEnergy = function(){
    	    var e = this.energy;
   	 	  while(this.active === false){
    		        this.energy = e;
    		  }
    	};
    
   	 this.OnOrOff = function(){
   	     if(this.active){this.active = true;}
   		    else{this.active = false}
    	    
   	 };

	return {'Technology ':'',
	        'TechName':this.spellName,
	        'type':this.type,
	        'abilityDesc':this.abilityDesc,
	        'energy':this.energy,
	        'coolDown':this.coolDown,
       	        'Technology0':this.Technology0
		
	};
}
