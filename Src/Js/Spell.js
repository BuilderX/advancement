var spell = setUpSpell('Magic Crush','Ice',35,false,5,'The crushing spell inhibits enemies and stops their movement for three turns',u1,spell);


function setUpSpell(sn,ty,con,swo,cd,ad,unit,spell){
		spell.obj.spellName = sn;
		spell.obj.type = ty;
		spell.obj.consumption = con;
		spell.obj.spellWornOff = swo;
		spell.obj.coolDown = cd;
		spell.obj.abilityDesc = ad;
		//spell.obj.attachTo(unit,spell);
		 return  spell.obj;
}


function Spell(spn,ad,sped,e,cd,ct,dr){
	this.spellName = spn;
	this.abilityDesc = ad;
	this.type = '';
	this.speed = sped;
	this.consumption = e;
	this.coolDown = cd;
	this.attachedTo = null;
	this.spellWornOff = false;
	this.currentTargets = [];
	this.canTarget = ct;
	this.damageRate = dr;
   	this.occupied = false;

     // attach to a Entities 
    this.setOpponentTarget = function(arr){
    	for(var i = 0; i < arr.length;i++){
    		
        	 this.currentTargets.push(arr[i]);
    	}
    }
    this.cast = function(a){
      for(var i = 0; i < this.currentTargets.length;i++){
    	   // If currentTargets[i] Unit(); 
		switch(this.canTarget){
			case 'Spell':
			break;
			case 'Entities':
				this.currentTargets[i].hp -= this.damageRate;
			break;
			case 'Technology':
			break;
		}
      }
    }
    
	this.attachTo = function(u,a){
		var equipment = a;
		var unit = u;
		
		var attachmentCheck = function(b){
			  
			    //unit.hasAttachment = false;
	            //unit.attachTo = null;
	     	if(unit.attachTo === null){
	     		 //unit === null;
	    		 //equipment.attachedTo = null;
	     		   return true;
	     	 }else{
	     	 	   return false;
	     	 }
		  };
	 if(typeof equipment === 'object'){
	   	if(unit.Entities || unit.Technology){
	   	
	   		 equipment.attachedTo = unit;
	   		 unit.hasAttachment = true;
	   		 unit.attachments = equipment;
	   		// console.log(u)
	     	if(unit.hasAttachment === true){
	         //	console.log(equipment);
	         if(unit.Entities){
	      	  if(unit.hp > 0){
	     		if(attachmentCheck(unit)){
	     			
	     		}//break}
	    
	    	    }
	       	  }
	       	  
	      	 if(unit.Technology){
	
	     	  if(unit.energy > equipment.consumption){
	  	       if(attachmentCheck(unit)){}// break}
	         }
	        }
	        if(unit.Spell){
	     	  if(unit.energy <= 0){
	     	      	attachmentCheck(unit);
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
		if(i < 8){
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
	
	return {
	     	'Spell ':'Spell',
	        'spellName':this.spellName,
	        'type':this.type,
	        'abilityDesc':this.abilityDesc,
	        'consumption':this.energy,
	        'coolDown':this.coolDown,
	        'obj':this
	};
}

