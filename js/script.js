var btnCalcular = document.querySelector("#btnCalcular")
var peso = document.querySelector("#peso")
var altura = document.querySelector("#altura")
var res = document.querySelector(".res")




function calcular(event) {
    
    event.preventDefault()
    var pesoValue = peso.value
    var alturaValue = altura.value
    var imc = (pesoValue / Math.pow(alturaValue,2) ).toFixed(2)

    if (imc < 17){
        res.innerHTML = `
        <div class="cima">
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p>
            </div>
            <div class="baixo">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${imc}</p>
                <p>Muito abaixo do peso</p>
            </div>`
    } else if (imc > 17 && imc < 18.49){
        res.innerHTML = `
        <div class="cima">
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p>
            </div>
            <div class="baixo">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${imc}</p>
                <p>Abaixo do peso</p>
            </div>`
    } else if (imc > 18.5 && imc < 24.99){
        res.innerHTML = `
        <div class="cima">
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p>
            </div>
            <div class="baixo">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${imc}</p>
                <p>Peso normal</p>
            </div>`
    } else if (imc > 25 && imc < 29.99){
        res.innerHTML = `
        <div class="cima">
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p>
            </div>
            <div class="baixo">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${imc}</p>
                <p>Acima do peso</p>
            </div>`
    } else if (imc > 30 && imc < 34.99){
        res.innerHTML = `
        <div class="cima">
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p>
            </div>
            <div class="baixo">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${imc}</p>
                <p>Obesidade I</p>
            </div>`
    } else if (imc > 35 && imc < 39.99){
        res.innerHTML = `
        <div class="cima">
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p>
            </div>
            <div class="baixo">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${imc}</p>
                <p>Obesidade II (severa)</p>
            </div>`
    } else {
        res.innerHTML = `
        <div class="cima">
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p>
            </div>
            <div class="baixo">
                <p>${pesoValue}</p>
                <p>${alturaValue}</p>
                <p>${imc}</p>
                <p>Obesidade III (mórbida)</p>
            </div>`
    }

    peso.value = ""
    altura.value = ""
    btnCalcular.innerHTML = "Refazer"
    console.log(imc)
}

btnCalcular.addEventListener("click", calcular)

