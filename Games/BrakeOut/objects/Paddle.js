
class Paddle extends GameObject
{
    constructor(){
        super(centerPos.x - 75 / 2, canvas.height - 50, 75, 10, 7, 0);

        //右入力
        document.addEventListener("keydown", input => {
            if(input.key === "d"){
                this.position.x += this.speed.dx;
            };
        }, false);

        //左入力
        document.addEventListener("keydown", input => {
            if(input.key === "a"){
                this.position.x -= this.speed.dx;
            };
        }, false);

        //マウスドラッグ
        document.addEventListener("mousemove", move=>{
            const relativeX = move.clientX - canvas.offsetLeft;
            if(relativeX > 0 && relativeX < canvas.width){
                this.position.x = relativeX - this.size.width / 2;
            }
        })
    }

    Update(){
        //壁との当たり判定
        const limitRight = canvas.width - this.size.width;
        const prePosX = this.position.x;

        this.position.x = Math.max(0, Math.min(limitRight, this.position.x));
        if(this.position.x < 0 || this.position.x > limitRight){
            this.position.x = prePosX;
        }
    }
    
    Draw(){
        ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.fillStyle = "blue";
    }
}