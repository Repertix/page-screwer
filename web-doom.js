var prior_items = 0;
var frikin_img = "https://pbs.twimg.com/media/CN8NSQXUYAAyJeV.png"; //Pretty test, later host on own site :)
var hud = document.createElement("div");
hud.classList.add("doom-hud");
var hud_img = document.createElement("img");
hud_img.setAttribute("src", frikin_img);
hud.appendChild(hud_img);
hud_img.addEventListener("mouseover", function (event){prior_items += 1});
hud_img.addEventListener("mouseleave", function (event){prior_items -= 1});
hud.addEventListener("mouseover", function (event){prior_items += 1});
hud.addEventListener("mouseleave", function (event){prior_items -= 1});
var hud_style = document.createElement("style");
hud_style.textContent = `
    .doom-hud{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 5;
        overflow: none;
        top: 0;
        left: 0;
        pointer-events: none;
    }
    .doom-hud img{
        margin-top: auto;
        width: 100%;
        height: auto;
        position: absolute;
        bottom: 0;
        pointer-events: none;
    }
`;
document.body.appendChild(hud);
document.body.appendChild(hud_style);
addEventListener("click", (event) =>{
    event.preventDefault();
    var hvds = document.querySelectorAll("*:hover");
    if (hvds.length > 0){
        hvds[(hvds.length - (1 + prior_items))].remove();
    }
})
