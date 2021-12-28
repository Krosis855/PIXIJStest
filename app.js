const Application = PIXI.Application;

const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
  antialias: true,
});

app.renderer.backgroundColor = 0x23395d;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

// const rectangle = new Graphics();
// rectangle
//   .beginFill(0xaa33bb)
//   .lineStyle(4, 0xffea00, 1)
//   .drawRect(200, 200, 100, 100)
//   .endFill();

// app.stage.addChild(rectangle);

// const poly = new Graphics();
// poly
//   .beginFill(0xff66ff)
//   .lineStyle(5, 0xffea00, 1)
//   .drawPolygon([600, 50, 800, 150, 900, 300, 400, 400])
//   .endFill();

// app.stage.addChild(poly);

// const circle = new Graphics();
// circle.beginFill(0x22aacc).drawCircle(440, 200, 80).endFill();

// app.stage.addChild(circle);

// const line = new Graphics();
// line.lineStyle(5, 0xffea00, 1).moveTo(1100, 100).lineTo(1100, 800);

// app.stage.addChild(line);

// const torus = new Graphics();
// torus
//   .beginFill(0xfffddd)
//   .drawTorus(100, 500, 80, 100, 0, Math.PI / 2)
//   .endFill();

// app.stage.addChild(torus);

// const star = new Graphics();
// star.beginFill(0xadadad).drawStar(900, 500, 30, 80).endFill();

// app.stage.addChild(star);

// // const style = new PIXI.TextStyle({
// //     fontFamily: 'Montserrat',
// //     fontSize: 48,
// //     fill: 'deepskyblue',
// //     stroke: '#ffffff',
// //     strokeThickness: 4,
// //     dropShadow: true,
// //     dropShadowDistance: 10,
// //     dropShadowAngle: Math.PI / 2,
// //     dropShadowBlur: 4,
// //     dropShadowColor: '#000000'
// // })

// // const myText = new PIXI.Text('Hello World', style);

// // app.stage.addChild(myText);

// // myText.text = 'Text Changed!';

// // myText.style.wordWrap = true;
// // myText.style.wordWrapWidth = 100;
// // myText.style.align = 'center';

// app.ticker.add((delta) => loop(delta));

// function loop(delta) {
//   // char1Sprite.x += 1;
//   // char1Sprite.rotation += 0.01;
// }

// // const char1Texture = PIXI.Texture.from('./images/metroid.png');
// // const char1Sprite = new PIXI.Sprite(char1Texture);

// const char1Sprite = PIXI.Sprite.from("./images/metroid.png");
// app.stage.addChild(char1Sprite);

// // char1Sprite.width = 500;
// // char1Sprite.height = 500;

// // char1Sprite.scale.x = 1.5
// // char1Sprite.scale.y = 2

// // char1Sprite.scale.set(2, 2)

// // char1Sprite.x = 200;
// // char1Sprite.y = 400;

// char1Sprite.position.set(800, 400);

// // char1Sprite.anchor.x = 0.5;
// // char1Sprite.anchor.y = 0.5;

// char1Sprite.anchor.set(0.5, 0.5);

// char1Sprite.interactive = true;
// char1Sprite.buttonMode = true;

// char1Sprite.on("pointerdown", function () {
//   char1Sprite.scale.x += 0.1;
//   char1Sprite.scale.y += 0.1;
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowRight") char1Sprite.x += 10;
//   if (e.key === "ArrowLeft") char1Sprite.x -= 10;
// });

// const container = new PIXI.Container();

// const char2sprite = PIXI.Sprite.from("./images/char2.png");
// container.addChild(char2sprite);

// const char3sprite = PIXI.Sprite.from("./images/char3.png");
// container.addChild(char3sprite);

// app.stage.addChild(container);

// char2sprite.position.set(600, 500);

// container.x = 200

// const particleContainer = new PIXI.ParticleContainer(1000, {
//     postion: true,
//     rotation: true,
//     vertices: true,
//     tint: true,
//     uvs: true
// });

const loader = PIXI.Loader.shared;

loader
  .add("tileset", "./images/spritesheet-redo2.json")
  // //.add('char5Texture', './images/char5.png')
  .load(setup);

function setup(loader, resources) {
  const textures = [];
  for(let i = 1; i < 13; i++) {
      const texture = PIXI.Texture.from(`dragon${i}.png`);
      textures.push(texture);

  }
  const drag = new PIXI.AnimatedSprite(textures);
  drag.position.set(300, 150);
  drag.scale.set(2, 2);
  app.stage.addChild(drag);
  drag.play();
  drag.animationSpeed = 0.1;
}

const cloudsTexture = PIXI.Texture.from('./images/clouds.jpeg');
const cloudsSprite = new PIXI.TilingSprite(
    cloudsTexture,
    app.screen.width,
    app.screen.height
    );

app.stage.addChild(cloudsSprite);
