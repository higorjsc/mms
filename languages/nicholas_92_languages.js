function Escrever(id, texto, op) {
    const elemento = document.getElementById(id)
    if (op === undefined) {

        elemento.innerHTML = texto
    } else {
        elemento.options[op].text = texto
    }
}

function English() {

    let paragrafo_explicacao = "The Nicholas selection procedure of 1992 is an modified version of the Nicholas approach from 1981, published by the same author." +
        "The 1992 edition aims to correct the classic issue in the original approach where all criteria were assigned equal importance.<br><br>" +
        "<strong>The modifications include:<br></strong>" +
        "&ensp;&ensp;- The sum of each value assigned to the selection criteria is multiplied by a 'Weighting Factor'.<br>" +
        "&ensp;&ensp;- Weighting Factors are suggested by the author for deposit geometry, and rock mechanics characteristics of the orebody, hanging wall and footwall.<br><br>" +
        "<strong>Notes:<br></strong>" +
        "&ensp;&ensp; - Nicholas states that the proposed values for each characteristic in this method 'can be' adjusted as our technical expertise, mining equipment, and overall mining processes evolve and improve.<br>"

    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    //titulos
    Escrever("titulo-section-1", "GENERAL CHARACTERISTICS")
    Escrever("titulo-section-2", "DEPOSIT SIMULATION ")
    Escrever("titulo-section-3", "RANKING")

    //SEÇÃO 2
    Escrever("subtitulo-geometria", "Geometry of deposit")

    //FORMA GERAL
    Escrever("span-forma-geral", "General shape:")
    Escrever("forma-geral", "Equi-dimensional", 0)
    Escrever("forma-geral", "Platy-tabular", 1)
    Escrever("forma-geral", "Irregular", 2)

    //MERGULHO
    Escrever("span-mergulho", "Plunge:")
    Escrever("mergulho", "Flat", 0)
    Escrever("mergulho", "Intermediate", 1)
    Escrever("mergulho", "Steep", 2)

    //ESPESSURA
    Escrever("span-espessura", "Ore thickness")
    Escrever("espessura", "Narrow", 0)
    Escrever("espessura", "Intermediate", 1)
    Escrever("espessura", "Thick", 2)
    Escrever("espessura", "Muito Thick", 3)

    //DISTRIBUIÇÃO
    Escrever("span-distribuicao", "Grade distribution:")
    Escrever("distribuicao", "Uniform", 0)
    Escrever("distribuicao", "Gradational", 1)
    Escrever("distribuicao", "Erratic", 2)


    //INPUTS RSS
    Escrever("subtitulo-densidade", "Density")
    Escrever("span-densidade-ob", "Orebody:")
    Escrever("subtitulo-profundidade", "Depth")
    Escrever("span-profundidade-ob", "Orebody:")
    Escrever("span-ucs-ob", "Orebody:")
    Escrever("span-resultado-rss-ob", "Orebody:")


    //ESPAÇAMENTO FRATURAS
    Escrever("subtitulo-fracture-spacing", "Fracture Spacing:")
    Escrever("span-fracture-spacing-ob", "Orebody:")
    const menu_fracture_spacing = document.querySelectorAll(".menu-fracture-spacing")
    menu_fracture_spacing.forEach(element => {
        Escrever(element.id, "Very close", 0)
        Escrever(element.id, "Close", 1)
        Escrever(element.id, "Wide", 2)
        Escrever(element.id, "Very wide", 3)
    })

    //QUALIDADE FRATURAS
    Escrever("subtitulo-fracture-strenght", "Fracture Strenght:")
    Escrever("span-fracture-strenght-ob", "Orebody:")
    const menu_fracture_strenght = document.querySelectorAll(".menu-fracture-strenght")
    menu_fracture_strenght.forEach(element => {
        Escrever(element.id, "Weak", 0)
        Escrever(element.id, "Moderate", 1)
        Escrever(element.id, "Strong", 2)
    })

    //FATORES DE PESO
    Escrever("h2-fatores-peso", "Weighting Factors")
    Escrever("span-cm", "OB")
}

