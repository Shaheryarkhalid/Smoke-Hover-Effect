const text=document.querySelector('.Smoke-Text');
text.innerHTML=text.textContent.replace(/\S/g,
                "<span>$&</span>");
                debugger;
const letters=document.querySelectorAll('span');
for(let i=0;i<letters.length;i++){
    letters[i].addEventListener("mouseover", function(){
        letters[i].classList.add('active')
    })
}
