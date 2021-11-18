async function getAPIdata(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        (console.error)
    }
}

getAPIdata(`https://pokeapi.co/api/v2/pokemon/25`)
.then(data => {
    console.log(data)
    populatePokeCards (data)
})

const pokeGrid = document.querySelector('.pokeGrid')

function populatePokeCards(singlePokemon) {
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    const pokeFront = document.createElement('div')
    pokeFront.className= 'cardFace front'
    pokeFront.textContent = 'Front'
    const pokeBack = document.createElement('div')
    pokeBack.textContent = 'Back'
    pokeBack.className = 'cardFace back'

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}