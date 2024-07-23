let i=0;
function changeColor(){
    if(i==0){
        document.getElementsByClassName("section")[0].style.backgroundColor="red";
        document.getElementById("content").innerText="Background Color: Red";
        i++;
    }
    else if(i==1){
        document.getElementsByClassName("section")[0].style.backgroundColor="green";
        document.getElementById("content").innerText="Background Color: Green";
        i++;
    }   
    else if(i==2){
        document.getElementsByClassName("section")[0].style.backgroundColor="yellow";
        document.getElementById("content").innerText="Background Color: Yellow";
        i++;
    }   
        
    else if(i==3){
        document.getElementsByClassName("section")[0].style.backgroundColor="brown";
        document.getElementById("content").innerText="Background Color: Brown";
        i++;
    }   
        
    else if(i==4){
        document.getElementsByClassName("section")[0].style.backgroundColor="blue";
        document.getElementById("content").innerText="Background Color: Blue";
        i++;
    }   

    else if(i>=5){
        document.getElementsByClassName("section")[0].style.backgroundColor="#fa03e1";
        document.getElementById("content").innerText="Background-Color: Default";
        i=0;
    }
}