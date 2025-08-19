import './App.css'
import Pessoa from './components/Pessoa'
import Foto from './components/Foto'
function App() {

  

  return (
    <div className="App">
      <Pessoa
        nome="Alisson Gomes Pedrosa"
        genero="Masculino"
        idade="22"
        formacaoacademica="Ensino Médio Completo -
        Curso de Recepcionista - 
        Curso de Desenvolvimentos de Sistema(Cursando)"
        quemsou= "Atualmente, sou estudante de Desenvolvimento de sistemas na ETEC de Itanháem, Estou trabalhando em me tornar um desenvolvedor Front-End para começar freelance."
        email="alisson.agp.rj@gmail.com"
        cpf="193.579.777-83"
        dataNasc="05/02/2003"
        numero="21 98300-0708"
        estadoCiv="Solteiro"
      />
      <div className="container">
      <h1>Atividade Perfil Pessoal</h1>
      <Foto
        foto="public/Alisson Foto.jpg"
      />
      </div>
    </div>
  )
}

export default App
