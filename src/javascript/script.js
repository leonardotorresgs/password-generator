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
        message('Tamanho inválido, digite um número entre 4 e 128!', '#dc2626');
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

function message(text, background) {
    Toastify({
        text: text,
        duration: 2000,
        style: {
            background: background,
            boxShadow: 'none'
        }
    }).showToast();
}

document.querySelector('#generate').addEventListener('click', function(){
    const size = getPasswordSize();
    const charTypes = getChartTypes();

    if (!size) {
        return;
    }

    if (!charTypes.length) {
        message('Selecione pelo menos um tipo de caractere', '#dc2626');
        return;
    }

    const passwordGeneratated = generatePassword(size, charTypes);

    document.querySelector('#password_container').classList.add('show');
    document.querySelector('#password').textContent = passwordGeneratated;
});
