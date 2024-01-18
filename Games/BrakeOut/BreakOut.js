
class BreakOut
{
    constructor(){
        //インスタンス生成
        this.pPaddle    = new Paddle();
        this.pBall      = new Ball(10, this.pPaddle);
        this.pBlocks    = new BlockManager(this.pBall);

        this.objects    = [this.pBlocks, this.pPaddle, this.pBall];
    }

    GameLoop = () => {
        //描画クリア
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //オブジェクトごとの処理
        for(const object of this.objects){
            object.Update();

            //描画
            ctx.beginPath();
            object.Draw();
            ctx.fill();
            ctx.closePath();

            ctx.font = "16px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("Score: " + score, 10, 15);
        }
    }
}
