const ACCELERATION_X = 0.15
const ACCELERATION_Y = 0.25
class Game{
    constructor(context, width, height){
        this.context = context;
        this.width = width;
        this.height = height;
        this.map = new Map(this.context);
        this.key = new Key();
        this.player = new Player(this.context, this.width/2 , this.height/2, this.width, this.height);
        this.gravity = new Vector(0, 0.15) //grawitacja
        this.uplift = new Vector(0, -0.26)
        this.water = 300; //y wody 


    }

    setup(){


    }

    update(){       
        this.player.acceleration.zero();
        this.keyManager();     
        this.waterManager();
        this.player.acceleration.addVec(this.gravity);         //zwiększanie przyśpieszenia
        this.player.update();
        
        
    }

    keyManager(){ //obsługa klawiszy
        if(this.key.isPressed(KEY_UP)){
            this.player.acceleration.addScalarY(-ACCELERATION_Y); //lot do góry
        }

        if(this.key.isPressed(KEY_LEFT)){
            this.player.acceleration.addScalarX(-ACCELERATION_X); //w lewo
        }

        if(this.key.isPressed(KEY_RIGHT)){
            this.player.acceleration.addScalarX(ACCELERATION_X); //prawo
        }

        if(this.key.isPressed(KEY_DOWN)){
            this.player.acceleration.addScalarY(ACCELERATION_Y); //w dół
        }
    }

    waterManager(){ //woda
        if(this.player.position.y > this.water){
            this.player.acceleration.addVec(this.uplift); //wypór wody
        }
    }

    waterRender(){
        this.context.beginPath();        
        this.context.globalAlpha = 0.7;
        this.context.rect(0,this.water, this.width, this.height-this.water);
        this.context.fillStyle = "#2e5cb8";
        this.context.fill();


        this.context.globalAlpha = 1;
        this.context.moveTo(0, this.water);        
        this.context.lineTo(this.width, this.water);
        this.context.stroke();
    }

    clearScreen(){
        this.context.fillStyle = '#b8b894'; //FIXME
        this.context.fillRect(0, 0, this.width, this.height);
    }

    render(){
        this.clearScreen();
        this.map.render();        
        this.player.render();        
        this.waterRender();
    }

    
}