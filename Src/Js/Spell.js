function Spell(spn,ad,e,cd){
	this.spellName = spn;
	this.abilityDesc = ad;
	this.type = '';
	this.consumption = e;
	this.coolDown = cd;
	this.attachedTo = '';
	
	this.attachTo = function(u,a){
	   if(typeof u === 'object'){
	   	
		if(u.Unit || u.Technology){
	     	u.attachTo = a;
	     	this.attachedTo = a;
	     	u.hasAttachment = true;
	     	while(u.hasAttachment){
	     	  if(u.Unit){
	     	  if(u.hp < 0){
	     		   u.hasAttachment = false;
	     		   u.attachTo = null;
	     		if(u.attachTo  === null){
	     			 a === null;
	     			 this.attachedTo = null;
	     			 break;
	     	  	 }
	    	    }
	       	  }
	      	 if(u.Technology){
	     	  if(u.energy <= 0){
	     		   u.hasAttachment = false;
	     		   u.attachTo = null;
               if(u.attachTo === null){
               	     a === null;
               	     this.attachedTo = null;
               	     break;
               }	     	
	     	 }
	        }
	        /*
	        if(u.Spell){
	     	  if(u.energy <= 0){
	     		   u.hasAttachment = false;
	     		   u.attachTo = null;
               if(u.attachTo === null){
               	     a === null;
               	     break;
               }	     	
	     	 }
	        }
	        */
	     }
		}
	   }
	};
	this.isEquipment = function(){
		   
		
		
	};
	this.assignMagicType = function(i){
		if(i > 8){
		  this.magicTypes = ['EQUIP','SPEEDSPELL','SLOWSPELL','PERMENANT','HIDDEN','FIELD','DARK','POSSESSION'];
		  
		  return this.magicTypes[i];
		}
		return null;
	};
	this.isEquipped = function(){
	  if(this.spellWornOff){
 	   if(this.attachedTo !== null || undefined){
		  	 	return true;
	 	 }
	 }
	   	return false;
	};
	this.spellWornOff = false;



	return {'Spell ':'',
	        'spellName':this.spellName,
	        'type':this.type,
	        'abilityDesc':this.abilityDesc,
	        'energy':this.energy,
	        'coolDown':this.coolDown
		
	};
}
