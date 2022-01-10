"use strict";
var View;
(function (View) {
    class view {
        constructor(controller, model) {
            this._app = new PIXI.Application(905, 1065, { backgroundColor: 0xD1E292 });
            document.body.appendChild(this._app.view);
            this._model = model;
            this._controller = controller;
            this.init();
        }
        init() { }
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