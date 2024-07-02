import {repositories} from './repositories.js';

const cardsContainer = document.querySelector('#cards-container')

function loadCards() {
    repositories.forEach(repository => {
        const cardContainer = document.createElement('a');
        cardContainer.id = 'card-container';
        cardContainer.setAttribute('href', repository.link);
        cardContainer.setAttribute('target', '_blank');

        cardContainer.innerHTML = `
            <article id="card">
                <section id="card-heading">
                    <div id="location">
                        <span class="material-symbols-outlined icon">location_on</span>
                        <p>${repository.location}</p>
                    </div>
                    <h3 id="card-title">${repository.name}</h3>
                    <div id="card-image">
                        <img src="${repository.image}" alt="${repository.name} library screenshot">
                    </div>
                </section>
                <section id="card-description">
                    <p>${repository.description}</p>
                </section>
                <section id="card-details">
                    <div id="lms">
                        <span class="material-symbols-outlined icon">web</span>
                        <p>${repository.lms}</p>
                    </div>
                    <div id="years">
                        <span class="material-symbols-outlined icon" id="counter-icon">counter_${repository.years}</span>
                        <p>Years</p>
                    </div>
                    <div id="type">
                        <span class="material-symbols-outlined icon">account_balance</span>
                        <p>${repository.type}</p>
                    </div>
                    <div id="size">
                        <span class="material-symbols-outlined icon">groups</span>
                        <p>${repository.size}</p>
                    </div>
                </section>
            </article>
        `

        cardsContainer.appendChild(cardContainer);
    })
}

loadCards()