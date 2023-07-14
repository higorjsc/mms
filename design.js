function Mostrar_input_pesos() {

    const select = document.getElementById("menu-pesos").value
    const input_pesos = document.querySelectorAll(".input-pesos")
    const botao_ahp_nicholas = document.querySelector("#botao-ahp-nicholas")
    if (select == 4) {
        input_pesos.forEach(element => {
            element.style.display = "block"
        })
        botao_ahp_nicholas.style.display = "block"
    } else {
        input_pesos.forEach(element => {
            element.style.display = "none"
        })
        botao_ahp_nicholas.style.display = "none"
    }
}

function Checkbox(x, metodo) {
    const checkbox_x = document.getElementById(x)
    const checkboxes = document.querySelectorAll(".checkbox-rmr-q-gsi")

    if (checkbox_x.checked) {
        //desmarca 2 checkbox quando uma é marcada
        checkboxes.forEach(element => {
            if (element != checkbox_x) {
                element.checked = false
            }
        })
    } else {   //garante que pelo menos uma checkbox esteja sempre marcada
        checkboxes.forEach(element => {
            element.checked = false
        })
        checkbox_x.checked = true
    }

    function Hide(id) {
        //Esconde as divs Q, RMR e GSI quando desmarcadas
        const elementos = document.querySelectorAll(`.${id}`)
        elementos.forEach(element => {
            element.style.display = "none"
        })
    }
    //Mostra as divs Q, RMR e GSI quando marcadas
    function Show(id) {
        const elementos = document.querySelectorAll(`.${id}`)
        elementos.forEach(element => {
            element.style.display = "block"
        })
    }
    //Verifica qual parâmetro (Q, RMR ou GSI) deve ser exibido e esconde os demais
    if (checkboxes[0].checked) {
        Show("rmr")
        Hide("gsi")
        Hide("q")
    } else if (checkboxes[1].checked) {
        Show("gsi")
        Hide("rmr")
        Hide("q")
    } else if (checkboxes[2].checked) {
        Show("q")
        Hide("rmr")
        Hide("gsi")
    } else {
        Show("rmr")
        Hide("gsi")
        Hide("q")
    }
    //A função calculo é chamada porque os valores não são vinculados uns aos outros
    Calculo(metodo)
}

function Mudar_imagem(metodo = "nicholas") {

    const forma_geral = document.getElementById("forma-geral").value
    const mergulho = document.getElementById("mergulho").value
    const espessura = document.getElementById("espessura").value
    const distribuicao = document.getElementById("distribuicao").value

    //Obtém o elemento <img> da seção 2
    const ilustracao = document.getElementById("ilustracao")

    //Monta a string com o nome da imagem a ser exibida
    const nome_imagem = forma_geral + "_" + distribuicao + ".png"

    //Adiciona o diretório ao elemento <img> da seção 2
    ilustracao.src = "Imagens\\" + nome_imagem

    const superficie = document.getElementById("superficie")
    superficie.style.display = "block"

    //String para evitar que os parâmetros de transform se sobreponham
    let transformacoes = ""

    if (metodo == "ubc") {
        const profundidade = document.getElementById("profundidade").value
        if (profundidade == "intermediaria") {
            transformacoes += "translate(0px, 45%)"
        } else if (profundidade == "profunda") {
            transformacoes += "translate(0px, 75%)"
            superficie.style.display = "none"
        }
    }
    if (metodo == "shb") {
        const profundidade = document.getElementById("profundidade").value
        if (profundidade == "intermediaria") {
            transformacoes += "translate(0px, 45%)"
        } else if (profundidade == "pouco_profunda") {
            transformacoes += "translate(0px, 60%)"
        } else if (profundidade == "profunda") {
            transformacoes += "translate(0px, 75%)"
            superficie.style.display = "none"
        }
    }
    if (metodo == "nicholas_81" || metodo == "nicholas_92" || metodo == "ubc") {
        if (mergulho == "intermediario") {
            transformacoes += "rotate(30deg) "
        } else if (mergulho == "inclinado") {
            transformacoes += "rotate(60deg) "
        }
    } else {
        if (mergulho == "baixo") {
            transformacoes += "rotate(20deg) "
        } else if (mergulho == "intermediario") {
            transformacoes += "rotate(40deg) "
        } else if (mergulho == "pouco_inclinado") {
            transformacoes += "rotate(60deg) "
        } else if (mergulho == "inclinado") {
            transformacoes += "rotate(80deg) "
        }
    }
    if (espessura == "muito_estreito") {
        transformacoes += "scale(0.6) "
    } else if (espessura == "estreito") {
        transformacoes += "scale(0.7) "
    } else if (espessura == "intermediario") {
        transformacoes += "scale(0.8) "
    } else if (espessura == "espesso") {
        transformacoes += "scale(0.9) "
    } else if (espessura == "muito_espesso") {
        transformacoes += "scale(1) "
    }

    //Aplica a animação criada pelos parâmetros profundidade, mergulho e espessura
    ilustracao.style.transform = transformacoes
}


