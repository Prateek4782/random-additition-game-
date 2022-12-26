
    let num1 = Math.floor(Math.random()*10);
    let num2 = Math.floor(Math.random()*10);
   document.getElementById('num1').value = num1;
   document.getElementById('num2').value = num2;
//    let temp1 = num1;
//    let temp2 = num2;

   function add(){
    // console.log(num1, num2)
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
     
     
    }
    else{
        console.log(num1, num2, userSum)
        result.innerText = 'wrong'
    }
   }
