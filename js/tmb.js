function calculeteTMB(event) {

    event.preventDefault()

    const gender = document.getElementById('gender').value
    const weight = parceFloat(document.getElementById('weight').value)
    const height = parceInt(document.getElementById('height').value)
    const age = parceInt(document.getElementById('age').value)

    const resultBox = document.getElementById('result')
    const valueText = document.getElementById('tmb-value')

if (!weight || !height || !age) {
    alert("Por favor, preencha todos os campos com valores válidos")
    return
    }

    let tmb = 0

    if (gender === 'male') {
        tmb = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
    } else {
        tmb = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)
    }

    valueText.innerText = Math.round(tmb)

    resultBox.classList.add('show')
}