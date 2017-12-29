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
        sf_e00: {
                    description: 'Man stands at opening to Shallow Fane',
                    navDescrip: 'The gate to the Shallow Fane',
                    current: 'main_00',
                    navOpt: ['e01']
                },
        sf_e01: {
                    description: 'Enters gate to the Shallow Fane, heads down the stairs',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'main_01',
                    navOpt: ['e00', 'e02']
                },
        sf_e02: {
                    description: 'At the foot of stairs, enters giant cavern. Burrow to right, cairns to left, temple ahead.',
                    current: 'main_02',
                    navOpt: ['e02', 'c00', 't00', 'b00']
                },
        sf_b00: {
                    description: 'Inside of burrow enterance, hear scrabbling.',
                    current: 'main_02',
                    navOpt: ['b01']
                },
        sf_b01: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: ['b00', 'b02']
                },
       sf_b02: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: ['b01']
                },
        sf_b03: {
                description: 'Uh, oh, burrow bugs!',
                current: 'burrow_00',
                navOpt: ['b01', 'b05','b04']
            },
        sf_b04: {
                description: 'Uh, oh, burrow bugs!',
                current: 'burrow_00',
                navOpt: ['b03','b06']
            },
        sf_b05: {
                description: 'Uh, oh, burrow bugs!',
                current: 'burrow_00',
                navOpt: ['t03', 'b03']
            },
        sf_b06: {
                description: 'Uh, oh, burrow bugs!',
                current: 'burrow_00',
                navOpt: []
            },
        sf_b07: {
                description: 'Uh, oh, burrow bugs!',
                current: 'burrow_00',
                navOpt: []
            },
        sf_b08: {
                description: 'Uh, oh, burrow bugs!',
                current: 'burrow_00',
                navOpt: []
            },
        sf_t00: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: []
                },
        sf_t00: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: []
                },
        sf_t01: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: []
                },
        sf_t02: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_t03: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_t04: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_t05: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_t06: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_tb0: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_tr0: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c00: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c01: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c02: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c03: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c04: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c05: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c06: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c07: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c08: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c09: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_c10: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                },
        sf_cr0: {
                    description: 'Uh, oh, burrow bugs!',
                    current: 'burrow_00',
                    navOpt: [ ]
                }
};
    
    //// FUNCTIONS ////
    
        function loadNavButtons(curRoom){
        var buttons = document.querySelector('#buttonContainer')
        
        buttons.innerHTML = '';
        
        
        
        curRoom.navOpt.forEach(function(cur){
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

