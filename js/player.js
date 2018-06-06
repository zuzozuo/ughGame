const PLAYER_WIDTH = 42;
const PLAYER_HEIGHT = 34;

class Player{
    constructor(context, x, y){
        this.context = context;
        this.position = new Vector(x,y);
        this.velocity = new Vector();
        this.acceleration = new Vector();
    }

    update(){
        this.velocity.addVec(this.acceleration); //zwiększanie v.preędkości

        this.velocity.multiplyScalarX(0.97);
        this.velocity.multiplyScalarY(0.97);       
        //TODO sprawdzanie prędkości
        this.position.addVec(this.velocity)
        
    }

    render(){
        this.context.beginPath();
        this.context.rect(this.position.x - PLAYER_WIDTH/2, this.position.y - PLAYER_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT)
        this.context.stroke();
        
    }

    

}