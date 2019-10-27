(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.flare = function() {
	this.initialize(img.flare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.logo211111 = function() {
	this.initialize(img.logo211111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

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


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhJMAWWMAAAgsrMCSZAAAMAAAAsrg");
	this.shape.setTransform(150.0171,299.9978,0.3202,2.0984);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(0,0,300,600), null);


(lib.logo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo211111();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo2, new cjs.Rectangle(0,0,600,1200), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo1();
	this.instance.parent = this;
	this.instance.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,-20,600,1200), null);


(lib.flare_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flare();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flare_1, new cjs.Rectangle(0,0,200,200), null);


(lib._5t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAgQgJgLAAgUQAAgTAKgNQALgNASAAQATAAAJALQAKALAAASIAAAHIg8AAQgBANAFAIQAGAKALAAQAJAAAFgEQAFgFACgJIARAAQgCAOgLAIQgKAHgPAAQgTAAgKgNgAAWgHQAAgLgFgHQgGgHgLAAQgJAAgGAHQgGAHAAALIArAAIAAAAg");
	this.shape.setTransform(127.175,161.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXArIAAhUIARAAIAAAQIAAAAQABgIAHgFQAGgEAKAAIAFAAIAAAPIgHgBQgOABgEAIQgFAGABAOIAAAqg");
	this.shape_1.setTransform(119.8,161.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAhQgLgMABgVQgBgTALgMQALgNAUAAQAVAAALANQAKAMAAATQAAAVgKAMQgLAMgVAAQgUAAgLgMgAgYAAQAAAiAYAAQAZAAAAgiQAAgggZAAQgYAAAAAgg");
	this.shape_2.setTransform(110.7,161.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxAsIAAgxQAAgMgDgFQgFgJgMABQgFgBgFADQgHAEgCAGQgCAHAAALIAAAsIgPAAIAAgxQAAgNgEgFQgEgIgLABQgPgBgGAOQgBAEAAANIAAAsIgQAAIAAhUIAQAAIAAAMQAHgPARAAQAYAAAFAQQAKgQATAAQAOAAAJAIQAIAIAAAMIAAA7g");
	this.shape_3.setTransform(97.525,161.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADA2QgGAAgDgFIgDgFIgBgLIAAg1IgOAAIAAgMIAOABIAAgSIAQgGIAAAYIATgBIAAAMIgTAAIAAA2QAAAJAKAAIAJgBIAAAMIgLABIgLgBg");
	this.shape_4.setTransform(81.825,160.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAjQgGgIAAgNIAAg5IAPAAIAAAyQAAAMAEAGQAFAIALAAQAEAAAFgEQAGgDADgGQACgJAAgLIAAgrIARAAIAABVIgQAAIAAgNIgBAAQgJAPgSAAQgNAAgJgJg");
	this.shape_5.setTransform(74,161.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAhQgLgMAAgVQAAgTALgMQAMgNATAAQAVAAALANQALAMgBATQABAVgLAMQgLAMgVAAQgTAAgMgMgAgYAAQgBAiAZAAQAaAAAAgiQAAgggaAAQgZAAABAgg");
	this.shape_6.setTransform(63.65,161.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAwQgIgMAAgSQAAgSAJgNQAKgOATAAQATAAAHAOIAAAAIAAgxIAQAAIAABrIABAPIgQAAIgBgNIAAAAIAAAAQgIAQgVAAQgRAAgKgPgAgXARQAAAOAFAJQAHAMALAAQAYAAAAgjQAAgNgFgIQgGgLgNAAQgXAAAAAgg");
	this.shape_7.setTransform(48.425,159.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAsIAAg1QAAgVgUAAQgHgBgHAHQgHAGAAAQIAAAuIgQAAIAAhUIAQAAIAAAMIAAAAQADgHAIgEQAIgEAGAAQAKAAAIAFQAOAGAAASIAAA6g");
	this.shape_8.setTransform(38.3,161.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHA+IAAhVIAPAAIAABVgAgJgrIAAgSIATAAIAAASg");
	this.shape_9.setTransform(30.725,159.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJA/IAAhJIgSAAIAAgMIASAAIAAgQQAAgNAJgGQAGgFAKAAIALACIAAAOIgIgBQgHAAgDACQgEADABAHIAAANIAUAAIAAAMIgUAAIAABJg");
	this.shape_10.setTransform(25.7,159.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTALgMQAKgNAUAAQAUAAAMANQAKAMABATQgBAVgKAMQgMAMgUAAQgUAAgKgMgAgZAAQAAAiAZAAQAaAAgBgiQABgggaAAQgZAAAAAgg");
	this.shape_11.setTransform(12.85,161.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADA2QgGAAgDgFIgDgFIgBgLIAAg1IgOAAIAAgMIAOABIAAgSIAQgGIAAAYIATgBIAAAMIgTAAIAAA2QAAAJAKAAIAJgBIAAAMIgLABIgLgBg");
	this.shape_12.setTransform(4.675,160.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA7IANghIgkhUIATAAIAZBCIAbhCIASAAIgxB1g");
	this.shape_13.setTransform(176.275,144.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAnQgKgGAAgMQABgRANgGQAKgHARAAIAOAAQAAgNgCgEQgEgGgMAAQgFAAgFADQgEAEAAAGIgRAAQAAgNAKgHQAIgFANAAQAjAAAAAdIAAAoIAAASIgLAAIgCAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgBgMIgBAAQgGAPgTAAQgMAAgIgGgAgTASQAAAHAGAFQAEAEAIAAQAWAAgCghIgPAAQgXABAAAQg");
	this.shape_14.setTransform(166.65,142.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggAwQgIgMAAgSQAAgSAJgNQAKgOATAAQATAAAHAOIAAAAIAAgxIAQAAIAABrIABAPIgQAAIgBgNIAAAAIAAAAQgIAQgVAAQgRAAgKgPgAgXARQAAAOAFAJQAHAMALAAQAYAAAAgjQAAgNgFgIQgGgLgNAAQgXAAAAAgg");
	this.shape_15.setTransform(156.775,141.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTALgMQAKgNAUAAQAVAAALANQAKAMAAATQAAAVgKAMQgLAMgVAAQgUAAgKgMgAgYAAQAAAiAYAAQAaAAgBgiQABgggaAAQgYAAAAAgg");
	this.shape_16.setTransform(146.6,142.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADA3QgGgBgDgFIgDgFIgBgLIAAg1IgOAAIAAgMIAOAAIAAgSIAQgEIAAAWIATAAIAAAMIgTAAIAAA2QAAAJAKAAIAJgBIAAANIgLABIgLgBg");
	this.shape_17.setTransform(138.425,141.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAnQgKgIABgOIARAAQAAAIAFAEQAEAFAIAAQAHAAAFgEQAGgEAAgHQAAgGgIgEIgRgEQgMgDgGgDQgIgGAAgLQAAgNALgHQAKgGAMAAQAOAAAJAGQALAHgBANIgRAAQABgOgRAAQgQAAAAANQAAAGAIADIAMADIALAEIAKADQAKAFAAANQAAAOgMAHQgKAGgPAAQgOAAgJgGg");
	this.shape_18.setTransform(126.8238,142.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAjQgIgJABgNIAAg4IAQAAIAAAxQgBANAEAGQAEAHAMAAQAEAAAFgCQAGgEADgGQACgIAAgMIAAgrIAQAAIAABUIgPAAIAAgMIgBAAQgIAPgUAAQgNAAgHgJg");
	this.shape_19.setTransform(117.4,143.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVA9IAAgyQAAgLgEgGQgFgGgKgBQgEAAgGADQgHAEgCAFQgCAFgBAFIAAAIIAAAsIgPAAIAAh6IAPAAIAAAyIABAAQAJgPASAAQAPAAAHAKQAHAHAAANIAAA5g");
	this.shape_20.setTransform(102.35,141.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AADA3QgGgBgDgFIgDgFIgBgLIAAg1IgOAAIAAgMIAOAAIAAgSIAQgEIAAAWIATAAIAAAMIgTAAIAAA2QAAAJAKAAIAJgBIAAANIgLABIgLgBg");
	this.shape_21.setTransform(94.175,141.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHA9IAAhUIAPAAIAABUgAgJgrIAAgSIATAAIAAASg");
	this.shape_22.setTransform(89.175,141.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVArIgUhFIgBAAIgVBFIgTAAIgchVIASAAIAUBEIABAAIAVhEIAUAAIATBDIAAAAIAWhDIAQAAIgeBVg");
	this.shape_23.setTransform(79.725,142.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AADA3QgGgBgDgFIgDgFIgBgLIAAg1IgOAAIAAgMIAOAAIAAgSIAQgEIAAAWIATAAIAAAMIgTAAIAAA2QAAAJAKAAIAJgBIAAANIgLABIgLgBg");
	this.shape_24.setTransform(64.975,141.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAgQgJgLABgUQgBgTAKgNQALgNASAAQAOAAAJAIQAJAIAAAOIgQAAQgBgSgQAAQgVAAABAgQgBAiAVAAQARAAABgUIAQAAQAAAPgKAIQgKAIgOAAQgTAAgKgNg");
	this.shape_25.setTransform(58.1,142.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdAgQgJgLAAgUQAAgTAKgNQALgNASAAQATAAAJALQAKALAAASIAAAHIg8AAQgBANAFAIQAGAKALAAQAJAAAFgEQAFgFACgJIARAAQgCAOgLAIQgKAHgPAAQgTAAgKgNgAAWgHQAAgLgFgHQgGgHgLAAQgJAAgGAHQgGAHAAALIArAAIAAAAg");
	this.shape_26.setTransform(49.075,142.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAVAsIAAg0QAAgXgTAAQgJAAgGAHQgHAHAAAPIAAAuIgQAAIAAhVIAPAAIAAANIABAAQADgHAJgFQAGgDAHAAQAKAAAIAEQAOAHAAASIAAA6g");
	this.shape_27.setTransform(39.25,142.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAVAsIAAg0QAAgXgTAAQgJAAgGAHQgHAHAAAPIAAAuIgQAAIAAhVIAPAAIAAANIABAAQADgHAJgFQAGgDAHAAQAKAAAIAEQAOAHAAASIAAA6g");
	this.shape_28.setTransform(28.9,142.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQAKgNAUAAQAUAAAMANQALAMAAATQAAAVgLAMQgMAMgUAAQgUAAgKgMgAgZAAQABAiAYAAQAZAAABgiQgBgggZAAQgYAAgBAgg");
	this.shape_29.setTransform(18.5,142.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgkAtQgMgRAAgcQAAgZAMgRQAOgVAcAAQASABALAJQANAJABAQIgSAAQgBgJgIgGQgHgFgKAAQgjAAAAAwQAAAyAhAAQALAAAHgFQAIgFABgKIASAAQgBAPgOAKQgNAJgSAAQgZAAgNgTg");
	this.shape_30.setTransform(7.825,141.0994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._5t, new cjs.Rectangle(0,133,719,38), null);


(lib._4t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzBMQgNgTAAgeQAAgdAOgTQARgWAeAAQAeAAALAXIAAAAIAAhOIAaAAIAACqIABAYIgaAAIgBgVIAAgBIAAAAQgNAaghAAQgcAAgPgYgAglAbQAAAWAIAPQAKASATAAQAnAAAAg3QAAgWgJgNQgKgRgUAAQglgBAAA1g");
	this.shape.setTransform(234.575,102.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBiIAAjCIAZAAIAADCg");
	this.shape_1.setTransform(222.875,102.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBFIAAiHIAZAAIAAAaIABAAQACgNALgIQALgHAPAAIAJABIAAAYIgLgBQgYAAgHANQgHAKAAAXIAABDg");
	this.shape_2.setTransform(214.85,105.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxA0QgSgTABghQgBggASgTQARgUAgAAQAgAAATAUQARATAAAgQAAAhgRATQgTAUggAAQggAAgRgUgAgnAAQAAA1AnAAQApAAAAg1QAAg0gpAAQgnAAAAA0g");
	this.shape_3.setTransform(200.4,105.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBEIgghvIgBAAIgiBvIgeAAIgsiHIAbAAIAhBsIABAAIAhhsIAgAAIAfBqIABAAIAhhqIAaAAIgvCHg");
	this.shape_4.setTransform(180.95,105.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBFIAAiHIAaAAIAAAaIABAAQACgNALgIQALgHAPAAIAJABIAAAYIgMgBQgWAAgIANQgGAKgBAXIAABDg");
	this.shape_5.setTransform(157.95,105.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguA4QgLgOAAgVIAAhaIAZAAIAABPQAAAUAGAKQAHALARAAQAIAAAIgEQAKgGADgJQAFgOAAgSIAAhFIAaAAIAACHIgZAAIAAgUIgBAAQgOAYgfAAQgUAAgNgOg");
	this.shape_6.setTransform(143.525,105.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxA0QgSgTABghQgBggASgTQARgUAgAAQAgAAATAUQARATAAAgQAAAhgRATQgTAUggAAQggAAgRgUgAgnAAQAAA1AnAAQApAAAAg1QAAg0gpAAQgnAAAAA0g");
	this.shape_7.setTransform(127.05,105.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBeIAVg1Ig5iGIAdAAIApBqIArhqIAcAAIhPC7g");
	this.shape_8.setTransform(111.325,107.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguAzQgPgSAAggQAAgfAQgTQARgWAdAAQAeABAPARQAPARAAAdIAAAMIhfAAQgBAUAIANQAJAPASAAQAPAAAIgGQAHgHADgOIAbAAQgDAWgRAMQgPAMgZAAQgeAAgQgVgAgYgoQgKALAAARIBEAAQABgSgJgLQgJgLgRAAQgPAAgJAMg");
	this.shape_9.setTransform(88.8,105.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzBMQgNgTAAgeQAAgdAOgTQARgWAeAAQAeAAALAXIAAAAIAAhOIAaAAIAACqIABAYIgaAAIgBgVIAAgBIAAAAQgNAaghAAQgcAAgPgYgAglAbQAAAWAIAPQAKASATAAQAnAAAAg3QAAgWgJgNQgKgRgUAAQglgBAAA1g");
	this.shape_10.setTransform(72.825,102.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBiIAAiHIAZAAIAACHgAgOhEIAAgcIAdAAIAAAcg");
	this.shape_11.setTransform(61.125,102.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoA9QgPgLAAgWIAbAAQAAAMAIAHQAHAGANAAQAMAAAIgFQAJgGAAgMQAAgKgMgFIgcgHQgTgEgKgGQgMgKAAgSQAAgUARgLQAQgKATAAQAXAAAOAJQARAMgBAVIgbAAQABgXgbAAQgZAAAAAVQAAAKAMAFIATAFIASAFIAQAGQAQAJAAATQAAAXgTALQgQAKgYAAQgXAAgOgLg");
	this.shape_12.setTransform(50.6,105.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEBXQgJgCgFgHQgEgFAAgDQgCgFAAgMIAAhVIgXAAIAAgTIAXABIAAgdIAZgIIAAAlIAfgBIAAATIgfAAIAABWQAAAPAQAAQAIAAAGgCIAAAUIgRABQgKAAgIgBg");
	this.shape_13.setTransform(39.15,103.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AguA4QgLgOAAgVIAAhaIAZAAIAABPQAAAUAGAKQAHALARAAQAIAAAIgEQAKgGADgJQAFgOAAgSIAAhFIAaAAIAACHIgZAAIAAgUIgBAAQgOAYgfAAQgUAAgNgOg");
	this.shape_14.setTransform(26.725,105.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxA0QgRgTAAghQAAggARgTQARgUAgAAQAgAAATAUQAQATABAgQgBAhgQATQgTAUggAAQggAAgRgUgAgnAAQAAA1AnAAQApAAAAg1QAAg0gpAAQgnAAAAA0g");
	this.shape_15.setTransform(10.25,105.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoA9QgPgLAAgWIAbAAQAAAMAIAHQAHAGANAAQAMAAAIgFQAJgGAAgMQAAgKgMgFIgcgHQgTgEgKgGQgMgKAAgSQAAgUARgLQAQgKATAAQAXAAAOAJQARAMgBAVIgbAAQABgXgbAAQgZAAAAAVQAAAKAMAFIATAFIASAFIAQAGQAQAJAAATQAAAXgTALQgQAKgYAAQgXAAgOgLg");
	this.shape_16.setTransform(242.3,74.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzBNQgNgUAAgeQAAgcAOgUQARgWAeAAQAeAAALAWIAAAAIAAhOIAaAAIAACqIABAYIgaAAIgBgUIAAgBIAAAAQgNAZghAAQgcABgPgXgAglAbQAAAXAIAOQAKASATAAQAnAAAAg3QAAgWgJgNQgKgSgUAAQglAAAAA1g");
	this.shape_17.setTransform(227.075,71.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMBhIAAjCIAZAAIAADCg");
	this.shape_18.setTransform(215.375,71.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglBFIAAiHIAaAAIAAAaIABAAQACgNALgIQALgHAPAAIAJABIAAAYIgMgBQgWAAgIANQgGAKgBAXIAABDg");
	this.shape_19.setTransform(207.35,74.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgyA0QgRgTAAghQAAggARgTQATgUAfAAQAhAAARAUQASATgBAgQABAhgSATQgRAUghAAQgfAAgTgUgAgoAAQAAA1AoAAQAoAAAAg1QAAg0goAAQgoAAAAA0g");
	this.shape_20.setTransform(192.9,74.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAgBEIgfhvIAAAAIgiBvIgfAAIgsiHIAbAAIAhBsIAAAAIAihsIAhAAIAeBqIAAAAIAjhqIAaAAIgwCHg");
	this.shape_21.setTransform(173.45,74.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag5A1IAbAAQACAZAdAAQAYAAAIgTQAEgLABgfIgBAAQgFAMgOAGQgLAFgNAAQgeAAgPgTQgNgRAAgeQAAgeAQgUQARgUAeAAQAXAAAMASIAEAHIABgVIAaAAIgBAYIAABfQAAAlgRAQQgRARgkAAQgyAAgBgsgAgdg8QgIANAAAUQAAATAIANQAKARATAAQAUAAAJgQQAJgMAAgVQAAgWgJgNQgJgPgUAAQgTAAgKARg");
	this.shape_22.setTransform(146.125,77.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAhBGIAAhVQAAgigfAAQgNgBgLALQgLALABAZIAABJIgaAAIAAiHIAZAAIAAAUIABAAQAGgMAMgGQALgGAKAAQARAAANAHQAWALAAAcIAABdg");
	this.shape_23.setTransform(130.15,74.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMBhIAAiGIAZAAIAACGgAgOhFIAAgcIAdAAIAAAcg");
	this.shape_24.setTransform(118.075,71.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAEBXQgJgCgFgHQgEgFAAgDQgCgFAAgMIAAhVIgXAAIAAgTIAXABIAAgdIAZgIIAAAlIAfgBIAAATIgfAAIAABWQAAAPAQAAQAIAAAGgCIAAAUIgRABQgKAAgIgBg");
	this.shape_25.setTransform(109.6,73.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgqA+QgPgKAAgTQAAgaAVgMQARgKAbAAIAXAAQAAgUgEgHQgGgKgSAAQgKAAgHAFQgIAGAAAKIgbAAQABgUAPgLQANgJAVAAQA4AAAAAuIAABAIABAdIgRAAIgFAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgTIgBAAQgLAZgeAAQgTAAgNgKgAgeAcQAAAMAIAHQAHAGAMAAQAjAAgBgzIgZAAQgkACAAAYg");
	this.shape_26.setTransform(97.575,74.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAhBGIAAhVQAAgigfAAQgNgBgKALQgLALAAAZIAABJIgaAAIAAiHIAZAAIAAAUIABAAQAFgMANgGQALgGAKAAQARAAAMAHQAXALAAAcIAABdg");
	this.shape_27.setTransform(82.25,74.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMBhIAAiGIAZAAIAACGgAgOhFIAAgcIAdAAIAAAcg");
	this.shape_28.setTransform(70.175,71.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABPBGIAAhPQgBgSgFgJQgHgNgVAAQgHAAgJAEQgKAGgDALQgDAJAAATIAABGIgZAAIAAhPQAAgUgGgJQgGgLgSAAQgXAAgKAWQgCAFAAAWIAABGIgaAAIAAiHIAZAAIAAAUIABAAQALgYAcAAQAlAAAJAaQAPgaAeAAQAYAAANANQAOAMAAATIAABfg");
	this.shape_29.setTransform(53.7,74.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AguA4QgLgOAAgVIAAhaIAZAAIAABPQAAAUAGAKQAHALARAAQAIAAAIgEQAKgGADgJQAFgOAAgSIAAhFIAaAAIAACHIgZAAIAAgUIgBAAQgOAYgfAAQgUAAgNgOg");
	this.shape_30.setTransform(32.775,74.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMBhIAAjCIAZAAIAADCg");
	this.shape_31.setTransform(20.775,71.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMBhIAAjCIAZAAIAADCg");
	this.shape_32.setTransform(13.275,71.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMBhIAAjCIAaAAIAADCg");
	this.shape_33.setTransform(5.75,71.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._4t, new cjs.Rectangle(0,60,719,59.3), null);


(lib._3t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeA/IgdhnIgBAAIgfBnIgcAAIgph9IAZAAIAeBkIABAAIAfhkIAeAAIAcBiIABAAIAfhiIAYAAIgsB9g");
	this.shape.setTransform(209.475,121.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAwQgRgSABgeQgBgdARgSQAQgTAdAAQAeAAARATQAQASAAAdQAAAegQASQgRATgeAAQgdAAgQgTgAgkAAQgBAxAlAAQAmAAAAgxQAAgwgmAAQglAAABAwg");
	this.shape_1.setTransform(191.45,121.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA/IAAh8IAYAAIAAAYIABAAQACgMAKgHQAKgHANAAIAJAAIAAAXIgKgBQgWAAgGAMQgHAJAAAVIAAA+g");
	this.shape_2.setTransform(179.875,121.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA/IAAh8IAYAAIAAAYIABAAQACgMAKgHQAKgHANAAIAJAAIAAAXIgKgBQgWAAgGAMQgHAJAAAVIAAA+g");
	this.shape_3.setTransform(170.175,121.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtAwQgRgSABgeQgBgdARgSQAQgTAdAAQAeAAARATQAQASAAAdQAAAegQASQgRATgeAAQgdAAgQgTgAgkAAQgBAxAlAAQAmAAAAgxQAAgwgmAAQglAAABAwg");
	this.shape_4.setTransform(156.8,121.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABJBBIAAhJQAAgRgFgIQgHgMgTAAQgHAAgHAEQgLAFgDAKQgCAJAAARIAABBIgXAAIAAhJQAAgTgFgIQgHgKgQAAQgWAAgIAUQgCAEAAAVIAABBIgYAAIAAh9IAYAAIAAASIAAAAQAKgWAaAAQAiAAAIAYQAOgYAcAAQAWAAANAMQAMAMAAARIAABYg");
	this.shape_5.setTransform(137.35,121.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtAwQgQgSgBgeQABgdAQgSQAQgTAdAAQAeAAAQATQAQASAAAdQAAAegQASQgQATgeAAQgdAAgQgTgAgkAAQAAAxAkAAQAlAAAAgxQAAgwglAAQgkAAAAAwg");
	this.shape_6.setTransform(117.95,121.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAEBQQgIgBgFgHQgEgFAAgDIgBgPIAAhPIgWABIAAgSIAWAAIAAgaIAWgIIAAAiIAdAAIAAASIgdgBIAABRQAAAMAQAAQAHAAAFgBIAAASIgQACQgJAAgHgCg");
	this.shape_7.setTransform(105.925,119.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglA5QgOgLAAgUIAZAAQAAALAHAGQAIAGALAAQAKAAAIgFQAJgFAAgMQAAgJgMgEIgZgHQgSgEgJgFQgLgJAAgRQAAgSAQgKQAOgKASAAQAUAAAOAJQAQAKgBAUIgZAAQABgVgZAAQgYAAAAAUQAAAJANAEIARAFIARAEIAOAGQAPAIAAASQAAAVgSALQgPAJgWAAQgVAAgNgKg");
	this.shape_8.setTransform(88.8,121.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAfIAQg8IAdAAIgbA8g");
	this.shape_9.setTransform(79.075,112.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggBXIAUgxIg1h8IAbAAIAmBiIAohiIAaAAIhJCtg");
	this.shape_10.setTransform(68.675,123.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBaIAAizIAXAAIAACzg");
	this.shape_11.setTransform(58.25,118.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLBaIAAh8IAXAAIAAB8gAgNhAIAAgZIAbAAIAAAZg");
	this.shape_12.setTransform(51.3,118.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABJBBIAAhJQAAgRgFgIQgHgMgTAAQgHAAgHAEQgLAFgDAKQgCAJAAARIAABBIgXAAIAAhJQAAgTgFgIQgGgKgRAAQgWAAgIAUQgCAEAAAVIAABBIgYAAIAAh9IAXAAIAAASIABAAQAKgWAZAAQAjAAAIAYQAOgYAdAAQAVAAANAMQAMAMAAARIAABYg");
	this.shape_13.setTransform(36,121.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnA6QgOgKAAgRQAAgZAUgKQAQgKAYAAIAWAAQAAgTgEgGQgGgJgRAAQgJAAgGAFQgHAFAAAKIgZAAQABgUAOgJQAMgJATAAQA0AAgBArIAAA7IABAbIgPAAIgFAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgBgRIgBAAQgLAXgbAAQgSAAgMgJgAgcAaQAAALAHAGQAHAGALAAQAhAAgBgvIgYAAQghACAAAWg");
	this.shape_14.setTransform(17,121.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBcIAAhsIgYAAIAAgRIAYAAIAAgYQABgSAMgJQAKgHAPAAIARACIAAAUIgLAAQgLAAgFACQgFAFAAAKIAAATIAdAAIAAARIgdAAIAABsg");
	this.shape_15.setTransform(6.425,118.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiBAIAAh9IAYAAIAAAZIABAAQACgNAKgHQAKgGANAAIAJAAIAAAWIgKgBQgWABgGALQgHAKAAAUIAAA/g");
	this.shape_16.setTransform(238.125,92.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgqAzQgLgMAAgUIAAhTIAYAAIAABJQAAATAFAJQAHAKAPAAQAIAAAHgEQAJgFAEgJQAEgMAAgRIAAhAIAYAAIAAB9IgXAAIAAgTIgBAAQgNAXgdAAQgTAAgLgOg");
	this.shape_17.setTransform(224.75,92.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AguAwQgQgSAAgeQAAgdAQgSQARgTAdAAQAeAAAQATQARASgBAdQABAegRASQgQATgeAAQgdAAgRgTgAglAAQAAAxAlAAQAmAAgBgxQABgwgmAAQglAAAAAwg");
	this.shape_18.setTransform(209.5,92.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggBXIAUgxIg1h8IAbAAIAmBiIAohiIAaAAIhJCtg");
	this.shape_19.setTransform(194.925,95.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvBHQgMgSAAgbQAAgbANgTQAPgUAcAAQAcAAAKAVIAAAAIAAhIIAYAAIAACdIABAWIgYAAIgBgTIAAgBIAAAAQgMAYgfAAQgZAAgOgVgAgjAZQABAVAHANQAKARARAAQAkAAgBgzQABgUgIgMQgKgRgSAAQgjAAAAAxg");
	this.shape_20.setTransform(173.15,90.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgLgBgLAKQgKAKABAYIAABDIgZAAIAAh9IAYAAIAAATIABAAQAFgLAMgGQAKgGAJAAQAPAAAMAHQAVAKgBAaIAABWg");
	this.shape_21.setTransform(158.2,92.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnA6QgNgKAAgRQgBgZAUgKQAPgKAZAAIAWAAQgBgTgDgGQgFgJgSAAQgIAAgHAFQgHAFAAAKIgZAAQAAgUAOgJQANgJATAAQA0AAAAArIAAA7IABAbIgQAAIgFAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgCgRIAAAAQgLAXgbAAQgSAAgMgJgAgcAaQAAALAHAGQAHAGALAAQAhAAgBgvIgYAAQghACAAAWg");
	this.shape_22.setTransform(143.3,92.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggBXIAUgxIg1h8IAbAAIAmBiIAohiIAaAAIhJCtg");
	this.shape_23.setTransform(122.725,95.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgnA6QgNgKAAgRQgBgZAUgKQAPgKAZAAIAWAAQgBgTgDgGQgGgJgRAAQgIAAgHAFQgHAFAAAKIgZAAQAAgUAOgJQANgJATAAQAzAAAAArIAAA7IACAbIgQAAIgFAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgBgRIgBAAQgLAXgbAAQgSAAgMgJgAgcAaQAAALAHAGQAHAGALAAQAhAAgBgvIgYAAQghACAAAWg");
	this.shape_24.setTransform(108.55,92.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgvBHQgMgSgBgbQAAgbAOgTQAPgUAbAAQAdAAAKAVIABAAIAAhIIAXAAIAACdIACAWIgZAAIAAgTIAAgBIgBAAQgMAYgeAAQgaAAgOgVgAgjAZQAAAVAJANQAJARARAAQAkAAAAgzQgBgUgHgMQgJgRgTAAQgiAAgBAxg");
	this.shape_25.setTransform(94,90.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AguAwQgQgSAAgeQAAgdAQgSQARgTAdAAQAeAAAQATQARASgBAdQABAegRASQgQATgeAAQgdAAgRgTgAglAAQAAAxAlAAQAmAAgBgxQABgwgmAAQglAAAAAwg");
	this.shape_26.setTransform(79,92.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAEBRQgIgCgFgGQgEgGAAgCIgBgQIAAhPIgWAAIAAgRIAWAAIAAgaIAWgIIAAAiIAdAAIAAARIgdAAIAABQQAAANAQABQAHgBAFgBIAAASIgQACQgJAAgHgBg");
	this.shape_27.setTransform(66.975,91.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiBAIAAh9IAYAAIAAAZIABAAQACgNAKgHQAKgGANAAIAJAAIAAAWIgKgBQgWABgGALQgHAKAAAUIAAA/g");
	this.shape_28.setTransform(52.175,92.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgqAzQgLgMAAgUIAAhTIAYAAIAABJQAAATAFAJQAHAKAPAAQAIAAAHgEQAJgFADgJQAFgMAAgRIAAhAIAYAAIAAB9IgXAAIAAgTIgBAAQgNAXgdAAQgTAAgLgOg");
	this.shape_29.setTransform(38.8,92.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AguAwQgPgSgBgeQABgdAPgSQARgTAdAAQAeAAAQATQARASgBAdQABAegRASQgQATgeAAQgdAAgRgTgAglAAQABAxAkAAQAlAAAAgxQAAgwglAAQgkAAgBAwg");
	this.shape_30.setTransform(23.55,92.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AggBXIAUgxIg1h8IAbAAIAmBiIAohiIAaAAIhJCtg");
	this.shape_31.setTransform(8.975,95.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiA/IAAh8IAYAAIAAAYIABAAQACgMAKgHQAKgGANgBIAJAAIAAAXIgKgBQgWABgGALQgHAJAAAVIAAA+g");
	this.shape_32.setTransform(142.325,63.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AguAwQgQgSAAgeQAAgdAQgSQARgTAdAAQAeAAAQATQARASgBAdQABAegRASQgQATgeAAQgdAAgRgTgAglAAQAAAxAlAAQAmAAgBgxQABgwgmAAQglAAAAAwg");
	this.shape_33.setTransform(128.95,63.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPBcIAAhsIgYAAIAAgQIAYAAIAAgZQABgSAMgJQAKgHAPAAIARACIAAAUIgLAAQgLAAgFACQgFAEAAALIAAAUIAdAAIAAAQIgdAAIAABsg");
	this.shape_34.setTransform(117.425,60.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag0AxIAYAAQACAXAbAAQAWAAAIgRQADgKABgdIgBAAQgFALgMAGQgLAFgLAAQgcAAgOgSQgMgRAAgbQgBgcAPgSQARgTAbAAQAVAAAMARIADAGIABgTIAYAAIgBAXIAABXQAAAigQAQQgPAPgiAAQguAAAAgpgAgbg4QgIANABASQgBASAIALQAJAQASAAQASAAAJgOQAJgLgBgUQABgUgJgMQgJgOgSAAQgSAAgJAPg");
	this.shape_35.setTransform(98.1,66.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgMgBgKAKQgKAKAAAYIAABDIgYAAIAAh9IAYAAIAAATIAAAAQAGgLAMgGQAKgGAJAAQAPAAAMAHQAVAKAAAaIAABWg");
	this.shape_36.setTransform(83.25,63.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgLBaIAAh8IAXAAIAAB8gAgNhAIAAgZIAbAAIAAAZg");
	this.shape_37.setTransform(72.1,61.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgMgBgJAKQgLAKAAAYIAABDIgXAAIAAh9IAXAAIAAATIAAAAQAGgLALgGQAKgGAKAAQAPAAANAHQATAKABAaIAABWg");
	this.shape_38.setTransform(61.05,63.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgLgBgLAKQgKAKABAYIAABDIgZAAIAAh9IAYAAIAAATIABAAQAFgLAMgGQAKgGAJAAQAPAAAMAHQAVAKgBAaIAABWg");
	this.shape_39.setTransform(45.8,63.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgnA6QgNgKAAgRQAAgZASgKQAQgKAZAAIAWAAQgBgTgDgGQgFgJgSAAQgJAAgGAFQgHAFAAAKIgZAAQAAgUAOgJQANgJATAAQA0AAAAArIAAA7IABAbIgRAAIgDAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgCgRIAAAAQgLAXgbAAQgSAAgMgJgAgcAaQAAALAHAGQAHAGALAAQAhAAgBgvIgYAAQghACAAAWg");
	this.shape_40.setTransform(30.9,63.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLBaIAAizIAXAAIAACzg");
	this.shape_41.setTransform(20.75,61.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag8BaIAAizIA8AAQAbgCAQAMQASANAAAbQAAAwg/ACIgiAAIAABPgAgkgKIAnAAQAKAAAHgDQAPgGAAgUQAAgTgPgHQgHgDgKAAIgnAAg");
	this.shape_42.setTransform(10.35,61.0163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._3t, new cjs.Rectangle(0,50,368,84.6), null);


(lib._3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._3_1, new cjs.Rectangle(0,0,300,600), null);


(lib._2t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglA5QgOgLAAgUIAZAAQABALAGAGQAIAGALAAQALAAAHgFQAJgFAAgMQAAgJgMgEIgZgHQgSgEgJgFQgLgJAAgRQAAgSAQgKQAOgKASAAQAUAAAOAJQAQAKgBAUIgZAAQABgVgZAAQgXAAAAAUQAAAJAMAEIARAFIARAEIAOAGQAPAIAAASQAAAVgSALQgPAJgWAAQgVAAgNgKg");
	this.shape.setTransform(151.45,121.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqAwQgOgRAAgeQAAgcAPgTQAPgUAcAAQAbABAOAQQAOAQAAAbIAAALIhYAAQgBASAHAMQAJAOAQAAQAOAAAHgGQAHgGACgNIAaAAQgDAVgQALQgOALgXAAQgcAAgOgTgAgWglQgJAKAAAQIA/AAQAAgRgHgJQgJgLgQAAQgNAAgJALg");
	this.shape_1.setTransform(138.425,121.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBaIAAh8IAXAAIAAB8gAgNhAIAAgZIAbAAIAAAZg");
	this.shape_2.setTransform(128.25,118.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBQQgIgBgFgHQgEgFAAgDIgBgPIAAhPIgWABIAAgSIAWAAIAAgaIAWgIIAAAiIAdAAIAAASIgdgBIAABRQAAAMAQAAQAHAAAFgBIAAASIgQACQgJAAgHgCg");
	this.shape_3.setTransform(120.575,119.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBaIAAh8IAXAAIAAB8gAgNhAIAAgZIAbAAIAAAZg");
	this.shape_4.setTransform(113.4,118.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgMgBgJAKQgKAKAAAYIAABDIgYAAIAAh9IAXAAIAAATIABAAQAFgLALgGQAKgGAKAAQAPAAANAHQATAKABAaIAABWg");
	this.shape_5.setTransform(102.55,121.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqAzQgLgMAAgUIAAhTIAYAAIAABJQAAATAFAJQAGAKARAAQAHAAAHgEQAJgFAEgJQAEgMAAgRIAAhAIAYAAIAAB9IgXAAIAAgTIgBAAQgNAXgdAAQgTAAgLgOg");
	this.shape_6.setTransform(87.45,121.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAEBQQgIgBgFgHQgEgFAAgDIgBgPIAAhPIgWABIAAgSIAWAAIAAgaIAWgIIAAAiIAdAAIAAASIgdgBIAABRQAAAMAQAAQAHAAAFgBIAAASIgQACQgJAAgHgCg");
	this.shape_7.setTransform(75.625,119.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA/IAAh8IAYAAIAAAYIABAAQACgMAKgHQAKgHANAAIAJAAIAAAXIgKgBQgWAAgGAMQgHAJAAAVIAAA+g");
	this.shape_8.setTransform(67.975,121.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguAwQgQgSAAgeQAAgdAQgSQARgTAdAAQAeAAARATQAPASAAAdQAAAegPASQgRATgeAAQgdAAgRgTgAglAAQAAAxAlAAQAmAAAAgxQAAgwgmAAQglAAAAAwg");
	this.shape_9.setTransform(54.8,121.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6BZIAAiWIgBgXIAYAAIABAUIAAAAQAKgYAgAAQAZAAAOAVQANATAAAbQAAAbgNARQgPAWggAAQgIAAgJgFQgLgFgGgJIAAAAIAAA/gAgbg2QgHANAAAUQAAAwAhAAQATAAAKgQQAHgLAAgVQAAgxgjAAQgRAAgKAQg");
	this.shape_10.setTransform(40.175,123.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag6BZIAAiWIgBgXIAYAAIABAUIAAAAQAKgYAgAAQAZAAAOAVQANATAAAbQAAAbgNARQgPAWggAAQgIAAgJgFQgLgFgGgJIAAAAIAAA/gAgbg2QgHANAAAUQAAAwAhAAQATAAAKgQQAHgLAAgVQAAgxgjAAQgRAAgKAQg");
	this.shape_11.setTransform(25.125,123.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtAwQgRgSABgeQgBgdARgSQAQgTAdAAQAeAAARATQAQASAAAdQAAAegQASQgRATgeAAQgdAAgQgTgAgkAAQgBAxAlAAQAmAAAAgxQAAgwgmAAQglAAABAwg");
	this.shape_12.setTransform(9.65,121.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiBAIAAh9IAYAAIAAAZIABAAQACgNAKgHQAKgGANAAIAJAAIAAAWIgKgBQgWABgGALQgHAKAAAUIAAA/g");
	this.shape_13.setTransform(217.225,92.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqAwQgOgRAAgeQAAgcAPgTQAPgUAcAAQAbABAOAQQAOAQAAAbIAAALIhYAAQgBASAHAMQAJAOAQAAQAOAAAHgGQAHgGACgNIAaAAQgDAVgQALQgOALgXAAQgcAAgOgTgAgWglQgJAKAAAQIA/AAQAAgRgHgJQgJgLgQAAQgNAAgJALg");
	this.shape_14.setTransform(204.675,92.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAEBRQgIgCgFgGQgEgGAAgCIgBgQIAAhPIgWAAIAAgRIAWAAIAAgaIAWgIIAAAiIAdAAIAAARIgdAAIAABQQAAANAQABQAHgBAFgBIAAASIgQACQgJAAgHgBg");
	this.shape_15.setTransform(193.575,91.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAeBaIAAhKQAAgRgGgIQgGgKgQgBQgGAAgJAFQgJAFgDAIQgDAHgCAIIABANIAABAIgYAAIAAizIAYAAIAABHIAAAAQANgUAbAAQAXAAALAOQAJALAAASIAABVg");
	this.shape_16.setTransform(182.25,89.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag1AxIAZAAQACAXAaAAQAXAAAIgRQADgKABgdIgBAAQgFALgMAGQgLAFgLAAQgcAAgOgSQgMgRAAgbQAAgcAOgSQARgTAbAAQAVAAAMARIADAGIABgTIAYAAIgBAXIAABXQAAAigQAQQgPAPgiAAQguAAgBgpgAgbg4QgIANAAASQAAASAIALQAJAQASAAQASAAAJgOQAJgLgBgUQABgUgJgMQgJgOgSAAQgSAAgJAPg");
	this.shape_17.setTransform(166.85,94.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLBaIAAh8IAXAAIAAB8gAgNhAIAAgZIAbAAIAAAZg");
	this.shape_18.setTransform(156.3,89.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgiBAIAAh9IAYAAIAAAZIABAAQACgNAKgHQAKgGANAAIAJAAIAAAWIgKgBQgWABgGALQgHAKAAAUIAAA/g");
	this.shape_19.setTransform(149.075,92.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiBEIAAAAIAAABIgBATIgYAAIABgUIAAifIAYAAIAABIIAAAAQAKgVAcAAQAcAAAPAUQANATAAAbQAAAbgMASQgOAVgaAAQgeAAgMgYgAgbgHQgHAMAAAVQAAAxAiAAQASAAAKgQQAHgNAAgUQAAgxgjAAQgRAAgKAQg");
	this.shape_20.setTransform(136.325,90.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPBcIAAhsIgYAAIAAgRIAYAAIAAgXQABgTAMgJQAKgHAPAAIARACIAAAUIgLgBQgLAAgFAEQgFADAAAKIAAAUIAdAAIAAARIgdAAIAABsg");
	this.shape_21.setTransform(117.425,89.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AguAwQgPgSAAgeQAAgdAPgSQARgTAdAAQAeAAARATQAQASAAAdQAAAegQASQgRATgeAAQgdAAgRgTgAglAAQAAAxAlAAQAmAAAAgxQAAgwgmAAQglAAAAAwg");
	this.shape_22.setTransform(105.4,92.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgvBHQgNgSAAgbQAAgbAOgTQAPgUAcAAQAcAAAKAVIAAAAIAAhIIAYAAIAACdIACAWIgZAAIgBgTIAAgBIAAAAQgMAYgfAAQgaAAgNgVgAgjAZQABAVAHANQAJARASAAQAjAAAAgzQAAgUgHgMQgKgRgSAAQgjAAAAAxg");
	this.shape_23.setTransform(82.95,90.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLBaIAAizIAXAAIAACzg");
	this.shape_24.setTransform(72.1,89.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgiBAIAAh9IAYAAIAAAZIABAAQACgNAKgHQAKgGANAAIAJAAIAAAWIgKgBQgWABgGALQgHAKAAAUIAAA/g");
	this.shape_25.setTransform(64.675,92.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AguAwQgPgSAAgeQAAgdAPgSQARgTAdAAQAeAAARATQAPASAAAdQAAAegPASQgRATgeAAQgdAAgRgTgAglAAQAAAxAlAAQAmAAAAgxQAAgwgmAAQglAAAAAwg");
	this.shape_26.setTransform(51.3,92.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAeA/IgdhnIgBAAIgfBnIgcAAIgph9IAZAAIAeBkIABAAIAfhkIAeAAIAcBiIABAAIAfhiIAYAAIgsB9g");
	this.shape_27.setTransform(33.275,92.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnA6QgOgKAAgRQABgZASgKQARgKAYAAIAVAAQABgTgEgGQgGgJgRAAQgIAAgHAFQgHAFAAAKIgZAAQABgUAOgJQAMgJATAAQA0AAgBArIAAA7IABAbIgQAAIgDAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgCgRIAAAAQgLAXgbAAQgSAAgMgJgAgcAaQAAALAIAGQAGAGALAAQAhAAgCgvIgXAAQghACAAAWg");
	this.shape_28.setTransform(8.7,92.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgtAwQgRgSABgeQgBgdARgSQAQgTAdAAQAeAAARATQAQASAAAdQAAAegQASQgRATgeAAQgdAAgQgTgAgkAAQgBAxAlAAQAmAAAAgxQAAgwgmAAQglAAABAwg");
	this.shape_29.setTransform(210.8,63.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAEBQQgIgBgFgHQgEgFAAgDIgBgPIAAhPIgWABIAAgSIAWABIAAgbIAWgIIAAAjIAdgBIAAASIgdgBIAABRQAAANAQgBQAHABAFgCIAAASIgQACQgJAAgHgCg");
	this.shape_30.setTransform(198.775,62.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgqAzQgLgMAAgUIAAhTIAYAAIAABJQAAATAFAJQAGAKARAAQAHAAAHgEQAJgFAEgJQAEgMAAgRIAAhAIAYAAIAAB9IgXAAIAAgTIgBAAQgNAXgdAAQgTAAgLgOg");
	this.shape_31.setTransform(180.3,63.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AguAwQgQgSAAgeQAAgdAQgSQARgTAdAAQAeAAARATQAPASAAAdQAAAegPASQgRATgeAAQgdAAgRgTgAglAAQAAAxAlAAQAmAAAAgxQAAgwgmAAQglAAAAAwg");
	this.shape_32.setTransform(165.05,63.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AggBXIAUgxIg1h8IAbAAIAmBiIAohiIAaAAIhJCtg");
	this.shape_33.setTransform(150.475,66.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag1AxIAZAAQACAXAaAAQAXAAAIgRQADgKABgdIgBAAQgFALgMAGQgLAFgLAAQgcAAgOgSQgMgRAAgbQAAgcAOgSQARgTAbAAQAVAAAMARIADAGIABgTIAYAAIgBAXIAABXQAAAigQAQQgPAPgiAAQguAAgBgpgAgbg4QgIANAAASQAAASAIALQAJAQASAAQASAAAJgOQAJgLgBgUQABgUgJgMQgJgOgSAAQgSAAgJAPg");
	this.shape_34.setTransform(128.6,66.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgLgBgLAKQgKAKAAAYIAABDIgYAAIAAh9IAYAAIAAATIAAAAQAGgLAMgGQAKgGAJAAQAPAAAMAHQAVAKgBAaIAABWg");
	this.shape_35.setTransform(113.75,63.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLBaIAAh8IAXAAIAAB8gAgNhAIAAgZIAbAAIAAAZg");
	this.shape_36.setTransform(102.6,61.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAEBQQgIgBgFgHQgEgFAAgDIgBgPIAAhPIgWABIAAgSIAWABIAAgbIAWgIIAAAjIAdgBIAAASIgdgBIAABRQAAANAQgBQAHABAFgCIAAASIgQACQgJAAgHgCg");
	this.shape_37.setTransform(94.725,62.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgnAwQgNgRAAgeQAAgcAOgTQAPgUAcAAQAUAAANAMQAOAMAAAVIgXAAQgCgbgYAAQgeAAAAAwQAAAxAeAAQAZAAACgcIAXAAQgBAVgOAMQgOANgVAAQgcAAgOgTg");
	this.shape_38.setTransform(84.625,63.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgqAwQgOgRAAgeQAAgcAPgTQAPgUAcAAQAbABAOAQQAOAQAAAbIAAALIhYAAQgBASAHAMQAJAOAQAAQAOAAAHgGQAHgGACgNIAaAAQgDAVgQALQgOALgXAAQgcAAgOgTgAgWglQgJAKAAAQIA/AAQAAgRgHgJQgJgLgQAAQgNAAgJALg");
	this.shape_39.setTransform(71.325,63.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgLgBgKAKQgLAKABAYIAABDIgZAAIAAh9IAYAAIAAATIABAAQAFgLAMgGQAJgGAKAAQAQAAALAHQAUAKAAAaIAABWg");
	this.shape_40.setTransform(56.85,63.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgLgBgLAKQgJAKgBAYIAABDIgXAAIAAh9IAXAAIAAATIAAAAQAGgLALgGQAKgGAKAAQAQAAAMAHQATAKABAaIAABWg");
	this.shape_41.setTransform(41.6,63.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgtAwQgRgSABgeQgBgdARgSQAQgTAdAAQAeAAARATQAQASAAAdQAAAegQASQgRATgeAAQgdAAgQgTgAgkAAQgBAxAlAAQAmAAAAgxQAAgwgmAAQglAAABAwg");
	this.shape_42.setTransform(26.3,63.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag1BCQgSgZAAgpQAAgmASgZQAVgfAoABQAbABARAMQASAOACAXIgbAAQAAgMgMgJQgLgHgPAAQgzAAAABHQAABJAxAAQAPAAALgIQAMgHACgOIAaAAQgCAWgUAOQgTAOgbAAQglAAgTgcg");
	this.shape_43.setTransform(10.575,61.0465);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._2t, new cjs.Rectangle(0,50,354,84.6), null);


(lib._2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2_1, new cjs.Rectangle(0,0,300,600), null);


(lib._1t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBXIAUgxIg1h8IAbAAIAmBiIAohiIAaAAIhJCtg");
	this.shape.setTransform(242.975,123.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA6QgOgKAAgRQABgZASgKQAQgKAZAAIAVAAQABgTgEgGQgFgJgSAAQgJAAgGAFQgHAFAAAKIgZAAQABgUAOgJQAMgJATAAQAzAAABArIAAA7IAAAbIgQAAIgDAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgCgRIAAAAQgLAXgbAAQgSAAgMgJgAgcAaQAAALAIAGQAGAGALAAQAhAAgCgvIgXAAQghACAAAWg");
	this.shape_1.setTransform(229.1,121.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBHQgMgSABgbQAAgbANgTQAPgUAbAAQAdAAAKAVIABAAIAAhIIAXAAIAACdIABAWIgYAAIAAgTIAAgBIgBAAQgMAYgeAAQgbAAgOgVgAgiAZQgBAVAJANQAIARASAAQAkAAAAgzQAAgUgIgMQgJgRgTAAQgiAAAAAxg");
	this.shape_2.setTransform(214.85,118.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguAwQgQgSAAgeQAAgdAQgSQARgTAdAAQAeAAARATQAPASAAAdQAAAegPASQgRATgeAAQgdAAgRgTgAglAAQAAAxAlAAQAmAAAAgxQAAgwgmAAQglAAAAAwg");
	this.shape_3.setTransform(200.15,121.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAEBQQgIgBgFgHQgEgFAAgDIgBgPIAAhPIgWABIAAgSIAWAAIAAgaIAWgIIAAAiIAdAAIAAASIgdgBIAABRQAAAMAQAAQAHAAAFgBIAAASIgQACQgJAAgHgCg");
	this.shape_4.setTransform(188.425,119.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBaIAAhKQAAgRgGgIQgGgKgQgBQgGAAgJAFQgJAFgDAIQgDAHgCAIIABANIAABAIgYAAIAAizIAYAAIAABHIAAAAQANgUAbAAQAXAAALAOQAJALAAASIAABVg");
	this.shape_5.setTransform(170.55,118.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAEBQQgIgBgFgHQgEgFAAgDIgBgPIAAhPIgWABIAAgSIAWAAIAAgaIAWgIIAAAiIAdAAIAAASIgdgBIAABRQAAAMAQAAQAHAAAFgBIAAASIgQACQgJAAgHgCg");
	this.shape_6.setTransform(158.825,119.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBaIAAizIAXAAIAACzg");
	this.shape_7.setTransform(151.75,118.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA6QgOgKAAgRQABgZASgKQAQgKAZAAIAVAAQABgTgEgGQgFgJgSAAQgJAAgGAFQgHAFAAAKIgZAAQAAgUAPgJQAMgJATAAQAzAAABArIAAA7IAAAbIgQAAIgDAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgCgRIAAAAQgLAXgbAAQgSAAgMgJgAgcAaQAAALAIAGQAGAGALAAQAhAAgCgvIgXAAQghACAAAWg");
	this.shape_8.setTransform(141.35,121.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqAwQgOgRAAgeQAAgcAPgTQAPgUAcAAQAbABAOAQQAOAQAAAbIAAALIhYAAQgBASAHAMQAJAOAQAAQAOAAAHgGQAHgGACgNIAaAAQgDAVgQALQgOALgXAAQgcAAgOgTgAgWglQgJAKAAAQIA/AAQAAgRgHgJQgJgLgQAAQgNAAgJALg");
	this.shape_9.setTransform(127.975,121.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeA/IgdhnIgBAAIgfBnIgcAAIgph9IAZAAIAeBkIABAAIAfhkIAeAAIAcBiIABAAIAfhiIAYAAIgsB9g");
	this.shape_10.setTransform(110.975,121.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiA/IAAh8IAYAAIAAAYIABAAQACgMAKgHQAKgHANAAIAJAAIAAAXIgKgBQgWAAgGAMQgHAJAAAVIAAA+g");
	this.shape_11.setTransform(90.275,121.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqAzQgLgMAAgUIAAhTIAYAAIAABJQAAATAFAJQAGAKAQAAQAIAAAHgEQAJgFADgJQAFgMAAgRIAAhAIAYAAIAAB9IgXAAIAAgTIgBAAQgNAXgdAAQgTAAgLgOg");
	this.shape_12.setTransform(77.2,121.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguAwQgPgSgBgeQABgdAPgSQARgTAdAAQAeAAAQATQARASgBAdQABAegRASQgQATgeAAQgdAAgRgTgAglAAQAAAxAlAAQAlAAAAgxQAAgwglAAQglAAAAAwg");
	this.shape_13.setTransform(62.25,121.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggBXIAUgxIg1h8IAbAAIAmBiIAohiIAaAAIhJCtg");
	this.shape_14.setTransform(47.975,123.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiA/IAAh8IAYAAIAAAYIABAAQACgMAKgHQAKgHANAAIAJAAIAAAXIgKgBQgWAAgGAMQgHAJAAAVIAAA+g");
	this.shape_15.setTransform(30.725,121.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguAwQgPgSAAgeQAAgdAPgSQARgTAdAAQAeAAARATQAQASAAAdQAAAegQASQgRATgeAAQgdAAgRgTgAglAAQAAAxAlAAQAmAAAAgxQAAgwgmAAQglAAAAAwg");
	this.shape_16.setTransform(17.65,121.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPBcIAAhsIgYAAIAAgRIAYAAIAAgYQABgSAMgJQAKgHAPAAIARACIAAAUIgLAAQgLAAgFACQgFAFAAAKIAAATIAdAAIAAARIgdAAIAABsg");
	this.shape_17.setTransform(6.425,118.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgqAwQgOgRAAgeQAAgcAPgTQAPgUAcAAQAbABAOAQQAOAQAAAbIAAALIhYAAQgBASAHAMQAJAOAQAAQAOAAAHgGQAHgGACgNIAaAAQgDAVgQALQgOALgXAAQgcAAgOgTgAgWglQgJAKAAAQIA/AAQAAgRgHgJQgJgLgQAAQgNAAgJALg");
	this.shape_18.setTransform(202.225,92.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgiBAIAAh9IAYAAIAAAZIABAAQACgNAKgHQAKgGANAAIAJAAIAAAWIgKgBQgWABgGALQgHAKAAAUIAAA/g");
	this.shape_19.setTransform(191.675,92.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqAzQgLgMAAgUIAAhTIAYAAIAABJQAAATAFAJQAGAKARAAQAHAAAHgEQAJgFAEgJQAEgMAAgRIAAhAIAYAAIAAB9IgXAAIAAgTIgBAAQgNAXgdAAQgTAAgLgOg");
	this.shape_20.setTransform(178.6,92.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAEBRQgIgCgFgGQgEgGAAgCIgBgQIAAhPIgWAAIAAgRIAWAAIAAgaIAWgIIAAAiIAdAAIAAARIgdAAIAABQQAAANAQABQAHgBAFgBIAAASIgQACQgJAAgHgBg");
	this.shape_21.setTransform(166.875,91.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqAzQgLgMAAgUIAAhTIAYAAIAABJQAAATAFAJQAGAKARAAQAHAAAHgEQAJgFAEgJQAEgMAAgRIAAhAIAYAAIAAB9IgXAAIAAgTIgBAAQgNAXgdAAQgTAAgLgOg");
	this.shape_22.setTransform(155.65,92.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPBcIAAhsIgYAAIAAgRIAYAAIAAgXQABgTAMgJQAKgHAPAAIARACIAAAUIgLgBQgLAAgFAEQgFADAAAKIAAAUIAdAAIAAARIgdAAIAABsg");
	this.shape_23.setTransform(144.425,89.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqAwQgOgRAAgeQAAgcAPgTQAPgUAcAAQAbABAOAQQAOAQAAAbIAAALIhYAAQgBASAHAMQAJAOAQAAQAOAAAHgGQAHgGACgNIAaAAQgDAVgQALQgOALgXAAQgcAAgOgTgAgWglQgJAKAAAQIA/AAQAAgRgHgJQgJgLgQAAQgNAAgJALg");
	this.shape_24.setTransform(126.675,92.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLBaIAAizIAXAAIAACzg");
	this.shape_25.setTransform(116.6,89.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiBEIAAAAIAAABIgBATIgYAAIABgUIAAifIAYAAIAABIIAAAAQAKgVAcAAQAcAAAPAUQANATAAAbQAAAbgMASQgOAVgaAAQgeAAgMgYgAgbgHQgHAMAAAVQAAAxAiAAQASAAAKgQQAHgNAAgUQAAgxgjAAQgRAAgKAQg");
	this.shape_26.setTransform(106.225,90.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnA6QgOgKAAgRQAAgZAUgKQAQgKAYAAIAWAAQAAgTgEgGQgGgJgRAAQgJAAgGAFQgHAFAAAKIgZAAQABgUAOgJQAMgJATAAQA0AAgBArIAAA7IABAbIgPAAIgFAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgBgRIgBAAQgLAXgbAAQgSAAgMgJgAgcAaQAAALAHAGQAHAGALAAQAhAAgBgvIgYAAQghACAAAWg");
	this.shape_27.setTransform(91.25,92.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgLgBgLAKQgKAKABAYIAABDIgZAAIAAh9IAYAAIAAATIABAAQAFgLAMgGQAKgGAJAAQAPAAAMAHQAVAKgBAaIAABWg");
	this.shape_28.setTransform(77.3,92.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLBaIAAh8IAXAAIAAB8gAgNhAIAAgZIAbAAIAAAZg");
	this.shape_29.setTransform(66.45,89.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgnA6QgOgKAAgRQAAgZATgKQARgKAYAAIAVAAQAAgTgDgGQgGgJgRAAQgIAAgHAFQgHAFAAAKIgZAAQABgUAOgJQAMgJATAAQA0AAgBArIAAA7IABAbIgQAAIgEAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgBgRIgBAAQgLAXgbAAQgSAAgMgJgAgcAaQAAALAIAGQAGAGALAAQAhAAgCgvIgXAAQghACAAAWg");
	this.shape_30.setTransform(56.05,92.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAEBRQgIgCgFgGQgEgGAAgCIgBgQIAAhPIgWAAIAAgRIAWAAIAAgaIAWgIIAAAiIAdAAIAAARIgdAAIAABQQAAANAQABQAHgBAFgBIAAASIgQACQgJAAgHgBg");
	this.shape_31.setTransform(45.275,91.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkA5QgPgLAAgUIAaAAQgBALAIAGQAGAGAMAAQALAAAHgFQAJgFAAgMQAAgJgMgEIgZgHQgSgEgIgFQgMgJAAgRQAAgSAQgKQAOgKASAAQAVAAANAJQAQAKgCAUIgYAAQABgVgZAAQgYAAAAAUQABAJALAEIASAFIAQAEIAPAGQAPAIAAASQAAAVgSALQgPAJgWAAQgVAAgMgKg");
	this.shape_32.setTransform(35.4,92.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgqAzQgLgMAAgUIAAhTIAYAAIAABJQAAATAFAJQAGAKARAAQAHAAAHgEQAJgFADgJQAFgMAAgRIAAhAIAYAAIAAB9IgXAAIAAgTIgBAAQgNAXgdAAQgTAAgLgOg");
	this.shape_33.setTransform(21.85,92.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AglA5QgOgLAAgUIAZAAQAAALAHAGQAIAGALAAQAKAAAIgFQAJgFAAgMQAAgJgMgEIgZgHQgSgEgJgFQgLgJAAgRQAAgSAQgKQAOgKASAAQAUAAAOAJQAQAKgBAUIgZAAQABgVgZAAQgYAAAAAUQAAAJANAEIARAFIARAEIAOAGQAPAIAAASQAAAVgSALQgPAJgWAAQgVAAgNgKg");
	this.shape_34.setTransform(8.25,92.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgnA6QgNgKAAgRQgBgZAUgKQAQgKAYAAIAWAAQAAgTgEgGQgFgJgSAAQgIAAgHAFQgHAFAAAKIgZAAQABgUANgJQANgJATAAQAzAAAAArIAAA7IABAbIgPAAIgFAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgBgRIgBAAQgLAXgbAAQgSAAgMgJgAgcAaQAAALAHAGQAHAGALAAQAhAAgBgvIgYAAQghACAAAWg");
	this.shape_35.setTransform(118.35,63.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag1AxIAaAAQABAXAaAAQAXAAAIgRQADgKABgdIgBAAQgFALgMAGQgLAFgMAAQgbAAgOgSQgNgRAAgbQAAgcAPgSQAQgTAcAAQAWAAALARIADAGIABgTIAZAAIgCAXIAABXQAAAigQAQQgQAPghAAQguAAgBgpgAgbg4QgIANAAASQAAASAIALQAJAQASAAQASAAAJgOQAIgLAAgUQAAgUgIgMQgJgOgSAAQgSAAgJAPg");
	this.shape_36.setTransform(97.35,66.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgMgBgKAKQgKAKAAAYIAABDIgYAAIAAh9IAYAAIAAATIAAAAQAGgLALgGQALgGAJAAQAPAAAMAHQAVAKAAAaIAABWg");
	this.shape_37.setTransform(82.8,63.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLBaIAAh8IAXAAIAAB8gAgNhAIAAgZIAbAAIAAAZg");
	this.shape_38.setTransform(71.95,61.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgiA/IAAh8IAYAAIAAAYIABAAQACgMAKgHQAKgGANgBIAJAAIAAAXIgKgBQgWABgGALQgHAJAAAVIAAA+g");
	this.shape_39.setTransform(64.825,63.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgqAzQgLgMAAgUIAAhTIAYAAIAABJQAAATAFAJQAHAKAPAAQAIAAAHgEQAJgFADgJQAFgMAAgRIAAhAIAYAAIAAB9IgXAAIAAgTIgBAAQgNAXgdAAQgTAAgLgOg");
	this.shape_40.setTransform(51.75,63.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AglA5QgOgLAAgUIAZAAQABALAGAGQAIAGALAAQAKAAAIgFQAJgFAAgMQAAgJgMgEIgZgHQgSgEgJgFQgLgJAAgRQAAgSAQgKQAOgKASAAQAUAAAOAJQAQAKgBAUIgZAAQABgVgZAAQgXAAAAAUQAAAJALAEIASAFIARAEIAOAGQAPAIAAASQAAAVgSALQgPAJgWAAQgVAAgNgKg");
	this.shape_41.setTransform(38.15,63.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAfBBIAAhOQAAgggdAAQgLgBgLAKQgKAKABAYIAABDIgZAAIAAh9IAYAAIAAATIABAAQAFgLAMgGQAKgGAJAAQAPAAAMAHQAVAKgBAaIAABWg");
	this.shape_42.setTransform(24.65,63.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag5BaIAAizIBxAAIAAAVIhYAAIAAA4IBTAAIAAAVIhTAAIAAA8IBZAAIAAAVg");
	this.shape_43.setTransform(9.65,61.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._1t, new cjs.Rectangle(0,50,251.8,84.6), null);


(lib._1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1_1, new cjs.Rectangle(0,0,300,600), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_293 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(293).call(this.frame_293).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(294));

	// white
	this.instance = new lib.white();
	this.instance.parent = this;
	this.instance.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({alpha:0.7695},15,cjs.Ease.get(1)).wait(2).to({alpha:0},14,cjs.Ease.get(1)).wait(163).to({alpha:0.7695},15,cjs.Ease.get(1)).wait(2).to({alpha:0},14,cjs.Ease.get(1)).wait(54));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(242.5,62.5,0.5,0.5,0,0,0,485,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(168).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(64));

	// Layer_2
	this.instance_2 = new lib.logo2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(242.5,62.5,0.5,0.5,0,0,0,485,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(226).to({_off:false},0).wait(1).to({regX:300,regY:600,x:150,y:300,alpha:0.1371},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.3807},0).wait(1).to({alpha:0.4873},0).wait(1).to({alpha:0.5837},0).wait(1).to({alpha:0.67},0).wait(1).to({alpha:0.7462},0).wait(1).to({alpha:0.8122},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.9137},0).wait(1).to({regX:485,regY:125,x:242.5,y:62.5,alpha:0.9492},0).wait(1).to({regX:300,regY:600,x:150,y:300,alpha:0.9774},0).wait(1).to({alpha:0.9944},0).wait(1).to({regX:485,regY:125,x:242.5,y:62.5,alpha:1},0).wait(1).to({regX:150,regY:300,x:75,y:150},0).wait(53));

	// flare
	this.instance_3 = new lib.flare_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-13.75,-18.15,1.2667,1.2667,0,0,0,100,100);
	this.instance_3.alpha = 0.5703;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({regX:99.9,regY:99.9,scaleX:3.097,scaleY:2.6055,x:211.45,y:178.3,alpha:0.7383},25,cjs.Ease.get(1)).wait(2).to({alpha:0},14,cjs.Ease.get(1)).wait(153).to({regX:100,regY:100,scaleX:1.2667,scaleY:1.2667,x:-13.75,y:-18.15,alpha:0.5703},0).to({regX:99.9,regY:99.9,scaleX:3.097,scaleY:2.6055,x:211.45,y:178.3,alpha:0.7383},25,cjs.Ease.get(1)).wait(2).to({alpha:0},14,cjs.Ease.get(1)).wait(54));

	// 5t
	this.instance_4 = new lib._5t();
	this.instance_4.parent = this;
	this.instance_4.setTransform(381.55,87.6,1,1,0,0,0,359.5,61);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(242).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(47));

	// 4t
	this.instance_5 = new lib._4t();
	this.instance_5.parent = this;
	this.instance_5.setTransform(285.2,39.15,1,1,0,0,0,264.4,14.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(226).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(63));

	// 3t
	this.instance_6 = new lib._3t();
	this.instance_6.parent = this;
	this.instance_6.setTransform(205.8,52.55,1,1,0,0,0,184,28.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(149).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(40).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},17).wait(73));

	// 3
	this.instance_7 = new lib._3_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(149).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).to({_off:true},67).wait(73));

	// 2t
	this.instance_8 = new lib._2t();
	this.instance_8.parent = this;
	this.instance_8.setTransform(198.05,52.8,1,1,0,0,0,177,28.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).to({_off:true},111).wait(73));

	// 2
	this.instance_9 = new lib._2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).to({_off:true},116).wait(73));

	// 1t
	this.instance_10 = new lib._1t();
	this.instance_10.parent = this;
	this.instance_10.setTransform(210.3,52.6,1,1,0,0,0,188.5,28.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(33).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(56).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},117).wait(73));

	// 1
	this.instance_11 = new lib._1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(33).to({_off:false},0).to({alpha:1},16,cjs.Ease.get(1)).to({_off:true},172).wait(73));

	// bg
	this.instance_12 = new lib.bg();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(294));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.6,155.2,731.5,445.8);
// library properties:
lib.properties = {
	id: 'EF23E925247D439681B5F3F12316D941',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_1.jpg", id:"_1"},
		{src:"images/_2.jpg", id:"_2"},
		{src:"images/_3.jpg", id:"_3"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/flare.png", id:"flare"},
		{src:"images/logo1.png", id:"logo1"},
		{src:"images/logo211111.png", id:"logo211111"}
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
an.compositions['EF23E925247D439681B5F3F12316D941'] = {
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