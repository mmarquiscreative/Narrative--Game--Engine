//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ROOM CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var roomController = (function(){
    
    //// VARIABLES ////
        var rooms = {
        
        /* save for later:         main_00: 'The old wander\'s bony fingers felt brittle through the thin fabric of his worn gloves. The waves of frigid sensation massaging his hands mirrored the chill dread which began coursing through his heart, as he finally stood at the first threshold of the Shallow Fane. It vaulted far above, contracting in perspective and fading into the darkness of the cavernous underground—far outside the reach of his impoverished, spattering torch. \nNo part of him wished to move forward, but he knew he must. Lest he loose everything that held meaning to him. \nHe thought briefly of turning back, returning to the surface. It would only take a few hours, and he could be breathing the fresh, free-moving air of that place again. The smell of the mountains. The sound of the creeks and rivers. Smells and sounds to replace the dank, metalic ozone stink and despondant dripping and cold stone-scraping of this realm. \nA spear of anxiety shot through his gut as he realized he could no longer feel the pendant he had wrapped around his hand—her pendant. A glance down calmed him as he saw it resting there still, the light quartz nearly black in the darkness, specks of fire glancing off it\'s surface from the torch. The old man sighed, wearily, tired. Was he strong enough to do this? He\'d be dead soon, another winter or two at most, surely. Who was he to attempt this? \nBut...if not him, then whom? There was no one else. He clenched his jaw and faced the gaping dark gate before him.\nWith grim, uncertain resolve he made his decision.',
        */
            
            
        /*main_00: {
                    description: 'Man stands at opening to Shallow Fane',
                    isBattle: false,
                    enemyArray: [],
                    hasChest: false,
                    chestContents: [],
                    hasRelic: false,
                    whichRelic: [],
                    hasInteract: false,
                    interactArray: []
                },*/
        
        
        // standing at the enterance to the Shallow Fane
        main_00: {
                    description: 'Man stands at opening to Shallow Fane',
                    current: 'main_00',
                    forwardOpt: ['main_00', 'main_01']
                },
        main_01: {
                    description: 'Enters gate to the Shallow Fane, heads down the stairs',
                    current: 'main_01',
                    forwardOpt: ['main_00', 'main_02']
                },
        main_02: {
                    description: 'At the foot of stairs, enters giant cavern. Burrow to right, cairns to left, temple ahead.',
                    current: 'main_02',
                    forwardOpt: ['main_01', 'burrow_00', 'cairn_00', 'temple_00']
                },
        burrow_00: {
                    description: 'Inside of burrow enterance, hear scrabbling.',
                    current: 'main_02',
                    forwardOpt: ['main_02', 'burrow_01']
                },
        burrow_01: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    forwardOpt: ['burrow_02']
                },
        burrow_02: {
                    description: 'burrow_02 Uh, oh, burrow bugs!',
                    current: 'burrow_01',
                    forwardOpt: ['burrow_02a', 'burrow_03', 'burrow_02b']
        },
        burrow_03: {
                    description: 'burrow_03 Uh, oh, burrow bugs!',
                    current: 'burrow_02',
                    forwardOpt: ['burrow_02a', 'burrow_03', 'burrow_02b']
        },
        burrow_04: {
                    description: 'burrow_04 Uh, oh, burrow bugs!',
        },
        burrow_05: {
                    description: 'burrow_05 Uh, oh, burrow bugs!',
        },
        burrow_02a: {
                    description: 'burrow_02a Uh, oh, burrow bugs!',
        },
        burrow_02b: {
                    description: 'burrow_02b Uh, oh, burrow bugs!',
        }
    };
    
    //// FUNCTIONS ////
    
        function loadNavButtons(curRoom){
        var buttons = document.querySelector('#buttonContainer')
        
        buttons.innerHTML = '';
        
        
        
        curRoom.forwardOpt.forEach(function(cur){
            buttons.innerHTML += '<button id="' + cur + '">Forward to: ' + cur + '</button>'
        });
        buttons.addEventListener('click', function(event, target){
            
            runRoom(rooms[event.target.id]);
            console.log(event.target.id)
            
            
        });
        
        
        
        
    };
    
    function runRoom(curRoom){
        var tempRoomObj = curRoom;
        console.log(tempRoomObj);
        console.log(curRoom.description);
        
        loadNavButtons(tempRoomObj);
        
    };
    
    
    
    return {
        rooms: rooms,
       runRoom: runRoom
    }
})();

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// DATA CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var dataController = (function(){
    
    //// VARIABLES ////
   
    var enemies = {
        
    };
    

    

    
   function Enemy(){
       this.health = 100;
       this.attack = 15;
   };
    
    
    function DarkEnemy(weakness, strength, strMult, defMult){
        this.weakness = weakness;
        this.strength = strength;
        this.attack = Math.round(this.attack * strMult);
        this.health = Math.round(this.health * defMult);
    }
    
    DarkEnemy.prototype = new Enemy;
    
    var testEnemy = new DarkEnemy('Light', 'Dark', 1.1, 0.3);
    var testEnemy2 = new DarkEnemy('Light', 'Dark', 1.3, 2.3);
    
    console.log(testEnemy);
    console.log(testEnemy2);
    
    function Room(description, isBattle, enemyArray, hasChest, chestContents, hasRelic, whichRelic, hasInteract, interactArray){
        this.description = description;
        this.isBattle = isBattle;
        this.enemyArray = enemyArray;
        this.hasChest = hasChest;
        this.chestContents = chestContents;
        this.hasRelic = hasRelic;
        this.whichRelic = whichRelic;
        this.hasInteract = hasInteract;
        this.interactArray = interactArray;
    };
    
    
    
    
    
    
    //// FUNCTIONS ////
    
    
    return {
    }
})();



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// UI CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var UIController = (function(){
    
    //// VARIABLES ////
    
    
    //// FUNCTIONS ////
    function listToArray(nodeList){
        var tempList, newArray;
        tempList = nodeList;
        newArray = [];
        console.log(newArray);
        
        for (i = 0; i < nodeList.length; i++){
            newArray[i] = nodeList[i];
        };
        return newArray;
    };
    
    return {
       
    }
})();



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// APP CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var appController = (function(roomCtrl, dataCtrl, UICtrl){
    
    //// VARIABLES ////
    
    
    //// FUNCTIONS ////
    function innit(){
      console.log('innit run');
    console.log(roomCtrl.rooms);
        roomCtrl.runRoom(roomCtrl.rooms.main_00);
    };
    
    return {
       innit: innit
    }
})(roomController, dataController, UIController);

appController.innit();






//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// CODE Tools >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//// XXXXXXXXXXX ////


// START... //// xxTITLExx xxDescriptionxx //////////////// M.M.

// ...END //// xxTITLExx xxDescriptionxx //////////////// M.M.

