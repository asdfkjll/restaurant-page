import './reset.css'
import './styles.css'
import { heroView, valuesView, offersView, aboutView, promotionsView, appView, ctaView } from './ui/homepage.js'

const content = document.querySelector('#content')
const navMenu = document.querySelector('.header__navbar')

function renderHomePage() {
  content.appendChild(heroView)
  content.appendChild(offersView)
  content.appendChild(valuesView)
  content.appendChild(aboutView)
  content.appendChild(promotionsView)
  content.appendChild(appView)
  content.appendChild(ctaView)
}

function renderMenuPage() {
}

function renderAboutPage() {
}

navMenu.addEventListener('click', (e) => {
  const targetBtn = e.target.id
  content.innerHTML = ``

  switch(targetBtn) {
    case 'home-btn':
      renderHomePage()
      break
    case 'menu-btn':
      renderMenuPage()
      break
    case 'about-btn':
      renderAboutPage()
      break
  }
})

renderHomePage()
