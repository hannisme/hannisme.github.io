var calcDisplay = ""

function buttonclick(e){
    if((e=="1") || (e=="2") || (e=="3") || (e=="4") || (e=="5") || (e=="6") || (e=="7") || (e=="8") || 
    (e=="9") || (e=="0") || (e=="+") || (e=="-") || (e=="*") || (e=="/")){
        if(e == "AC"){
            calcDisplay = ""
        } else{
            calcDisplay = calcDisplay + e
            console.log(calcDisplay)
        }
        document.getElementById("display").value = calcDisplay
    } else{ 
        console.log("Input harus berupa angnka dan simbol")
    }   
}

document.getElementById("display").addEventListener('input', function displayChange(){
    console.log(this.value)
    let e = this.value

    let chars = /^[0-9]+$/

    if (chars.test(e)){
        console.log("digits")
    } else{
        alert("not digits")
    }
})