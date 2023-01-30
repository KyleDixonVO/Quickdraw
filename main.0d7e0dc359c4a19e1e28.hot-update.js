"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const Snake_1 = __webpack_require__(/*! ./Snake */ "./src/Snake.ts");
const Bug_1 = __webpack_require__(/*! ./Bug */ "./src/Bug.ts");
let stage;
let canvas;
let assetManager;
let snake;
let bugPool = [];
let background;
let bugTimer;
let bugDelay;
let bugsEaten;
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    background = assetManager.getSprite("sprites", "misc/backgroundGame");
    stage.addChild(background);
    snake = new Snake_1.Snake(stage, assetManager);
    snake.showMe();
    snake.startSlowDown();
    for (let i = 0; i < Constants_1.BUG_MAX; i++) {
        bugPool.push(new Bug_1.Bug(stage, assetManager, snake));
    }
    bugsEaten = 0;
    bugDelay = Constants_1.BUG_START_DELAY;
    bugTimer = window.setInterval(onAddBug, bugDelay);
    stage.on("mousedown", onMoveSnake);
    stage.on("bugsEaten", onGameEvent);
    stage.on("snakeKilled", onGameEvent);
    stage.on("snakeSpeedChange", onGameEvent);
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onAddBug() {
    for (let newBug of bugPool) {
        if (newBug.used == false) {
            newBug.used = true;
            newBug.showMe();
            break;
        }
    }
}
function onMoveSnake(e) {
    snake.rotateMe();
    snake.startMe();
}
function onGameEvent(e) {
    console.log("in onGameEvent");
    switch (e.type) {
        case "bugEaten":
            bugsEaten++;
            snake.energizeMe();
            if ((bugsEaten % 10) == 0) {
                bugDelay = bugDelay + Constants_1.BUG_DELAY_INCREASE;
                window.clearInterval(bugTimer);
                bugTimer = window.setInterval(onAddBug, bugDelay);
            }
            break;
        case "snakeKilled":
            window.clearInterval(bugTimer);
            break;
        case "snakeSpeedChange":
            break;
    }
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    snake.update();
    for (let bug of bugPool) {
        if (bug.used)
            bug.update();
    }
    stage.update();
}
function main() {
    canvas = document.getElementById("game-canvas");
    canvas.width = Constants_1.STAGE_WIDTH;
    canvas.height = Constants_1.STAGE_HEIGHT;
    stage = new createjs.StageGL(canvas, { antialias: true });
    assetManager = new AssetManager_1.AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    assetManager.loadAssets(Constants_1.ASSET_MANIFEST);
}
main();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("698e31b29a27511f2b40")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0d7e0dc359c4a19e1e28.hot-update.js.map