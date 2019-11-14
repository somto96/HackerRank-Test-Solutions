var clickMe = document.createElement('button');
clickMe.id = 'btn';
clickMe.innerHTML = 0;
clickMe.style.width = "96px";
clickMe.style.height = "48px";
clickMe.style.fontSize = "24px";
clickMe.style.background = '#eee';
document.body.appendChild(clickMe);


var button = document.getElementById('btn');
button.onclick = () =>{
    button.innerHTML ++;
    console.log(button.innerHTML)
}