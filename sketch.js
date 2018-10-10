var canvas;
var stars = [];
function setup(){
         canvas = createCanvas(windowWidth,windowHeight)
 
 canvas.position(0,0);
    canvas.style('z-index','-1')
    
    
    
    for(var i = 0; i < 100;i++){
        stars[i] = new Star(10);
        
    }
    
    }
    function draw(){

        background(0);
        for(var i = 0; i < 100;i++){
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