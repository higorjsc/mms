
function Retornar_valor() {

    let url = window.location.href
    let id = ""

    if (url.includes("calculadora-gsi-ob")) {
        id = "gsi-ob"
    } else if (url.includes("calculadora-gsi-hw")) {
        id = "gsi-hw"
    } else if (url.includes("calculadora-gsi-fw")) {
        id = "gsi-fw"
    }

    const janela_principal = window.opener  // Acessa a janela principal através de window.opener

    let valor = janela_principal.document.getElementById(id)
    let texto = document.querySelector("#resultado").innerText
    valor.value = texto

    let evento_1 = new Event("blur")
    valor.dispatchEvent(evento_1)
    let evento_2 = new Event("input")
    valor.dispatchEvent(evento_2)

    window.close()  // Fechar a janela popup
}

function Escrever_resultado_gsi(gsi) {
    let texto = document.querySelector("#resultado")
    texto.innerText = `${gsi.toFixed(0)}`
}

function Calculo_jc() {

    const valor_jc = {
        "persistencia": document.getElementById("persistencia").value,
        "separacao": document.getElementById("separacao").value,
        "rugosidade": document.getElementById("rugosidade").value,
        "preenchimento": document.getElementById("preenchimento").value,
        "alteracao": document.getElementById("alteracao").value,
    }
    const pesos_jc = {
        "separacao": { "none": 6, "<0.1": 5, "0.1-1.0": 4, "1-5": 1, ">5": 0 },
        "persistencia": { "<1": 6, "1-3": 4, "3-10": 2, "10-20": 1, ">20": 0 },
        "rugosidade": { "muito_rugosa": 6, "rugosa": 5, "levemente_rugosa": 3, "lisa": 1, "escorregadia": 0 },
        "preenchimento": { "none": 6, "duro:<5": 4, "duro:>5": 2, "macio:<5": 2, "macio:>5": 0 },
        "alteracao": { "none": 6, "baixo": 5, "moderado": 3, "alto": 1, "muito_alto": 0 },
    }

    let jc = (0
        + pesos_jc["persistencia"][valor_jc["persistencia"]]
        + pesos_jc["separacao"][valor_jc["separacao"]]
        + pesos_jc["rugosidade"][valor_jc["rugosidade"]]
        + pesos_jc["preenchimento"][valor_jc["preenchimento"]]
        + pesos_jc["alteracao"][valor_jc["alteracao"]]

    )

    let input_jc = document.getElementById("input_jc")
    input_jc.value = jc.toFixed(0)
    input_jc.style.color = "Red"

    return jc
}

function Calculo_gsi_click(X, Y) {
    const pad = document.getElementById("pad")

    X = pad.clientWidth - X
    Y = pad.clientHeight - Y
    X = (X / pad.clientWidth) * 45 + 4
    Y = (Y / pad.clientHeight) * 40 + 1

    let gsi

    gsi = X + Y

    return gsi
}


function Calculo_gsi_input() {

    let input_jc = document.getElementById("input_jc")
    let input_rqd = document.getElementById("input_rqd").value
    const select_jc = document.getElementById("select_jc").value
    let jc
    let gsi

    if (select_jc == "inserir_jc") {

        // do{
        //     jc = Number(input_jc.value)
        //     if(jc>30){
        //         window.alert('O valor de JC deve ser <= 30!')
        //         input_jc.value = '0.0'
        //         flag = false
        //     }else{
        //         flag = true
        //     }
        // }while(flag = false) 

        jc = input_jc.value
        input_rqd = input_rqd == "" ? 0 : input_rqd
        gsi = (1.5 * jc) + (input_rqd / 2)

    } else {

        jc = Calculo_jc()
        gsi = (1.5 * jc) + (input_rqd / 2)

    }

    return gsi
}

function Calculo_gsi(X = 0, Y = 0) {
    const pad = document.getElementById("pad")
    pad.innerHTML = ""

    const tipo_calculo = document.getElementById("select_metodo_calculo").value
    if (tipo_calculo == "click") {
        Desenhar_retas(X, Y)
        gsi = Calculo_gsi_click(X, Y)
    } else if (tipo_calculo == "input") {
        gsi = Calculo_gsi_input()
    }
    if (gsi > 85) {
        gsi = 85
    }

    Escrever_resultado_gsi(gsi)
}