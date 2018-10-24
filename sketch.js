

var canvas;
var img;
var stars = [];

function preload() {

}
function setup(){
         canvas = createCanvas(windowWidth,10*windowHeight)
   img = loadImage("fotos/hentai.png");
 canvas.position(0,0);
    canvas.style('z-index','-1')
    
   ship = new Ships(0);
    
    for(var i = 0; i < 1000;i++){
        stars[i] = new Star(10);
        
    }
    
    }
    function draw(){

        background(0);
      image(img, 0, 100);
        // canvas.position(0,mouseY);
        for(var i = 0; i < stars.length;i++){
        stars[i].display();
            if(stars[i].x > width){
                stars.slice(i,1);
                stars[i] = new Star(0);
            }
        
    }
         ship.display(); 

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


class Ships{
    
    cosntructor(x){
           this.x = x;
  
        this.y = 10;
        this.scl = 300; 
        
        
    }
    display(){
        this.x = this.x + 1/6*this.scl    
        image(img,this.x,this.y,this.scl,this.scl)
        
    }
    
    
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}