// import { HomeComponent } from './header/home/home.component';
// constructor(public home: HomeComponent) {}
export class ShareService {

    
    
    public errorClass  = [[,,],[,,],[,,]];
    public iconContent = [[,,],[,,],[,,]];
    public gameField   = [[,,],[,,],[,,]];
    public message = undefined;
    public x_o = 'x';
    public mode;

    public clearField() {
        this.gameField   = [[,,],[,,],[,,]];
        this.iconContent = [[,,],[,,],[,,]];
        this.errorClass  = [['cl-good','cl-good','cl-good'],
                            ['cl-good','cl-good','cl-good'],
                            ['cl-good','cl-good','cl-good']];
    }

    public add(i, j) {
        this.message = undefined;

        if (!(this.gameField[i][j]) && !(this.gameField[i][j])) {
            this.gameField[i][j] = this.x_o;
            this.check(this.gameField);
            if (this.x_o == 'x') {
                this.x_o = 'o';
                this.iconContent[i][j] = 'clear';
            }
            else if (this.x_o == 'o') {
                this.x_o = 'x';
                this.iconContent[i][j] = 'panorama_fish_eye';
            }
           
            //if(this.mode == 'easy') {
                this.botEasy();
            //}
        } else {
            this.message = 'Эта клетка занята!';
            this.errorClass[i][j] = 'cl-no-good';
            setTimeout(() => {
                this.message = undefined;
                this.errorClass[i][j] = 'cl-good';
            }, 750);
        }
    }

    public endGame() {
        //this.x_o = 'x';
        alert('Чет там...');
    }

    check(item) {
        var horizontal = 0, vertical = 0, directDiagonal = 0, inverseDiagonal = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                // Горизонталь
                if (item[i][j] == this.x_o) {
                    horizontal++;
                    if (horizontal == 3) {
                        this.message = this.x_o + " - победил!";
                        this.endGame();
                        return;
                    }
                } else {
                    horizontal = 0;
                }
                // Вертикаль
                if (item[j][i] == this.x_o) {
                    vertical++;
                    if (vertical == 3) {
                        this.message = this.x_o + " - победил!";
                        this.endGame();
                        return;
                    }
                } else {
                    vertical = 0;
                }
                // Прямая диагональ 
                if (item[j][j] == this.x_o) {
                    directDiagonal++;
                    if (directDiagonal == 3) {
                        this.message = this.x_o + " - победил!";
                        this.endGame();
                        return;
                    }
                } else {
                    directDiagonal = 0;
                }
            }
            horizontal = 0, vertical = 0, directDiagonal = 0;
        }
        // обратная диагональ
        var n = -1, m = 3;
        while (n < 3 && m > 0) {
            n++; m--;
            if (item[n][m] == this.x_o) {
                inverseDiagonal++;
                if (inverseDiagonal == 3) {
                    this.message = this.x_o + " - победил!";
                    this.endGame();
                    return;
                }
            } else { 
                inverseDiagonal = 0; 
            }
        }
        // Ничья
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (item[i][j] != undefined) {
                    horizontal++;
                    if (horizontal == 9) {
                        this.message = 'Ничья!';
                        this.endGame();
                    }
                } else {
                    horizontal = 0;
                }
            }
        }
    }

    botEasy() {
            var BotX = Math.floor(Math.random() * (2 - 0 + 1)) + 0,
            BotY = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        if (!this.gameField[BotX][BotY]) {
            this.gameField[BotX][BotY] = this.x_o;
            this.check(this.gameField);
            if (this.x_o == 'x') {
                this.x_o = 'o';
                this.iconContent[BotX][BotY] = 'clear';
            }
            else {
                this.x_o = 'x';
                this.iconContent[BotX][BotY] = 'panorama_fish_eye';
            }
        } else {
            this.botEasy();
        }
    }
}