function Unit(upn,ad,e,cd){
	this.Unit = 'Unit';
	this.unitName = upn;
	this.abilityDesc = ad;
  this.type = '';
	this.energy = e;
	this.coolDown = cd;

		return {
           'Unit ':'',
	         'unitName':this.unitName,
           'type':this.type,
	         'abilityDesc':this.abilityDesc,
	         'energy':this.energy,
	         'coolDown':this.coolDown
		
	};
}
