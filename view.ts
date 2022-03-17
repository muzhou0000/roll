namespace View {
    export class view {
        private _app: PIXI.Application;
        private _controller: Controller.controller;
        private _model: Model.model;

        constructor(controller: Controller.controller, model: Model.model) {

            this._app = new PIXI.Application(300, 300, { backgroundColor: 0xFFF5E4,transparent:false });
            document.body.appendChild(this._app.view);

            this._model = model;
            this._controller = controller;
            
            this.init();

        }

        private init(): void {

            let texture:PIXI.Texture=PIXI.Texture.fromImage('syougatsu_hatsuhinode_fujisan.png');
            let background:PIXI.Sprite=new PIXI.Sprite(texture);
            background.scale.set(0.5,0.5);
            background.x=-2;
            background.y=23;
            this._app.stage.addChild(background);


            let textStyle:PIXI.TextStyle=new PIXI.TextStyle({fill:0xffffff,fontSize:50,
            fontFamily: "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif",
        });

            let text:PIXI.Text=new PIXI.Text('大吉大利',textStyle);
            this._app.stage.addChild(text);
            text.anchor.set(0.5,0.5);
            text.x=this._app.screen.width/2;
            text.y=this._app.screen.height/2-5;
            
            let btn:PIXI.Graphics=new PIXI.Graphics;
            btn.beginFill(0xffffff);
            btn.drawRoundedRect(0,0,90,20,5);
            btn.endFill();
            btn.x=text.x-45;
            btn.y=text.y+30;
            btn.buttonMode=true;
            btn.interactive=true;
            this._app.stage.addChild(btn);


            let texture2:PIXI.Texture=PIXI.Texture.fromImage('uchidenokoduchi_eto03_tora.png');
            let texture3:PIXI.Texture=PIXI.Texture.fromImage('eto_tora_daruma.png');

            let tiger:PIXI.Sprite=new PIXI.Sprite(texture2);
            tiger.scale.set(0.2,0.2);
            tiger.x=138;
            tiger.y=142;
            this._app.stage.addChild(tiger);

            let str:string[]=[
                '大吉',
                '中吉',
                '小吉',
                '末吉',
                '小凶',
                '凶',
                '大凶',
            ]

            btn.on('click',()=>{
                let ranNum:number=this.click();
                if(ranNum>3){
                    tiger.texture=texture3;
                    tiger.x=85;
                    tiger.y=174;
                }else{
                    tiger.texture=texture2;
                    tiger.x=138;
                    tiger.y=142;
                }

                text.text=str[ranNum];
            })
        }
        private click():number{
            let roll:number=Math.floor(Math.random() *7);

            return roll;
        }
   }
}
