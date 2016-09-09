
function MindMap(mindMapDiv,name) {
    this.name = name;

    this.ideas = new vis.DataSet();
    this.connections = new vis.DataSet();

    this.container = mindMapDiv;
    this.data = { nodes: this.ideas,edges: this.connections };
    this.options = {interaction:{hover:true}};
    this.network = new vis.Network(this.container,this.data,this.options);

    this.network.on('click',function(params) { });
        
}

MindMap.prototype.addIdea = function(label) {
    var newIdea = {};
    newIdea.id = this.ideas.length+1;
    newIdea.label = label;
    this.ideas.add(newIdea);
    return newIdea;
}

MindMap.prototype.addConnection = function(sourceIdea,sinkIdea) {
    var newConnection = {};
    newConnection.from = sourceIdea.id;
    newConnection.to = sinkIdea.id;

    this.connections.add(newConnection);
    return newConnection;
}

MindMap.prototype.addCluster = function(source,sinks) {
    var sourceIdea = this.findIdea(source);
    if (!sourceIdea) {
        sourceIdea = this.addIdea(source);
    }
    for (var sink in sinks) {
        var newSink = this.addIdea(sinks[sink]);
        newSink.group = source;
        this.addConnection(sourceIdea,newSink);
    }
    return sourceIdea;
}

MindMap.prototype.findIdea = function(key) {
    for (var idea in this.ideas._data) {
        if (idea.label == key) { return idea; }
    }
    return null;
}

$(window).on('resize',function() {
});

$(window).on('load',function(){
	var mindMap = new MindMap($('#mindMapDiv')[0],'CCE');
	var ie = mindMap.addIdea('Inland Empire Entrepreneurship');
    var collegeList = ['UCR','CBU','La Sierra','CSUSB'];
	mindMap.addCluster('Colleges',collegeList);
	mindMap.addConnection(ie,'Colleges');
});
