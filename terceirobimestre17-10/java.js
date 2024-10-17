let totalParticipantes = 0;
const participantes = [];

document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const cate = document.getElementById('cate').value;
    const email = document.getElementById('email').value;


    if (nome === "ACABOU") {
        Lista();

    } else {

        totalParticipantes++;
        document.getElementById('totalParticipantes').textContent =` Total de Participantes: ${totalParticipantes}`;
        if (nome && cpf && cate && email) {
            participantes.push({ nome, cpf, cate, email });
            document.getElementById('nome').value = '';
            document.getElementById('cpf').value = '';
            document.getElementById('cate').value = '';
            document.getElementById('email').value = '';
            alert('Participante registrado com sucesso');
        } else {
            alert('Preencha todos os campos');
        }
    }
});

function Lista() {
    const lista = document.getElementById('listaParticipantes');
    lista.innerHTML = '';
    participantes.forEach(participante => {
        const li = document.createElement('li');
        li.textContent =` ${participante.cate} Nome: ${participante.nome}, CPF: ${participante.cpf}`;
        lista.appendChild(li);
    });
}