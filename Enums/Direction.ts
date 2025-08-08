enum Direction{
    up,
    down,
    left,
    right
}

function Move (direction){
    console.log(`moving ${Direction[direction].toLowerCase()}`)
}

Move(Direction.left)