const BLACK = '#000000'; //0
const GREEN = '#00FF00'; //10
const RED = '#FF0000'; //11
const BLUE = '#0000FF'; //12

const gameScreen = document.getElementById('gameScreen');

let canvas, ctx; 

const player = {
    vision: 10,
    pos: {
        x: 20,
        y: 20
    },
    vel: {
        x: 0,
        y: 0
    }
}

const gameMap = {
    width: 40,
    height: 40,
    map: []
}

function init() {
    gameScreen.style.display = "block";
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 600;
    const size = canvas.width / gameMap.width;
    var map = [];

    for (var i = 0; i < gameMap.width; i++){
        let tempArr = [];
        for (var j = 0; j < gameMap.height; j++){
            tempArr.push(10);
        }
        map.push(tempArr);
    }

    var x = Math.floor(Math.random() * gameMap.width);
    var y = Math.floor(Math.random() * gameMap.height);

    var startX = x - Math.floor(Math.random() * 4);
    startX = startX < 0 ? 0 : startX;
    var endX = x + Math.floor(Math.random() * 4);
    endX = endX < 0 ? 0 : endX;

    var startY = y - Math.floor(Math.random() * 4);
    startY = startY < 0 ? 0 : startY;
    var endY = y + Math.floor(Math.random() * 4);
    endY = endY < 0 ? 0 : endY;
    console.log(startY + " " + endY + " " + startX + " " + endX);
    for (var i = startX; i < endX; i++){
        for (var j = startY; j < endY; j++){
            map[j][i] = 12;
        }
    }
    map[player.pos.y][player.pos.x] = 0;
    gameMap.map = map;
    for (var i = 0; i < gameMap.width; i++){
        for (var j = 0; j < gameMap.height; j++){
            var debug = gameMap.map[j][i];
            if (debug != 10){
                console.log(debug);
            }
            
            switch (gameMap.map[j][i]){
                case 0:
                    ctx.fillStyle = BLACK;
                    ctx.fillRect(i*size,j*size,size, size);
                    break;
                case 10:
                    ctx.fillStyle = GREEN;
                    ctx.fillRect(i*size,j*size,size, size);
                    break;
                case 12:
                    ctx.fillStyle = BLUE;
                    ctx.fillRect(i*size,j*size,size, size);
                    break;
            }
        }
    }

    document.addEventListener('keydown', keydown);
}

init();

function keydown(e){
    console.log(e.keycode);
}