// Mendapatkan input display
const display = document.getElementById('display');

// Menambah nilai ke display
function appendValue(value) {
    display.value += value;
}

// Menghapus seluruh input
function clearDisplay() {
    display.value = '';
}

// Menghapus karakter terakhir
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Menghitung hasil
function calculateResult() {
    try {
        display.value = 'Aku kangen wkwk'
        // display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
