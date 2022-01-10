namespace View {
    export class view {
        private _app: PIXI.Application;
        private _controller: Controller.controller;
        private _model: Model.model;


        constructor(controller: Controller.controller, model: Model.model) {

            this._app = new PIXI.Application(300, 300, { backgroundColor: 0xD1E292 });
            document.body.appendChild(this._app.view);

            this._model = model;
            this._controller = controller;
            this.init();
        }


        private init(): void {

            let text:PIXI.Text=new PIXI.Text('大吉大利',{fill:0xffffff});
            this._app.stage.addChild(text);
            text.anchor.set(0.5,0.5);
            text.x=this._app.screen.width/2;
            text.y=this._app.screen.height/2;
            
            let btn:PIXI.Graphics=new PIXI.Graphics();
            btn.beginFill(0xffffff);
            btn.drawRoundedRect(0,0,90,20,5);
            btn.endFill();
            btn.x=text.x-45;
            btn.y=text.y+30;
            btn.buttonMode=true;
            btn.interactive=true;
            this._app.stage.addChild(btn);
            btn.on('click',()=>{
                text.text=this.click();
            })
        }
        private click():string{
            let str:string[]=[
                '大吉',
                '中吉',
                '小吉',
                '末吉',
                '小凶',
                '凶',
                '大凶',
            ]
            
            let roll:string=str[Math.floor(Math.random() *str.length)];

            return roll;
        }

   }
}