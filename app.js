//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Battle CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var battleController = (function(){
    
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

// ROOM CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var roomController = (function(){
    
    
    function Enemy(){
       this.health = 100;
       this.attack = 15;
        this.curAttack = function(){
            return (this.lvl * this.attack * Math.round(this.strMult));
        };
        this.curHealth = function(){
            return (this.lvl * this.health * Math.round(this.defMult));
        };
    };
    
    function Family(statusEffect, statusResist){
            this.statusEffect = statusEffect;
            this.statusResist = statusResist;
    };
    
Family.prototype = new Enemy();
    
    // Families
    var insect = new Family ('miasma', 'poison');
    var vermin = new Family ('Ill', 'Bleed')
    
    
    // Species
    
    // Barrow Bug Worker/////////////////
    function BarrowBugWorker(lvl, element){
        this.lvl = lvl;
        this.abilities = ['buzz', 'drone'];
        this.passives = ['hive mind'];
        this.attacks = ['bite', 'spit goo'];
        this.element = element;
        this.strMult = 1.1;
        this.defMult = 1.6;
    };
    
    // add family to prototype
    BarrowBugWorker.prototype = insect;
    
    
    // Barrow Bug Soldier/////////////////
    function BarrowBugSoldier(lvl, element){
        this.lvl = lvl;
        this.abilities = ['buzz', 'drone'];
        this.passives = ['hive mind'];
        this.attacks = ['bite', 'spit goo'];
        this.element = element;
        this.strMult = 1.5;
        this.defMult = 1.8;
    };
    
    // add family to prototype
    BarrowBugSoldier.prototype = insect;
    
    
    // Barrow Bug Soldier/////////////////
    function BarrowBugQueen(lvl, element){
        this.lvl = lvl;
        this.abilities = ['buzz', 'drone'];
        this.passives = ['hive mind'];
        this.attacks = ['bite', 'spit goo'];
        this.element = element;
        this.strMult = 2.5;
        this.defMult = 2.0;
    };
    
    // add family to prototype
    BarrowBugQueen.prototype = insect;
    
    
    // Rat /////////////////
    function Rat(lvl, element){
        this.lvl = lvl;
        this.abilities = ['Fleas', 'Squeak'];
        this.passives = ['Hanta Virus'];
        this.attacks = ['Nibble', 'Claw'];
        this.element = element;
        this.strMult = 1.3;
        this.defMult = 1.2;
    };
    
    // add family to prototype
    Rat.prototype = vermin;

    
     // Rat King /////////////////
    function RatKing(lvl, element){
        this.lvl = lvl;
        this.abilities = ['Fleas', 'Squeak'];
        this.passives = ['Hanta Virus'];
        this.attacks = ['Nibble', 'Claw'];
        this.element = element;
        this.strMult = 3.3;
        this.defMult = 2.2;
    };
    
    // add family to prototype
    RatKing.prototype = vermin;
    
    
    var bugTest = new BarrowBugWorker(5, 'Dark');
    var ratTest = new Rat(2, 'Earth');

    console.log(bugTest.curHealth());
    console.log(bugTest.curAttack());
    console.log(ratTest);
    
    // combine a specific family object and element object into a new object to be added to a species' prototype
    function combineFamilyEl(familyObj, elObj){
        var returnObj = Object.assign(familyObj, elObj);
        return returnObj;
    }
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
                    navOpt: ['e01'],
                    enemies: [new Rat(2, 'Earth'), new BarrowBugWorker(4, 'Earth')]
                },
        sf_e01: {
                    description: 'Enters gate to the Shallow Fane, heads down the stairs',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'main_01',
                    navOpt: ['e00', 'e02'],
                    enemies: [new BarrowBugWorker(2, 'Earth'), new Rat(4, 'Earth')]
                },
        sf_e02: {
                    description: 'At the foot of stairs, enters giant cavern. Burrow to right, cairns to left, temple ahead.',
                    navDescrip: 'The large open cavern showing the enterance to the burrow, the cairn trail, and the temple.',

                    current: 'main_02',
                    navOpt: ['e02', 'c00', 't00', 'b00'],
                    enemies: []
                },
        sf_b00: {
                    description: 'Inside of burrow enterance, hear scrabbling.',
                    navDescrip: 'The stinky, slimy opening to the burrow. Scrabbling sounds inside.',
                    current: 'main_02',
                    navOpt: ['b01'],
                    enemies: ['Barrow Bug', 'Barrow Bug', 'Bat'],
                    enemies: []
                },
        sf_b01: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'Yikes! Two barrow bugs! They look like workers.',
                    current: 'burrow_00',
                    navOpt: ['b00','b03', 'b02'],
                    enemies: []
                },
       sf_b02: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'Crap, you fight a soldier Barrow Bug. A desicated corpse wears some valuable armor.',
                    current: 'burrow_00',
                    navOpt: ['b01'],
                    enemies: [new BarrowBugSoldier(3, 'Earth')]
                },
        sf_b03: {
                description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'More worker bugs. As long as you dont move too quickly they seem ok',
                current: 'burrow_00',
                navOpt: ['b01', 'b05','b04'],
                    enemies: ['Rat', 'Rat', 'Bat']
            },
        sf_b04: {
                description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'Three soldier Barrow Bugs guard this immense storehouse filled with jewels, eggs, and "food"',
                current: 'burrow_00',
                navOpt: ['b03','b06'],
                    enemies: []
            },
        sf_b05: {
                description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'A quiet cross-section of tunnels with a stream of cold, sulpher-tasting water running through it. Husks lie about. A crumbling section of tunnel reveals stonework and torch light on the other side.',
                current: 'burrow_00',
                navOpt: ['t03', 'b03'],
                    enemies: ['Rat', 'Rat', 'Bat']
            },
        sf_b06: {
                description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                current: 'burrow_00',
                navOpt: ['b04', 't03'],
                    enemies: []
            },
        sf_b07: {
                description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                current: 'burrow_00',
                navOpt: ['b08'],
                    enemies: [new BarrowBugQueen(5, 'Earth')]
            },
        sf_b08: {
                description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                current: 'burrow_00',
                navOpt: ['b07', 't04'],
                    enemies: []
            },
        sf_t00: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['e02', 't01'],
                    enemies: []
                },
        sf_t01: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['t00', 't05', 't03'],
                    enemies: []
                },
        sf_t02: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['t06', 'tb0', 't04'],
                    enemies: []
                },
        sf_t03: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['b05', 't01', 't04', 'b06'],
                    enemies: []
                },
        sf_t04: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['t03', 't02', 'b08'],
                    enemies: []
                },
        sf_t05: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['t06', 't01'],
                    enemies: []
                },
        sf_t06: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['t05', 't02'],
                    enemies: []
                },
        sf_tb0: {
                    description: 'All hail the rat king!',
                    navDescrip: 'All hail the Rat king!',
                    current: 'burrow_00',
                    navOpt: ['t02', 'tr0'],
                    enemies: [new RatKing(5, 'Earth')]
                },
        sf_tr0: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['tb0'],
                    enemies: []
                },
        sf_c00: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['b02', 'c01'],
                    enemies: []
                },
        sf_c01: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['c05', 'c02'],
                    enemies: []
                },
        sf_c02: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['c01', 'c03'],
                    enemies: []
                },
        sf_c03: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['c02', 'c04'],
                    enemies: []
                },
        sf_c04: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['c03', 't02'],
                    enemies: []
                },
        sf_c05: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['c06', 'c01'],
                    enemies: []
                },
        sf_c06: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['c05', 'c07'],
                    enemies: []
                },
        sf_c07: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['c06', 'c08'],
                    enemies: []
                },
        sf_c08: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['c09'],
                    enemies: []
                },
        sf_c09: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['c08','c10'],
                    enemies: []
                },
        sf_c10: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['c09', 'cr0'],
                    enemies: []
                },
        sf_cr0: {
                    description: 'Uh, oh, burrow bugs!',
                    navDescrip: 'The stairs to the gate of the Shallow Fane',
                    current: 'burrow_00',
                    navOpt: ['tb0', 'c10'],
                    enemies: []
                }
};
    
    //// FUNCTIONS ////
    
        function loadNavButtons(curRoom){
        var buttons = document.querySelector('#buttonContainer');
        
        buttons.innerHTML = '<p><em>' + curRoom.navDescrip + '</em></p>';
        
        
        
        curRoom.navOpt.forEach(function(cur){
            buttons.innerHTML += '<button id="' + cur + '">Forward to: ' + cur + '</button><br/><br/>' 
        });
    };
    
    
    function runRoom(curRoom){
        
        var tempRoomObj = curRoom;
        console.log(curRoom.description);
        
        // loadNavButtons
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

var playerController = (function(){
    
    //// VARIABLES ////
   
    
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

var appController = (function(roomCtrl, playerCtrl, UICtrl, battleCtrl){
    
    //// VARIABLES ////
    
    
    //// FUNCTIONS ////
    
    
    
    function innitCombat(roomObj){
        console.log(roomObj.enemies);
        var enemyArray = roomObj.enemies;
        
        var playerAttackBtn = document.querySelector('#playerAttackBtn');
        
        playerAttackBtn.classList.remove('hidden');
        playerAttackBtn.addEventListener('click', function(){
            roundCombat(enemyArray);
        });
        
        // round of combat
        
        // check to see if enemy has 0 health
        
        // check to see if player has 0 health
        
        
        roomObj.enemies.forEach(function(cur){
            console.log(cur);
            console.log(cur.curAttack());
            console.log(cur.curHealth());
        });
        
        
    };
    

    
    function roundCombat(playerObj, enemyArray){
        
        // player turn
        
        
        // enemy turns
        
        
    };
    
    function innit(){
        document.querySelector('#buttonContainer').addEventListener('click', function(event, target){
            var roomObj = roomCtrl.rooms[('sf_' + event.target.id)];
            roomCtrl.runRoom(roomObj);
            if(roomObj.enemies.length > 0){
                innitCombat(roomObj);
            };
        });
      console.log('innit run');
    console.log(roomCtrl.rooms);
        roomCtrl.runRoom(roomCtrl.rooms.sf_e00);
        
    };
    
    return {
       innit: innit
    }
})(roomController, playerController, UIController, battleController);

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

