function getChartTypes() {
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const specialCharacter = document.querySelector('#include_special_character').checked;

    const charTypes = [];

    if (uppercase) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    
    if (lowercase) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (number) {
        charTypes.push('0123456789');
    }

    if (specialCharacter) {
        charTypes.push('!@#$%¨&*()_-+={}[]|\\/?><:;"\'.,~`');
    }

    return charTypes;
}

function getPasswordSize() {
    const size = document.querySelector('#size').value;
    if(isNaN(size) || size < 4 || size > 128) {
        alert('Tamanho inválido, digite um número entre 4 e 128');
    }

    return size;
}

function randomCharTypes(charTypes) {
    const randomIndex = Math.floor(Math.random() * charTypes.length);
    return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];
}

function generatePassword(size, charTypes) {
    let passwordGeneratated = '';

    while (passwordGeneratated.length < size) {
        passwordGeneratated += randomCharTypes(charTypes);
    }

    return passwordGeneratated;
}

document.querySelector('#generate').addEventListener('click', function(){
    const size = getPasswordSize();
    const charTypes = getChartTypes();

    const passwordGeneratated = generatePassword(size, charTypes);

    document.querySelector('#password_container').classList.add('show');

    document.querySelector('#password').textContent = passwordGeneratated;
});
