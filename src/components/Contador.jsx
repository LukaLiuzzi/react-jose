const Contador = ({ valor, aumentar, restar }) => {
  return (
    <div className="bg-red-400 p-4">
      <h1>Contador</h1>
      <button onClick={aumentar}>Aumentar</button>
      <h2>{valor}</h2>
      <button onClick={restar}>Restar</button>
    </div>
  )
}

export default Contador
