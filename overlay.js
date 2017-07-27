var overlay = { 

	init : function() {
		this.color = [0,120,20];
	}

	displayLine: function() {	
		strokeWeight(3);
		noFill();
		line(this.lineValX,this.y,this.lineValX,this.y+this.size);
		strokeWeight(0.3);
		fill(this.color);
		rect(this.x,this.y,this.lineValX-this.x, this.size);
	},

	moveLine: function() {
		if(this.lineValX > this.x + this.size) {
			this.lineValX = this.x;
		}
		else {
		this.lineValX++;

		}
	},

	startSound: function() {
		this.sound.play();
	}


}