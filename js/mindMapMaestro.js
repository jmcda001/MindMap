
function MindMap(mindMapDiv,name) {
    this.name = name;
    this.canvas = $('<canvas id="'+name+'MindMap" class="mindMapMaestro"></canvas>')[0]; // TODO: Make sure this is safe!
    mindMapDiv.append(this.canvas)
    this.canvas = new fabric.Canvas(this.canvas, { selection: false });
    this.ideas = {};
}

MindMap.prototype.addIdea = function(label) {
	var ideaColor = '0x00ff00'; // TODO: Change this based on category of ideas (default to something) 
	var idea = new fabric.Text(label,{
		top: 100,
		left: 100,
		borderColor: ideaColor
	});
	idea.drawBorders(this.canvas.getContext("2d"));
	idea.hasControls = false;
	this.canvas.add(idea);
	this.ideas[label] = idea.__uid;
}

MindMap.prototype.addConnection = function(label1,label2) {
	var idea1 = this.ideas[label1];
}

$(window).load(function(){
	var mindMap = new MindMap($('#mindMapDiv'),'CCE');
	mindMap.addIdea('Inland Empire Entrepreneurship');
	mindMap.addIdea('Colleges');
	mindMap.addConnection('Inland Empire Entrepreneurship','Colleges');
});
