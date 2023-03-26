let string="";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach(function(button){
    button.addEventListener("click", function(event){
        if(event.target.innerHTML=="="){
            string=eval(string);
            document.querySelector("input").value = string;
        }
        else if(event.target.innerHTML =="AC"){
            string = ""
            document.querySelector("input").value = string;
        } 
        else if(event.target.innerHTML=="C"){
            string= string.substring(0, string.length-1);
            document.querySelector("input").value = string;

        }
        else{

            console.log(event.target.innerHTML);
            string = string + event.target.innerHTML;
            document.querySelector("input").value = string;
        }
        
    })

})