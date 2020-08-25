function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementsByClassName('second')[0].value
    var out = Number(a)+Number(b);
    document.getElementsByTagName('p')[0].innerText=out
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementsByClassName('second')[0].value
    var out =  Number(a)-Number(b);
    document.getElementsByTagName('p')[0].innerText=out
}

function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementsByClassName('second')[0].value
    var out;
    if(opt == 'add'){
        out = Number(a)+Number(b);
    }else{
        out = Number(a)-Number(b);
    }
    document.getElementsByTagName('p')[0].innerText=out
}