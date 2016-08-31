
function MindMap(mindMapDiv,name) {
    this.name = name;
}

MindMap.prototype.addIdea = function(label) {
}

MindMap.prototype.addConnection = function(label1,label2) {
}

$(window).load(function(){
	var mindMap = new MindMap($('#mindMapDiv'),'CCE');
	mindMap.addIdea('Inland Empire Entrepreneurship');
	mindMap.addIdea('Colleges');
	mindMap.addConnection('Inland Empire Entrepreneurship','Colleges');
});