function Portuguese() {
    let paragrafo_explicacao = "O Método de Nicholas de 1992 é uma versão modificada do método de Nicholas de 1981, publicada pelo mesmo autor." +
        "A nova versão tem o objetivo de corrigir o 'problema' clássico do procedimento orignal, onde todos os critérios de seleção possuem a mesma importância.<br><br>" +
        "<strong>As modificações incluem:<br></strong>" +
        "&ensp;&ensp;- O somatório das notas de cada critério de seleção é multiplicado por um 'Fator de peso';<br>" +
        "&ensp;&ensp;- 'Fatores de pesos' são sugeridos pelo autor para a geometria do depósito, e características geotécnicas do corpo de minério, hanging wall e footwall.<br><br>" +
        "<strong>Observações:<br></strong>" +
        "&ensp;&ensp; - Nicholas afirma que os valores propostos para cada característica em seu método 'pode ser' alterado, conforme a  nossa expertise tecnica, equipamentos de mineração, e o processo de mineração em geral evoluem e melhoram.<br>"

    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    //titulos
    Escrever("titulo-section-1", "CARACTERÍSTICAS GERAIS")
    Escrever("titulo-section-2", "SIMULAÇÃO DO DEPÓSITO")
    Escrever("titulo-section-3", "PREFERENCIAS")

    //SEÇÃO 2
    Escrever("subtitulo-geometria", "Geometria do depósito")

    //FORMA GERAL
    Escrever("span-forma-geral", "General shape:")
    Escrever("forma-geral", "Massiva", 0)
    Escrever("forma-geral", "Tabular", 1)
    Escrever("forma-geral", "Irregular", 2)

    //MERGULHO
    Escrever("span-mergulho", "Mergulho:")
    Escrever("mergulho", "Plano", 0)
    Escrever("mergulho", "Intermediário", 1)
    Escrever("mergulho", "Inclinado", 2)

    //ESPESSURA
    Escrever("span-espessura", "Espessura do minério:")
    Escrever("espessura", "Estreito", 0)
    Escrever("espessura", "Intermediário", 1)
    Escrever("espessura", "Espesso", 2)
    Escrever("espessura", "Muito Espesso", 3)

    //DISTRIBUIÇÃO
    Escrever("span-distribuicao", "Distribuição de teores:")
    Escrever("distribuicao", "Uniforme", 0)
    Escrever("distribuicao", "Gradacional", 1)
    Escrever("distribuicao", "Errática", 2)

    //INPUTS RSS
    Escrever("subtitulo-densidade", "Densidade")
    Escrever("span-densidade-ob", "Corpo de minério:")
    Escrever("subtitulo-profundidade", "Profundidade")
    Escrever("span-profundidade-ob", "Corpo de minério:")
    Escrever("span-ucs-ob", "Corpo de minério:")
    Escrever("span-resultado-rss-ob", "Corpo de minério:")

    //ESPAÇAMENTO FRATURAS
    Escrever("subtitulo-fracture-spacing", "Fracture Spacing:")
    Escrever("span-fracture-spacing-ob", "Corpo de minério:")
    const menu_fracture_spacing = document.querySelectorAll(".menu-fracture-spacing")
    menu_fracture_spacing.forEach(element => {
        Escrever(element.id, "Muito perto", 0)
        Escrever(element.id, "Perto", 1)
        Escrever(element.id, "Longe", 2)
        Escrever(element.id, "Muito longe", 3)
    })

    //QUALIDADE FRATURAS
    Escrever("subtitulo-fracture-strenght", "Fracture Strenght:")
    Escrever("span-fracture-strenght-ob", "Corpo de minério:")
    const menu_fracture_strenght = document.querySelectorAll(".menu-fracture-strenght")

    menu_fracture_strenght.forEach(element => {
        Escrever(element.id, "Fraca", "0")
        Escrever(element.id, "Moderada", "1")
        Escrever(element.id, "Forte", "2")
    })

    //FATORES DE PESO
    Escrever("h2-fatores-peso", "Fatores de Peso")
    Escrever("span-cm", "CM")

}