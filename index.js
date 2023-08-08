sequence=[]
playerSequence=[]
colors=["red","blue","yellow","green"]
check=0
level=0


$(document).keydown(function(){
    if(level===0){
        level++;
        generateSequence();
    }
});


function generateSequence(){

    ind=Math.floor(Math.random()*4);
    sequence.push(ind);
    check=1;
    console.log(sequence)
    $("#level-title").html("Level "+level)
    // for(i=0;i<sequence.length;i++){
        colour=colors[ind]
    //     $("#"+colour).addClass("pressed");
    //     setTimeout(()=>{
    //         $("#"+colour).removeClass("pressed");
    //     },100);
    // }
    $("#"+colour).fadeIn(100).fadeOut(100).fadeIn(100);
    audio=new Audio("./sounds/"+colour+".mp3")
    audio.play();

}

$(".btn").click(function(){

    if(check==1){
        playerSequence=[];
    }
    check=0;
    color=$(this).attr("id")

    if(level!==0){
        playerSequence.push(colors.indexOf(color));
        audio=new Audio("./sounds/"+color+".mp3")
        audio.play();
        $("#"+color).addClass("pressed");
        setTimeout(()=>{
            $("#"+color).removeClass("pressed"); 
        },100);
    }
    console.log(playerSequence+" "+check)
    if(sequence.length===playerSequence.length && level!==0){
        checkSequence();
    }

});

function checkSequence(){

    if(sequence.toString()===playerSequence.toString()){
        level++;
        setTimeout(()=>{generateSequence();},1000)
        
    }
    else{
        audio=new Audio("./sounds/wrong.mp3")
        audio.play();
        sequence=[]
        level=0
        playerSequence=[]
        $("#level-title").html("Game Over")
        $("body").css("background-color","red");
        setTimeout(()=>{
            $("body").css("background-color","#011F3F");
            $("#level-title").html("GAME OVER , Press any Key to restart")
        },1000);
    }
            
}