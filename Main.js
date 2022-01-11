"use strict";
var View;
(function (View) {
    class view {
        constructor(controller, model) {
            this._app = new PIXI.Application(300, 300, { backgroundColor: 0xFFF5E4, transparent: false });
            document.body.appendChild(this._app.view);
            this._model = model;
            this._controller = controller;
            this.init();
        }
        init() {
            let texture = PIXI.Texture.fromImage('syougatsu_hatsuhinode_fujisan.png');
            let background = new PIXI.Sprite(texture);
            background.scale.set(0.5, 0.5);
            background.x = -2;
            background.y = 23;
            this._app.stage.addChild(background);
            let textStyle = new PIXI.TextStyle({ fill: 0xffffff, fontSize: 50,
                fontFamily: "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif",
            });
            let text = new PIXI.Text('大吉大利', textStyle);
            this._app.stage.addChild(text);
            text.anchor.set(0.5, 0.5);
            text.x = this._app.screen.width / 2;
            text.y = this._app.screen.height / 2 - 5;
            let btn = new PIXI.Graphics;
            btn.beginFill(0xffffff);
            btn.drawRoundedRect(0, 0, 90, 20, 5);
            btn.endFill();
            btn.x = text.x - 45;
            btn.y = text.y + 30;
            btn.buttonMode = true;
            btn.interactive = true;
            this._app.stage.addChild(btn);
            let texture2 = PIXI.Texture.fromImage('uchidenokoduchi_eto03_tora.png');
            let tiger = new PIXI.Sprite(texture2);
            tiger.scale.set(0.2, 0.2);
            tiger.x = 138;
            tiger.y = 142;
            this._app.stage.addChild(tiger);
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
            let roll = str[Math.floor(Math.random() * 7)];
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