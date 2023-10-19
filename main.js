

let btn=document.getElementById("btn");
let select=document.getElementById("select")
let box=document.querySelectorAll('.box');

let cities=[
    'Cairo','Aswan','Alexandria','Giza','Monufia'
]

for(const city of cities){
    let option=`
    <option value="${city}">${city}</option>
    `;
    select.innerHTML+=option;
}

btn.addEventListener("click",function(){
    let city=document.getElementById("select").value;
    axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=8`)
    .then((res)=>{
        document.querySelector("header h1").innerHTML=city;
        let obj=res.data.data.timings;
        let index=0;
        for(const [key, value] of Object.entries(obj)){
            box[index].children[0].innerHTML=key;
            box[index].children[1].innerHTML=value;
            index++;
            if(index==box.length){
                break;
            }
        }
        return res;
    })
    .then((res)=>{
        document.querySelector(".choose p").textContent=res.data.data.date.hijri.weekday.en;
        document.querySelector(".choose p").textContent+="  :"+res.data.data.date.readable;
    })
    .catch(()=>console.log(eeeee));
});

window.onload=function(){
    btn.click();
}