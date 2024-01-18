const isPrivate = false;

function SwapString(str){
    let prof;

    if(isPrivate){ prof = "　―　"}
    else{ prof = str;}

    document.getElementById("profile").innerHTML = prof;
}

function SwapIcon(){
    if(isPrivate){}
    else{}
}