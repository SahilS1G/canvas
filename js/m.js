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