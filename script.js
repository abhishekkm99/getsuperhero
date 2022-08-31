const token= '3273338126327962'
const baseUrl = `https://superheroapi.com/api.php/${token}`

const getNewHeroButton = document.getElementById('getNewHero')
const showHeroDiv = document.getElementById('showHero')
const searchButton = document.getElementById('searchButton')
const searchHero = document.getElementById('searchHero')


const getSuperHero = (id)=>{
    fetch(`${baseUrl}/ ${id}`)
    .then(response=> response.json())
    .then(json=> {
        // console.log(json)
        getSuperHeroStatus(json)
    })
}

const randomNumber =()=>{
    return Math.floor(Math.random()* 731)+1
}
getNewHeroButton.onclick = () => getSuperHero(randomNumber())


const statEmoji={
    intelligence: '🧠' ,
    strength:  '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊', 
    combat:'⚔'

}

const getSuperHeroStatus =(heroInfo)=>{
    const name = `<h2> ${heroInfo.name}</h2>`
    const img = `<img src="${heroInfo.image.url}" height=200 width=200/>`

    const stats = Object.keys(heroInfo.powerstats).map(info =>{
       return `<p> ${statEmoji[info]} ${info.toUpperCase()} : ${heroInfo.powerstats[info]}  </p>`
    }).join('')

    showHeroDiv.innerHTML= `${name}${img}${stats}`
}



const getSearchSuperHero = (name) =>{
    fetch(`${baseUrl}/search/${name}`)
    .then(response=> response.json())
    .then(json=> {
        const hero = json.results[0]
//         console.log(hero);
        getSuperHeroStatus(hero)
    })
}

searchButton.onclick = () => getSearchSuperHero(searchHero.value)
