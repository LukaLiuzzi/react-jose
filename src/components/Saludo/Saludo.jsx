const Saludo = ({ nombre, descripcion }) => {
  return (
    <div className="w-52 border bg-orange-400 p-4 rounded-md text-center">
      <h1>¡Hola {nombre || "desconocido"}!</h1>
      <p>{descripcion || "Bienvenido al sitio."}</p>
    </div>
  )
}

export default Saludo
