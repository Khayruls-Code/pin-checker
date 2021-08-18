let randomInput = document.getElementById('randomInput');
let typedInput = document.getElementById('typedInput');
document.getElementById('generatePin').addEventListener('click',function(){
    let pin = ''
    for(let i = 1; i <= 4; i++){
        let singleNumber = Math.floor(Math.random() * 9 + 1)
        pin = pin + singleNumber;
    }
    randomInput.value = pin;
})

document.getElementById('keyPad').addEventListener('click', function(e){
    let numbers = e.target.innerText;
    let inputNum = typedInput.value;
    if(numbers == 'C'){
        typedInput.value = '';
    }
    if(isNaN(numbers)){
        return false
    }else{
        inputNum = inputNum + numbers;
        typedInput.value = inputNum;
    }
})
let success = document.getElementById('success')
let fail = document.getElementById('fail')
document.getElementById('submitBtn').addEventListener('click',function(){
    if(randomInput.value == typedInput.value){
        success.style.display = 'block'
        fail.style.display = 'none'
        console.log('mached')
    }else{
        success.style.display = 'none'
        fail.style.display = 'block'
        console.log('fail')
    }
})