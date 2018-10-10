var canvas;
var stars = [];
function setup(){
         canvas = createCanvas(windowWidth,10*windowHeight)
 
 canvas.position(0,0);
    canvas.style('z-index','-1')
    
    
    
    for(var i = 0; i < 1000;i++){
        stars[i] = new Star(10);
        
    }
    
    }
    function draw(){

        background(0);
        // canvas.position(0,mouseY);
        for(var i = 0; i < stars.length;i++){
        stars[i].display();
            if(stars[i].x > width){
                stars.slice(i,1);
                stars[i] = new Star(0);
            }
        
    }

    }







class Star{
    constructor(x){
        if(x === 0){
            this.x = x;
        }else{   this.x = random(width)}
     
        this.y = random(height)
        this.scl = random(0,5)
    }
    display(){
        this.x = this.x + 1/6*this.scl    
        ellipse(this.x,this.y,this.scl,this.scl)
        
    }
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}