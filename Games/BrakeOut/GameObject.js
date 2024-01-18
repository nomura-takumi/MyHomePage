
class GameObject
{
    constructor(posX, posY, width, height, speedX, speedY){
        this.position = {x: posX, y: posY}
        this.size = {width: width, height: height}
        this.speed = {dx: speedX, dy: speedY}
    }

    Update(){}
    Draw(){}
}