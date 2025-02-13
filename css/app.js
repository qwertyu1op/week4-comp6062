console.log("JS LOADED!");

const programName='Embedded Systems';
let year= 2025;

const collegeName= "Fanshawe";

let givenName=document.querySelector("#givenName");
let button=document.querySelector(".btn-submit");

button.addEventListener("click",()=>{

if(collegeName===givenName.value)
{
    
    year=year+2;
    console.log(year);
    console.log("PASS OUT YEAR IS:"+year);
}
else{
    console.log("not");
    console.log(givenName);
}
});