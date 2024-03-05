import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Saludo from "./components/Saludo/Saludo"
import Contador from "./components/Contador"

function App() {
  const [contador, setContador] = useState(0)
  const [nombre, setNombre] = useState("Luka")
  const [tareas, setTareas] = useState([])

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  // Solo se renderiza la primera vez que se ejecuta el componente
  // useEffect(() => {}, [])

  // Se renderiza cada vez que cambia el estado de contador o nombre
  // useEffect(() => {}, [contador, nombre])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const json = await response.json()
      console.log(json)
      setTareas(json)
    }

    fetchData()

    return () => {
      console.log("Adios")
    }
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        <Saludo nombre="Luka" descripcion="Sos el profesor!!" />
        <Saludo nombre="Jose" descripcion="Sos el alumno!!" />
        <Saludo />
        <Saludo nombre={"otro"} />
        <Contador valor={contador} aumentar={sumar} restar={restar} />
        {contador < 2 &&
          tareas.map((tarea) => {
            return (
              <div key={tarea.id}>
                <h2>{tarea.title}</h2>
                <hr />
              </div>
            )
          })}
      </main>
      <footer>
        <p>© 2021</p>
        Desarrollado por Meta. hola@gmail.com
      </footer>
    </div>
  )
}

export default App
