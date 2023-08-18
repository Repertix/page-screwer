//GG Ez, lemon squeezy. Rest in piss, forever miss.
var on_game = false;
const delay = ms => new Promise(res => setTimeout(res, ms));
function _snowfall(frames=20, count=50, lifetime=2000, maxSpeed=5, maxSize=25){
    const snjs = document.createElement('script');
    snjs.src = "https://aicdev.github.io/game-of-thrones-coming-soon-page/snowflake.min.js";
    snjs.async = true;
    snjs.onload = () =>{
        const snw = new SnowflakeJs(frames, count, lifetime, maxSpeed, maxSize);
        snw.init();
    };
    snjs.onerror = () =>{
        console.log("Error: EXCESO DE ALCOHOL ETILICO");
    };
    document.body.appendChild(snjs);
}
function _screw_images(image_url){
    var imgs = document.querySelectorAll("img");
    if (imgs.length === 0){
        console.log("No images to screw :(");
        return;
    }
    
    for (var i = 0; i < imgs.length; i++){
        imgs[i].setAttribute("src", image_url);
    }
}
function _nuke(){
    const elm = document.body.querySelectorAll("body > *");
    for (var i = 0; i < elm.length; i++){
        elm[i].remove();
    };
    var ms = new Audio("https://ia801808.us.archive.org/7/items/sonic3_knuckles_ost/49-Final%20Boss%20Theme.mp3");
    ms.play();
    var ptext = document.createElement("h1");
    var ptext_2 = document.createElement("h2");
    ptext.innerText = `REST IN PEACE, FOREVER MISS`;
    ptext_2.innerText = `${window.location.href} has been screwed! :)`;
    document.body.appendChild(ptext);
    document.body.appendChild(ptext_2);
}
function _play_tetris(){_set_game("https://tetris.com/games-content/play-tetris-content/resources/project-tetriscom/game/game-6CFE455BCD75157E/target-desktop/if_game_html5.php?p=d&cbidg=6CFE455BCD75157E");}
function _play_sonic(){_set_game("https://static.arcadespot.com/retroemulator.php?system=sega&game=2018/04/Sonic3C.gen&mp&referral=https%3A%2F%2Fwww.fandejuegos.com%2Fjuego%2Fsonic-3");}
function _play_celeste(){_set_game("https://www.lexaloffle.com/bbs/widget.php?pid=15133");}
function _set_game(game_url){
    if (on_game){return;}
    on_game = true;
    var game_zone = document.createElement("div");
    var game_container = document.createElement("div");
    var game_style = document.createElement("style");
    var game = document.createElement("iframe");
    var close_button = document.createElement("button");
    document.body.appendChild(game_zone);
    document.head.appendChild(game_style);
    game_zone.appendChild(game_container);
    game_container.appendChild(close_button);
    game_container.appendChild(game);
    game_zone.classList.add("game-zone");
    game_container.classList.add("game-container");
    game.setAttribute("src", game_url);
    close_button.setAttribute("onclick", "_close_game()")
    close_button.textContent = "Close Game";
    game_style.textContent = `
        .game-zone{
            padding: 1em;
            position: fixed;
            z-index: 1;
            width: 100%;
            height: 100%;
            background: rgb(0,0,0,0.9);
            top: 0;
            left: 0;
            overflow: auto;
        }
        .game-container{
            margin: 0;
            padding-top: 100px;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .game-container iframe{
            margin: auto;
            display: block;
            width: 800px;
            height: 600px;
        }
        .game-container button{
            border: none;
            box-shadow: none;
            font-family: 'Consolas', sans-serif;
            margin: auto;
            display: block;
            background: none;
            color: white;
            font-weight: bold;
            font-size: 2em;
        }
        .game-container button:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    `
}
function _close_game(){
    var game = document.getElementsByClassName("game-zone");
    game[0].remove();
    on_game = false;
  _hub();
}
function _change_hrefs(url){
    var as = document.querySelectorAll("a");
    for (var i = 0; i < as.length; i++){
        as[i].setAttribute("href", url);
    }
}
function _rickroll_doom(){
    _change_hrefs("https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D");
}
function _scare(image_url="https://media.tenor.com/U2B-0E0VxCIAAAAC/ghost-spooky.gif"){ //Guitar sound on true plays the funny skull guitar sound :)
    var link = "https://www.myinstants.com/media/sounds/vine-boom.mp3";
    var ms = new Audio(link);
    var img = document.createElement("div");
    var img_style = document.createElement("style");
    document.body.appendChild(img);
    document.body.appendChild(img_style);
    //img.setAttribute("src", image_url);
    img.classList.add("scare_image");
    img_style.textContent = `
    @keyframes scary{
        0%{opacity: 1;}
        75%{opacity: 0;}
    }
    .scare_image{
        width: 100%;
        height: 100%;
        position: fixed;
        background: url(${image_url}) repeat;
        background-size: cover;
        top: 0;
        left: 0;
        z-index: 9999;

        opacity: 0;
        animation-name: scary;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        animation-delay: 2s;
    }
    `
    setInterval(function (){
        ms.play();
    }, 2000)
}
async function _drop(){
    var style = document.createElement("style");
    style.textContent = `
    @keyframes fall{
        from {transform: translateY(0%);}
        to{transform: translateY(50000%);}
    }
    body > *{
        animation: fall;
        animation-duration: 4s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    head > *{
        animation: fall;
        animation-duration: 4s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
}
    `
    document.body.appendChild(style);
    var gm = new Audio("https://www.myinstants.com/media/sounds/laser_hBUSmJ9.mp3");
    gm.play();
    await delay(2000);
    var msms = document.querySelectorAll("body > *");
    for (var i = 0; i < msms.length; i++){
        msms[i].remove();
    }
    var game_over_style = document.createElement("style");
    document.body.appendChild(game_over_style);
    game_over_style.textContent = `
    .game-over{
        position: fixed;
        width: 100%;
        height: 100%;
    }
    .game-text{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .game-text img{
        display: inline-grid;
        width: 25%;
        height: auto;
    }
    .game-text .left{
        transform: translateX(15%);
        animation: left;
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
    }
    .game-text .right{
        transform: translateX(-15%);
        animation: right;
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
    }
    @keyframes left{
        from{transform: translateX(-500%);}
        to{transform: translateX(15%);}
    }
    @keyframes right{
        from{transform: translateX(500%);}
        to{transform: translateX(-15%);}
    }
    `
    var game_over_screen = document.createElement("div");
    var game_over_text = document.createElement("div");
    document.body.appendChild(game_over_screen);
    game_over_screen.classList.add("game-over");
    game_over_screen.appendChild(game_over_text);
    game_over_text.classList.add("game-text");
    var left_text = document.createElement("img");
    left_text.classList.add("left")
    left_text.setAttribute("src", "https://repertix.neocities.org/assets/hosting/game_overs1.png")
    var right_text = document.createElement("img");
    right_text.classList.add("right")
    right_text.setAttribute("src", "https://repertix.neocities.org/assets/hosting/game_overs2.png")
    game_over_text.appendChild(left_text);
    game_over_text.appendChild(right_text);
    var ms = new Audio("https://ia801808.us.archive.org/7/items/sonic3_knuckles_ost/46-Game%20Over.mp3");
    ms.play();
}
function _hub(){
  console.clear()
  console.log(`Page Screwer Initialized!
    You've been provided with lots of dumbs commands to play with in any site. This is stupidly 226 lines long, lmao.
    Epic Commands:
    _drop() - Drops the entire website.
    _rickroll_doom() - A website hyperlink won't let you down.
    _nuke() - Destroys the entire website (Sonic 3 ost starts to play too)
    _snowfall(frames, count, lifetime, maxSpeed, maxSize) - Starts a snowfall over the website
    _scare(image_url) - Plays the vine boom while showing an image. The image url can be customizable.
    Mod Commands:
    _change_hrefs(website_url) - Makes every link redirect you to a certain url.
    _screw_images(image_url) - Changes every image for the provided one. (It requires an image url, NOT A FILE)
    Game Commands:
    _play_sonic() - Starts up Sonic 3 over the website
    _play_tetris() - Starts up Tetris over the website
    _play_celeste() - Starts up Pico8 Celeste over the website
    `);
}
_hub();
//Relleno para 300 líneas.
