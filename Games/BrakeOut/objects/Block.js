
class Block extends GameObject
{
    constructor(x, y, ballInstance){
        super(25, 50, 75, 20, 0, 0);
        this.offsetX = 5;
        this.offsetY = 5;
        this.alive = true;

        this.position.x += x * (this.size.width + this.offsetX);
        this.position.y += y * (this.size.height + this.offsetY);

        this.pBall = ballInstance;
    }

    Update(){
        //ボールとの当たり判定
        if(this.alive){
            if(this.pBall.position.x > this.position.x && this.pBall.position.x < this.position.x + this.size.width){
                if(this.pBall.position.y > this.position.y && this.pBall.position.y < this.position.y + this.size.height){
                    this.alive = false;
                    this.pBall.speed.dy *= -1;

                    score += 100;
                }
            }
        }
    }
    
    Draw(){
        if(this.alive){
            ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
            ctx.fillStyle = "red";
        }
    }
}