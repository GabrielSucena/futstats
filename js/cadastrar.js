document.querySelector("#botao-cadastrar").addEventListener("click", () => {
   
    const nome = document.querySelector("#nome").value
    const time = document.querySelector("#time").value
    const gols = document.querySelector("#gols").value
    const assistencias = document.querySelector("#assistencias").value
    const foto = document.querySelector("#foto").value

    const jogador = {
        id: "id" + new Date().getTime(),
        nome: nome,
        time: time,
        gols: gols,
        assistencias: assistencias,
        foto: foto
    }
    salvar(jogador)
})

function salvar(jogador) {
    const jogadores = JSON.parse (localStorage.getItem('jogadores')) || []
    jogadores.push(jogador)
    localStorage.setItem("jogadores", JSON.stringify(jogadores))

    window.location = "index.html"

}