document.getElementById('imcForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightInCm = parseFloat(document.getElementById('height').value);
    const heightInM = heightInCm / 100; // Convertir altura de cm a m
    const imc = (weight / (heightInM * heightInM)).toFixed(2);
    let classification = '';
    let advice = '';

    // Clasificación del IMC
    if (imc < 18.5) {
        classification = 'Bajo peso';
        const idealWeight = (18.5 * (heightInM * heightInM)).toFixed(2);
        advice = `Tu IMC es ${imc}. Se recomienda un peso ideal de al menos ${idealWeight} kg. Considera consultar a un nutricionista para obtener un plan adecuado.`;
    } else if (imc < 24.9) {
        classification = 'Peso normal';
        advice = `¡Felicidades! Tu IMC es ${imc}. Estás en un rango de peso saludable. Mantén un estilo de vida equilibrado.`;
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
        const idealWeight = (24.9 * (heightInM * heightInM)).toFixed(2);
        advice = `Tu IMC es ${imc}. Se recomienda un peso ideal de no más de ${idealWeight} kg. Considera hacer ejercicio regularmente y llevar una dieta equilibrada.`;
    } else {
        classification = 'Obesidad';
        const idealWeight = (24.9 * (heightInM * heightInM)).toFixed(2);
        advice = `Tu IMC es ${imc}. Se recomienda un peso ideal de no más de ${idealWeight} kg. Es importante consultar a un médico o nutricionista para obtener orientación.`;
    }

    // Mostrar el resultado
    document.getElementById('result').innerHTML = `Tu IMC es: ${imc} - Clasificación: ${classification}.`;

    // Mostrar el consejo en el cuadro
    const adviceBox = document.getElementById('advice');
    adviceBox.innerHTML = advice; // Asignar el consejo al cuadro
    adviceBox.style.display = 'block'; // Mostrar el cuadro
});


