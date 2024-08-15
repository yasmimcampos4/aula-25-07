let alunos = [];
function lerDadosAluno() {
    let nome = document.getElementById('nome').value;
    let faltas = parseInt(document.getElementById('faltas').value);
    let media = parseFloat(document.getElementById('media').value);

    let aluno = {
        nome: nome,
        faltas: faltas,
        media: media
    };

    alunos.push(aluno);

    document.getElementById('alunoForm').reset();

    exibirAlunos();
}

function exibirAlunos() {
    let listagem = document.getElementById('listagemAlunos');
    listagem.innerHTML = "<h2>Listagem dos alunos:</h2>";
    for (let aluno of alunos) {
        listagem.innerHTML += `<p>Nome: ${aluno.nome}, Faltas: ${aluno.faltas}, Média: ${aluno.media}</p>`;
    }
}