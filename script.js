const A = document.querySelector("#number1")
const B = document.querySelector("#number2")

const selection_val = document.querySelector("#operatorselect")

const _resultInput = document.querySelector("#result")

const btn = document.querySelector(".btn")    

btn.addEventListener("click",clickevent)

selection_val.addEventListener("change",dropdownchange)



function dropdownchange(change){
    console.log(selection_val.value)
}


function clickevent(e){
    e.preventDefault()
    let _AValue = Number(A.value)
    let _BValue = Number(B.value)
    switch(selection_val.value){
        
        case "+":
            console.log(selection_val)
            _resultInput.removeAttribute("readonly")
            _resultInput.value = _AValue + _BValue
            _resultInput.setAttribute("readonly",true)
        break
        case "-":
            console.log(selection_val)
            _resultInput.removeAttribute("readonly")
            _resultInput.value = _AValue - _BValue
            _resultInput.setAttribute("readonly",true)
        break
        case "%":
            _resultInput.removeAttribute("readonly")
            _resultInput.value =_AValue / _BValue
            _resultInput.setAttribute("readonly",true)
            break
        case "*":
            console.log(selection_val)
             _resultInput.removeAttribute("readonly")
            _resultInput.value = _AValue * _BValue
            _resultInput.setAttribute("readonly",true)   
            break
    }
    A.value = ""
    B.value = ""
}

