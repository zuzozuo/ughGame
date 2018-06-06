const ACCELERATION_X = 0.15
const ACCELERATION_Y = 0.25
class Game{
    constructor(context, width, height){
        this.context = context;
        this.width = width;
        this.height = height;
        this.key = new Key();
        this.player = new Player(this.context, this.width/2 , this.height/2);
        this.gravity = new Vector(0, 0.1)
        this.uplift = new Vector(0, -0.2)
        this.water = 300; //y wody

    }

    setup(){


    }

    update(){        
        if(this.key.isPressed(KEY_UP)){
            this.player.acceleration.addScalarY(-ACCELERATION_Y);
        }

        if(this.key.isPressed(KEY_LEFT)){
            this.player.acceleration.addScalarX(-ACCELERATION_X);
        }

        if(this.key.isPressed(KEY_RIGHT)){
            this.player.acceleration.addScalarX(ACCELERATION_X);
        }

        if(this.key.isPressed(KEY_DOWN)){
            this.player.acceleration.addScalarY(ACCELERATION_Y);
        }

        if(this.player.y > this.water){
            this.player.acceleration.addVec(this.uplift);
        }

        this.player.acceleration.addVec(this.gravity);        
        this.player.update();
        
        
    }

    render(){
        this.context.beginPath();
        this.context.moveTo(0, this.water);
        this.context.lineTo(this.width, this.water);
        this.context.stroke();
        this.player.render();
    }

    
}