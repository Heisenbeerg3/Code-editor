function run(){
    let HTMLcode=document.getElementById("HTML");
    let CSScode=document.getElementById("CSS");
    let JScode=document.getElementById("Javascript");
    let output=document.getElementById("Output");
    output.contentDocument.body.innerHTML=HTMLcode.value+ "<style>" + CSScode.value +" </style>";
    output.contentWindow.eval(JScode.value);
   
}