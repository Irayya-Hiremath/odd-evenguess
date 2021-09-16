
        let result=document.getElementById('ans');
        let number=document.getElementById("ranno");
        let randomNumber=number.innerHTML=Math.floor(Math.random()*100)+1;
        let submitButton=document.getElementById("submit");
        let inputAns=document.getElementById('EnterAns');
        let scoreCard=document.getElementById("score");

        function checkNumber(){ 
            if (randomNumber%2==0) 
                return "even";
            return "odd";

            }
            function genrateRN(){
                randomNumber=number.innerHTML=Math.floor(Math.random()*100)+1;       
            } 
        let score=0; 
        function addScore(val){
            if (val=='correct'){
                scoreCard.innerHTML=++score;
            }
            else{
                scoreCard.innerHTML=--score;

            }

        }

        function check(){

            let guess=inputAns.value;
            let val=(guess==checkNumber()) ? 'correct':'wrong';
            addScore(val)
            result.innerHTML=val;

            clearData()
            genrateRN()

        }
        function clearData(){
        
            setTimeout(function(){

                inputAns.value=''
                result.innerHTML=''

            },2000);

            
        }

        submitButton.addEventListener('click',check);
