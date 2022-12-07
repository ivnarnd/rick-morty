//Declaramos una URL base que es la de la API
const baseURL = 'https://rickandmortyapi.com/api';
/*getPersonaje(id) se ocupará de pedirle a la API que nos envíe el personaje solicitado. El parámetro id es el número de personaje que queremos.*/
/*
getPersonajes(pagina) nos buscará todos los personajes según la página solicitada
*/
//creamos la funcion asincrona para ir a buscar un unico personaje
const getPersonaje = async (id)=>{
    const res = await fetch(`${baseURL}/character/${id}`); //capturamos los datos en formato json
    const data =  await res.json();  //sacamos el body de la respuesta 
    return data;
}

const getPersonajes = async (pagina)=>{
    const res = await fetch(`${baseURL}/character/?page=${pagina}`); //capturamos los datos en formato json
    const data =  await res.json();  //sacamos el body de la respuesta 
    return data;
}

export {getPersonaje,getPersonajes};