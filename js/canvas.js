let canvas = document.getElementById("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d');


// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100,100,100,100);
// c.fillStyle='rgba(0, 255, 0, 0.5)';
// c.fillRect(400,100,100,100);
// c.fillStyle='rgba(0, 0, 255, 0.5)';
// c.fillRect(300,300,100,100);



//line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300,100)
// c.lineTo(400,300)
// c.strokeStyle = "red"
// c.stroke()

//arc //circle

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI *2, false)
// c.strokeStyle ="green"
// c.stroke()


// for (var i = 0 ; i<4; i++) {

//     let x = Math.random() * window.innerWidth
//     let y = Math.random() * window.innerHeight

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI *2, false)

//     var u = Math.floor(Math.random() * 256);
//     var v = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);

//     c.strokeStyle ="rgb(" + u + "," + v + "," + z + ")";

//     c.stroke()

//     console.log(c.strokeStyle)

// }

// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false)
// c.strokeStyle = "blue"
// c.stroke()

let mouse = {
    x: undefined,
    y: undefined
}

let maxRadius = 40
let minRadius = 2

let colorArray = [
    "#2C3E50",
    "#E74C3C",
    "#ECF0F1",
    "#3498DB",
    "#2980B9",
]

window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y
    console.log(mouse)
})

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    init()
})

class Circle {
    constructor(m, n, dm, dn, radius) {
        this.m = m;
        this.n = n;
        this.dm = dm;
        this.dn = dn;
        this.radius = radius;
        this.minRadius = radius
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)]


        this.draw = function () {
            c.beginPath();
            c.arc(this.m, this.n, this.radius, 0, Math.PI * 2, false)
            c.strokeStyle = this.color
            c.stroke()
            c.fillStyle = this.color

            c.fill()

        }

        this.update = function () {
            if (this.m + this.radius > innerWidth || this.m - this.radius < 0) {
                this.dm = -this.dm
            }

            if (this.n + this.radius > innerHeight || this.n - this.radius < 0) {
                this.dn = -this.dn
            }

            this.m += this.dm
            this.n += this.dn

            //interactivity
            if (mouse.x - this.m < 50 && mouse.x - this.m > -50
                && mouse.y - this.n < 50 && mouse.y - this.n > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 1
                }
            }
            else if (this.radius > this.minRadius) {
                this.radius -= 1
            }

            this.draw()


        }

    }
}



let circleArray = [];

for (let i = 0; i < 1000; i++) {
    let radius = Math.random() * 4 + 1;
    let m = Math.random() * (innerWidth - (radius * 2)) + radius;
    let n = Math.random() * (innerHeight - (radius * 2)) + radius;
    let dm = (Math.random() - 0.5);
    let dn = (Math.random() - 0.5);

    circleArray.push(new Circle(m, n, dm, dn, radius))
}



function init(){
    circleArray = [];

for (let i = 0; i < 1000; i++) {
    let radius = Math.random() * 4 + 1;
    let m = Math.random() * (innerWidth - (radius * 2)) + radius;
    let n = Math.random() * (innerHeight - (radius * 2)) + radius;
    let dm = (Math.random() - 0.5);
    let dn = (Math.random() - 0.5);

    circleArray.push(new Circle(m, n, dm, dn, radius))
}

}

function animate() {
    requestAnimationFrame(animate)

    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }

}

animate()
