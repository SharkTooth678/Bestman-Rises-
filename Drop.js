class drop {
 constructor(x,y){
     
 }

 update(){
     if(this.rain.position.y > height){

          Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
     }


 }


}