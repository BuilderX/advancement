function Technology(tpn,ad,e,cd){
	this.Technology = '';
	this.TechName = tpn;
	this.abilityDesc = ad;
	this.energy = e;
	this.coolDown = cd;
  this.Technology0 = [];	

	return {'Technology ':'',
	        'TechName':this.spellName,
	        'type':this.type,
	        'abilityDesc':this.abilityDesc,
	        'energy':this.energy,
	        'coolDown':this.coolDown,
          'Technology0':this.Technology0
		
	};
}
