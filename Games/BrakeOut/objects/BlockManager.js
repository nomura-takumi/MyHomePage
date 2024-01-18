
class BlockManager
{
    constructor(ballInstance){
        //ブロック生成
        this.blockRows = 3;
        this.blockColumns = 5;

        this.pBlocks = []; 
        for(let y = 0; y < this.blockColumns; y++){
            this.pBlocks[y] = [];
            for(let x = 0; x < this.blockRows; x++){
                this.pBlocks[y][x] = new Block(x, y, ballInstance);
            }
        }
    }

    Update(){
        let blockCount = 0;
        this.pBlocks.forEach(col => {
            col.forEach(row =>{
                row.Update();

                if(row.alive){blockCount++;}
            });
        });

        //ゲームクリア処理
        if(blockCount <= 0){
            clearInterval(GameLoop);
            setTimeout(()=>{alert("GameClear!!!");},100);
        }
    }

    Draw(){
        this.pBlocks.forEach(col => {
            col.forEach(row =>{
                row.Draw();
            });
        });
    }
}