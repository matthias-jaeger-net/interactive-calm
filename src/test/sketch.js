let currentX, currentY; // variables to store the smoothed position

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
    currentX = width / 2;
    currentY = height / 2;
}

function draw() {
    // Smoothly update the position using lerp
    currentX = lerp(currentX, mouseX, 0.1);
    currentY = lerp(currentY, mouseY, 0.1);

    if (mouseIsPressed) {
        push();
        translate(currentX, currentY);
        rotate(frameCount / 10);
        for (let i = 0; i < 5; i++) {
            translate(30, 0);
            stroke(80);
            line(0, 4, 20, 4);
            noStroke();
            fill(255, 10, 120);
            text(i, 0, 0);
        }
        pop();
    }
}

function keyPressed() {
    if (key == " ") {
        background(255);
    }

    if (key == "s") {
        save("out.jpg");
    }
}
