'use strict';
var hold,roundscore,active_player,alive;
init();
var d=document.querySelector(".btn--roll");
var six=0;


d.onclick=function()
{
if(alive)
{
    document.querySelector(".dice").style.display="block";
    var dice = Math.floor(Math.random()*6 )+1;
    //console.log(dice,six);

    if(dice==6&&six==6)
    {
        hold[active_player]=0;
        roundscore=0;
        document.querySelector("#current--"+active_player).textContent=roundscore;
        document.querySelector("#score--"+active_player).textContent=hold[active_player];
        document.querySelector(".player--"+active_player).classList.remove("player--active");
        document.querySelector(".dice").style.display="none";
        if(active_player==0)
        {
            
            active_player=1;
        }
        else
        {
            active_player=0;
        }
        document.querySelector(".player--"+active_player).classList.add("player--active");
    }
    else if(dice!==1)
    {
        roundscore+=dice;
        document.querySelector("#current--"+active_player).textContent=roundscore;
    }
    else
    {
        roundscore=0;
        document.querySelector("#current--"+active_player).textContent=roundscore;
        document.querySelector(".player--"+active_player).classList.remove("player--active");
        document.querySelector(".dice").style.display="none";
        player();
        
        document.querySelector(".player--"+active_player).classList.add("player--active");

    }
    six=dice;
    var img=document.querySelector(".dice");
    img.src="dice-"+dice+".png";
}
};
var h=document.querySelector(".btn--hold");
var n=document.querySelector(".btn--new");
h.onclick=function()
{
    if(alive)
    {
        var win=document.querySelector(".inpt").value;
        console.log(win);  
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
    document.querySelector(".dice").style.display="none";
    hold[active_player]+=roundscore;
    roundscore=0;
    document.querySelector("#score--"+active_player).textContent=hold[active_player];
    document.querySelector("#current--"+active_player).textContent=roundscore;  
    var winning;
    if(win)
    {
       winning =win; 
    }
    else
    {
        winning=100;
    }
    if(hold[active_player]>=winning)
    {
        document.querySelector("#name--"+active_player).textContent="WINNER";
        //document.querySelector(".dice").style.display="none";
        document.querySelector(".player--"+active_player).classList.add("player--winner");
        document.querySelector(".player--"+active_player).classList.remove("player--active");
        alive=false;
    }
    player();
    }
}

n.addEventListener("click",init );
function init()
{
    roundscore=0;
    hold=[0,0];
    active_player=0;
    alive=true;
    document.querySelector(".dice").style.display="none";
    for(var i=0;i<=1;i++)
    {
        
        
        document.querySelector("#name--"+i).textContent="Player "+(i+1);
        document.querySelector("#score--"+i).textContent=hold[i];
    document.querySelector("#current--"+i).textContent=roundscore;    
    document.querySelector(".player--"+i).classList.remove("player--winner");
    document.querySelector(".player--"+i).classList.remove("player--active");
    }
    document.querySelector(".player--0").classList.add("player--active");
}
function player()
{
    if(active_player==0)
    {
        active_player=1;
    }
    else
    {
        active_player=0;
    }
   

    
}