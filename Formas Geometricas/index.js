document.getElementById('calculate').addEventListener('click', function() {
    const sides = parseInt(document.getElementById('sides').value);
    let figureName = '';
    let areaFormula = '';
    let perimeterFormula = '';
    let urlImg = '';

    if (!sides) {
        figureName = 'Selecione um número de lados.';
    } else {
        switch (sides) {
            case 3:
                figureName = 'Triângulo';
                areaFormula = 'Área = (base * altura) / 2';
                perimeterFormula = 'Perímetro = lado1 + lado2 + lado3';
                urlImg = 'img/triangulo.png';
                break;
            case 4:
                figureName = 'Quadrado';
                areaFormula = 'Área = lado * lado';
                perimeterFormula = 'Perímetro = 4 * lado';
                urlImg = 'img/quadrado.png';
                break;
            case 5:
                figureName = 'Pentágono';
                areaFormula = 'Área = (5/4) * lado² / tan(π/5)';
                perimeterFormula = 'Perímetro = 5 * lado';
                urlImg = 'img/pentagono.png';
                break;
            case 6:
                figureName = 'Hexágono';
                areaFormula = 'Área = (3√3 / 2) * lado²';
                perimeterFormula = 'Perímetro = 6 * lado';
                urlImg = 'img/hexagono.png';
                break;
            case 7:
                figureName = 'Heptágono';
                areaFormula = 'Área ≈ 3.634 * lado²';
                perimeterFormula = 'Perímetro = 7 * lado';
                urlImg = 'img/heptagono.png';
                break;
            case 8:
                figureName = 'Octógono';
                areaFormula = 'Área = 2 * (1 + √2) * lado²';
                perimeterFormula = 'Perímetro = 8 * lado';
                urlImg = 'img/octogono.png';
                break;
            case 9:
                figureName = 'Eneágono';
                areaFormula = 'Área ≈ 3.877 * lado²';
                perimeterFormula = 'Perímetro = 9 * lado';
                urlImg = 'img/eneagono.png';
                break;
            case 10:
                figureName = 'Decágono';
                areaFormula = 'Área = 2.5 * lado² * √(5 + 2√5)';
                perimeterFormula = 'Perímetro = 10 * lado';
                urlImg = 'img/decagono.png';
                break;
        }
    }

    const resultDiv = document.getElementById('result');
    const shapeImage = document.getElementById('shapeImage');

    resultDiv.innerHTML = `
        <h2>${figureName}</h2>
        <p>${areaFormula}</p>
        <p>${perimeterFormula}</p>
        <img src="${urlImg} " alt="">
    `;

    if (urlImg) {
        shapeImage.src = urlImg;
        shapeImage.style.display = 'block';
    } else {
        shapeImage.style.display = 'none';
    }
});
