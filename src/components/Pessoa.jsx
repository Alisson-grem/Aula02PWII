
function Pessoa({nome, genero, estadoCiv, dataNasc, idade, numero, cpf, formacaoacademica, quemsou, email}) {

        return(
            <div>
                <h3>Nome: {nome}</h3>
                <p>Gênero: {genero}</p>
                <p>Estado Cívil: {estadoCiv}</p>
                <p>Data de Nascimento: {dataNasc}</p>
                <p>Idade: {idade}</p>
                <p>Email: {email}</p>
                <p>Número: {numero}</p>
                <p>CPF: {cpf}</p>
                <p>Quem sou: {quemsou}</p>
                <p>Formação Acadêmica: {formacaoacademica}</p>
                


            </div>
        )
}
    export default Pessoa;