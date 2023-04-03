var container = document.createElement('div');
container.className = 'container';
var box = document.createElement('div');
box.className = 'box';
var content = document.createElement('div');
content.className = 'content';
content.innerHTML="Hi"
var button=document.createElement('button');
button.classList.add("button","btn","btn-primary");
var i=document.createElement('i');
i.className="fa fa-refresh"
button.appendChild(i);
button.innerHTML+=" Refresh";
button.addEventListener("click",advice)
box.append(button,content);
container.appendChild(box);
document.body.appendChild(container);

async function advice() {
    try{
        var api=await fetch("https://api.adviceslip.com/advice");
        var res=await api.json();
        content.innerHTML=`${res.slip.advice}`;
    }catch(error){
        console.log(error);
        content.innerHTML="Please check Your Internet connection"
    }
}


//wQiWXohWQv1LeOazA6KdwRnUWxFsdNPf
//Kickbox
//Email verification https://api.kickbox.com/v2/verify?email=145@l.com&apikey=test_f2c0e45fe39ccb0abbf973da45c3760ffe55f4901a7bb30072fca0d05dedd730
//https://api.adviceslip.com/advice

