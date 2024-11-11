import context from "../dev1-courseproject-RazvanEHB/scripts/context.js";
import * as utils from "../dev1-courseproject-RazvanEHB/scripts/utils.js";
import * as Noise from "../dev1-courseproject-RazvanEHB/scripts/noise.js";

//Credits go to the DEV1 course for the source of the perlin noise used in this project
//Information over the radial gradient: https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient
//

let width = window.innerWidth;
let height = window.innerHeight;

let position = 50;
let positionTrajectory = 7;

background();
trajectory();
perlinLines();
steelBall();

function background() {
    const gradient = context.createLinearGradient(20, 0, 700, 600);
    gradient.addColorStop(0, "#6f4683");
    gradient.addColorStop(0.5, "#886593");
    gradient.addColorStop(1, "#6f4683");

    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
}

function trajectory() {
    for (let i = 0; i < 8; i++) {
        let direct = 1
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
            Noise.perlinNoise(j / 100) * 200;
            let y = j;
            context.strokeRect(x, y, 1, 1)
        }
        direct++;
    }
}


function perlinLines() {
    for (let i = -15; i < 29; i++) {
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
            Noise.perlinNoise(j / 100) * 200;
            let y = j;
            context.strokeRect(x, y, 1, 1)
        }
        direct++;
    }
}

function steelBall() {
    const radialGradient = context.createRadialGradient(500, 340, 10, 500, 340, 55);
    radialGradient.addColorStop(0, "#bababa");
    radialGradient.addColorStop(0.5, "#737373");
    radialGradient.addColorStop(1, "#474747");
    radialGradient.addColorStop(0.85, "#363636");
    context.fillStyle = radialGradient;
    utils.fillCircle(510, height / 2, Math.PI * 15);
}