
let placename=document.getElementById("placename");
let btn_btn_success=document.getElementsByClassName("btn_btn_success");
btn_btn_success.addEventListener("click",function(){
    if(placename.value==""){
        alert("Fill the form")
    }else{
        alert(placename.value+"tour is placed")
    }
})


const paymentStart = () => {
    console.log("Payment started..")
    let amount=document.getElementById("amount");
let pay=document.getElementById("pay");
pay.addEventListener("click",function(){
    if(amount.value==""){
        alert("Fill the form")
    }else{
        alert("")
    }
})




    if(amount=='' || amount == null){
        alert("amount is required !!");
        return;
    }
};



let v2=document.getElementById("v2");
let connect=document.getElementById("connect");
connect.addEventListener("click",function(){
    if(v2.value==""){
        alert("Fill the form")
    }else{
        alert("Now we are connected")
    }
})
