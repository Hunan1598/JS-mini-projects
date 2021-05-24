// Canvas progress Homework 

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: 'red'

// };
// function draw(){
// ctx.fillStyle = data.fillStyle;
// ctx.fillRect(data.x, data.y, data.width, data.height);
// }


// function loop(){
//     requestAnimationFrame(loop);
//     data.x += 5;
//     draw();
// }
// loop()
// Canvas progress Homework  End


//Homework 2

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: 'red'

// };

// let xDelta = 5;
// let yDelta = 5;

// function update(){
    
//     if(data.x + data.width > canvas.width || data.x < 0){
//         xDelta *= -1;
//     }
//     if(data.y + data.height > canvas.height || data.y < 0){
//         yDelta *= -1;
//     }
//     data.x += xDelta;
//     data.y += yDelta;
// }




// function draw(){
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.fillStyle = data.fillStyle;
// ctx.fillRect(data.x, data.y, data.width, data.height);
// }


// function loop(){
//     requestAnimationFrame(loop);
    
//     update();
//     draw();
// }
// loop()

//Homework 2 End


                    //Snake game Homework 3
// let canvas = document.getElementById('game');
// let ctx = canvas.getContext('2d');

// class SnakePart{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;

//     }
// }

// let speed = 7;

// let tileCount = 20;
// let tileSize = canvas.width / tileCount -2;

// let headX = 10;
// let headY = 10;
// const snakeParts = [];
// let tailLength = 2;

// let appleX = 5;
// let appleY = 5;


// let xVelocity=0;
// let yVelocity=0;

// let score = 0;


// function drawGame(){
//     changeSnakePosition();
//     let result = isGameOver();
//     if(result){
//         return;
//     }


//     clearScreen();
    
//     checkAppleCollision();
//     drawApple();
//     drawSnake();
//     drawScore();
//     setTimeout(drawGame, 700/ speed);

// }

// function isGameOver(){
//     let gameOver = false;

//     if(yVelocity ===0 && xVelocity ===0){
//         return false;
//     }

//     //Walls
//     if(headX < 0){
//         gameOver = true;
//     }
//     else if(headX === tileCount){
//         gameOver = true
//     }

//     else if(headY < 0){
//         gameOver = true
//     }
//     else if(headY === tileCount){
//         gameOver = true
//     }

//     for(let i = 0; i < snakeParts.length; i++){
//         let part = snakeParts[i];
//         if(part.x === headX && part.y === headY){
//             gameOver = true;
//             break;
//         }
//     }




//     if(gameOver){
//         ctx.fillStyle = 'white';
//         ctx.font = '50px Verdana';



//         let gradient = ctx.createLinearGradient(0,0,canvas.width,0)
//         gradient.addColorStop('0', 'magenta');
//         gradient.addColorStop('0.5', 'blue');
//         gradient.addColorStop('1.0', 'red');
//         ctx.fillStyle = gradient;

//         ctx.fillText('Game Over!',canvas.width / 6.5, canvas.height / 2)
//     }

//     return gameOver;
// }


// function drawScore(){
//     ctx.fillStyle = 'white';
//     ctx.font = '10px Verdana'
//     ctx.fillText('Score' + score, canvas.width-50, 10);
// }

// function clearScreen(){
//     ctx.fillStyle = 'black';
//     ctx.fillRect(0,0,canvas.width, canvas.height);
// }

// function drawSnake(){
    

//     ctx.fillStyle = 'green';
//     for(let i = 0; i < snakeParts.length; i++){
//         let part = snakeParts[i];
//         ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)

//     }
//     snakeParts.push(new SnakePart(headX,headY));
//     while (snakeParts.length > tailLength){
//         snakeParts.shift();
//     }
//     ctx.fillStyle = 'orange'
//     ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize)

// }



// function changeSnakePosition(){
//     headX  = headX + xVelocity;
//     headY = headY + yVelocity;

// }

// function drawApple(){
//     ctx.fillStyle = 'red';
//     ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize)
    
// }

// function checkAppleCollision(){
//     if(appleX === headX && appleY == headY){
//         appleX = Math.floor(Math.random() * tileCount);
//         appleY = Math.floor(Math.random() * tileCount);
//         tailLength++;
//         score++;
//     }
// }



// document.body.addEventListener('keydown',keydown);

// function keydown(event){
//     //UP
//     if(event.keyCode == 38){
//         if(yVelocity == 1)
//         return;
//         yVelocity = -1;
//         xVelocity = 0;
//     }
//     //DOWN
//     if(event.keyCode == 40){
//         if(yVelocity == -1)
//         return;
//         yVelocity = 1;
//         xVelocity = 0;
//     }
//     //Left
//     if(event.keyCode == 37){
//         if(xVelocity == 1)
//         return;
//         yVelocity = 0;
//         xVelocity = -1;
//     }
//     //Right
//     if(event.keyCode == 39){
//         if(xVelocity == -1)
//         return;
//         yVelocity = 0;
//         xVelocity = 1;
//     }
// }


// drawGame();
               //Snake Game End 






               //start homework



    // function calc(){
    //     let a = document.querySelector('#value1').value;
    //     let b = document.querySelector('#value2').value;
    //     let op = document.querySelector('#operator').value;
    //     let calculate;

    //     if(op == 'add'){
    //     calculate = a + b;

    //     }else if (op == 'min'){
    //         calculate = a - b;
    //     } 
    //     else if (op == 'div'){
    //         calculate = a / b;
    //     }
    //     else if (op == 'mul'){
    //         calculate = a * b;
    //     }
    //     document.querySelector('#result').innerHTML = calculate;


    // }


    


//Exam

// const resultElem = document.getElementById('result')

// function sort (){
//     const inputs = document.getElementsByClassName('numbers')
//     const numbers = []

//     Object.values(inputs).forEach(input =>{
//         if(input.value){
//             numbers.push(input.value)
//         }
//     })
//     if(numbers.length){
//         resultElem.innerHTML = JSON.stringify(numbers.sort())
//     }else{
//         resultElem.innerHTML = '  '
//     }
// }

// let str = ''
// let h1 = document.querySelector('#hh')
// for(let i = 0; i<=9; i++){
//     if(i<=5){
// str+= '*'
//     }else{
//          str += i}
   
// }
// h1.innerHTML = str



