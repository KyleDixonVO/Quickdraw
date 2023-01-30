"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bug.ts":
/*!********************!*\
  !*** ./src/Bug.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemy = void 0;
const Character_1 = __webpack_require__(/*! ./Character */ "./src/Character.ts");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Enemy extends Character_1.Character {
    constructor(stage, assetManager) {
        super(stage, assetManager, "outlaw/Outlaw");
        this._used = false;
        this.eventKilled = new createjs.Event("enemyKilled", true, false);
    }
    get used() {
        return this._used;
    }
    set used(value) {
        this._used = value;
    }
    showMe() {
        let width = this._sprite.getBounds().width;
        this._speed = 2;
        this.startMe();
        this.stage.addChild(this._sprite);
        this._sprite.x = 50;
        this._sprite.y = 50;
        this._used = true;
    }
    hideMe() {
        super.hideMe();
        this._sprite.gotoAndStop("outlaw/Outlaw");
        this._used = false;
    }
    killMe() {
        this._state = Character_1.Character.STATE_DEAD;
        this.stopMe();
        this._sprite.gotoAndPlay("outlaw/Outlaw");
        this._sprite.on("animationend", (e) => {
            this.hideMe();
        }, this, true);
        this._sprite.dispatchEvent(this.eventKilled);
    }
    onClick() {
    }
    update() {
        super.update();
        if (this._state == Character_1.Character.STATE_IDLE)
            return;
        let width = this._sprite.getBounds().width;
        let height = this._sprite.getBounds().height;
        if ((this._sprite.x < -width) ||
            (this._sprite.x > (Constants_1.STAGE_WIDTH + width)) ||
            (this._sprite.y < -height) ||
            (this._sprite.y > (Constants_1.STAGE_HEIGHT + height))) {
            console.log("Bug off stage - removed!");
            this.hideMe();
        }
        this._sprite.on("click", (e) => {
            if (this._state == Character_1.Character.STATE_DEAD)
                return;
            console.log("collision!");
            this.killMe();
        }, this, true);
    }
}
exports.Enemy = Enemy;


/***/ }),

/***/ "./src/Character.ts":
/*!**************************!*\
  !*** ./src/Character.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Character = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Character {
    constructor(stage, assetManager, animation) {
        this._speed = Constants_1.SNAKE_MAX_SPEED;
        this._state = Character.STATE_IDLE;
        this.stage = stage;
        this.xDisplace = 0;
        this.yDisplace = 0;
        this._sprite = assetManager.getSprite("sprites", animation, 300, 300);
    }
    set speed(value) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }
    get state() {
        return this._state;
    }
    get sprite() {
        return this._sprite;
    }
    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    toDegrees(radians) {
        return radians * (180 / Math.PI);
    }
    showMe() {
        this.stage.addChild(this._sprite);
    }
    hideMe() {
        this._sprite.stop();
        this.stage.removeChild(this._sprite);
    }
    rotateMe(degrees) {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.rotation = degrees;
    }
    startMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        let radians = this.toRadians(this._sprite.rotation);
        this.xDisplace = Math.cos(radians) * this._speed;
        this.yDisplace = Math.sin(radians) * this._speed;
        this._sprite.play();
        this._state = Character.STATE_MOVING;
    }
    stopMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.stop();
        this._state = Character.STATE_IDLE;
    }
    update() {
        if ((this._state == Character.STATE_DEAD) || (this._state == Character.STATE_IDLE))
            return;
        this._sprite.x += this.xDisplace;
        this._sprite.y += this.yDisplace;
    }
}
exports.Character = Character;
Character.STATE_IDLE = 1;
Character.STATE_MOVING = 2;
Character.STATE_DEAD = 3;


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const Bug_1 = __webpack_require__(/*! ./Bug */ "./src/Bug.ts");
const UserInterface_1 = __webpack_require__(/*! ./UserInterface */ "./src/UserInterface.ts");
const ScreenManager_1 = __webpack_require__(/*! ./ScreenManager */ "./src/ScreenManager.ts");
const Crosshair_1 = __webpack_require__(/*! ./Crosshair */ "./src/Crosshair.ts");
let stage;
let canvas;
let assetManager;
let crosshair;
let enemyPool = [];
let userInterface;
let screenManager;
let enemyTimer;
let enemyDelay;
let enemiesKilled;
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    screenManager = new ScreenManager_1.ScreenManager(stage, assetManager);
    screenManager.showIntro();
    userInterface = new UserInterface_1.UserInterface(stage, assetManager);
    crosshair = new Crosshair_1.Crosshair(stage, assetManager, "misc/Crosshair");
    for (let i = 0; i < Constants_1.ENEMY_MAX; i++) {
        enemyPool.push(new Bug_1.Enemy(stage, assetManager));
    }
    stage.on("enemyKilled", onGameEvent);
    stage.on("snakeKilled", onGameEvent);
    stage.on("snakeSpeedChange", onGameEvent);
    stage.on("gameStart", onGameEvent);
    stage.on("gameReset", onGameEvent);
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onAddBug() {
    for (let newEnemy of enemyPool) {
        if (newEnemy.used == false) {
            newEnemy.used = true;
            newEnemy.showMe();
            break;
        }
    }
}
function onMoveSnake(e) {
}
function onGameEvent(e) {
    switch (e.type) {
        case "gameStart":
            screenManager.showGame();
            enemiesKilled = 0;
            enemyDelay = Constants_1.ENEMY_START_DELAY;
            enemyTimer = window.setInterval(onAddBug, enemyDelay);
            stage.on("mousedown", onMoveSnake);
            break;
        case "gameReset":
            screenManager.showIntro();
            userInterface.resetMe();
            for (let enemy of enemyPool)
                enemy.hideMe();
            break;
        case "enemyKilled":
            enemiesKilled++;
            if ((enemiesKilled % 10) == 0) {
                enemyDelay = enemyDelay - Constants_1.ENEMY_DELAY_DECREASE;
                window.clearInterval(enemyTimer);
                enemyTimer = window.setInterval(onAddBug, enemyDelay);
            }
            userInterface.kills = enemiesKilled;
            break;
        case "snakeKilled":
            window.clearInterval(enemyTimer);
            screenManager.showGameOver();
            break;
        case "snakeSpeedChange":
            break;
    }
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    crosshair.Update();
    for (let enemy of enemyPool) {
        if (enemy.used)
            enemy.update();
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
    canvas.style.cursor = "none";
}
main();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f8fd423989c8ea14027b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.13b7dae450435fd43bb1.hot-update.js.map