 let counter = 0;
        let value = document.getElementById('counter-value').innerText
        let message = document.getElementById('message').innerText

        function increment(){
            if(counter == 10){
                checklimit();
                return;
            }
            counter++;
            document.getElementById('counter-value').innerText = counter;
            document.getElementById('message').innerText = ""
        }

        function decrement(){
            if(counter == 0){
                checklimit();
                return;
            }
            counter--;
            document.getElementById('counter-value').innerText = counter;
            document.getElementById('message').innerText = ""
        }

        function checklimit(){
            if(counter == 10){
                document.getElementById('message').innerText = "maximum value already reached"
            }else{
                document.getElementById('message').innerText = "minimum value already reached"
            }
            return ;
        }