//Recebe um texto específico informando o parâmetro.
function Formatar_entry(entry) {

    const entrada = document.getElementById(entry)
    const entrada_valor = entrada.value

    //Verifica se o input está vazio ou nulo
    if (entrada_valor != 0) {

        //Retira do input APENAS um texto númerico com 2 casas decimais
        let numero = parseFloat(entrada_valor.match(/\d+(\.\d{0,2})?/)[0])

        if (entry.includes("densidade")) {
            //Se o input for DENSIDADE, 'kg/m³' é adicionado ao texto númerico
            entrada.value = numero.toString() + " kg/m³"
        } else if (entry.includes("profundidade")) {
            //Se o input for PROFUNDIDADE, 'm' é adicionado ao texto númerico
            entrada.value = numero.toString() + " m"
        } else if (entry.includes("ucs")) {
            //Se o input for UCS, 'Mpa' é adicionado ao texto númerico
            entrada.value = numero.toString() + " Mpa"
        } else if (entry.includes("peso") || entry.includes("q") || entry.includes("gsi")) {
            //Se o input for os pesos da section central, duas casas decimais são adicionadas ao texto númerico
            entrada.value = numero.toFixed(2).toString()
        }

    }
}

// Recebe a posição dos balões de ajuda de cada elemento
function Positions(entry, messages, positions) {

    entry = entry.includes("calculadora-rmr") ? "calculadora-bieniawsk" : entry
    entry = entry.includes("calculadora-gsi") ? "calculadora-hoek" : entry
    entry = entry.includes("calculadora-ucs") ? "calculadora-ucs" : entry
    entry = entry.includes("calculadora-densidade") ? "calculadora-densidade" : entry
    entry = entry.includes("resultado-rss") ? "substance" : entry
    entry = entry.includes("gsi") ? "gsi" : entry
    entry = entry.includes("rmr") ? "rmr" : entry
    entry = entry.includes("q") ? "q" : entry
    entry = entry.includes("rss") ? "rss" : entry
    entry = entry.includes("fracture-spacing") ? "fracture-spacing" : entry
    entry = entry.includes("fracture-strenght") ? "fracture-strenght" : entry

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    if (messages[entry]) {
        balao.innerText = messages[entry]
        balao.style.display = "block"
    }

    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(100px,-100px)"
    }

}

function Balao_entra(entry, idioma) {
    let messages
    if (idioma == "en") {
        messages = {
            "calculadora-bieniawsk": "Calculate RMR",
            "calculadora-hoek": "Calculate GSI",
            "calculadora-ucs": "Approximate values table",
            "calculadora-densidade": "Approximate values table",
            "botao-pesos": "Check weights",
            "botao-imprimir": "Print report",
            "switch-language": "Change to portuguese",
        }
    } else {
        messages = {
            "calculadora-bieniawsk": "Calcular RMR",
            "calculadora-hoek": "Calcular GSI",
            "calculadora-ucs": "Tabela valores aproximados",
            "calculadora-densidade": "Tabela valores aproximados",
            "botao-pesos": "Verificar Pesos",
            "botao-imprimir": "Imprimir relatório",
            "switch-language": "Mudar para inglês",
        }
    }

    const positions = {
        "calculadora-bieniawsk": { x: 10, y: -70 },
        "calculadora-hoek": { x: 10, y: -70 },
        "calculadora-ucs": { x: 10, y: -70 },
        "calculadora-densidade": { x: 10, y: -70 },
        "botao": { x: -110, y: -100 },
        "botao-pesos": { x: -150, y: -50 },
        "botao-imprimir": { x: -150, y: -50 },
        "switch-language": { x: 30, y: -40 },

    }
    //Mostra e posiciona o balão conforme o dicionário de posições
    Positions(entry, messages, positions)
}

