// Función para encriptar el texto
// Reemplaza las letras en el texto según las reglas de encriptación
const encriptarTexto = (texto) => 
    texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

// Función para desencriptar el texto
// Reemplaza las secuencias en el texto por las letras originales
const desencriptarTexto = (texto) => 
    texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

// Muestra u oculta elementos y cambia su visibilidad
// elements: lista de elementos a mostrar/ocultar
// action: 'inline-block' o 'none'
const toggleElementVisibility = (elements, action) => {
    elements.forEach(el => el.style.display = action);
};

// Actualiza la interfaz para mostrar el resultado encriptado
const mostrarInterfazParaEncriptar = () => {
    // Ocultar el botón de Encriptar y Desencriptar
    toggleElementVisibility([
        document.querySelector('.leftButtom1'), 
        document.querySelector('.leftButtom2')
    ], 'none');

    // Mostrar el botón de Reiniciar y Copiar
    toggleElementVisibility([
        document.querySelector('.leftButtom3'),
        document.querySelector('.RightButtom')
    ], 'inline-block');

    // Mostrar el área de texto encriptado y ocultar otros elementos
    document.querySelector('.right').classList.add('right2');
    document.querySelector('.rightText').style.display = 'block';
    document.querySelector('.rightText').value = encriptarTexto(document.querySelector('.leftTex').value);
    toggleElementVisibility([
        document.querySelector('.rightImg'),
        document.querySelector('.rightText1'),
        document.querySelector('.rightText2')
    ], 'none');
};

// Actualiza la interfaz para mostrar el resultado desencriptado
const mostrarInterfazParaDesencriptar = () => {
    // Mostrar el botón de Reiniciar
    toggleElementVisibility([
        document.querySelector('.leftButtom3')
    ], 'inline-block');

    // Ocultar el botón de Encriptar, Desencriptar y Copiar
    toggleElementVisibility([
        document.querySelector('.leftButtom1'),
        document.querySelector('.leftButtom2'),
        document.querySelector('.RightButtom')
    ], 'none');

    // Mostrar el área de texto desencriptado y ocultar otros elementos
    document.querySelector('.rightText').style.display = 'block';
    document.querySelector('.rightText').value = desencriptarTexto(document.querySelector('.leftTex').value);
    toggleElementVisibility([
        document.querySelector('.rightImg'),
        document.querySelector('.rightText1'),
        document.querySelector('.rightText2')
    ], 'none');
};

// Restaura la interfaz a su estado inicial
const restaurarInterfaz = () => {
    // Limpiar los campos de texto
    document.querySelector('.leftTex').value = 'Ingrese texto aquí';
    document.querySelector('.rightText').value = '';

    // Restaurar la interfaz a su estado inicial
    document.querySelector('.right').classList.remove('right2');
    toggleElementVisibility([
        document.querySelector('.rightImg'),
        document.querySelector('.rightText1'),
        document.querySelector('.rightText2')
    ], 'block');
    document.querySelector('.rightText').style.display = 'none';

    // Mostrar el botón de Encriptar y ocultar otros botones
    toggleElementVisibility([
        document.querySelector('.leftButtom1')
    ], 'inline-block');
    toggleElementVisibility([
        document.querySelector('.leftButtom2'),
        document.querySelector('.leftButtom3')
    ], 'none');
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Ocultar los botones de Desencriptar y Reiniciar al cargar la página
    toggleElementVisibility([document.querySelector('.leftButtom2'), document.querySelector('.leftButtom3')], 'none');

    // Manejar el clic en el área de texto de la izquierda
    document.querySelector('.leftTex').addEventListener('click', function () {
        // Limpiar el valor del campo si tiene el texto predeterminado
        if (this.value === 'Ingrese texto aquí') this.value = '';
    });

    // Manejar el clic en el botón de Encriptar
    document.querySelector('.leftButtom1').addEventListener('click', () => {
        const texto = document.querySelector('.leftTex').value;
        if (texto && texto !== 'Ingrese texto aquí') mostrarInterfazParaEncriptar();
    });

    // Manejar el clic en el botón de Desencriptar
    document.querySelector('.leftButtom2').addEventListener('click', () => {
        const texto = document.querySelector('.leftTex').value;
        if (texto && texto !== 'Ingrese texto aquí') mostrarInterfazParaDesencriptar();
    });

    // Manejar el clic en el botón de Copiar
    document.querySelector('.RightButtom').addEventListener('click', () => {
        const rightText = document.querySelector('.rightText');
        const leftTex = document.querySelector('.leftTex');
        
        // Seleccionar y copiar el texto del área de texto de la derecha
        rightText.select();
        document.execCommand('copy');
        
        // Poner el texto copiado en el área de texto de la izquierda
        leftTex.value = rightText.value;

        // Mostrar los botones de Desencriptar y Reiniciar después de copiar
        toggleElementVisibility([document.querySelector('.leftButtom2'), document.querySelector('.leftButtom3')], 'inline-block');
        toggleElementVisibility([document.querySelector('.RightButtom')], 'none');
    });

    // Manejar el clic en el botón de Reiniciar
    document.querySelector('.leftButtom3').addEventListener('click', () => restaurarInterfaz());
});
