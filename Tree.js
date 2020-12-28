class Tree{
    constructor(x,y){
this.x=x;
this.y=y;
this.width=450;
this.height=600;
this.thickness=10;

this.image=loadImage("images/tree.png")
this.bottom=Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true})
this.left=Bodies.rectangle(0, this.y-this.height/2, this.thickness, this.height, {isStatic:false})
this.right=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:false})

World.add(world, this.bottom)
World.add(world, this.left)
World.add(world, this.right);

}
display()
{
    var pos=this.bottom.position;
    push();
    translate(pos.x, pos.y+10);
    fill(255);
    imageMode(CENTER);
    image(this.image, 0,-this.height/2,this.width, this.height)
    pop();
    
}

}