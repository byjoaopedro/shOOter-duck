function createAnimation (){

    let i1 = new Image();
    let i2 = new Image();
    let i3 = new Image();
    let i4 = new Image();
    let i5 = new Image();
    let i6 = new Image();
    let a1 = new Image();
    let a2 = new Image();
    let a3 = new Image();
    let a4 = new Image();
    let a5 = new Image();
    let a6 = new Image();

    a1.src = "./src/img/a1.png"
    a2.src = "./src/img/a2.png"
    a3.src = "./src/img/a3.png"
    a4.src = "./src/img/a4.png"
    a5.src = "./src/img/a5.png"
    a6.src = "./src/img/a6.png"
    i1.src = "./src/img/i1.png"
    i2.src = "./src/img/i2.png"
    i3.src = "./src/img/i3.png"
    i4.src = "./src/img/i4.png"
    i5.src = "./src/img/i5.png"
    i6.src = "./src/img/i6.png"

    i1.width = i1.height = i2.width = i2.height = i3.width = i3.height = 96;
    
    var duck = {

        framesR: [i1, i2, i1, i3],
        framesL: [i4, i5, i4, i6],
        framesAOnR: [a1, a2, a1, a3],
        framesAOnL: [a4, a5, a4, a6],
        frameCount: 0,
        frameNumber: 0,

        animationDirection: true,
        armed: false,

        changeDirection: function(value) {
            this.animationDirection = value;
        },

        getArmed: function(value) {
            duck.armed = value;
        },

        getArmedValue: function(){
            return this.armed;
        },

        draw: function(canvas, posX, posY) {

            let image;
    
            console.log(this.armed)
    
            if(this.animationDirection){
    
                if(this.armed === true){
                    image = this.framesAOnR[duck.frameNumber];

                }else{
                   image = this.framesR[duck.frameNumber];
                }
                
            }else{
                
                if(this.armed === true){
                    image = this.framesAOnL[duck.frameNumber];

                }else {
                    image = this.framesL[duck.frameNumber];
                }
            }
    
            canvas.drawImage(image, posX, posY)
        },

        updateInfos: function(){
            this.frameCount++;
    
            if(this.frameCount > 3){
                this.frameNumber++;
                this.frameCount = 0;
            }
    
            if(this.frameNumber > 3) {
                this.frameNumber = 0;
            }
        }
    };

    return {
        duck,
    }
}

export default createAnimation;