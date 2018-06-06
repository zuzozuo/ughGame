const PLAYER_WIDTH = 42;
const PLAYER_HEIGHT = 34;

class Player{
    constructor(context, x, y){
        this.context = context;
        this.x = x;
        this.y = y;
        this.velocity = new Vector();
        this.acceleration = new Vector();


    }

    update(){
        this.velocity.addVec(this.acceleration);

        this.velocity.multiplyScalarX(0.97);
        this.velocity.multiplyScalarY(0.97);       
        //TODO sprawdzanie prędkości
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.acceleration.x = 0;
        this.acceleration.y = 0;


        
    }

    render(){
        this.context.beginPath();
        this.context.rect(this.x - PLAYER_WIDTH/2, this.y - PLAYER_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT)
        this.context.stroke();
        
    }

    

}