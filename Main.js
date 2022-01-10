"use strict";
var View;
(function (View) {
    class view {
        constructor(controller, model) {
            this._scale = 0;
            this._app = new PIXI.Application(300, 300, { backgroundColor: 0xD1E292 });
            document.body.appendChild(this._app.view);
            this._model = model;
            this._controller = controller;
            this.init();
        }
        init() {
            let text = new PIXI.Text('大吉大利', { fill: 0xffffff });
            text.x = 75;
            text.y = 50;
            text.pivot.set(0.5, 0.5);
            this._app.stage.addChild(text);
            let btn = new PIXI.Graphics();
            btn.beginFill(0xffffff);
            btn.drawRoundedRect(0, 0, 100, 100, 5);
            btn.endFill();
            btn.buttonMode = true;
            btn.interactive = true;
            btn.x = text.x;
            btn.y = text.y + 50;
            this._app.stage.addChild(btn);
            btn.on('click', () => {
                text.text = this.click();
            });
        }
        click() {
            let str = [
                '大吉',
                '中吉',
                '小吉',
                '末吉',
                '小凶',
                '凶',
                '大凶',
            ];
            let roll = str[Math.floor(Math.random() * (str.length))];
            return roll;
        }
    }
    View.view = view;
})(View || (View = {}));
///<reference path="./pixi.d.ts"/>
var Controller;
///<reference path="./pixi.d.ts"/>
(function (Controller) {
    class controller {
        constructor(model) {
            this._model = model;
        }
    }
    Controller.controller = controller;
})(Controller || (Controller = {}));
///<reference path="./pixi.d.ts"/>
var Model;
///<reference path="./pixi.d.ts"/>
(function (Model) {
    class model extends PIXI.utils.EventEmitter {
        constructor() {
            super();
        }
    }
    Model.model = model;
})(Model || (Model = {}));
///<reference path="./pixi.d.ts"/>
///<reference path="./view.ts"/>
///<reference path="./controller.ts"/>
///<reference path="./model.ts"/>
document.addEventListener("DOMContentLoaded", () => {
    new Main();
});
class Main {
    constructor() {
        this._model = new Model.model();
        this._controller = new Controller.controller(this._model);
        this._view = new View.view(this._controller, this._model);
    }
}
//# sourceMappingURL=Main.js.map