var soundyBox = {

	init: function(x,y,size,path) {
		this.x = x;
		this.y = y;
		this.size = size; 
		this.lineValX = this.x;
		this.sound = new Howl({ src: path});
		this.playedOut = false;

	},

	display: function(overlayVal) {
		// noStroke();
		strokeWeight(0.6);
		fill(color(0,120,180));
		rect(this.x,this.y,this.size, this.size);
		strokeWeight(2);
		noFill();
		line(this.lineValX,this.y,this.lineValX,this.y+this.size);
		strokeWeight(0.3);
		fill(color(0,120,20));
		rect(this.x,this.y,overlayVal, this.size);
		}

}


this.lineValX-this.x