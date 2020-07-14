function embaralhar(){
let num1 = document.getElementById("cxnum1")
let num2 = document.getElementById("cxnum2")
let n1 = Number(num1.value)
let n2 = Number(num2.value)
if(num1.value.length == 0 || n1 <0 || num2.value.length == 0 || n2 <0){
    window.alert('Valores invalidos! preecha o campo antes de embaralhar ou Tente digitar numeros positivos!')
}else{
    window.alert('Tudo ok')
}
}