function Balao_entra_shb(entry, idioma) {
    let messages
    //Verifica se o titulo da seção 1 está em ingles
    if (idioma == "en") {
        messages = {
            "forma-geral": "\n- Equi-dimensional: all dimensions are onthe same\n order of magnitude\n\n- Platy-tabular: two dimensions are many times the\nthickness, which does not usually exceed 35m \n\n- Irregular: dimensions vary over short distances\n\n",
            "mergulho": "\n- Flat: inclination bellow 15º\n\n- Low: inclination between 15º-30º\n\n- Intermediate: inclination between 35º-45º\n\n- Rarely Steep: inclination between 45º-60º\n\n- Steep: more than 60º of inclination\n\n",
            "espessura": "\n-Very narrow: bellow 3 m thick\n\n-Narrow: between 3 m and 10 m thick\n\n- Intermediate: between 10m an 30m thick\n\n- Thick: between 30 m and 100 m thick\n\n- Very Thick: more than 100m thick\n\n",
            "distribuicao": "\n- Uniforme:the grade at any point does not vary\n significantly from the mean grade for that deposit\n\n- Gradational: grade values have zonal characteristics, and\n the grades change gradually from one to another.\n\n- Erratic:  grade values change radically over short distances\n\n",
            "profundidade": "\n- Shallow: between 0 m and 200 m\n\n- Intermediate: between 200 m and 500 m\n\n- Rarely Deep: between 500 m and 800 m\n\n- Deep: more than 800 m\n\n",
            "valor-minerio": "Relative value",
            "substance": "\n- Very weak: <5\n\n- Weak: 5,00 a 10,00\n\n- Moderate: 10,00 a 15,00\n\n - Strongh: >15,00\n\n\nUCS (Pa)\n----------------------------------\nDensity(N/m³) x Depth(m)\n\n",
            "rmr": "\nRMR classification by Bieniawski (1989) \n\n",
            "gsi": "\nGSI to RMR conversion\n\nCeballos e Olalla (2014):\nRMR = (GSI - 11.63) / 1.13\n\n",
            "q": "\nQ to RMR conversion\n\nBieniawski (1989):\nRMR = 9 x ln(Q) + 44\n\n",
        }
    } else {
        messages = {
            "forma-geral": "\n- Massivo: todas as dimensões são da\n mesma ordem de magnitude\n\n- Tabular: duas das dimensões são muito\n maiores que a espessur\n\n- Irregular: dimensões variam\n a pequenas distâncias\n\n",
            "mergulho": "\n- Plano: <15º de inclinação \n\n- Baixo: 15º-30º de inclinação\n\n- Intermediário: 30º-45º de inclinação\n\n- Pouco inclinado: 45º-60º de inclinação\n\n- Inclinado: > 60º de inclinação\n\n",
            "espessura": "\n- Estreito: menos de 10m\n\n- Intermediário: entre 10m e 30m\n\n- Espesso: entre 30m e 100m\n\n- Muito espesso: superior a 100m\n\n",
            "distribuicao": "\n- Uniforme: o teor em qualquer ponto não\n varia muito da média global\n\n- Gradacional: os teores mudam gradualmente\nde uma \"zona\" do depósito para outra\n\n- Errático: teores variam radicalmente \nem curtas distâncias\n\n",
            "profundidade": "\n- Rasa: entre 0 m e 200 m\n\n- Intermediária: entre 200 m e 500 m\n\n- Pouco profunda: entre 500 m e 800 m\n\n- Profunda: superior a 800 m\n\n",
            "valor-minerio": "Valores relativos",
            "substance": "\n- Muito fraca: <5\n\n- Fraca: 5,00 a 10,00\n\n- Moderada: 10,00 a 15,00\n\n - Resistente: >15,00\n\n\nUCS (Pa)\n----------------------------------\nDensidade(N/m³) x Profundidade(m)\n\n",
            "rmr": "\n Classificação RMR de Bieniawski (1989) \n\n",
            "gsi": "\nConversão GSI→RMR \n\nCeballos e Olalla (2014):\nRMR = (GSI - 11,63) / 1,13\n\n",
            "q": "\nConversão Q→RMR \n\nBieniawski (1989):\nRMR = 9 x ln(Q) + 44\n\n",
        }
    }

    const positions = {
        "substance": { x: 100, y: -180 }
    }

    //Mostra e posiciona o balão conforme o dicionário de posições
    Positions(entry, messages, positions)

}

