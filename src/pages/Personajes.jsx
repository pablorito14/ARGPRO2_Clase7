import axios from "axios";
import { useEffect, useState } from "react";

const Personajes = () => {
  console.log('hola')
  /**
    useEffect(funcion_anonima,dependencia)
    dependencias puede ser: 
    - sin dependencias: se ejecuta cada vez que se renderiza el componente
    - []: se ejecuta una sola vez
    - [variable] se ejecuta cada vez que el valor de la variable cambia


    -- usar entre 1 y 2 nada mas


    await provoca la ejecucion de una funcion async

   */
  // useEffect(() => {
  //   console.log('soy el useEffect')
  // },[])

  // const [paises,setPaises] = useState([]);
  // const [busqueda,setBusqueda] = useState('')

  const [personajes,setPersonajes] = useState([]);
  const [pagina,setPagina] = useState(1);
  const [busqueda,setBusqueda] = useState('')

  const URL_BASE = 'https://rickandmortyapi.com/api/character';

  // template string => convinar variables con strings
  useEffect(() => {
    
    const cargarDatos = async () => {
      const response = await axios.get(`${URL_BASE}?page=${pagina}`);
      console.log(response.data)
      setPersonajes(response.data.results);

      const responsePaises = await axios.get('JSON/paises.json')
      console.log(responsePaises.data)
      // const response = await fetch('https://rickandmortyapi.com/api/character')
      // const data = await response.json();
      // console.log(data.results);
      // setPaises(data);
    }

    cargarDatos();
  },[pagina])

  // const buscarPais = (e) => {
  //   setBusqueda(e.target.value)
  // }

  // const paisesFiltrados = paises.filter(pais => 
  //   pais.nombre_pais.toLowerCase().includes(busqueda.toLowerCase()))
  // console.log(paisesFiltrados)

  console.log('adios')

  const anterior = () => {
    setPagina(pagina-1)
  }

  const siguiente = () => {
    setPagina(pagina+1)
  }

  return (
    <>
    <button onClick={anterior}>Anterior</button>
    <button onClick={siguiente}>Siguiente</button>
    {/* <input type="text" onChange={buscarPais} value={busqueda} /> */}
      {personajes.map((personaje) => (
          <div key={personaje.id}>
            <img src={personaje.image} alt="" />
            <p>{personaje.name}</p>
          </div>
        ))}
    {/* <input type="text" onChange={buscarPais} value={busqueda} />
      {paisesFiltrados.map((pais,i) => (
          <div key={i}>{pais.nombre_pais}</div>
        ))} */}
    </>
  )
}


export { Personajes }