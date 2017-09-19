(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Digital_banner_a_taste_of_atlas_", frames: [[0,504,300,250],[302,411,108,108],[427,0,78,75],[0,252,300,250],[0,0,425,250],[412,411,97,99],[302,252,157,157]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._5Holiday_Tasting_Ad_300x250_Animated = function() {
	this.spriteSheet = ss["Digital_banner_a_taste_of_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.brussels = function() {
	this.spriteSheet = ss["Digital_banner_a_taste_of_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cranberries = function() {
	this.spriteSheet = ss["Digital_banner_a_taste_of_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Digital_Banner_Ad_300x250 = function() {
	this.spriteSheet = ss["Digital_banner_a_taste_of_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.EWP2017_WholeFoods_Holiday20175246 = function() {
	this.spriteSheet = ss["Digital_banner_a_taste_of_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mashedtaters = function() {
	this.spriteSheet = ss["Digital_banner_a_taste_of_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.turkeymealplate = function() {
	this.spriteSheet = ss["Digital_banner_a_taste_of_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WFM_Logo_White_RGBai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(175,175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgLAOABQAPgBAKALQAKAKAAAOQAAAPgKALQgKAJgPABQgOgBgKgJgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(305.4,234.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(163.9,260);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(305.6,233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QAog/BHAAQBGAAAoA/QAqBAAABqQAABrgpBAQgpA/hFAAQhIAAgog+g");
	this.shape_4.setTransform(126.2,205.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgyQABgDADAAQADAAACADIAZAzQABADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(130.7,263.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(239.5,205);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QApg/BGAAQBFAAAqA/QApBAAABqQAABrgpBAQgpA/hGAAQhGAAgpg+g");
	this.shape_7.setTransform(181.9,205.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


(lib.turkeymealplate_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turkeymealplate();
	this.instance.parent = this;
	this.instance.setTransform(-78.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.turkeymealplate_1, new cjs.Rectangle(-78.5,-78.5,157,157), null);


(lib.tophead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBvQgIgDAAgGQAAgFAHgDIAEgBQAEgDABgEQACgFAAgNIAAgQIAAhJIgRAAQgEAAgBgBQgCgCAAgEIAAgEQAAgEACgCQABgBAEAAIAQAAIgBgMIgBgLQAAgYAOgNQAOgNAZAAQARAAALAJQALAHAAAMQAAAIgEADQgEAFgIAAQgEgBgEgCQgEgCgDgEIgDgGQgFgLgJAAQgGAAgDAEQgDAEAAAGIADARQADAOAAAKIAWAAQAEAAACABQABACAAAEIAAAEQAAAEgBACQgCABgEAAIgWAAIAABPQAAATACAGQABAGADACIAGACQAJADAAAGQAAAGgIADQgHACgWAAQgWAAgHgCg");
	this.shape.setTransform(71.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3A5QgWgWAAgiQAAgiAXgXQAXgXAhAAQAiAAAUAVQAWAWAAAiQAAAigXAYQgWAYghAAQgiAAgVgXgAgcgtQgKAMAAAVQAAAeANAUQANAUARAAQAQAAAJgMQAJgNAAgVQAAgdgNgUQgNgVgRAAQgQAAgIANg");
	this.shape_1.setTransform(56.6,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA6QgWgXAAghQAAgjAWgXQAXgXAiAAQAdAAASARQARARAAAcQAAAKgDADQgCADgMAAIg6AAQgFAAgDgDQgDgCAAgEQAAgEADgCQADgDAFAAIAfAAIAIgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgPgKgKQgKgLgOAAQgSAAgJARQgJAPAAAXQAAAXANASQAMARATAAQALAAAIgCQAHgDAIgFIAFgEQAIgHAEAAQAEAAACACQACADAAADQAAADgEAGQgDAFgHAFQgNALgNAFQgMAFgPAAQgfAAgWgWg");
	this.shape_2.setTransform(29.3,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBcQgIgCgFgGQgGgFgCgHQgCgJAAgXIAAhSIgPAAIgEgBIgBgEIAAgEQAAgEAQgOIAGgGIAGgFQAQgOAGAAIAEABQAAABABAAQAAABAAAAQABABAAAAQAAAAAAABIAAAdIAiAAQAEAAABABIABAGIAAAEIgBAGQgCABgDAAIggAAIgCABIgBAEIAABLQAAAVADAFQAEAEAJAAQAEAAAIgCIALgCQADAAACABQACACAAAEQAAAIgNAIQgNAIgQAAQgJAAgHgDg");
	this.shape_3.setTransform(14.9,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBQIgQgDIgFADIgFABIgDgBIgDgCQgFgFgFgMQgEgMAAgMQAAgFADgDQACgDAEAAQAHAAAIAMIAFAJQAFAHAIADQAIAEAIAAQAKAAAGgFQAGgGAAgIQAAgNgZgMIgJgFQgYgMgIgJQgIgKAAgOQAAgUANgNQAOgNAXAAIAKABIAKACIAIgDIAEgBQAIAAAHAMQAHAMAAAOQAAAFgCADQgCADgFAAQgDAAgEgDQgDgDgFgHQgGgKgGgDQgGgEgIAAQgIAAgGAFQgFAFAAAIQAAAHAFAFQAGAGASAJIACABQArAUAAAZQAAAWgRAOQgQAPgZAAg");
	this.shape_4.setTransform(1.7,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbBIIgIgIIgHAEQgSAMgTAAQgWAAgOgNQgOgNAAgVQAAgYASgNQASgOAgAAQAHAAAEACQADADABAFQgBAJgJAAQgPAAgKAHQgJAHAAANQAAANAIAHQAIAHANAAQAPAAAGgGQAHgHgBgQIAAg6QAAgNgFgHQgGgIgKAAQgIAAgGAEQgHADgFAHIgEAEQgJAMgLAAQgGAAgEgEQgDgEAAgHQAAgOASgKQASgKAcAAQAQAAAMAEQAMAFAHAIQAEAGACAKQACAJAAAWIAAAxQABAIABAFQACAEADABIAEABQAKADAAAFQAAAHgLAGQgJAGgOAAQgHAAgIgIg");
	this.shape_5.setTransform(-13.9,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggBtQgIgDgBgGQAAgHAJgDQAJgDABgCQACgDABgZIABhIIgBgoIgBgZQgBgEgDgBQgCgCgHAAIgGAAQgLAAgFADQgHACgDAGIgGAKIgEALIgFAFQgCACgDAAQgEAAgCgEQgCgFAAgJQgBgUAFgNQAFgMAHAAIACAAQAMACASAAIBaAAQASAAANgCIACAAQAHAAAFAMQAFANAAAUQgBAJgCAEQgCAFgEAAIgGgCIgEgFIgFgLIgFgKQgDgGgHgCQgFgDgMAAIgFAAQgHAAgCACQgDABgBAEIgBAZIgBAoIABBIQABAZACADQACACAIADQAIADAAAHQAAAGgIADQgJADgYAAQgXAAgJgDg");
	this.shape_6.setTransform(-33.2,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBuQgKgDAAgHQAAgFALgEIACgBQAFgCACgCQABgCAAgEIgCgMIgGgRIgCgEIgDgCIgMgBIgWAAIgOAAQgNAAAAgLQAAgMANAAIAIAAIAQAAIAQABIgQgqIgPgkIgEAAIgQAnIgPAnIgPAnQgDAJAAAGQAAAEABAEQADADAEACIAGACQAJADAAAGQAAAHgIADQgIADgWAAQgYAAgIgDQgIgDAAgHQABgGAIgDIAHgDQALgHAKgbIAEgJIAWg2IAGgOQAVg3AGgXQABgHADgCQAEgCAJAAQAEAAAEACQADADADAFIAXAzIAeBIIAHASQASAtAKAFIAGACQAKADAAAGQAAAHgKADQgJADgbAAQgcAAgIgDg");
	this.shape_7.setTransform(-64.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tophead, new cjs.Rectangle(-78,-20.2,156.1,40.5), null);


(lib.tastingevent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOArQgHgDgGgFQgFgFgDgHIgCgHIgBgIIAAgXIAAgZIABgCIADgCIAEAAIACAAIAEABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAtQAAAFACAEQABAFADAEQADADAEACQAFACAEAAQAGAAAEgCQAEgCADgDQADgEABgFQACgEAAgFIAAgtQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAEgBIADgBIADABIADABIABADIAAAwIgBAIIgCAHQgDAHgFAFQgGAFgHADQgHADgIAAQgHAAgHgDg");
	this.shape.setTransform(83.7,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAtIgJgDIgIgEIgHgGQgHgFgDgJIgDgIIgBgKIABgIIADgJQADgJAHgGIAHgFIAIgEIAJgDIAIgBIAKABIAJADQAIAEAGAFQAHAGAEAJQADAIAAAJIgBAKIgCAIQgEAJgHAFQgGAHgIADIgJADIgKABIgIgBgAgKgbQgGACgEAEQgEAFgDAFQgCAGAAAFQAAAHACAFQADAGAEADQAEAEAGADQAFACAFABQAGgBAFgCQAGgDAEgEQAEgDADgGQACgFAAgHQAAgFgCgGQgDgFgEgFQgEgEgGgCQgFgCgGgBQgFABgFACg");
	this.shape_1.setTransform(73.3,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBAuIgBAAIgCAAIgCgCIgBgCIAAgeIgBgGIgCgEIgagnIAAgBIABgCIADgCIADgCIADgBIAEABIABACIASAdIABABIACAAIACAAIACgBIASgdIACgCIACgBIAEAAIACACIADACIABACIAAABIAAABIgZAnIgDAFIAAADIAAABIAAAfQgBADgDABg");
	this.shape_2.setTransform(63.8,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAtIgCgBIgBgBIgCgBIgPgXIgCgDIgEgBIgKAAIgEABIgCADIABAWQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgCABIgEABIgDAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAIAAhQQAAgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIADgBIAkAAQAHAAAFACQAGADAFADQAEAEACAGQADAFAAAHQgBAIgDAEQgCAEgDADIgGAFQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIAAACIADAFIAFAHIAFAHIACAFIgBACIgDACIgEABIgCABgAgSgbQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIAAAUQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABIAFAAIARAAIAHAAIAEgDQADgBABgDQABgDABgEQAAgHgGgEIgEgCIgHgBIgRAAIgFABg");
	this.shape_3.setTransform(51.3,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjAsIgDAAIgEAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAIgFgMIgBgCIgDgBIgdAAIgBABIgBAAIgBABIgBABIgFAMIgCACIgCAAIgDABIgCAAIgCAAIgDAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAlhSIACgCIACgBIAEAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAIAjBSIAAABIgBABIgDABgAAAgNIgBABIgBACIgCAEIgCAFIgCAFIgCADIAAACIAAACIACABIARAAIACgBIABgCIgCgDIgDgHIgDgHIgCgEIgCgBg");
	this.shape_4.setTransform(41.8,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgBgCIAAhRQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIA9AAIACACIABACIAAAEIAAACIAAADIgDACIgsAAIgDACIgBADIAAALIABAEIADABIAdAAIACABIABACIAAAEIAAACQAAAEgEAAIgcAAIgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIAsAAQADABAAADIAAAEIAAADIgBADIgCABg");
	this.shape_5.setTransform(33.4,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBACIAAAtIgDADIgFABIgFAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEABACADIAjAuIACABIACAAIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABADIAABUIgCADIgEABg");
	this.shape_6.setTransform(23.8,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACAsIgDAAIgEgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHAAIgHAAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgEIAAgDIABgDIABgCIADgBIA8AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAADIgBADIgBADIgCABIgSAAIgDABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAABAIgBADIgCABg");
	this.shape_7.setTransform(11.1,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBACIAAAtIgDADIgFABIgFAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEABACADIAjAuIACABIACAAIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABADIAABUIgCADIgEABg");
	this.shape_8.setTransform(2.6,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgCgCIAAhRQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgBIA9AAIACACIABACIAAAEIAAACIgBADIgCACIguAAIgCACIgBADIAAALIABAEIADABIAdAAIABABIABACIABAEIAAACQAAAEgDAAIgcAAIgEACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIAtAAQACABAAADIABAEIgBADIgBADIgCABg");
	this.shape_9.setTransform(-6.2,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAArIgEgGIgDgKIgHgMIgGgOIgFgNIgGgMIgDgJIgBgEIABgDIACgCIAEgBIADAAIADABIACADIASArIACABIAAABQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBIASgsQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBIACAAIAEABIADACIABADIgBAEIgFAJIgEAMIgHANIgGAPIgFANIgFAKIgCAFIAAABIgCABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_10.setTransform(-15.1,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgCgCIAAhRQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgBIA9AAIABACIABACIAAAEIAAACIAAADIgCACIgtAAIgDACIgBADIAAALIABAEIADABIAdAAIABABIABACIABAEIAAACQAAAEgEAAIgbAAIgEACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAIAtAAQACABAAADIAAAEIAAADIgBADIgCABg");
	this.shape_11.setTransform(-23.1,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAtIgIgDIgIgDIgIgGIgFgHIgFgHQgDgJAAgKIAAgIIADgJQAEgJAGgGIAIgFIAIgEIAIgDIAJgBQAFAAAFACIAKACQAJAFAHAHIAAACIgBADIgDADIgDACIgDACIgEgCIgFgEIgHgFQgEgCgGAAQgFABgGACQgFACgEAEQgFAFgCAFQgCAGAAAFQAAAGACAGQACAFAFAEQAEAEAFADQAGACAFABIAGgBIAGgBIAGgEQACgBACgDIAAgBIgBgDIgDgBIgQAAIgCgBIgBgDIAAgDIAAgDIAAgDQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAlAAIABABIABABQACADAAAFIAAADIgBAEIgHAMQgEAFgGAEQgFADgHACQgGACgHAAIgJgBg");
	this.shape_12.setTransform(-37.5,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBACIAAAtIgDADIgFABIgFAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEABACADIAjAuIACABIACAAIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABADIAABUIgCADIgEABg");
	this.shape_13.setTransform(-47.5,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAAuIgCAAQgEAAgBgDIAAhUIACgCIADgBIACAAIADAAQAEAAABADIAABTIgCADIgDABg");
	this.shape_14.setTransform(-54.3,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACAsIgDAAIgEgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIgHAAIgHAAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgEIAAgDIABgDIABgCIADgBIA8AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAADIgBADIgBADIgCABIgSAAIgDABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAABAIgBADIgCABg");
	this.shape_15.setTransform(-60.2,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAqQgKgDgHgHIgBgCIAAgBIABgDIADgDIADgCIADgBIAEABIAGAEIAHAEQAEABAGAAIAGAAIAHgCIAFgEQACgDAAgEQAAgDgCgCQgDgDgDgBIgKgBIgJgCIgKgCQgFgBgEgCQgEgDgDgEQgCgFAAgGQAAgHADgFQAEgFAFgEQAFgDAHgBIALgCIAJABIAIACIAJADIAHAFIAAACIABABIgBADIgDADIgDACIgEABIgCAAQgFgEgFgDQgFgCgGAAIgGAAIgGACIgEAEQgCACAAAEQAAAFAEACIAKADIANACQAHABAHACQAGADAEADQAFAFAAAJQgBAIgDAGQgEAFgFAEQgGADgHACIgMACQgKAAgJgEg");
	this.shape_16.setTransform(-68.4,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjAsIgDAAIgEAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAIgFgMIgBgCIgDgBIgdAAIgBABIgBAAIgBABIgBABIgFAMIgCACIgCAAIgDABIgCAAIgCAAIgDAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAlhSIACgCIACgBIAEAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAIAjBSIAAABIgBABIgDABgAAAgNIgBABIgBACIgCAEIgCAFIgCAFIgCADIAAACIAAACIACABIARAAIACgBIABgCIgCgDIgDgHIgDgHIgCgEIgCgBg");
	this.shape_17.setTransform(-77.3,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AACAsIgDAAIgEgBQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAhAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIgHAAIgHAAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgBgEIAAgDIABgDIABgCIADgBIA8AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAADIgBADIgBADIgCABIgSAAIgDABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAABAIgBADIgCABg");
	this.shape_18.setTransform(-85.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tastingevent, new cjs.Rectangle(-91.1,-8.4,182.2,16.9), null);


(lib.table = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EWP2017_WholeFoods_Holiday20175246();
	this.instance.parent = this;
	this.instance.setTransform(-212.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-125,425,250);


(lib.subhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BkQgUgMAAgQQAAgIAFgGQAEgEAIAAQAGgBAEAEQAEAEACAHQADALAKAHQAJAGATAAQAUABANgJQAOgHAAgNQAAgHgFgDQgFgFgKAAIgSABIgWACQgcAAgPgJQgOgKAAgMQAAgHAFgIQAFgHAMgGQgKgIgEgKQgEgKAAgLQAAgZASgRQATgRAdAAIAPABIAYAFQAGAAAGgDIARgJIAFAFIACAFQgBAGgFAHQgFAFgIAFIAEAMIACANQAAAZgTAQQgSAQgdgBIgRgBIgPgCIgEAFIgBAGQAAAHAGADQAIAEAPAAIAXgCIAXgCQAWAAAMAJQALAJgBAQQAAAZgYAQQgYAQgjAAQgdAAgUgMgAgYhMQgJALABAOQAAARAHAJQAIAJAMAAQAMAAAJgJQAJgKAAgPQAAgQgJgKQgIgJgMgBQgNABgHAJg");
	this.shape.setTransform(91,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLBMQgHgCAAgHQAAgFAHgDIAEgCQAEgCACgFQABgFAAgMIAAgKIAAgNIAAgOQAAgZgBgHQgBgHgDgCIgIgDQgJgDAAgFQAAgDADgDQADgDAGgCIAXgHIAPgDQAFAAACACQACADAAAFIAAAKIAAABIABABIABAAIAAgBIAEgDIADgDQARgQASAAQALAAALAFQAKAFAHAIQAHAJADALQADAMAAAZIAAATIAAALIgBAIQAAALACAFQACAEADACIAEACQAIADAAAFQAAAHgHACQgHACgYAAQgVAAgIgCQgHgCAAgGQAAgGAIgDIAFgCQAEgCABgHQACgHAAgQQAAgwgGgNQgHgMgQAAQgHAAgHAFQgIAFgEAIQgDAHgCAMQgBALAAAeQAAAPABAFQABAFAEACIAFACQAIADAAAGQAAAGgHACQgIADgUAAQgXAAgIgDg");
	this.shape_1.setTransform(72.2,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbBuQgHgDAAgHQAAgFAHgDIAEgBQAEgCACgGQACgFgBgLIAAgLIAAgMIAAgQQAAgYgBgHQgBgHgDgCIgHgCQgKgDABgFQgBgEADgCQADgDAGgDIAYgHIAPgDQAEAAACADQACADAAAHIAAAJIgBAHIgBAmIAAABIAAAmQAAAOABAGQABAGAEACIAFADQAIADAAAFQABAGgIADQgIACgUAAQgWAAgIgCgAgShNQgHgFAAgIQAAgJAHgGQAIgGAKAAQAJAAAHAGQAGAFAAAJQAAAIgHAGQgHAGgKAAQgKAAgGgGg");
	this.shape_2.setTransform(57.7,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBBQgJgQgVgxIgJgXQgLgegHgDIgEgCQgJgEAAgFQAAgHAIgCQAHgDAZABQAVgBAIADQAHACAAAHIgBAFIgDACIgFACQgGADAAAEIADALIAMAfIAMAdQAEAHACAAQACAAADgFIAGgNIARgmQAFgPAAgFIgBgFIgDgEIgFgCQgHgDAAgFQAAgFAHgDQAHgDATABQAQgBAHADQAGACAAAGQAAAGgIADIgFACQgHAEgNAeIgEAJIgGAOQgjBQgJAAQgHAAgJgPg");
	this.shape_3.setTransform(44.5,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbBuQgHgDAAgHQAAgFAHgDIAFgBQADgCACgGQACgFAAgLIAAgLIgBgMIAAgQQAAgYgBgHQgBgHgDgCIgIgCQgIgDgBgFQABgEACgCQADgDAHgDIAXgHIAPgDQAFAAABADQACADAAAHIAAAJIAAAHIgBAmIAAABIgBAmQAAAOACAGQABAGADACIAGADQAHADABAFQAAAGgIADQgIACgTAAQgXAAgIgCgAgThNQgFgFAAgIQAAgJAGgGQAIgGAKAAQAJAAAGAGQAHAFAAAJQAAAIgHAGQgHAGgKAAQgKAAgHgGg");
	this.shape_4.setTransform(31.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BkQgTgMAAgQQAAgIADgGQAFgEAIAAQAHgBADAEQADAEACAHQAEALAKAHQAKAGASAAQAUABAOgJQANgHAAgNQAAgHgFgDQgFgFgKAAIgSABIgXACQgbAAgOgJQgPgKAAgMQAAgHAFgIQAGgHALgGQgKgIgEgKQgFgKABgLQgBgZAUgRQASgRAdAAIAQABIAXAFQAGAAAHgDIAQgJIAFAFIABAFQAAAGgEAHQgGAFgJAFIAGAMIABANQAAAZgSAQQgUAQgdgBIgQgBIgPgCIgEAFIgCAGQABAHAGADQAIAEAPAAIAWgCIAZgCQAVAAAMAJQAKAJABAQQAAAZgZAQQgYAQgkAAQgcAAgUgMgAgZhMQgHALAAAOQgBARAIAJQAIAJANAAQAMAAAIgJQAJgKAAgPQAAgQgJgKQgIgJgMgBQgNABgIAJg");
	this.shape_5.setTransform(18.3,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLBQIgQgDIgFADIgFABIgDgBIgDgCQgFgFgFgMQgEgMAAgMQAAgFADgDQACgDAEAAQAHAAAIAMIAFAJQAFAHAIADQAIAEAIAAQAKAAAGgFQAGgGAAgIQAAgNgZgMIgJgFQgYgMgIgJQgIgKAAgOQAAgUANgNQAOgNAXAAIAKABIAKACIAIgDIAEgBQAIAAAHAMQAHAMAAAOQAAAFgCADQgCADgFAAQgDAAgEgDQgDgDgFgHQgGgKgGgDQgGgEgIAAQgIAAgGAFQgFAFAAAIQAAAHAFAFQAGAGASAJIACABQArAUAAAZQAAAWgRAOQgQAPgZAAg");
	this.shape_6.setTransform(1.9,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAyBwIgGgBQgHgCgPgTIgGgIIgDgEQglgwgDAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIAAAGIAAAHIABAgQAAAJADADIAIAEQAHADAAAGQAAAGgHACQgIADgUAAQgXAAgIgDQgHgCAAgHQAAgFAHgDIAEgCQAEgCACgHQACgIAAgSIAAgTIgBgYIAAgSIAAg5QgCgOgCgDQgBgBgIgDIgFgBIgFgDIgCgEQAAgEADgDQADgCALgEIAVgGIAQgCQAEAAACADQACADAAAHIgBAeIAAAoIAAAlIAAAIQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAAAIAHgEIALgJIAOgOQAEgFAAgCQAAgCgFgCQgFgDAAgFQAAgHAHgDQAIgDAWAAQAOAAAHADQAHADAAAGQAAAHgLADQgMADgEADQgGADgNAMIgCADIgGAFIgBADQAAADANASIACACIAaAgQALANAGAEIAOAGQAKADAAAGQAAAHgHADQgHADgRAAg");
	this.shape_7.setTransform(-13.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhLBMQgHgCAAgHQAAgFAHgDIAEgCQAEgCACgFQABgFAAgMIAAgKIAAgNIAAgOQAAgZgBgHQgBgHgDgCIgIgDQgJgDAAgFQAAgDADgDQADgDAGgCIAXgHIAPgDQAFAAACACQACADAAAFIAAAKIAAABIABABIABAAIAAgBIAEgDIADgDQARgQASAAQALAAALAFQAKAFAHAIQAHAJADALQADAMAAAZIAAATIAAALIgBAIQAAALACAFQACAEADACIAEACQAIADAAAFQAAAHgHACQgHACgYAAQgVAAgIgCQgHgCAAgGQAAgGAIgDIAFgCQAEgCABgHQACgHAAgQQAAgwgGgNQgHgMgQAAQgHAAgHAFQgIAFgEAIQgDAHgCAMQgBALAAAeQAAAPABAFQABAFAEACIAFACQAIADAAAGQAAAGgHACQgIADgUAAQgXAAgIgDg");
	this.shape_8.setTransform(-33,3.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcBIIgJgIIgHAEQgSAMgTAAQgWAAgOgNQgOgNAAgVQAAgYASgNQASgOAgAAQAHAAAEACQAEADAAAFQAAAJgLAAQgPAAgIAHQgKAHAAANQAAANAIAHQAIAHAOAAQANAAAHgGQAGgHAAgQIAAg6QABgNgHgHQgFgIgKAAQgIAAgGAEQgGADgGAHIgEAEQgJAMgLAAQgGAAgDgEQgEgEAAgHQAAgOASgKQARgKAdAAQAQAAAMAEQANAFAGAIQAFAGACAKQACAJAAAWIAAAxQgBAIACAFQABAEAEABIAEABQAKADAAAFQAAAHgLAGQgKAGgOAAQgGAAgHgIg");
	this.shape_9.setTransform(-51.1,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWBuQgIgCAAgGQAAgGAIgDIAFgCQAEgCABgHQACgGAAgRQAAgxgGgLQgHgNgQAAQgHAAgHAFQgIAFgEAHQgDAHgCAMIgBApQAAAQABAFQACAFADACIAGACQAHADAAAGQAAAGgHACQgIADgTAAQgZAAgHgDQgHgCAAgHQAAgFAHgDIAEgCQAEgCACgGQACgHAAgRIAAgZIAAgXIgBhFQgBgRgDgDQgBgCgJgDQgKgCAAgGQAAgEAEgDQAEgDAOgFIAPgEIAOgCQAFAAADADQACADAAAHIgBAHIgBA9IAAAHIABAEIACABIADgDIAGgGQAIgIAIgEQAIgEAKAAQAaAAANARQANASAAAhIAAAPIAAAbIAAAJQAAAHACAEQABADADACIAEACQAIADAAAFQAAAHgHACQgIADgYAAQgUAAgHgDg");
	this.shape_10.setTransform(-69.9,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggBtQgIgDgBgGQAAgHAJgDQAIgDACgCQABgDACgZIABhIIgBgoIgCgZQAAgEgDgBQgCgCgHAAIgGAAQgLAAgFADQgGACgFAGIgEAKIgFALIgEAFQgDACgDAAQgFAAgBgEQgDgFAAgJQAAgUAFgNQAFgMAHAAIACAAQAMACATAAIBZAAQATAAAMgCIABAAQAJAAAEAMQAFANgBAUQAAAJgCAEQgBAFgGAAIgEgCIgFgFIgEgLIgGgKQgDgGgHgCQgFgDgMAAIgFAAQgHAAgCACQgDABgBAEIgBAZIgBAoIABBIQACAZABADQABACAJADQAIADAAAHQAAAGgJADQgIADgYAAQgXAAgJgDg");
	this.shape_11.setTransform(-89.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.subhead, new cjs.Rectangle(-101.6,-20.2,203.4,40.5), null);


(lib.square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99CC33").ss(1,1,1).p("A3UxxMAupAAAMAAAAjjMgupAAAg");
	this.shape.setTransform(0.2,0.5,1.003,1.096);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3URxMAAAgjhMAupAAAMAAAAjhg");
	this.shape_1.setTransform(0.2,0.5,1.003,1.096);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#99CC33").ss(1,1,1).p("AAASIMAAAgkP");
	this.shape_2.setTransform(-149.9,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.9,-126.1,301.9,252.4);


(lib.rectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AprCeIAAk7ITXAAIAAE7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rectangle, new cjs.Rectangle(-62,-15.7,124,31.5), null);


(lib.FindaStore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIA2AAIAAAKIgqAAIAAAaIAnAAIAAAKIgnAAIAAAbIAtAAIAAAKg");
	this.shape.setTransform(37.4,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAqIgVglIgNAAIAAAlIgLAAIAAhTIAdAAQAIgBAFADQAFACADAEQADADACAEIABAIQAAAFgCADIgEAHQgCADgEABQgEACgFABIAYAmgAgSgEIAPAAIAGAAIAGgCIAEgFQACgCAAgFQAAgEgCgCIgEgFIgGgCIgGAAIgPAAg");
	this.shape_1.setTransform(30.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRApIgHgEIgHgFQgGgGgDgJIgCgIIgBgJIABgIIACgIQADgJAGgGQAGgGAIgDQAIgDAJAAIAJABIAJACQAIADAGAGQAGAGADAJQADAHAAAJQAAAKgDAHQgDAJgGAGIgGAFIgIAEIgJADIgJAAQgJAAgIgDgAgMgeQgGADgEAEQgEAFgDAGQgCAGAAAGQAAAHACAGQADAGAEAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgFACgGQACgGAAgHQAAgGgCgGQgCgGgFgFQgEgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(21.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgbAAIAAgKIBBAAIAAAKIgbAAIAABJg");
	this.shape_3.setTransform(12.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAqIgGgEIgFgFIAJgJQADAGAFACQAFACAFAAIAFgBIAGgCIAEgFQABgDAAgDQAAgFgDgDQgDgDgFgBIgJgDQgFgCgFgDQgFgCgDgEIgCgHIgBgHIACgIQABgEAEgEQADgDAGgCQAFgCAHAAQAHAAAGACQAHABAFAGIgKAJIgGgGQgEgCgFAAQgEAAgDACQgDAAgCACIgDAFIgBAEQAAAFAEADQADADAEACIAJADIAKAEQAFACADAEQADAFAAAIQAAAFgCAGQgCAEgEAEQgEADgGACQgFABgFAAQgIAAgIgCg");
	this.shape_4.setTransform(5.9,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdAqIgJgUIgnAAIgJAUIgNAAIAlhTIAKAAIAkBTgAAQAMIgQgnIAAAAIgPAnIAfAAg");
	this.shape_5.setTransform(-4.8,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkAqIAAhTIAdAAQAIAAAHABQAHADAFADQAFADADAFQAEAEABAFIADAKIABAHIgBAIIgCAIIgEAHIgFAHQgGAFgIAEQgJAEgLgBgAgZAgIAPAAQAHgBAGgBQAGgCAFgEQAFgEADgGQADgGAAgIIgCgJQgBgFgEgFIgEgEIgGgEQgGgDgJgBIgSAAg");
	this.shape_6.setTransform(-16.6,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWAqIguhFIAABFIgMAAIAAhTIAPAAIAuBFIAAhFIAMAAIAABTg");
	this.shape_7.setTransform(-26,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_8.setTransform(-32.4,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIA1AAIAAAKIgpAAIAAAbIAmAAIAAAKIgmAAIAAAkg");
	this.shape_9.setTransform(-37.1,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FindaStore, new cjs.Rectangle(-42.9,-10.2,85.8,20.4), null);


(lib.date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAqQgHgCgIgGIAAgDIABgCIACgDIAEgDIADAAIADABIAFADIAFACIAIABIAGgBIAGgEIAEgFQABgEAAgEQAAgDgBgDQgBgDgCgDIgGgCQgDgCgDAAQgFAAgCACIgFACIgEACIgEABIgFAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIAEgmQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBAAAAIAEgCIAVAAIAVAAQADAAACADIABAFIgBAEIgEADIgcAAQgFAAgBACQgCADAAAEIABADIAEABIAEgBIAFAAQAGAAAGACQAFACAEAFQAFAEACAEQACAGAAAGQAAAIgDAGQgDAGgFAEQgEAEgGADQgHACgGAAQgJAAgHgDg");
	this.shape.setTransform(24,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAHIgWAAIgCgBIgBgBIAAgDIAAgCIAAgBIABgDIABgBIABgBIAWAAIACABIACABIAAADIAAABIAAAEIgCADg");
	this.shape_1.setTransform(17.9,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHAuIgCgDIAAgOIgBgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgcAAIgDgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgEIAag6IADgCIADgBIACAAIADABIACACIAAADIgBAEIgDAHIgDAKIgFAKIgDAIIgCADIgBACIAAABIABACIADABIADAAIAEAAIADgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgNQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIADgBIACAAIACABIACAAIACACIAAACIAAAMIABAEQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAHAAQACACABACIAAAFQAAABAAABQAAABAAAAQgBABAAAAQAAAAAAAAIgEACIgDAAIgEABIgBACIgBACIABAJIgBAFQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgHAAg");
	this.shape_2.setTransform(12,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQgBgDADgCQACgDADAAQAEAAACADQADACAAADQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_3.setTransform(2,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAArIgDgGIgFgKIgGgMIgFgOIgHgNIgEgMIgEgJIgCgEIABgDIADgCIAEgBIACAAIAFABIACADIASArIABABIAAABQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBIASgsQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIADgBIADAAIAEABIACACIABADIgBAEIgDAJIgGAMIgGANIgGAPIgGANIgDAKIgDAFIgBABIgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_4.setTransform(-4,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAtIgJgDIgIgEIgHgGQgHgFgDgJIgDgIIgBgKIABgIIADgJQADgJAHgGIAHgFIAIgEIAJgDIAIgBIAKABIAJADQAIAEAGAFQAHAGAEAJQADAIAAAJIgBAKIgCAIQgEAJgHAFQgGAHgIADIgJADIgKABIgIgBgAgKgbQgGACgEAEQgEAFgDAFQgCAGAAAFQAAAHACAFQADAGAEADQAEAEAGADQAFACAFABQAGgBAFgCQAGgDAEgEQAEgDADgGQACgFAAgHQAAgFgCgGQgDgFgEgFQgEgEgGgCQgFgCgGgBQgFABgFACg");
	this.shape_5.setTransform(-13.4,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBACIAAAtIgDADIgFABIgFAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEABACADIAjAuIACABIACAAIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABADIAABUIgCADIgEABg");
	this.shape_6.setTransform(-23.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.date, new cjs.Rectangle(-30.1,-8.4,60.4,16.9), null);


// stage content:
(lib.Digital_banner300x250atasteof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Date
	this.instance = new lib.date();
	this.instance.parent = this;
	this.instance.setTransform(42,152.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({alpha:1},0).wait(505));

	// Tasting Event Near You
	this.instance_1 = new lib.tastingevent();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.9,61.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({alpha:1},0).wait(505));

	// Find a Store
	this.instance_2 = new lib.FindaStore();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77.2,187.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({alpha:1},0).wait(505));

	// A Taste of
	this.instance_3 = new lib.tophead();
	this.instance_3.parent = this;
	this.instance_3.setTransform(93.1,90);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({alpha:1},0).wait(505));

	// Thanksgiving
	this.instance_4 = new lib.subhead();
	this.instance_4.parent = this;
	this.instance_4.setTransform(116.7,123.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({alpha:1},0).wait(505));

	// find-a-store-rectangle
	this.instance_5 = new lib.rectangle();
	this.instance_5.parent = this;
	this.instance_5.setTransform(77.1,186.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40).to({alpha:1},0).wait(505));

	// logo
	this.instance_6 = new lib.WFM_Logo_White_RGBai("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(250.8,32.8,0.223,0.223,0,0,0,175.2,174.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({alpha:1},0).wait(505));

	// fade-from-black
	this.instance_7 = new lib.square("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(149.5,124.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:0},9).wait(536));

	// brussels
	this.instance_8 = new lib.brussels();
	this.instance_8.parent = this;
	this.instance_8.setTransform(127,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(545));

	// potatoes
	this.instance_9 = new lib.mashedtaters();
	this.instance_9.parent = this;
	this.instance_9.setTransform(58,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(545));

	// cranberries
	this.instance_10 = new lib.cranberries();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-8,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(545));

	// turkey-meal-plate
	this.instance_11 = new lib.turkeymealplate_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-77.9,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({x:-47.9},0).wait(2).to({x:-17.9},0).wait(2).to({x:12.1},0).wait(2).to({x:42.1},0).wait(2).to({x:72.1},0).wait(2).to({x:102.1},0).wait(2).to({x:137.1},0).wait(2).to({x:167.1},0).wait(2).to({x:197.1},0).wait(2).to({x:227.1},0).wait(2).to({x:248.5},0).wait(507));

	// table
	this.instance_12 = new lib.table("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(212.5,125.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({y:125},0).to({x:87.5},9).wait(527));

	// trace-layer
	this.instance_13 = new lib._5Holiday_Tasting_Ad_300x250_Animated();
	this.instance_13.parent = this;

	this.instance_14 = new lib.Digital_Banner_Ad_300x250();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(545));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,60,581.5,354);
// library properties:
lib.properties = {
	id: '92879F2740E34FB9890B82961B713FEA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Digital_banner_a_taste_of_atlas_.png", id:"Digital_banner_a_taste_of_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['92879F2740E34FB9890B82961B713FEA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;