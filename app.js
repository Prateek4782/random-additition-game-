
    let totalQuestions = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;


    // create random addition problem
    let num1 = Math.floor(Math.random()*10);
    let num2 = Math.floor(Math.random()*10);
   document.getElementById('num1').value = num1;
   document.getElementById('num2').value = num2;
   totalQuestions = totalQuestions + 1;

//    getting the score card elements by id
   let total = document.getElementById('total');
   let correct = document.getElementById('correct');
   let score = document.getElementById('score');



   function add(){
    total.innerText = totalQuestions
    document.getElementById('result').value
    

    let userSum = document.getElementById('sum').value;
    if(num1 + num2 == userSum){
        console.log(num1, num2, userSum)
        console.log('correct');
        num1 = Math.floor(Math.random()*10);
        num2 = Math.floor(Math.random()*10);
        document.getElementById('num1').value = num1;
        document.getElementById('num2').value = num2;
        result.innerText = 'well done!🥳 '
        score.innerText = correctAnswers * 10;
     

        // updating result
        correctAnswers = correctAnswers + 1;
        // calculate the correct percentage

        let percentage = (correctAnswers / totalQuestions) * 100;
        document.getElementById('correctPercentage').innerText = percentage.toFixed(2);

        totalQuestions = totalQuestions +1;
        correct.innerText = correctAnswers;

     
    }
    else{
        console.log(num1, num2, userSum)
        result.innerText = 'wrong'
        let percentage = (correctAnswers / totalQuestions) * 100;
        document.getElementById('correctPercentage').innerText = percentage.toFixed(2);
        totalQuestions = totalQuestions +1;
    }
    document.getElementById('sum').value = ''
   }
