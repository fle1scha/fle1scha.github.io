$(document).ready(function() {
let greeting_var = document.getElementById('hello')

for (let i = 0; i < 10000; i++) {
    if (greeting_var.textContent === 'Bonjour') {
        document.getElementById('hello').textContent = 'Hello';
    }
    else if (greeting_var.textContent === 'Hello') {
        document.getElementById('hello').textContent = 'Bonjour';
    }


}
});
