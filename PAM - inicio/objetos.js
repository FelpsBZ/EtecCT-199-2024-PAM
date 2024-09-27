// Objetos

var aluno1  = {
    matricula: 7627364,
    nome: 'Danilo Ferreira',
    curso: 'Bootcamp Front End',
    ativo: true
};

var aluno2 = {
    matricula: 230387,
    nome: 'Felipe Daniel Souza Bazilio',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true,
    turma: '2DS'
}

var aluno3 = {
    matricula: 230123,
    nome: 'Gabriel Lima de Oliveira',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true,
    turma: '2DS'
}




console.log(aluno1.nome);

aluno1.dataNascimento = '03/07/1985';
aluno2.dataNascimento = '16/07/2007';
aluno3.dataNascimento = '18/01/2008';
console.log(aluno1.dataNascimento);

console.log(aluno2);
console.log(aluno3);


delete aluno1.dataNascimento;

// Undefined e null

var x;
var y = null;

// Arrays

var frutas = ['Banana', 'Laranja', 'Maçã'];