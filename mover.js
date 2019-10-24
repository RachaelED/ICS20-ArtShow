var Mover = function(){
  this.x= 400/4;
  this.y = 400/4;
  
};

Mover.prototype.update = function(){
    this.x+=random(-3,5);
    this.y +=random(-3,4);
};

Mover.prototype.show = function(){
   
    fill(random(40)%100,random(255)%10,random(255)%100);
    noStroke();
  // change x and y coordinates, add random for width and height
    ellipse(this.x - this.x/3, this.y - this.y/7,random(20, 30),random(20, 30));
  // create a group of squares, as well as circles
  fill(random(255)%100,random(255)%10,random(40)%100);
  rect(this.x, this.y, random(30, 50), random(30, 50));
};
