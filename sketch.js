 // var myBox1, myBox2, myBox3;
var boxes=[];
var numBoxes = 3;

var path1 =  "eerieSpace/eerieSpace1.ogg";
var path2 =  "eerieSpace/eerieSpace2.ogg";
var path3 =  "eerieSpace/eerieSpace3.ogg";

function setup() {
	createCanvas(1000,1000);
	background(40,80,200);

	for(var i=0; i<numBoxes; i++ ) {
		var box = Object.create(soundyBox);
		boxes.push(box);
		};

	boxes[0].init(100,300,200,path1);
	boxes[1].init(300,300,200,path2);
	boxes[2].init(500,300,200,path3);

	boxes.forEach(function(box, index){

		// box.startSound();	
		box.display();
		})

}


function draw() {
	// boxes.forEach(function(box, index){
	// 	box.moveLine();
	// 	box.display();
	// })

}