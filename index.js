function  clicked(){
    console.log("the button was clicked");
}
window.onload = function(){
    console.log("reload succesfully");
}
setInterval( () => {
    let a = new Date();
     let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
     document.getElementById('timeDisplay').innerHTML = time;
},1000);

//---------------------in otp time------------------------//
// loginf = ()=>{
//     console.log("otp time out")
// }
// setTimeout(loginf,30000);

//================seting attempts-----------------------//
