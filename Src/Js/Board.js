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
					this.gameBoard[i].push(new Unit('','','','',''));
	
					this.gameBoard[i].push(new Unit('','','','',''));
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
  		  	  case 'Unit':
  		  	   if(posy === 2 || posy === 3){return 'Unit'}
        	  break;
  		  	  default: console.log('Not a Valid Number');
  		  }
  	};
    var r = posOnBoard0(posOnBoard);
   	if(r === typ){
     if(Object.keys(this.gameBoard[posx][posy])[0] === typ){
     	this.gameBoard[posx][posy] = obj }
     }else{console.log('Cannot Place This Unit Here')}
    
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
    //this.setGameRules();

}
