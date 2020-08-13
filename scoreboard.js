document.addEventListener("DOMContentLoaded", () => {
    //set number of default players
    let numPlayers = 1;    
    //generate player entry feilds
    makePlayers();
    //allow user to add more players - maximum of 10
    $("#more").on("click", () => {
        if(numPlayers < 10){
            numPlayers += 1;
            $("#player-setUp").append(`<div class='player-entry'><label for='player- ${numPlayers} -name'>Player ${numPlayers} </label><input name='player-${numPlayers} -name' id='player-" ${numPlayers} -name' class='names' type='text' placeholder='enter name'></div>`);
        }
    })
    //allow user to increase each players score
    $("#scoreboard").on("click", ".add", function(){
        let score = $(this).parent().parent().find(".score"),
            currentNum = Number($(score).text()),
            addNum = Number($(this).parent().parent().find("input").val()),
            newNum = currentNum + addNum;
        //make upper limit of all scores 999
        if(newNum >= 999){
            newNum = 999;
        }
        //update score and reset number input
        $(score).text(newNum);
        scoreFont(newNum, score);
        $(this).parent().parent().find("input").val("1");      
    })
    //allow user to decrease each players score
    $("#scoreboard").on("click", ".subtract", function(){
        let score = $(this).parent().parent().find(".score");
            currentNum = Number($(score).text());
            addNum = Number($(this).parent().parent().find("input").val());
            newNum = currentNum - addNum
        //make lowewr limit of all scores 0
        if(newNum <= 0){
            newNum = 0;
        }
        //update score and reset number input
        $(score).text(newNum);
        scoreFont(newNum, score);
        $(this).parent().parent().find("input").val("1");
    })
    
    $("#start").on("click", function(){
        //generate a scoreboard for each player
        $(".names").each(function(item){
           //check name feild has been filled out
            if($(this).val() === ""){
                return
            } else {
                let playerName = $(this).val(),
                    board = document.createElement("div");

                $(board).addClass("board");
                $(board).append("<h3 class='player-name green'>" + playerName + "</h3>");
                $(board).append("<div class='score orange'>0</div class='score'>");
                $(board).append("<div class='score-controls'><input type='number' value='1'><i class='add fa fa-plus red'></i><i class='subtract fa fa-minus red'></i></div>");
                $("#scoreboard").append(board);
            }
        })
        //hide set up menu
        $("#setUp").hide();
        $("#return").css("opacity", "1");

    })
    //return to set up menu and refresh values
    $("#return").on("click", function(){
        $(this).css("opacity", "0");
        $("#player-setUp").html("");
        numPlayers = 1;
        makePlayers();
        $("#setUp").show();
        $("#scoreboard").html("");       
    })
    //change fon size of score depeding on its length
    function scoreFont(x, y){
        if(x < 10){
            $(y).css("font-size", "8rem")
        } else if (x < 100){
            $(y).css("font-size", "6.5rem")
        } else if (x < 1000){
            $(y).css("font-size", "5rem")
        }
    }
    //define elements for each player entry
    function makePlayers(){
        for(i = 1; i <= numPlayers; i++){
            $("#player-setUp").append(`<div class='player-entry'><label for='player- ${i} -name'>Player ${i} </label><input name='player- ${i} -name' id='player- ${i} -name' class='names' type='text' placeholder='enter name'></div>`)
        }
    }
})