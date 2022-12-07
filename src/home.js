//aqui necesitamos traer todos los personajes, por eso importamos nuestras funcion getPersonajes
import { getPersonajes } from "./services/getData.js";

//tomamos el main container de nuestro home y el loader

const container = document.querySelector('#personajes');
const loader = document.getElementById('spinner');
//por defecto le pasamos la pagina 1 por si no lo recibe
const personajesList = async (pagina = 1) =>{
    //mostramos el loader antes de llamar a ala API
    loader.style.display = 'grid';
    //pedimos los personajes
    const {results} = await getPersonajes(pagina);
    //ocultamos el loader una vez que ya tenemos la respuesta 
    loader.style.display='none';

    results.forEach(personaje => {
        //por cada personaje creamos un article con sus datos
        console.log("desplegando personajes")
        const article=document.createElement('article');
        article.setAttribute('class','personaje');
        article.innerHTML= `
                <img src = "${personaje.image}" alt="">
                <h2>${personaje.name}</h2>
                <div>
                    <p>${personaje.species}</p>
                    <p class="${personaje.status.toLowerCase()}"></p>
                </div>
                <a href = "/#/${personaje.id}">Ver detalle</a>
        `;
        container.appendChild(article);
    });

    

}
personajesList();