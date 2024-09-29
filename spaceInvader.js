signature();

function signature() {
    let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.fillStyle = '#f0f0f0';
context.rect(50, 50, 300, 300);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(75, 125, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(75, 175, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(75, 225, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(125, 175, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(125, 225, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(175, 175, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(175, 225, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(225, 225, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(225, 175, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(275, 175, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(275, 225, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(175, 75, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(225, 275, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(125, 275, 50, 50);
context.fill();

context.fillStyle = '#cf5070';
context.beginPath();
context.rect(275, 125, 50, 50);
context.fill();
}