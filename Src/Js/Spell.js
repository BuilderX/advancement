function Spell(spn,ad,e,cd){
	this.spellName = spn;
	this.abilityDesc = ad;
	this.type = '';
	this.consumption = e;
	this.coolDown = cd;
	this.attachedTo = '';
	 // attach to a unit 
	this.attachTo = function(u,a){
		var attachmentCheck = function(u){
			  
			    u.hasAttachment = false;
	            u.attachTo = null;
	     	if(u.attachTo  === null){
	     		 a === null;
	    		 this.attachedTo = null;
	     		   return true;
	     	 }
		  };
	 if(typeof u === 'object'){
	   	if(a.Unit || a.Technology){
	   		 u.attachedTo = a;
	   		 a.hasAttachment = true;
	   		 a.attachment = u.spellName;
	     	
	     	if(a.hasAttachment === true){
	     	  if(a.Unit){
	     	  if(a.hp < 0){
	     		if(attachmentCheck(a)){}//break}
	    	    }
	       	  }
	      	 if(a.Technology){
	     	  if(a.consumption <= 0){
	     	   	if(attachmentCheck(a)){}// break}
	    	 }
	        }
	        if(u.Spell){
	     	  if(u.energy <= 0){
	     	      	attachmentCheck(a);
	     	 }
	        }
	     } 
		}else{return 'This Card cannot be attached';}
	   }
	   
	};
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
	
	this.switchEquipment = function(u,newTarget){
	    if(u.hasAttachment){
	       newTarget.attachment = u.attachment;
	       u.hasAttachment = false;
	       newTarget.hasAttachment = true;
	    }
	}
	
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
