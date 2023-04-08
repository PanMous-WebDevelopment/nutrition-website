function BMI()
        {
            var height=Number(document.getElementById("hgh").value);
           
            var weight=Number(document.getElementById("wgh").value);

            var gender=document.getElementsByName("optradio");           
            //Perform calculation
            var BMI=weight/(height*height);
    
            //Display result of calculation
            document.getElementById("output").innerText=BMI;
    
            var output =  Math.round(BMI*100)/100;
    
            for (var i = 0, length = gender.length; i < length; i++) {
                if (gender[i].checked) {
                    if (output<19.5)
                    document.getElementById("comment").innerText = "Underweight";
                  else   if (output>=19.5 && output<=24.9)
                    document.getElementById("comment").innerText = "Normal";
                 else   if (output>=25 && output<=29.9)
                    document.getElementById("comment").innerText = "Obese type 1";
                else   if (output>=30 && output<=39.9)
                    document.getElementById("comment").innerText = "Obese type 2";
                 else   if (output>40)
                    document.getElementById("comment").innerText = "Obese type 3";
                  // document.getElementById("answer").value = output;
                 
                  break;
                }else{
            
                    if (output<18.5)
                    document.getElementById("comment").innerText = "Underweight";
                  else   if (output>=18.5 && output<=23.5)
                    document.getElementById("comment").innerText = "Normal";
                 else   if (output>=23.6 && output<=28.6)
                    document.getElementById("comment").innerText = "Obese type 1";
                else   if (output>=28.7 && output<=40)
                    document.getElementById("comment").innerText = "Obese type 2";
                 else   if (output>40)
                    document.getElementById("comment").innerText = "Obese type 3";
                   // document.getElementById("answer").value = output;
                }
        }
      }