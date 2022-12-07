//aqui necesitamos traer todos los personajes, por eso importamos nuestras funcion getPersonajes
import { getPersonaje } from "./services/getData.js";

//tomamos el main container de nuestro home y el loader

const container = document.querySelector('#personaje');
const loader = document.getElementById('spinner');

//leemos el id guardado en local storage , nos va  a servir para traer los datos de este personaje

const getID = localStorage.getItem('charID');


const loadPersonaje = async (id) => {
    loader.style.display = 'grid';
        const data = await getPersonaje(id);
    loader.style.display = 'none';

    const article = document.createElement('article');
    article.setAttribute('class', 'personaje');
    article.innerHTML = `
            <img src="${data.image}" alt="">
            <h2>${data.name}</h2>
            <p class="data"><span>Origen:</span> ${data.origin.name}</p>
            <p class="data"><span>Locación Actual:</span> ${data.location.name}</p>
            <div>
                <p class="data"><span>Especie:</span> ${data.species}</p>
                <p class="${data.status.toLowerCase()}"></p>
            </div>
    `;
   container.appendChild(article);
}

loadPersonaje(getID);