function Balao_entra_ubc(entry, idioma) {
    let messages
    if (idioma == "en") {
        messages = {
            "forma-geral": "\n- Equi-dimensional: all dimensions are onthe same\n order of magnitude\n\n- Platy-tabular: two dimensions are many times the\nthickness, which does not usually exceed 35m \n\n- Irregular: dimensions vary over short distances\n\n",
            "mergulho": "\n- Flat: inclination bellow 20º\n\n- Intermediate: inclination between 20º-50º\n\n- Steep: more than 55º of inclination\n\n",
            "espessura": "\n-Narrow: less than 10 m thick\n\n- Intermediate: between 10 m an 30 m thick\n\n- Thick: between 30m and 100m thick\n\n- Very Thick: more than 100m thick\n\n",
            "distribuicao": "\n- Uniforme:the grade at any point does not vary\n significantly from the mean grade for that deposit\n\n- Gradational: grade values have zonal characteristics, and\n the grades change gradually from one to another.\n\n- Erratic:  grade values change radically over short distances\n\n",
            "profundidade": "\n- Shallow: between 0 m and 100 m\n\n- Intermediate: between 100 m and 600 m\n\n- Deep: more than 600 m\n\n\nUCS (Pa)\n----------------------------------\nDensity(N/m³) x Depth(m)\n\n",
            "substance": "\n- Very weak: <5\n\n- Weak: 5,00 a 10,00\n\n- Moderate: 10,00 a 15,00\n\n - Strongh: >15,00\n\n",
            "rmr": "\nRMR classification by Bieniawski (1989) \n\n",
            "gsi": "\nGSI to RMR conversion\n\nCeballos e Olalla (2014):\nRMR = (GSI - 11.63) / 1.13\n\n",
            "q": "\nQ to RMR conversion\n\nBieniawski (1989):\nRMR = 9 x ln(Q) + 44\n\n"
        }
    } else {
        messages = {
            "forma-geral": "\n- Massivo: todas as dimensões são da\n mesma ordem de magnitude\n\n- Tabular: duas das dimensões são muito\n maiores que a espessur\n\n- Irregular: dimensões variam\n a pequenas distâncias\n\n",
            "mergulho": "\n- Plano: <20º de inclinação \n\n- Intermediário: 20º-50º de inclinação\n\n- Inclinado: > 55º de inclinação\n\n",
            "espessura": "\n- Estreito: menos de 10m\n\n- Intermediário: entre 10m e 30m\n\n- Espesso: entre 30m e 100m\n\n- Muito espesso: superior a 100m\n\n",
            "distribuicao": "\n- Uniforme: o teor em qualquer ponto não\n varia muito da média global\n\n- Gradacional: os teores mudam gradualmente\nde uma \"zona\" do depósito para outra\n\n- Errático: teores variam radicalmente \nem curtas distâncias\n\n",
            "profundidade": "\n- Rasa: entre 0 m e 100 m\n\n- Intermediária: entre 100 m e 600 m\n\n- Profunda: superior a 600 m\n\n",
            "substance": "\n- Muito fraca: <5\n\n- Fraca: 5,00 a 10,00\n\n- Moderada: 10,00 a 15,00\n\n - Resistente: >15,00\n\n\nUCS (Pa)\n----------------------------------\nDensidade(N/m³) x Profundidade(m)\n\n",
            "rmr": "\n Classificação RMR de Bieniawski (1989) \n\n",
            "gsi": "\nConversão GSI→RMR \n\nCeballos e Olalla (2014):\nRMR = (GSI - 11,63) / 1,13\n\n",
            "q": "\nConversão Q→RMR \n\nBieniawski (1989):\nRMR = 9 x ln(Q) + 44\n\n",
        }
    }
    const positions = {
        "substance": { x: 100, y: -180 }
    }

    //Mostra e posiciona o balão conforme o dicionário de posições
    Positions(entry, messages, positions)

}

