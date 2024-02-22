import { useState } from "react"
import Navbar from "./components/Navbar"
import Saludo from "./components/Saludo/Saludo"
import Contador from "./components/Contador"

function App() {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  return (
    <div>
      <Navbar />
      <main>
        <Saludo nombre="Luka" descripcion="Sos el profesor!!" />
        <Saludo nombre="Jose" descripcion="Sos el alumno!!" />
        <Saludo />
        <Saludo nombre={"otro"} />
        <Contador valor={contador} aumentar={sumar} restar={restar} />
      </main>
      <footer>
        <p>© 2021</p>
        Desarrollado por Meta. hola@gmail.com
      </footer>
    </div>
  )
}

export default App
