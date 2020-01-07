let btn=document.querySelector(".btn-right")
let coontain =document.querySelector(".response")
btn.addEventListener("click",function(){
    let inputvalue=document.querySelector(".block")


    let cont = document.createElement('div')
    let btncomple = document.createElement('button')
    let btnremov = document.createElement('button')
    let textinput = document.createElement('h4')

    btncomple.innerHTML="complete"
    btnremov.innerHTML="remove"
    textinput.innerHTML=inputvalue.value

    cont.appendChild(btncomple)
    cont.appendChild(btnremov)
    cont.appendChild(textinput)
    coontain.prepend(cont)
    inputvalue.innerHtml=""

    cont.style.display="flex";

   cont.style.justifyContent="center"
    btncomple.style.color = "red";
    btnremov.style.color = "red";

    btnremov.style.background  = "transparent";
    btncomple.style.background  = "transparent";

    btnremov.style.fontSize ="15px";
    btncomple.style.fontSize= "15px";
    btnremov.style.marginRight ="15px";
    btncomple.style.marginRight= "15px";
    btnremov.style.height ="40px";
    btncomple.style.height= "40px";
    
    btnremov.style.width ="80px";
    btncomple.style.width= "80px";

    btnremov.addEventListener("click",function(){
        cont.remove()
    })
    btncomple.addEventListener("click",function(){
        if(btncomple.innerText=="complete"){
        btncomple.innerHTML="undo";
        textinput.style.textDecoration="line-through"}
      else{
      btncomple.innerHTML="complete"
      textinput.style.textDecoration=""
      }

    
    })
    
})

