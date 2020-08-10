function check(){
    var score = 0
    var q1_answer1 = document.getElementById("q1_a1")
    var right_answer2 = document.getElementById("q1_a2")
    var q1_answer3 = document.getElementById("q1_a3")
    var q1_answer4 = document.getElementById("q1_a4")
    if (right_answer2.checked == true) {
        score ++
        alert('Q1 answer right')
        }
        else{
            alert('Q1 answer wrong')
        }


        var right_answer1 = document.getElementById("q2_a1")
        var q2_answer2  = document.getElementById("q2_a2")
        var q2_answer3 = document.getElementById("q2_a3")
        var q2_answer4 = document.getElementById("q2_a4")
        if (right_answer1.checked == true) {
            score ++
            alert('Q2 answer right')
            }
            else{
                alert('Q2 answer wrong')
            }



        var q3_answer1 = document.getElementById("q3_a1")
        var q3_answer2  = document.getElementById("q3_a2")
        var q3_answer3 = document.getElementById("q3_a3")
        var right_answer4 = document.getElementById("q3_a4")
        if (right_answer4.checked == true) {
            score ++
            alert('Q3 answer right')
            }
            else{
                alert('Q3 answer wrong')
            }
           


        var q4_answer1 = document.getElementById("q4_a1")
        var q4_answer2  = document.getElementById("q4_a2")
        var q4_answer3 = document.getElementById("q4_a3")
        var right_answer4 = document.getElementById("q4_a4")
        if (right_answer4.checked == true) {
            score ++
            alert('Q4 answer right')
            }
            else{
                alert('Q4 answer wrong')
            }
            

           
        var right_answer1 = document.getElementById("q5_a1")
        var q5_answer2  = document.getElementById("q5_a2")
        var q5_answer3 = document.getElementById("q5_a3")
        var q5_answer4 = document.getElementById("q5_a4")
        if (right_answer1.checked == true) {
            score ++
            alert('Q5 answer right')
            }
            else{
                alert('Q5 answer wrong')
            }
            alert("your score is" + score ++)
    } 