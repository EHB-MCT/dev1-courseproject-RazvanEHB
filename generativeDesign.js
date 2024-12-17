import context from "./scripts/context.js";
import * as utils from "./scripts/utils.js";
import * as Noise from "./scripts/noise.js";

//Credits go to "Joeddion" and the DEV1 course for the source of the perlin noise used in this project
//Information over the radial gradient: https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient
//Thanks to Peter Dickx for helping me with the animations and mouse interaction

let width = window.innerWidth;
let height = window.innerHeight;

context.canvas.addEventListener("mousemove", move)

let position = 50;
let positionTrajectory = 7;

let mouseX = 0;
let mouseY = 0;

let frameCount = 0;
let frameCountBall = 649;

let mouseMoving = false;
let mouseTimeout;

let xb = 0;
let yb = 0;

update();
spaceInvader();
steelBallUpdate();

function update() {
    frameCount++;
    background();
    trajectory();
    perlinLines();
    requestAnimationFrame(update);
}

function steelBallUpdate() { 
    if (mouseMoving) {
        if (frameCountBall < 650) {
            frameCountBall++;
        } else if (frameCountBall > 625) {
            frameCountBall--;
        }
    }
    steelBall(frameCountBall, 500);
    requestAnimationFrame(steelBallUpdate);
}

function spaceInvader() {
    signature(1400, 550);
    requestAnimationFrame(spaceInvader);
}

function onMouseMove() {
    mouseMoving = true;
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
        mouseMoving = false;
    }, 100);
}

document.addEventListener('mousemove', onMouseMove);

function background() {
    const gradient = context.createLinearGradient(20, 0, 700, 600);
    gradient.addColorStop(0, "#6f4683");
    gradient.addColorStop(0.5, "#886593");
    gradient.addColorStop(1, "#6f4683");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
}

function steelBall(xb, yb) {
    const radialGradient = context.createRadialGradient(xb - 10, yb - 10, 10, xb - 10, yb - 10, 55);
    radialGradient.addColorStop(0, "#bababa");
    radialGradient.addColorStop(0.5, "#737373");
    radialGradient.addColorStop(1, "#474747");
    radialGradient.addColorStop(0.85, "#363636");
    context.fillStyle = radialGradient;
    utils.fillCircle(xb, yb, Math.PI * 15);
}

function trajectory() {
    for (let i = 0; i < 8; i++) {
        let direct = 1;
        const gradientLine = context.createLinearGradient(300, 0, 1000, 600);
        gradientLine.addColorStop(0, "#e23e64");
        gradientLine.addColorStop(0.5, "#e69d25");
        gradientLine.addColorStop(1, "#e23e64");
        context.strokeStyle = gradientLine;
        context.lineWidth = 6;

        for (let j = 0; j <= height; j++) {
            let x =
            j * direct +
            positionTrajectory * i +
            Noise.perlinNoise((j + frameCount) / 100) * 200;

            if (mouseMoving) {
                x += Noise.perlinNoise((100 + j + frameCount * mouseX + mouseY) / 200) * 5;
            }

            let y = j;

            context.strokeRect(x, y, 1, 1);

            //This piece of code creates the red / yellow gradient trajectory. Much like the black lines, this also uses perlin noise to create a smooth path for the ball.
        }
        direct++;
    }
}

function perlinLines() {
    for (let i = -20; i < 36; i++) {
        let direct = 1
        const gradientLine = context.createLinearGradient(300, 0, 1000, 600);
        gradientLine.addColorStop(0, "black");
        gradientLine.addColorStop(0.5, "#2a2a2a");
        gradientLine.addColorStop(1, "black");
        context.strokeStyle = gradientLine;
        context.lineWidth = 6;

        for (let j = 0; j <= height; j++) {
            let x =
            j * direct +
            position * i +
            Noise.perlinNoise((j + frameCount) / 100) * 200;

            if (mouseMoving) {
                x += Noise.perlinNoise((100 + j + frameCount * mouseX) / 200) * 5;
            }

            let y = j;

            context.strokeRect(x, y, 1, 1);

            //This piece of code respectively adds a linear gradient to the black perlin lines, then draws said perlin lines, and then adds a mouse interaction for when the user moves their mouse. This creates a distortion effect.
        }
        direct++;
    }
}

/**
 *
 * @param {MouseEvent} e
 */

function move(e) {
    mouseX = e.pageX;
    let cursorY = e.pageY;
    console.log(move);
}

function signature(xs, ys) {
    context.fillStyle = "black";
    context.beginPath();
    context.rect(xs, ys, 300, 300);
    context.fill();
    
    context.fillStyle = '#cf5070';
    context.beginPath();
    context.rect(xs + 25, ys + 75, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 25, ys + 125, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 25, ys + 175, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 75, ys + 125, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 75, ys + 175, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 125, ys + 125, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 125, ys + 175, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 175, ys + 175, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 175, ys + 125, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 225, ys + 125, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 225, ys + 175, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 125, ys + 25, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 175, ys + 225, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 75, ys + 225, 50, 50);
    context.fill();
    
    context.beginPath();
    context.rect(xs + 225, ys + 75, 50, 50);
    context.fill();
    }