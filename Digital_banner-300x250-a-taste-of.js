(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Digital_banner_300x250_a_taste_of_atlas_", frames: [[0,504,300,250],[302,411,108,108],[427,0,78,75],[0,252,300,250],[0,0,425,250],[412,411,97,99],[302,252,157,157]]}
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
	this.spriteSheet = ss["Digital_banner_300x250_a_taste_of_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.brussels = function() {
	this.spriteSheet = ss["Digital_banner_300x250_a_taste_of_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cranberries = function() {
	this.spriteSheet = ss["Digital_banner_300x250_a_taste_of_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Digital_Banner_Ad_300x250 = function() {
	this.spriteSheet = ss["Digital_banner_300x250_a_taste_of_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.EWP2017_WholeFoods_Holiday20175246 = function() {
	this.spriteSheet = ss["Digital_banner_300x250_a_taste_of_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mashedtaters = function() {
	this.spriteSheet = ss["Digital_banner_300x250_a_taste_of_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.turkeymealplate = function() {
	this.spriteSheet = ss["Digital_banner_300x250_a_taste_of_atlas_"];
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


(lib.table = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EWP2017_WholeFoods_Holiday20175246();
	this.instance.parent = this;
	this.instance.setTransform(-212.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-125,425,250);


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


// stage content:
(lib.Digital_banner300x250atasteof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tasting Event Near You copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAqQgHgCgIgGIAAgDIABgCIACgDIAEgDIACAAIAEABIAEADIAGACIAIABIAGgBIAGgEIAEgFQACgEAAgEQAAgDgCgDQgBgDgDgDIgFgCQgDgCgDAAQgEAAgDACIgFACIgEACIgEABIgFAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIAEgmQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAEgCIAVAAIAVAAQADAAACADIAAAFIAAAEIgEADIgcAAQgFAAgBACQgCADAAAEIACADIADABIAEgBIAFAAQAGAAAGACQAFACAEAFQAFAEABAEQADAGAAAGQAAAIgDAGQgDAGgFAEQgEAEgHADQgGACgGAAQgJAAgHgDg");
	this.shape.setTransform(65.9,152.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAHIgWAAIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIABgCIABgBIAWAAIACABIABACIABACIAAABIAAAEIgCADg");
	this.shape_1.setTransform(59.9,151.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHAuIgCgDIAAgOIgBgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgcAAIgDgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgEIAag6IADgCIADgBIACAAIADABIACACIAAADIgBAEIgDAHIgDAKIgFAKIgDAIIgCADIgBACIAAABIABACIADABIADAAIAEAAIADgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgNQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIADgBIACAAIACABIACAAIACACIAAACIAAAMIABAEQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAHAAQACACABACIAAAFQAAABAAABQAAABAAAAQgBABAAAAQAAAAAAAAIgEACIgDAAIgEABIgBACIgBACIABAJIgBAFQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgHAAg");
	this.shape_2.setTransform(53.9,151.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQgBgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(44,155.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBArIgCgGIgFgKIgFgMIgGgOIgHgNIgEgMIgEgJIgCgEIABgDIAEgCIADgBIACAAIAFABIACADIASArIABABIAAABQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIASgsQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIADgBIADAAIAEABIACACIABADIgBAEIgDAJIgGAMIgGANIgGAPIgGANIgDAKIgDAFIgBABIgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBg");
	this.shape_4.setTransform(38,152);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAtIgJgDIgIgEIgHgFQgHgGgDgJIgDgJIgBgJIABgJIADgIQADgJAHgFIAHgGIAIgEIAJgDIAIgBIAKABIAJADQAIADAGAHQAHAFAEAJQADAJAAAIIgBAJIgCAJQgEAJgHAGQgGAGgIADIgJADIgKABIgIgBgAgKgbQgGADgEADQgEAEgDAGQgCAFAAAGQAAAGACAGQADAFAEAFQAEAEAGACQAFACAFABQAGgBAFgCQAGgCAEgEQAEgFADgFQACgGAAgGQAAgGgCgFQgDgGgEgEQgEgDgGgDQgFgCgGgBQgFABgFACg");
	this.shape_5.setTransform(28.6,152);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBADIAAAsIgDADIgFABIgFgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEAAACAEIAjAvIACABIACgBIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABAEIAABTIgCACIgEACg");
	this.shape_6.setTransform(18.5,152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(545));

	// Tasting Event Near You
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOArQgHgDgGgFQgFgFgDgHIgCgHIgBgIIAAgXIAAgZIABgCIADgCIAEAAIACAAIAEABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAtQAAAFACAEQABAFADAEQADADAEACQAFACAEAAQAGAAAEgCQAEgCADgDQADgEABgFQACgEAAgFIAAgtQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAEgBIADgBIADABIADABIABADIAAAwIgBAIIgCAHQgDAHgFAFQgGAFgHADQgHADgIAAQgHAAgHgDg");
	this.shape_7.setTransform(186.6,61);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAtIgJgCIgIgFIgHgFQgHgHgDgIIgDgJIgBgJIABgJIADgIQADgJAHgFIAHgGIAIgEIAJgDIAIgBIAKABIAJADQAIADAGAHQAHAFAEAJQADAIAAAJIgBAJIgCAJQgEAIgHAHQgGAGgIAEIgJACIgKABIgIgBgAgKgbQgGADgEAEQgEADgDAGQgCAFAAAGQAAAGACAGQADAGAEAEQAEAEAGACQAFADAFAAQAGAAAFgDQAGgCAEgEQAEgEADgGQACgGAAgGQAAgGgCgFQgDgGgEgDQgEgEgGgDQgFgDgGABQgFgBgFADg");
	this.shape_8.setTransform(176.2,61);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAuIgDAAIgCgBIgBgBIgBgBIAAggIgBgEIgCgFIgZgnIAAAAIABgDIACgDIADgBIAEgBIACABIACACIASAdIABABIACABIACgBIACgBIARgdIACgCIAEgBIACAAIADACIAEACIABADIAAABIgBAAIgZAnIgCAFIgBACIAAACIAAAgQgBADgDAAg");
	this.shape_9.setTransform(166.7,60.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWAtIgCgBIgBgBIgCgBIgPgXIgCgDIgEgBIgLAAIgDABIgBADIAAAWQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDABIgDABIgDAAIgEgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAhQQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIAlAAQAHAAAGACQAGADAEADQAEAEACAGQACAFABAHQAAAIgDAEQgDAEgDADIgHAFQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIAAACIADAFIAFAHIAFAHIACAFIgBACIgDACIgDABIgDABgAgRgbQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAAUQAAAAAAABQAAABAAAAQAAAAABABQAAAAABABIADAAIASAAIAHAAIAFgDQACgBABgDQACgDgBgEQAAgHgEgEIgFgCIgHgBIgSAAIgDABg");
	this.shape_10.setTransform(154.2,61.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjAtIgDAAIgEgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBIgFgMIgBgCIgDAAIgdAAIgBAAIgBABIgBABIgBAAIgFAMIgCACIgCABIgDAAIgCAAIgCAAIgDAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAlhSIACgCIACAAIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAjBRIAAABIgBADIgDABgAAAgNIgBABIgBADIgCADIgCAGIgCADIgCAFIAAACIAAABIACABIARAAIACgBIABgBIgCgEIgDgGIgDgIIgCgFIgCgBg");
	this.shape_11.setTransform(144.7,61.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgCgCIAAhQQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgBIA8AAIADACIABADIAAACIAAADIgBAEIgDABIgtAAIgCACIgBADIAAAMIABACIADABIAdAAIACABIAAAEIABADIAAACQAAADgDABIgdAAIgDACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAANIABACQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAsAAQADACAAACIABADIgBAEIgBADIgCABg");
	this.shape_12.setTransform(136.3,61);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBADIAAAsIgDADIgFABIgFgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEAAACADIAjAwIACABIACgBIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABAEIAABTIgCACIgEABg");
	this.shape_13.setTransform(126.7,61);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AACAsIgDAAIgEgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHAAIgHAAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgEIAAgDIABgDIABgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAADIgBADIgBADIgCABIgSAAIgDABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAABAIgBADIgCABg");
	this.shape_14.setTransform(114,61.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBADIAAAsIgDADIgFABIgFgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEAAACADIAjAwIACABIACgBIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABAEIAABTIgCACIgEABg");
	this.shape_15.setTransform(105.5,61);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgBgCIAAhQQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIA+AAIABACIABADIAAACIAAADIAAAEIgCABIgtAAIgDACIgBADIAAAMIABACIADABIAdAAIABABIABAEIABADIAAACQAAADgEABIgbAAIgDACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAANIABACQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAIAtAAQACACAAACIAAADIAAAEIgBADIgCABg");
	this.shape_16.setTransform(96.7,61);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAArIgDgGIgFgKIgGgMIgFgOIgHgNIgEgMIgEgJIgBgEIAAgDIADgCIAEgBIACAAIAFABIACADIASArIABABIAAABQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIASgsQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBIADgBIADAAIAEABIACACIABADIgBAEIgDAJIgGAMIgGANIgGAPIgFANIgEAKIgDAFIgBABIgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_17.setTransform(87.8,61);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgBgCIAAhQQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIA9AAIACACIABADIAAACIAAADIAAAEIgDABIgtAAIgCACIgBADIAAAMIABACIADABIAdAAIACABIABAEIAAADIAAACQAAADgEABIgcAAIgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAANIABACQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAsAAQADACAAACIAAADIAAAEIgBADIgCABg");
	this.shape_18.setTransform(79.8,61);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAtIgIgCIgIgEIgIgGIgFgHIgFgIQgDgIAAgKIAAgJIADgIQAEgJAGgFIAIgGIAIgEIAIgDIAJgBQAFAAAFABIAKAEQAJADAHAIIAAACIgBADIgDADIgDACIgDABIgEgBIgFgEIgHgFQgEgBgGAAQgFgBgGADQgFADgEAEQgFAEgCAFQgCAGAAAFQAAAGACAGQACAFAFAFQAEAEAFACQAGADAFAAIAGgBIAGgCIAGgDQACgBACgDIAAgCIgBgCIgDgBIgQAAIgCgBIgBgDIAAgEIAAgCIAAgDQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIAlAAIABAAIABACQACADAAAEIAAAFIgBADIgHAMQgEAFgGAEQgFADgHACQgGACgHAAIgJgBg");
	this.shape_19.setTransform(65.4,61);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBADIAAAsIgDADIgFABIgFgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEAAACADIAjAwIACABIACgBIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABAEIAABTIgCACIgEABg");
	this.shape_20.setTransform(55.4,61);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAAtIgCAAQgEAAgBgCIAAhUIACgDIADgBIACAAIADAAQAEAAABAEIAABTIgCACIgDABg");
	this.shape_21.setTransform(48.6,61);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAsIgDAAIgEgBQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAhAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAIgHAAIgHAAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgBgEIAAgDIABgDIABgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAADIgBADIgBADIgCABIgSAAIgDABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAABAIgBADIgCABg");
	this.shape_22.setTransform(42.7,61.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAqQgKgDgHgHIgBgCIAAgBIABgDIADgDIADgCIADgBIAEABIAGAEIAHAEQAEABAGAAIAGAAIAHgCIAFgEQACgDAAgEQAAgDgCgCQgDgDgDgBIgKgBIgJgCIgKgCQgFgBgEgCQgEgDgDgEQgCgFAAgGQAAgHADgFQAEgFAFgEQAFgDAHgBIALgCIAJABIAIACIAJADIAHAFIAAACIABABIgBADIgDADIgDACIgEABIgCAAQgFgEgFgDQgFgCgGAAIgGAAIgGACIgEAEQgCACAAAEQAAAFAEACIAKADIANACQAHABAHACQAGADAEADQAFAFAAAJQgBAIgDAGQgEAFgFAEQgGADgHACIgMACQgKAAgJgEg");
	this.shape_23.setTransform(34.5,61);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAjAtIgDAAIgEgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBIgFgMIgBgCIgDAAIgdAAIgBAAIgBABIgBABIgBAAIgFAMIgCACIgCABIgDAAIgCAAIgCAAIgDAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAlhSIACgCIACAAIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAjBRIAAABIgBADIgDABgAAAgNIgBABIgBADIgCADIgCAGIgCADIgCAFIAAACIAAABIACABIARAAIACgBIABgBIgCgEIgDgGIgDgIIgCgFIgCgBg");
	this.shape_24.setTransform(25.6,61.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AACAsIgDAAIgEgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHAAIgHAAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgEIAAgDIABgDIABgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAADIgBADIgBADIgCABIgSAAIgDABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAABAIgBADIgCABg");
	this.shape_25.setTransform(17.4,61.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(545));

	// Find a Store
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcArIAAhVIA2AAIAAALIgqAAIAAAZIAoAAIAAAKIgoAAIAAAbIAsAAIAAAMg");
	this.shape_26.setTransform(114.6,186.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAQArIgVgmIgNAAIAAAmIgLAAIAAhVIAdAAQAIABAFACQAFACADADQADAEACAEIABAJQAAAEgCADIgEAHQgCADgEABQgEACgFAAIAYAogAgSgEIAPAAIAGgBIAGgCIAEgDQACgEAAgDQAAgFgCgCIgEgFIgGgCIgGgBIgPAAg");
	this.shape_27.setTransform(107.4,186.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRApIgHgEIgHgFQgGgGgDgIIgCgJIgBgJIABgIIACgIQADgJAGgGQAGgGAIgDQAIgDAJAAIAJAAIAJADQAIADAGAGQAGAGADAJQADAHAAAJQAAAJgDAJQgDAIgGAGIgGAFIgIAEIgJADIgJABQgJgBgIgDgAgMgeQgGACgEAFQgEAEgDAHQgCAGAAAGQAAAHACAGQADAHAEAEQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgEACgHQACgGAAgHQAAgGgCgGQgCgHgFgEQgEgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_28.setTransform(98.3,186.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgFArIAAhKIgbAAIAAgLIBBAAIAAALIgbAAIAABKg");
	this.shape_29.setTransform(90,186.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAqIgGgEIgFgFIAJgIQADAEAFACQAFADAFAAIAFgBIAGgDIAEgEQABgDAAgDQAAgFgDgDQgDgDgFgBIgJgEQgFgBgFgDQgFgCgDgFIgCgGIgBgHIACgIQABgEAEgDQADgEAGgDQAFgBAHAAQAHAAAGABQAHACAFAGIgKAJIgGgGQgEgCgFAAQgEAAgDABQgDABgCADIgDAEIgBAEQAAAFAEADQADAEAEABIAJADIAKAEQAFACADAFQADADAAAJQAAAFgCAFQgCAFgEADQgEAEgGACQgFABgFABQgIgBgIgCg");
	this.shape_30.setTransform(83.1,186.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAAQALIgQglIAAAAIgPAlIAfAAg");
	this.shape_31.setTransform(72.4,186.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkArIAAhVIAdAAQAIAAAHACQAHACAFAEQAFAEADAEQAEAFABAEIADAKIABAHIgBAIIgCAIIgEAHIgFAGQgGAGgIAEQgJAEgLAAgAgZAfIAPAAQAHAAAGgCQAGgCAFgDQAFgEADgGQADgGAAgIIgCgIQgBgGgEgFIgEgFIgGgDQgGgEgJAAIgSAAg");
	this.shape_32.setTransform(60.6,186.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWArIguhFIAABFIgMAAIAAhVIAPAAIAuBGIAAhGIAMAAIAABVg");
	this.shape_33.setTransform(51.2,186.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_34.setTransform(44.8,186.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaArIAAhVIA1AAIAAALIgpAAIAAAbIAmAAIAAAKIgmAAIAAAlg");
	this.shape_35.setTransform(40.1,186.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).wait(545));

	// Thanksgiving
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag4BlQgTgNAAgQQAAgIADgGQAFgEAIAAQAHgBADAEQADAEACAHQAEALAKAHQAKAGASABQAUAAAOgJQANgHAAgMQAAgIgFgDQgFgFgKAAIgSABIgXACQgbAAgOgJQgPgKAAgMQAAgIAFgHQAGgHALgGQgKgIgEgKQgFgJABgNQgBgYAUgRQASgRAdAAIAQABIAXAFQAGAAAHgDIAQgJIAFAFIABAFQAAAGgEAHQgGAFgJAFIAGAMIABANQAAAZgSAQQgUAQgdgBIgQAAIgPgDIgEAFIgCAGQABAHAGADQAIAEAPAAIAWgCIAZgCQAVAAAMAJQAKAJABAQQAAAZgZAQQgYAQgkAAQgcAAgUgLgAgZhMQgHALAAAPQgBAQAIAJQAIAKANAAQAMAAAIgKQAJgKAAgPQAAgQgJgKQgIgKgMAAQgNAAgIAKg");
	this.shape_36.setTransform(207.7,129.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhLBMQgHgCAAgHQAAgFAHgDIAEgCQAEgCACgFQABgFAAgMIAAgKIAAgNIAAgOQAAgZgBgHQgBgHgDgCIgIgDQgJgDAAgFQAAgDADgDQADgDAGgCIAXgHIAPgDQAFAAACACQACADAAAFIAAAKIAAABIABABIABAAIAAgBIAEgDIADgDQARgQASAAQALAAALAFQAKAFAHAIQAHAJADALQADAMAAAZIAAATIAAALIgBAIQAAALACAFQACAEADACIAEACQAIADAAAFQAAAHgHACQgHACgYAAQgVAAgIgCQgHgCAAgGQAAgGAIgDIAFgCQAEgCABgHQACgHAAgQQAAgwgGgNQgHgMgQAAQgHAAgHAFQgIAFgEAIQgDAHgCAMQgBALAAAeQAAAPABAFQABAFAEACIAFACQAIADAAAGQAAAGgHACQgIADgUAAQgXAAgIgDg");
	this.shape_37.setTransform(188.9,127.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaBuQgIgDAAgHQAAgFAIgDIADgBQAEgCACgGQABgFABgLIAAgLIgBgMIAAgQQAAgYgBgHQgBgHgDgCIgIgCQgIgDgBgFQAAgEADgCQADgDAHgDIAXgHIAPgDQAEAAACADQACADAAAHIAAAJIgBAHIAAAmIAAABIgBAmQAAAOABAGQACAGADACIAFADQAJADgBAFQAAAGgHADQgHACgVAAQgWAAgHgCgAgShNQgHgFABgIQgBgJAIgGQAGgGALAAQAJAAAGAGQAHAFAAAJQAAAIgHAGQgHAGgKAAQgKAAgGgGg");
	this.shape_38.setTransform(174.4,123.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQBBQgJgPgVgzIgJgWQgLgdgHgEIgEgCQgJgEAAgFQAAgHAIgCQAHgDAZABQAVgBAIADQAHACAAAHIgBAFIgDADIgFABQgGAEAAADIADALIAMAeIAMAeQAEAHACAAQACgBADgEIAGgNIARgmQAFgPAAgFIgBgGIgDgDIgFgCQgHgDAAgFQAAgFAHgDQAHgDATABQAQgBAHADQAGADAAAFQAAAHgIACIgFACQgHAEgNAeIgEAJIgGAOQgjBPgJAAQgHAAgJgOg");
	this.shape_39.setTransform(161.2,127.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbBuQgHgDAAgHQAAgFAHgDIAFgBQAEgCABgGQABgFAAgLIAAgLIAAgMIAAgQQAAgYgBgHQgBgHgDgCIgHgCQgKgDABgFQgBgEADgCQADgDAGgDIAYgHIAPgDQAEAAACADQACADAAAHIAAAJIgBAHIgBAmIAAABIAAAmQAAAOABAGQACAGADACIAGADQAHADAAAFQABAGgIADQgHACgUAAQgXAAgIgCgAgShNQgGgFgBgIQABgJAGgGQAIgGAKAAQAJAAAHAGQAGAFAAAJQAAAIgHAGQgHAGgKAAQgKAAgGgGg");
	this.shape_40.setTransform(147.8,123.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag4BlQgTgNgBgQQABgIAEgGQADgEAJAAQAHgBADAEQADAEADAHQADALAKAHQAKAGASABQAUAAANgJQAOgHAAgMQAAgIgFgDQgFgFgJAAIgSABIgYACQgaAAgQgJQgOgKAAgMQAAgIAFgHQAFgHALgGQgIgIgFgKQgEgJgBgNQABgYASgRQAUgRAcAAIAPABIAYAFQAGAAAGgDIARgJIAFAFIABAFQABAGgGAHQgEAFgJAFIAEAMIACANQAAAZgSAQQgUAQgdgBIgQAAIgOgDIgFAFIgBAGQgBAHAIADQAHAEAPAAIAXgCIAYgCQAVAAALAJQALAJAAAQQABAZgYAQQgYAQglAAQgcAAgUgLgAgZhMQgHALgBAPQAAAQAIAJQAIAKAMAAQANAAAIgKQAJgKAAgPQAAgQgIgKQgJgKgMAAQgMAAgJAKg");
	this.shape_41.setTransform(135,129.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLBQIgQgDIgFADIgFABIgDgBIgDgCQgFgFgFgMQgEgMAAgMQAAgFADgDQACgDAEAAQAHAAAIAMIAFAJQAFAHAIADQAIAEAIAAQAKAAAGgFQAGgGAAgIQAAgNgZgMIgJgFQgYgMgIgJQgIgKAAgOQAAgUANgNQAOgNAXAAIAKABIAKACIAIgDIAEgBQAIAAAHAMQAHAMAAAOQAAAFgCADQgCADgFAAQgDAAgEgDQgDgDgFgHQgGgKgGgDQgGgEgIAAQgIAAgGAFQgFAFAAAIQAAAHAFAFQAGAGASAJIACABQArAUAAAZQAAAWgRAOQgQAPgZAAg");
	this.shape_42.setTransform(118.6,127.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAyBwIgGgBQgHgCgPgTIgGgIIgDgEQglgwgDAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIAAAGIAAAHIABAgQAAAJADADIAIAEQAHADAAAGQAAAGgHACQgIADgUAAQgXAAgIgDQgHgCAAgHQAAgFAHgDIAEgCQAEgCACgHQACgIAAgSIAAgTIgBgYIAAgSIAAg5QgCgOgCgDQgBgBgIgDIgFgBIgFgDIgCgEQAAgEADgDQADgCALgEIAVgGIAQgCQAEAAACADQACADAAAHIgBAeIAAAoIAAAlIAAAIQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAAAIAHgEIALgJIAOgOQAEgFAAgCQAAgCgFgCQgFgDAAgFQAAgHAHgDQAIgDAWAAQAOAAAHADQAHADAAAGQAAAHgLADQgMADgEADQgGADgNAMIgCADIgGAFIgBADQAAADANASIACACIAaAgQALANAGAEIAOAGQAKADAAAGQAAAHgHADQgHADgRAAg");
	this.shape_43.setTransform(103,123.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhLBMQgHgCAAgHQAAgFAHgDIAEgCQAEgCACgFQABgFAAgMIAAgKIAAgNIAAgOQAAgZgBgHQgBgHgDgCIgIgDQgJgDAAgFQAAgDADgDQADgDAGgCIAXgHIAPgDQAFAAACACQACADAAAFIAAAKIAAABIABABIABAAIAAgBIAEgDIADgDQARgQASAAQALAAALAFQAKAFAHAIQAHAJADALQADAMAAAZIAAATIAAALIgBAIQAAALACAFQACAEADACIAEACQAIADAAAFQAAAHgHACQgHACgYAAQgVAAgIgCQgHgCAAgGQAAgGAIgDIAFgCQAEgCABgHQACgHAAgQQAAgwgGgNQgHgMgQAAQgHAAgHAFQgIAFgEAIQgDAHgCAMQgBALAAAeQAAAPABAFQABAFAEACIAFACQAIADAAAGQAAAGgHACQgIADgUAAQgXAAgIgDg");
	this.shape_44.setTransform(83.7,127.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAbBIIgIgIIgGAEQgTAMgTAAQgWAAgOgNQgOgNAAgVQAAgYASgNQASgOAgAAQAHAAAEACQAEADgBAFQABAJgKAAQgPAAgKAHQgJAHAAANQAAANAIAHQAIAHAOAAQAOAAAGgGQAHgHAAgQIAAg6QgBgNgGgHQgFgIgKAAQgHAAgHAEQgGADgHAHIgDAEQgJAMgKAAQgHAAgDgEQgEgEAAgHQAAgOASgKQARgKAcAAQARAAAMAEQANAFAGAIQAEAGACAKQACAJABAWIAAAxQAAAIABAFQABAEADABIAGABQAJADAAAFQAAAHgKAGQgLAGgNAAQgHAAgIgIg");
	this.shape_45.setTransform(65.6,127.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAWBuQgIgCAAgGQAAgGAIgDIAFgCQAEgCABgHQACgGAAgRQAAgxgGgLQgHgNgQAAQgHAAgHAFQgIAFgEAHQgDAHgCAMIgBApQAAAQABAFQACAFADACIAGACQAHADAAAGQAAAGgHACQgIADgTAAQgZAAgHgDQgHgCAAgHQAAgFAHgDIAEgCQAEgCACgGQACgHAAgRIAAgZIAAgXIgBhFQgBgRgDgDQgBgCgJgDQgKgCAAgGQAAgEAEgDQAEgDAOgFIAPgEIAOgCQAFAAADADQACADAAAHIgBAHIgBA9IAAAHIABAEIACABIADgDIAGgGQAIgIAIgEQAIgEAKAAQAaAAANARQANASAAAhIAAAPIAAAbIAAAJQAAAHACAEQABADADACIAEACQAIADAAAFQAAAHgHACQgIADgYAAQgUAAgHgDg");
	this.shape_46.setTransform(46.8,123.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgfBtQgKgDABgGQAAgHAIgDQAIgDACgCQACgDAAgZIABhIIAAgoIgCgZQAAgEgCgBQgDgCgGAAIgHAAQgKAAgHADQgGACgEAGIgEAKIgFALIgEAFQgDACgDAAQgFAAgCgEQgCgFAAgJQABgUAEgNQAFgMAHAAIACAAQAMACASAAIBaAAQATAAAMgCIABAAQAJAAAEAMQAEANABAUQAAAJgCAEQgDAFgFAAIgFgCIgEgFIgFgLIgEgKQgEgGgGgCQgHgDgKAAIgHAAQgGAAgDACQgCABAAAEIgCAZIAAAoIABBIQAAAZACADQACACAIADQAIADAAAHQAAAGgJADQgIADgYAAQgXAAgIgDg");
	this.shape_47.setTransform(27,123.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(545));

	// A Taste of
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgqBvQgIgDAAgGQAAgFAHgDIAEgBQAEgDABgFQACgEAAgNIAAgQIAAhJIgRAAQgEAAgBgBQgCgCAAgEIAAgEQAAgEACgCQABgBAEAAIAQAAIgBgMIgBgLQAAgYAOgNQAOgNAZAAQARAAALAJQALAHAAAMQAAAIgEADQgEAFgIAAQgEgBgEgCQgEgCgDgEIgDgGQgFgLgJAAQgGAAgDAEQgDAEAAAGIADARQADAOAAAKIAWAAQAEAAACABQABACAAAEIAAAEQAAAEgBACQgCABgEAAIgWAAIAABPQAAATACAGQABAGADACIAGACQAJADAAAGQAAAGgIADQgHABgWABQgWgBgHgBg");
	this.shape_48.setTransform(164.9,90);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag3A5QgWgWAAgiQAAgiAXgXQAXgXAiAAQAgAAAWAVQAVAWAAAiQAAAigXAYQgWAYgiAAQggAAgWgXgAgdgtQgJAMAAAVQAAAeANAUQANAUASAAQAOAAAKgMQAJgNAAgVQAAgdgNgUQgNgVgRAAQgPAAgKANg");
	this.shape_49.setTransform(149.7,93.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgxA6QgWgXAAghQAAgjAWgXQAXgXAiAAQAdAAASARQARARAAAcQAAAKgDADQgCADgMAAIg6AAQgFAAgDgDQgDgCAAgEQAAgEADgCQADgDAFAAIAfAAIAIgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgPgKgKQgKgLgOAAQgSAAgJARQgJAPAAAXQAAAXANASQAMARATAAQALAAAIgCQAHgDAIgFIAFgEQAIgHAEAAQAEAAACACQACADAAADQAAADgEAGQgDAFgHAFQgNALgNAFQgMAFgPAAQgfAAgWgWg");
	this.shape_50.setTransform(122.4,93.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgHBcQgIgCgFgGQgGgFgCgHQgCgJAAgXIAAhSIgPAAIgEgBIgBgEIAAgEQAAgEAQgOIAGgGIAGgFQAQgOAGAAIAEABQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABIAAAdIAiAAQAEAAABABIABAGIAAAEIgBAGQgCABgDAAIggAAIgCABIgBAEIAABLQAAAVADAFQAEAEAJAAQAEAAAIgCIALgCQADAAACABQACACAAAEQAAAIgNAIQgNAIgQAAQgJAAgHgDg");
	this.shape_51.setTransform(108,92.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLBQIgQgDIgFADIgFABIgDgBIgDgCQgFgFgFgMQgEgMAAgMQAAgFADgDQACgDAEAAQAHAAAIAMIAFAJQAFAHAIADQAIAEAIAAQAKAAAGgFQAGgGAAgIQAAgNgZgMIgJgFQgYgMgIgJQgIgKAAgOQAAgUANgNQAOgNAXAAIAKABIAKACIAIgDIAEgBQAIAAAHAMQAHAMAAAOQAAAFgCADQgCADgFAAQgDAAgEgDQgDgDgFgHQgGgKgGgDQgGgEgIAAQgIAAgGAFQgFAFAAAIQAAAHAFAFQAGAGASAJIACABQArAUAAAZQAAAWgRAOQgQAPgZAAg");
	this.shape_52.setTransform(94.8,93.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAcBIIgJgIIgGAEQgTAMgTAAQgWAAgOgNQgOgNAAgVQAAgYASgNQASgOAgAAQAHAAAEACQAEADgBAFQAAAJgKAAQgOAAgKAHQgJAHAAANQAAANAIAHQAIAHAOAAQANAAAHgGQAGgHABgQIAAg6QAAgNgHgHQgFgIgKAAQgHAAgHAEQgGADgHAHIgDAEQgJAMgKAAQgHAAgDgEQgEgEAAgHQAAgOASgKQARgKAcAAQARAAAMAEQANAFAGAIQAFAGABAKQADAJAAAWIAAAxQAAAIABAFQABAEADABIAGABQAJADAAAFQAAAHgKAGQgLAGgOAAQgGAAgHgIg");
	this.shape_53.setTransform(79.2,93.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgfBtQgKgDABgGQAAgHAIgDQAIgDACgCQACgDAAgZIABhIIAAgoIgCgZQAAgEgCgBQgDgCgGAAIgHAAQgKAAgHADQgGACgEAGIgEAKIgFALIgEAFQgDACgDAAQgFAAgCgEQgCgFAAgJQABgUAEgNQAFgMAHAAIACAAQAMACASAAIBaAAQATAAAMgCIABAAQAJAAAEAMQAEANAAAUQAAAJgBAEQgDAFgEAAIgGgCIgEgFIgFgLIgEgKQgEgGgGgCQgHgDgKAAIgHAAQgGAAgDACQgCABAAAEIgCAZIAAAoIABBIQAAAZACADQACACAIADQAIADAAAHQAAAGgJADQgIADgYAAQgXAAgIgDg");
	this.shape_54.setTransform(59.9,90.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAhBuQgJgDAAgHQAAgFALgEIADgBQAEgCABgCQACgCAAgEIgCgMIgGgRIgDgEIgCgCIgMgBIgXAAIgNAAQgNAAAAgLQAAgMAOAAIAHAAIAPAAIAQABIgPgqIgPgkIgEAAIgQAnIgPAnIgPAnQgDAJAAAGQAAAEACAEQABADAGACIAEACQAKADAAAGQAAAHgIADQgHADgYAAQgXAAgIgDQgIgDABgHQAAgGAJgDIAFgDQAMgHAKgbIAEgJIAWg2IAFgOQAWg3AGgXQABgHAEgCQACgCAJAAQAFAAADACQADADAEAFIAXAzIAfBIIAHASQARAtAKAFIAFACQAKADAAAGQAAAHgJADQgJADgcAAQgaAAgKgDg");
	this.shape_55.setTransform(28.4,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(545));

	// find-a-store-rectangle
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D63900").s().p("AprCeIAAk6ITXAAIAAE6g");
	this.shape_56.setTransform(77.1,186.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(545));

	// logo
	this.instance = new lib.WFM_Logo_White_RGBai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(250.8,32.8,0.223,0.223,0,0,0,175.2,174.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(545));

	// fade-from-black
	this.instance_1 = new lib.square("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.5,124.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(536));

	// brussels
	this.instance_2 = new lib.brussels();
	this.instance_2.parent = this;
	this.instance_2.setTransform(127,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(545));

	// potatoes
	this.instance_3 = new lib.mashedtaters();
	this.instance_3.parent = this;
	this.instance_3.setTransform(58,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(545));

	// cranberries
	this.instance_4 = new lib.cranberries();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(545));

	// turkey-meal-plate
	this.instance_5 = new lib.turkeymealplate_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-77.9,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({x:-47.9},0).wait(2).to({x:-17.9},0).wait(2).to({x:12.1},0).wait(2).to({x:42.1},0).wait(2).to({x:72.1},0).wait(2).to({x:102.1},0).wait(2).to({x:137.1},0).wait(2).to({x:167.1},0).wait(2).to({x:197.1},0).wait(2).to({x:227.1},0).wait(2).to({x:248.5},0).wait(507));

	// table
	this.instance_6 = new lib.table("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(212.5,125.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({y:125},0).to({x:87.5},9).wait(527));

	// trace-layer
	this.instance_7 = new lib._5Holiday_Tasting_Ad_300x250_Animated();
	this.instance_7.parent = this;

	this.instance_8 = new lib.Digital_Banner_Ad_300x250();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(545));

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
		{src:"images/Digital_banner_300x250_a_taste_of_atlas_.png", id:"Digital_banner_300x250_a_taste_of_atlas_"}
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