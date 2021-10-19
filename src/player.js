import createTransformation from "./a-transformation.js"
const transformation = createTransformation();

import createAnimation from "./animation.js";
const animation = createAnimation();

let element = document.querySelector("canvas");
let canvas = element.getContext('2d');

function createGame(){

    let acceptedMoves = {

        ArrowUp() {
            player.posY -= player.velocity;
        },
        ArrowDown() {
            player.posY += player.velocity; 
        },
        ArrowRight() {
            player.posX += player.velocity; 
        },
        ArrowLeft() {
            player.posX -= player.velocity; 
        },
        Shift(){
            player.startRunning();
        },
    };

    let acceptedHabilities = {

        x() {
            
            transformation.animateTransformation(canvas, player.posX, player.posY, player.armed);
            player.getArmed();
            //animation.duck.armed = true;

        },

        f(){
            //animation.duck.getDesarmed();
        },
    };

    let state = {

        width: 900,
        height: 900,
        moveKeys: ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Shift"],
        toolKeys: ["x", "f"],
    };

    let player = {

        posX: 0,
        posY: 0,
        velocity: 6,
        armed: false,
        isMoving: false,

        startMoving: function(){
            this.isMoving = true;
        },

        stopMoving: function(){
            this.isMoving = false;           
        },

        startRunning: function(){

            if(this.armed === false){
                this.velocity = 10;
            }
        },

        stopRunning: function(){
            this.velocity = 6;
        },

        getArmed: function(){
            
            this.armed = !this.armed;
            console.log(this.armed)

            if(this.armed){             
                this.velocity = 1;                    
            }else this.velocity = 6;
        },

        movePlayer: function(moviment){
            moviment();
        },

        executateHabilitie: function(hability){
            hability();
        },
    };  

    return {
        state,
        player,
        acceptedMoves,
        acceptedHabilities,
    }
}

export default createGame;