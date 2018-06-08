const PLAYER_WIDTH = 64//42;
const PLAYER_HEIGHT = 64//34;

class Player {
    constructor(context, x, y, width, height) {
        this.context = context;
        this.position = new Vector(x, y);
        this.velocity = new Vector();
        this.acceleration = new Vector();
        this.windowWidth = width;
        this.windowHeight = height;
        this.sprite = document.getElementById("sprite");
    }

    update() {
        this.velocity.addVec(this.acceleration); //zmiana v.prędkości na podstawie przyśpieszenia

        this.velocity.multiplyScalarX(0.97); //siła oporu
        this.velocity.multiplyScalarY(0.97); 

        //TODO sprawdzanie prędkości
        this.position.addVec(this.velocity) //zmiana pozycji  o wektor prędkości
        this.windowBorders(); //ograniczenie okna


    }

    windowBorders() {

        if (this.position.y < 0) { 
            this.position.y = 0;
        }

        if (this.position.x < 0) {
            this.position.x = 0;
        }

        if (this.position.x > this.windowWidth) {
            this.position.x = this.windowWidth;
        }

        if (this.position.y > this.windowHeight * 1.5) {
            this.position.y = this.windowHeight * 1.5
        }
    }

    debug() {
        this.context.beginPath();
        this.context.globalAlpha = 1;
        this.context.rect(this.position.x - PLAYER_WIDTH / 2, this.position.y - PLAYER_HEIGHT / 2, PLAYER_WIDTH, PLAYER_HEIGHT)
        this.context.fillStyle = "#b35900";
        this.context.fill();
        this.context.stroke();

    }

    render(){
        this.context.beginPath();
        this.context.globalAlpha = 1;
        this.context.drawImage(this.sprite, this.position.x - PLAYER_WIDTH / 2, this.position.y - PLAYER_HEIGHT / 2,);
    }



}