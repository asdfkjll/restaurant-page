import './styles.css'
import './reset.css'
import { heroComponent, renderOfferView, renderValuesView } from './ui/homepage.js'
import { renderMenuView } from './ui/menu.js'
import menuService from './services/menu-service.js'

const content = document.querySelector('#content')
const navMenu = document.querySelector('#navmenu')

const hero = heroComponent({
  title: 'HOT GRILLS', 
  description: 'NO RESERVATIONS, JUST ORDER ONLINE AT ANY MOMENT AND ENJOY', 
  btnList: 
  [
    {text: 'Order Now', variant: 'red', onClick: function() { alert('FUCK YOU! we aint taking your order') }},
    {text: 'Contact Us', variant: 'red', onClick: function() { alert('FUCK YOU! we aint contacting you') }},
  ] 
})
const values = renderValuesView([
  {
    title: "SOMETHING FOR EVERYONE",
    description: "Our menu is designed to sastify all kind of tastes",
  }, 
  {
    title: "QUALITY IS OUR PRIORITY",
    description: "We offer the best products to our customers",
  },
  {
    title: "MORE THAN FOOD, IT'S OUR CULTURE",
    description: "Diversity and Tradition",
  }
])
const offers = renderOfferView([
  menuService.getItem('Pizza'),
  menuService.getItem('Pizza1'),
  menuService.getItem('Pizza2'),
])

const menu = renderMenuView(menuService)

function renderHomePage() {
  content.appendChild(hero)
  content.appendChild(offers)
  content.appendChild(values)
}

function renderMenuPage() {
  content.appendChild(menu)
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
