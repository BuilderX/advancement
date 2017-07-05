// Abilities List
// Alphabetical
var abilityController = {
 AbilitiesList : {
  'Thrust':function(a){
    
    var damage = 40;
     for(var i = 0; i < a.currentTargets.length;i++){
     	if(a.currentTargets[i] !== null){
     	  a.currentTargets[i] -= abilityController.calculateDamage(damage,a);
    }else{ console.log('There is no current Target')}
	     }}
    },
    createAbility:function(name,func){
    	var spl = name.split(' ');
     if(name.split(' ').length > 1){
     	name = spl.join('');
     	
     }
	if(abilityController.AbilitiesList[name] === 'undefined'){
		 return false;
	}else{
		abilityController.AbilitiesList[name] = func;
	}
  },
   calculateDamage:function(dam,a){ 
                dam -= a.hp & a.def     	
   }
  
}
//abilityController["AbilitiesList"].Thrust

abilityController['createAbility']('DeathKnell',function(){console.log('Die!')})
console.log(abilityController.AbilitiesList)
