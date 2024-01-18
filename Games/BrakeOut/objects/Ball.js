
class Ball extends GameObject
{
    constructor(radius, paddleInstance){
        super(centerPos.x, paddleInstance.position.y - 10, 10, 2, 2, -2);
        this.radius = radius;
        
        this.pPaddle = paddleInstance;
    }

    Update(){
        this.position.x += this.speed.dx;
        this.position.y += this.speed.dy;
        
        //壁との当たり判定
        const limitRight    = canvas.width - this.radius;
        const limitTop      = 0 + this.radius;
        const limitLeft     = limitTop;
        const limitBottom   = canvas.height - this.radius;

        if(this.position.x > limitRight || this.position.x < limitLeft){ this.speed.dx *= -1;}
        if(this.position.y < limitTop){ this.speed.dy *= -1;}

        //ゲームオーバー処理
        if(this.position.y > limitBottom){
            clearInterval(GameLoop);
            setTimeout(()=>{
                let customDialog = document.createElement("div");
                customDialog.innerHTML = "GameOver...<br><button onclick='location.reload();'>Retry?</button>";
                customDialog.classList.add("game-over");
                document.body.appendChild(customDialog);
            },200);            
        }

        //パドルとの当たり判定
        const paddleRight = this.pPaddle.position.x + this.pPaddle.size.width;
        const paddleBottom = this.pPaddle.position.y + this.pPaddle.size.height;

        if(this.position.x > this.pPaddle.position.x && this.position.x < paddleRight){
            if(this.position.y > this.pPaddle.position.y && this.position.y < paddleBottom){
                this.speed.dy *= -1;
            }
        }
    }

    Draw(){
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "green";
    }
}

function PageReload()
{
    document.location.reload();
}