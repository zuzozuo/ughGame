const MAP_TILES_HORIZONTAL = 20;
const MAP_TILES_VERTICAL = 16;
const MAP_TILE_WIDTH = 32;
const MAP_TILE_HEIGHT = 24;

class Map{
    constructor(context){

        this.context = context;
        this.tiles = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]

    }

    update(){

    }

    collisionWithPlayer(minPlayerX, minPlayerY, playerW, playerH){
        for(let y = 0; y < this.tiles.length; y++){
            for(let x = 0; x < this.tiles[y].length; x++){
                if(this.tiles[y][x] == 1){
                    let minRectX = x * MAP_TILE_WIDTH;
                    let minRectY = y * MAP_TILE_HEIGHT;
                    let maxRectX = minRectX + MAP_TILE_WIDTH;
                    let maxRectY = minRectY + MAP_TILE_HEIGHT;

                    let maxPlayerX = minPlayerX + playerW;
                    let maxPlayerY = minPlayerY + playerH;

                    if(maxPlayerX <  minRectX){continue;}
                    if(minPlayerX > maxRectX){continue;}
                    if(maxPlayerY < minRectY){continue;}
                    if(minPlayerY > maxRectY){continue;}

                    console.log("Kolizja z " + y  + " " + x)
                }                
            }
        }
    }


    render(){

        for(let i = 0; i < this.tiles.length; i++){ //rysowanie kafelkow
            for(let j = 0; j < this.tiles[i].length; j++){
                if(this.tiles[i][j] == 1){
                    this.context.beginPath();
                    this.context.globalAlpha = 1;
                    this.context.rect(j * MAP_TILE_WIDTH, i * MAP_TILE_HEIGHT, MAP_TILE_WIDTH-1, MAP_TILE_HEIGHT)
                    this.context.fillStyle = "#996633";
                    this.context.fill();
                    this.context.stroke();
                }                
            }

        }

    }
}