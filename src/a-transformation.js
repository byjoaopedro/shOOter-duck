import createAnimation from "./animation.js";
const animation = createAnimation();

function createTransformation(){

    let t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19;
    let frames = [];
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //function loadImages(){
        
         t1 = new Image();
         t2 = new Image();
         t3 = new Image();
         t4 = new Image();
         t5 = new Image();
         t6 = new Image();
         t7 = new Image();
         t8 = new Image();
         t9 = new Image();
         t10 = new Image();
         t11 = new Image();
         t12 = new Image();
         t13 = new Image();
         t14 = new Image();
         t15 = new Image();
         t16 = new Image();
         t17 = new Image();
         t18 = new Image();
         t19 = new Image();

        t1.src = "./src/img/trans/t1.png";
        t2.src = "./src/img/trans/t2.png";
        t3.src = "./src/img/trans/t3.png";
        t4.src = "./src/img/trans/t4.png";
        t5.src = "./src/img/trans/t5.png";
        t6.src = "./src/img/trans/t6.png";
        t7.src = "./src/img/trans/t7.png";
        t8.src = "./src/img/trans/t8.png";
        t9.src = "./src/img/trans/t9.png";
        t10.src = "./src/img/trans/t10.png";
        t11.src = "./src/img/trans/t11.png";
        t12.src = "./src/img/trans/t12.png";
        t13.src = "./src/img/trans/t13.png";
        t14.src = "./src/img/trans/t14.png";
        t15.src = "./src/img/trans/t15.png";
        t16.src = "./src/img/trans/t16.png";
        t17.src = "./src/img/trans/t17.png";
        t18.src = "./src/img/trans/t18.png";
        t19.src = "./src/img/trans/t19.png";

        frames = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19];
    
    let image;
    let index = 0;

    function animateTransformation(canvas, posX, posY, cond){
    
        if(cond) return;

        if(index == 19){
            index = 0;
            return;
        }

        canvas.clearRect(0, 0, 1800, 720);
        image = frames[index];
        index++;
            
        canvas.drawImage(image, posX, posY);

        sleep(60).then(() => {

            animateTransformation(canvas, posX, posY);
        })
            
    }
    
    return {
        animateTransformation,
    }
}

export default createTransformation;