class Vector{
    constructor(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }
//-------------------------------------
    addVec(v){
        this.x += v.x;
        this.y += v.y;

    }

    addScalarX(x){
        this.x += x;
    }

    addScalarY(y){
        this.y += y;
    }

//------------------------------

    subVec(v){
        this.x -= v.x;
        this.y -= v.y;
    }
//------------------------------
    divideVec(v){
        this.x /= v.x;
        this.y /= v.y;
    }

    divideScalar(s){
        this.x /= s;
        this.y /= s;

    }
//---------------------------- 

    multiplyScalarX(x){
        this.x *= x
    }

    multiplyScalarY(y){
        this.y *= y
    }

//------------------------------
  
   
    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }


    zero(){
        this.x = 0;
        this.y = 0;
    }

    /*normalize(){
        var length = this.length();
        if (length === 0) {
            this.x = 1;
            this.y = 0;
        } else {
            this.divideVec(Vector(length, length));
        }
    }*/
    
}