function Balao_entra_nicholas(entry, idioma) {
    let messages
    if (idioma == "en") {
        messages = {
            "forma-geral": "\n- Equi-dimensional: all dimensions are onthe same\n order of magnitude\n\n- Platy-tabular: two dimensions are many times the\nthickness, which does not usually exceed 35m \n\n- Irregular: dimensions vary over short distances\n\n",
            "mergulho": "\n- Flat: inclination bellow 20º\n\n- Intermediate: inclination between 20º-50º\n\n- Steep: more than 55º of inclination\n\n",
            "espessura": "\n\n-Narrow: less than 10 m thick\n\n- Intermediate: between 10 m an 30 m thick\n\n- Thick: between 30m and 100m thick\n\n- Very Thick: more than 100m thick\n\n",
            "distribuicao": "\n- Uniforme:the grade at any point does not vary\n significantly from the mean grade for that deposit\n\n- Gradational: grade values have zonal characteristics, and\n the grades change gradually from one to another.\n\n- Erratic:  grade values change radically over short distances\n\n",
            "profundidade": "\n- Shallow: between 0 m and 100 m\n\n- Intermediate: between 100 m and 600 m\n\n- Deep: more than 600 m\n\n",
            "substance": "\n- Weak: <8,00\n\n- Moderate: 8,00 a 15,00\n\n - Strongh: >15,00\n\n\nUCS (Pa)\n----------------------------------\nDensity(N/m³) x Depth(m)\n\n",
            "fracture-spacing": "\n-Very close - more than 16 fractures per meter \n\n- Close: 10 to 16 fracture per meter\n\n-Wide: 3 to 10 fracture per meter\n\n- Very wide: 3 fracture per meter or less\n\n",
            "fracture-strenght": "\n- Weak: clean joint with a smooth surface\nor fill with material whose strenght is less\n than rock RSS\n\n- Moderate: clean joint with a rough surface\n\n- Strong: joint is filled with a material that is\n equal to or stronger than rock RSS\n\n",
        }
    } else {
        messages = {
            "forma-geral": "\n- Massivo: todas as dimensões são da\n mesma ordem de magnitude\n\n- Tabular: duas das dimensões são muito\n maiores que a espessur\n\n- Irregular: dimensões variam\n a pequenas distâncias\n\n",
            "mergulho": "\n- Plano: <20º de inclinação \n\n- Intermediário: 20º-50º de inclinação\n\n- Inclinado: > 55º de inclinação\n\n",
            "espessura": "\n- Muito Estreito: inferior a 3m\n\n-Estreito: entre 3m e 10m\n\n- Intermediário: entre 10m e 30m\n\n- Espesso: entre 30m e 100m\n\n- Muito espesso: superior a 100m\n\n",
            "distribuicao": "\n- Uniforme: o teor em qualquer ponto não\n varia muito da média global\n\n- Gradacional: os teores mudam gradualmente\nde uma \"zona\" do depósito para outra\n\n- Errático: teores variam radicalmente \nem curtas distâncias\n\n",
            "profundidade": "\n- Rasa: entre 0 m e 100 m\n\n- Intermediária: entre 100 m e 600 m\n\n- Profunda: superior a 600 m\n\n",
            "substance": "\n- Fraca: <8,00\n\n- Moderada: 8,00 a 15,00\n\n - Forte: >15,00\n\n\nUCS (Pa)\n----------------------------------\nDensidade(N/m³) x Profundidade(m)\n\n",
            "fracture-spacing": "\n- Muito perto: menos de 16 fraturas por metro\n\n- Perto: entre 10 e 16 fraturas por metro\n\n-Longe: entre 3 e 10 fraturas por metro\n\n- Muito onge: 3 fraturas por metro ou menos\n\n",
            "fracture-strenght": "\n- Fraca: fraturas \"limpas\" com uma superfície\n ou preenchimento de resistencia menor\n do que a RSS da rocha\n\n- Média: fraturas \"limpas\" e com uma superfície rugosa\n\n- Forte: fraturas preenchidas com material de\n resistencia igual ou superior a RSS da rocha\n\n",
        }
    }
    const positions = {
        "fracture-strenght": { x: 100, y: -200 },
        "substance": { x: 100, y: -180 }
    }
    //Mostra e posiciona o balão conforme o dicionário de posições
    Positions(entry, messages, positions)
}

//REMOVE O BALÃO DE TEXTO NO MOUSEOUT
function Balao_sai() {
    const balao = document.getElementById("balao")
    balao.style.display = "none"
}

function Baloes(entry, metodo = "undefined") {

    const idioma = Obter_idioma()
    if (metodo == "nicholas_81") {
        Balao_entra_nicholas(entry, idioma)

    } else if (metodo == "nicholas_92") {
        Balao_entra_nicholas(entry, idioma)

    } else if (metodo == "ubc") {
        Balao_entra_ubc(entry, idioma)

    } else if (metodo == "shb") {
        Balao_entra_shb(entry, idioma)
    } else {
        Balao_entra(entry, idioma)
    }


}
