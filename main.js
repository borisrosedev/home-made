// Créons notre logique de routage

import LandingContainer from "./js/containers/landing/index.js"
import HomeContainer from "./js/containers/home/index.js"
import landingView from "./js/views/landing/index.js"
import homeView from "./js/views/home/index.js"
import homemadeHeader from "./js/layout/homemade-header/index.js"
import HeaderContainer from "./js/containers/header/index.js"

const root = document.getElementById('root')




window.onNavigate = (hash) => {
    navigateTo(hash)
}

const navigateTo = (hash) => {

    console.log(window.location.pathname)
    console.log(hash)
    window.history.pushState("", null, window.location.pathname + hash)

    root.innerHTML = ""
    if(hash === "") {
        console.log('landing')
        root.innerHTML += landingView()
        console.log(window.onNavigate)
        new LandingContainer(window.onNavigate)
    } else if (hash === "#home"){

        console.log('home')
        root.innerHTML += homemadeHeader()
        new HeaderContainer(window.onNavigate)
        root.innerHTML += homeView()
        new HomeContainer(window.onNavigate)
    } else if (hash === "#login"){
        root.innerHTML += homemadeHeader()
        new HeaderContainer(window.onNavigate)
    }
}


const route = () => {
    const hash = window.location.hash
    navigateTo(hash)
}


route()




