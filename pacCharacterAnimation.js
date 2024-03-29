var pos = 0;
const pacArray = [
    'images/PacMan.png', //from MIT xPrp source code
    'images/blueGhost.png', //from http://www.pngwing.com
    'images/redGhost.png', //from http://www.stickpng.com 
    'images/yellowGhost.png' //from http://www.stickpng.com
];
var direction = 0;
const pacCharacters = []; // This array holds all the characters

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}
// Factory to make a PacMan at a random position with random velocity
function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(400);
    // Add image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = pacArray[Math.floor(Math.random()* 4)];
    //if newimg.src = PacArray[0]
    newimg.width = 50;
    newimg.style.left = position.x;
    newimg.style.top = position.y;

    // add new Child image to game        
    game.appendChild(newimg);
    // return details in an object
    return {
        position,
        velocity,
        newimg
    }
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacCharacters.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    let w = window.innerWidth;
    let h = window.innerHeight
    // let pacManInfo = document.getElementById('img').getBoundingClientRect(); 

    // detect collision with all walls and make pacman bounce
    //
    if (item.position.x <= 0 || (item.position.x + item.newimg.width) > w) {
        item.velocity.x = -item.velocity.x;
    }
    if (item.position.y <= 0|| (item.position.y + item.newimg.height) > h) {
        item.velocity.y = -item.velocity.y;
    }
}
function makeOne() {
    pacCharacters.push(makePac()); // add a new PacMan
}
