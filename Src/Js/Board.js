function Board(){
	
	this.gameBoard = [];
	this.CardType = [];

	  this.generateBoard = function(){
		    var arr = [];
		     for(var i = 0; i < 5;i++){
		     	 arr.push([]);
		     }	
		     return arr;
	};
	
	this.setGameRules = function(){
    	for(var i =0; i < this.gameBoard.length;i++){
				    this.gameBoard[i].push(new Spell('','','','',''));
					this.gameBoard[i].push(new Technology('','','','',''));
					this.gameBoard[i].push(new Entities('','','','',''));
	
					this.gameBoard[i].push(new Entities('','','','',''));
					this.gameBoard[i].push(new Technology('','','','',''));
					this.gameBoard[i].push(new Spell('','','','',''));
		}
	};
	
   this.globalAffect = function (fn){
   	if(typeof fn === 'function'){
   		
	for(var i = 0; i < this.gameBoard.length;i++){
		for(var j = 0; j < this.gameBoard[i].length;j++){
			fn(this.gameBoard[i][j]);
   		  }
        }
	  }
   };
	this.FieldTypes = function(i,fn){
		 this.field = ['EMP','METALSHEET','EARTH',"SPACE",'SPEED'];
	   switch(this.field[i]){
	   	  case 'EMP':
	   	  	     this.globalAffect(fn);
	   	  break;
	   	  case 'METALSHEET':
	   	  break;
	   	  case 'EARTH':
	   	  break;
	   	  case 'SPACE':
	   	  break;
	   	  case 'SPEED':
	   	  break;
	   }	
	};	
	  // Global Board Check
  this.checkBoardAreas = function(fn,typ,gb){
 	var chkGameBrd = function (i,num,typ){
    	 if(typeof gb[i][num] === 'object'){
    	  if(Object.keys(gb[i][num])[0] === typ){
    		      fn(gb[i][num]);
    		}
    	  }
    };
 	  for(var i = 0; i < gb.length;i++){
		  	 chkGameBrd(i,0,typ); 
    		 chkGameBrd(i,1,typ); 
    		 chkGameBrd(i,2,typ); 
   		     chkGameBrd(i,3,typ); 
    		 chkGameBrd(i,4,typ); 
    		 chkGameBrd(i,5,typ); 
     }
  };
  
 	// works
	this.place = function(posx,posy,typ,obj,posOnBoard){
		if(typeof obj !== 'object'){ return 'Not an object'}
		var caro;
   		var posOnBoard0 = function(posOnBoard){
  	       switch(typ){
  		      case 'Spell':
               if(posy === 0 || posy === 5){return 'Spell'}
  		  	  break;
  		  	  case 'Technology':
  		  	   if(posy == 1 || posy == 4){ return 'Technology'}
  		  	  break;
  		  	  case 'Entities':
  		  	   if(posy === 2 || posy === 3){return 'Entities'}
        	  break;
  		  	  default: console.log('Not a Valid Number');
  		  }
  	};
    var r = posOnBoard0(posOnBoard);
   	if(r === typ){
     if(Object.keys(this.gameBoard[posx][posy])[0] === typ){
     	this.gameBoard[posx][posy] = obj;
     	this.gameBoard[posx][posy].occupied = true;
     	obj.position = [posx,posy]; 
     	
     }
     }else{console.log('Cannot Place This Entities Here')}
    
  };
   this.removeCard = function(posx,posy){
   	        var card = this.gameBoard[posx][posy];
   	       
   	        var keys = Object.keys(this.gameBoard[posx][posy]);
   	       
   	        for(var i = 0; i < keys.length;i++){
   	        
   	         if(keys[i] !== keys[0]){	
   	          if(typeof card[keys[i]] !== 'function'){
   	          	     card[keys[i]] = '';
   	          }
   	         }
   	        }
   	        //console.log(card);
   };
	this.gameBoard = this.generateBoard();
    this.setGameRules();

}
/*
var u = new Unit('','','','','');
var u1 = new Unit('100','','','','');
var p = new Spell('','','','','');
p.obj.attachTo(p,u);
//p.obj.deEquip(u,p);
p.obj.switchEquipment(u,u1);

var spell =  new Spell();
var tech = new Technology();

board.place(1,3,'Unit',new Unit(100,15,6,['Thrust'],'Sub_saharan','Chieftan','Title5',10,4),0);

/*
/*
p.obj.attachTo(p,u);
//p.obj.deEquip(u,p);
p.obj.switchEquipment(u,u1);

var spell =  new Spell();
var tech = new Technology();

var u1 = new Entities(100,15,6,['Thrust'],'Subsahara','Sand','Title5',10,4);
*/
