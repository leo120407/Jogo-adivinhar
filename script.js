var n = 0
var c = 0
var som = document.getElementById('Som')
addEventListener('change' , function() {
    if (som.checked) {
        localStorage.setItem('som','marcado')
    }
    else {
        localStorage.setItem('som','nmarcado')
    }
});
if (localStorage.som == 'marcado') 
    som.checked = true
function gerarn() {
    n = Math.floor(Math.random() * 11)
}
function recarregar() {
    location.reload()
}
function confirmar() {
    var un = document.getElementById('num').value
    var resp = document.getElementById('resp')
    var foto = document.getElementById('foto')
    var cont = document.getElementById('cont')
    var som = document.getElementById('Som')
    c += 1
    cont.innerHTML = `Tentativa ${c}`
    if (un > 10 || un < 0) {
        window.alert('Escolha um numero valido')
    }
    else {
        if (un > n) {
            resp.innerHTML = 'ERRADO(Escolha um numero MENOR)'
            foto.src = 'errado.png'
            if (som.checked) {
                const errado = new Audio('errado.mp3')
                errado.play()
            }
        }
        else if (un < n) {
            resp.innerHTML = 'ERRADO(Escolha um número MAIOR)'
            foto.src = 'errado.png'
            if (som.checked) {
                const errado = new Audio('errado.mp3')
                errado.play()
            }
        }
        else {
            resp.innerHTML = `Número correto (acertou em ${c} tentativas)`
            foto.src = 'certo.png'
            cont.innerHTML = '<input type="button" value="Tentar novamente" onclick="recarregar()">'
            c = 0
            if (som.checked) {
                const certo = new Audio('certo.mp3')
                certo.play()
            }
        }
    }

}
