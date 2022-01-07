let parent = document.querySelector("#card");

function aceptar(elementId){
    var element = document.getElementById(elementId);
    parent.removeChild(element);
    document.querySelector("#connectionsReq").innerText--;//si el id tiene guión no funciona, porqué?
    document.querySelector("#connectionsNum").innerText++;
}

function denegar(elementId){
    var element = document.getElementById(elementId);
    parent.removeChild(element);
    document.querySelector("#connectionsReq").innerText--;//si el id tiene guión no funciona, porqué?
}

function editProfile(elementId){
    elementId.innerText="Victor Vasquez";
}


