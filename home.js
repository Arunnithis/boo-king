function thy(){
    let x=document.getElementById("nm").value;
    let y=document.getElementById("fk").value;
    if(x!="" && y!="")
    {
        alert("Thank you for your Feedback"+" "+ x);
    }
    else if(x==""){
        alert("Enter your Name");
    }
    else{
        alert("Enter the feedback");
    }
}