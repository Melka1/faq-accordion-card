function handleShow(num){
    console.log(num);
    let title = $("#"+num +" h3");
    let icon = $("#"+num +" img");
    let desc = $("#"+num +" p");
    let descState = desc.css("display");

    if(descState == "none"){
        desc.css("display","block");
        title.css("font-weight", "bold");
        icon.css("transform","rotate(180deg)");
    } else {
        desc.css("display","none");
        title.css("font-weight", "normal");
        icon.css("transform","rotate(0deg)");
    }    
}
    
console.log($("#3").addClass("block"));