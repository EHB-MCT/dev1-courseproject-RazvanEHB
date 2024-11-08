import context from "../dev1-courseproject-RazvanEHB/scripts/context.js";
import * as utils from "../dev1-courseproject-RazvanEHB/scripts/utils.js";
import * as Noise from "../dev1-courseproject-RazvanEHB/scripts/noise.js";

let width = window.innerWidth;
let height = window.innerHeight;

background();
//gradientLines();
trajectory();
ball();
perlinLines();

function background() {
    const gradient = context.createLinearGradient(20, 0, 700, 600);
    gradient.addColorStop(0, "#6f4683");
    gradient.addColorStop(0.5, "#886593");
    gradient.addColorStop(1, "#6f4683");

    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
}

function trajectory() {
    const gradientLine = context.createLinearGradient(300, 0, 1000, 600);
    gradientLine.addColorStop(0, "#e23e64");
    gradientLine.addColorStop(0.5, "#e69d25");
    gradientLine.addColorStop(1, "#e23e64");

    context.fillStyle = gradientLine;
    context.lineWidth = 4;
    //utils.drawLine(0, -200, 760, height);
    //utils.drawLine(760, height, 840, height);
    //utils.drawLine(840, height, 0, -200);
    context.beginPath();
    context.moveTo(0, -200);
    context.lineTo(763, height);
    context.lineTo(837, height);
    context.lineTo(0, -200);
    context.fill();
}

//function lines() {
    //for (let i = 0; i <= 200000; i = i + 40) {
        //context.strokeStyle = "black";
        //context.lineWidth = 4;
        //utils.drawLine(0, -200, i, height);
    //}
//}

function perlinLines() {
    for (let i = 0; i < 3; i++) {
        let direct = 1
        const gradientLine = context.createLinearGradient(300, 0, 1000, 600);
        gradientLine.addColorStop(0, "black");
        gradientLine.addColorStop(0.5, "#2a2a2a");
        gradientLine.addColorStop(1, "black");
        context.strokeStyle = gradientLine;
        context.lineWidth = 5;

        for (let j = 0; j <= height; j++) {
            let x = j * direct + (100 + width * i) / 2 + Noise.perlinNoise(j / 100) * 175;
            let y = j;
            context.strokeRect(x, y, 1, 1)
        }
        direct++;
    }
}

function ball() {
    context.fillStyle = "#303030"
    utils.fillCircle(510, height / 2, Math.PI * 11);
    context.fillStyle = "#474747"
    utils.fillCircle(510, height / 2, Math.PI * 10);
    context.fillStyle = "#757575"
    utils.fillCircle(505, 350, Math.PI * 8);
    context.fillStyle = "#bababa"
    utils.fillCircle(495, 350, Math.PI * 3);
    utils.fillCircle(498, 345, Math.PI * 3);
    utils.fillCircle(513, 335, Math.PI * 2);
}