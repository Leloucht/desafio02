let students = [
    {aluno: 'Lopes', score1: 5, score2: 8},
    {aluno: 'leandro', score1: 9, score2: 7},
    {aluno: 'Isadora', score1: 6, score2: 10},
    {aluno: 'Pedro', score1: 4, score2: 6},
    {aluno: 'Eduardo', score1:8, score2: 6}
];

function mediaDasNotas (score1, score2) {
    let average = (score1 + score2) / 2
    return average
}


for (const student of students) {
        let mediaStudent = mediaDasNotas(student.score1, student.score2);
        let foiAprovado = mediaStudent < 7 ? `lamento ${student.aluno}, nao foi desta vez! estude mais para a proxima`: `Parabens ${student.aluno} pela sua aprovacao`
    alert(`A media de ${student.aluno} foi de ${mediaStudent} \n ${foiAprovado}`)   
}
