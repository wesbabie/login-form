

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const form = document.querySelector(".form")
const message = document.querySelector("#msg")
const btn = document.querySelectorAll("button")



form.addEventListener("submit", (e)=>{
    
    const x = document.forms['myForm']['username'].value
    const y = document.forms['myForm']['password'].value
 if (x==="") {
    message.style.display="initial"
    message.innerHTML="please ensure that all feilds are properly filled";
    username.classList.add("error")
    e.preventDefault()
    setTimeout(()=>message.remove("error"),5000);
   
 }else if(y===""){
    message.style.display="initial"
    message.innerHTML="please ensure that all feilds are properly filled"
    password.classList.add("error")
    e.preventDefault()
    setTimeout(()=>message.remove("error"),5000)
 }else if(y!==" "&& x!==""){
    alert("hello "+username.value+" your form has been submited")
 }

 
})
const T = new Date();
const year = T.getFullYear();

document.getElementById("paragraph").innerHTML=("Odunayo &copy; "+year)

