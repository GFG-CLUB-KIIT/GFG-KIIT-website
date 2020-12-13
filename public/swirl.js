console.clear()
var log = console.log.bind(console);

var baseUrl = "";

var bulgeVert  = document.getElementById("bulgeVert").textContent;
var bulgeFrag  = document.getElementById("bulgeFrag").textContent;
var marbleFrag = document.getElementById("marbleFrag").textContent;

//
// BULGE PINCH FILTER
// =========================================================================== 
class BulgePinchFilter extends PIXI.Filter {
  
  constructor(x, y, radius = 50, strength = 0.1) {
    
    // super(bulgeVert, bulgeFrag);
    super(PIXI.Filter.defaultVertexSrc, bulgeFrag);
    
    this.uniforms.center = new PIXI.Point(x, y);
    this.uniforms.radius = radius;
    this.uniforms.strength = strength;
  }
  
  get radius() { return this.uniforms.radius; }
  set radius(value) { this.uniforms.radius = value; }

  get strength() { return this.uniforms.strength; }
  set strength(value) { this.uniforms.strength = value; }

  get center() { return this.uniforms.center; }
  set center(value) { this.uniforms.center = value; }
    
  get x() { return this.uniforms.center.x; }
  set x(value) { this.uniforms.center.x = value; }
    
  get y() { return this.uniforms.center.y; }
  set y(value) { this.uniforms.center.y = value; }
  
  apply(filterManager, input, output) {
      
    this.uniforms.dimensions[0] = input.sourceFrame.width;
    this.uniforms.dimensions[1] = input.sourceFrame.height;

    filterManager.applyFilter(this, input, output);
  }
}

//
// MARBLE FILTER - based on filter in Phaser
// =========================================================================== 
class MarbleFilter extends PIXI.Filter {
  
  constructor(width, height) {
    super(null, marbleFrag);
    
    this.uniforms.time = 0;
    this.uniforms.alpha = 1;
    this.uniforms.fluid_speed = 20;
    this.uniforms.color_intensity = 0.30;
    this.uniforms.mouse = new PIXI.Point();
    this.uniforms.resolution = new PIXI.Point(width, height);
  }
  
  get time() { return this.uniforms.time; }
  set time(value) { this.uniforms.time = value; }
  
  get alpha() { return this.uniforms.alpha; }
  set alpha(value) { this.uniforms.alpha = value; }
  
  get speed() { return this.uniforms.fluid_speed; }
  set speed(value) { this.uniforms.fluid_speed = value; }
  
  get intensity() { return this.uniforms.color_intensity; }
  set intensity(value) { this.uniforms.color_intensity = value; }
  
  get mouse() { return this.uniforms.mouse; }
  set mouse(value) { this.uniforms.mouse = value; }
    
  get width() { return this.uniforms.resolution.width; }
  set width(value) { this.uniforms.resolution.width = value; }
  
  get height() { return this.uniforms.resolution.height; }
  set height(value) { this.uniforms.resolution.height = value; }
}

var vw = window.innerWidth;
var vh = window.innerHeight;

var app = new PIXI.Application(vw, vh, {
  view: document.getElementById("stage"),
  resolution: window.devicePixelRatio || 1,
  backgroundColor: 0x000000,
  antialias: true,
  autoResize: true
});

var background = new PIXI.Sprite();
var container = new PIXI.Container();
var resized = false;
var count = 0;
var moves = 0;

var loader = new PIXI.loaders.Loader(baseUrl)
  .add("muppets")
  .load(onLoad);

var muppets, bulgeFilter, marbleFilter;

function onLoad(loader, resources) {
  
  muppets = new PIXI.Sprite(resources.muppets.texture);
  muppets.anchor.set(0.5, 1);
  muppets.pivot.set(0.5, 1);
  
  resize();  
  
  bulgeFilter  = new BulgePinchFilter(vw / 2, vh / 2, 300, 1);
  marbleFilter = new MarbleFilter(vw, vh);
    
  background.filters = [marbleFilter];
  container.filters = [bulgeFilter];  
  background.filterArea = app.screen;
  container.filterArea = app.screen;
  
  container.addChild(background, muppets);
  app.stage.addChild(container);
   
  app.stage.interactive = true;
  app.stage.on("pointermove", onPointerMove);
  app.stage.on("pointermove", removeInfo);
  
  app.ticker.add(() => {
  
    if (resized) { resize(); }
    
    // count += 0.1;
    count += 0.05;
    marbleFilter.time = count;
  });
  
  window.addEventListener("resize", () => resized = true);   
  
  var tl1 = new TimelineMax({ repeat: -1, repeatDelay: 5, yoyo: true })
    .to(bulgeFilter, 5, { strength: -0.6, ease: Power1.easeInOut });
}

function resize() {
      
  vw = window.innerWidth;
  vh = window.innerHeight;
  
  var r1 = (vw - 100) / muppets.texture.width;
  var r2 = (vh - 100) / muppets.texture.height;
    
  muppets.scale.set(Math.min(r1, r2))
  
  muppets.x = vw / 2;
  muppets.y = vh;
  background.width = vw;
  background.height = vh;
  
  app.renderer.resize(vw, vh);
  
  resized = false;
}

function onPointerMove(event) {  
  var global = event.data.global;
  bulgeFilter.center.copy(global);
}

function removeInfo() {
  
  if (++moves > 1000) {
    TweenLite.to("#info", 3, { autoAlpha: 0 });
    app.stage.off("pointermove", removeInfo);
  }
}