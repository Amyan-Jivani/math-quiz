player_1_name= localStorage.getItem("player_1_name");
player_2_name= localStorage.getItem("player_2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1").innerHTML= player_1_name + ":  ";
document.getElementById("player2").innerHTML= player_2_name + ":  ";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

function Send(){
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;
    correct_answer= parseInt(number1) + parseInt(number2);
    question_number= "<h4>" + number1 + "+" + number2 + "</h4>";
    input_box= "<br>Answer: <input type='number' style='color: black;' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("number1").value= "";
    document.getElementById("number2").value= "";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer= document.getElementById("input_check_box").value;

    if(get_answer==correct_answer){
        if(answer_turn=="player1"){
            player1_score= player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score= player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        
    }
    if(question_turn=="player1"){
        question_turn="player2";
    }
    else{
        question_turn="player1";
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
    }
    else{
        answer_turn="player1";
    }
    document.getElementById("output").innerHTML="";
}