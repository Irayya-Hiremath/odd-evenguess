
        let a=document.getElementById('ans');
        let r=document.getElementById("ranno");
        let y=r.innerHTML=Math.floor(Math.random()*100)+1;
        let z=document.getElementById("submit");
        let e=document.getElementById('entans');
        let s=document.getElementById("score");

        function oe(){ 
            if (y%2==0) 
                return "even";
            return "odd";

            }
            function ran(){
                y=r.innerHTML=Math.floor(Math.random()*100)+1;       
            } 
        let k=0; 
        function sc(val){
            if (val=='correct'){
                s.innerHTML=++k;
            }
            else{
                s.innerHTML=--k;

            }

        }

        function check(){

            let guess=e.value;
            let val=(guess==oe()) ? 'correct':'wrong';
            sc(val)
            a.innerHTML=val;
            ran()

        }

        z.addEventListener('click',check);
