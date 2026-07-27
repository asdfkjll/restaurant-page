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
    { text: 'Order Now', variant: 'red', onClick: function() { alert('FUCK YOU! we aint taking your order') } },
    { text: 'Contact Us', variant: 'red', onClick: function() { alert('FUCK YOU! we aint contacting you') } },
  ] 
})
const values = renderValuesView([
  {
    title: "SOMETHING FOR EVERYONE",
    description: "Our menu caters to all tastes, offering a wide range of dishes so everyone in your group finds something they love.",
    imgURL: '../src/img/together.jpg',
  }, 
  {
    title: "QUALITY IS OUR PRIORITY",
    description: "We partner only with suppliers who share our commitment to fresh, high-quality ingredients.",
    imgURL: '../src/img/fresh.jpg',
  },
  {
    title: "WE SHARE OUR CULTURE",
    description: "Food is our way of sharing tradition and history. We honor our community's diverse roots to offer a taste of true heritage.",
    imgURL: '../src/img/culture.jpg',
  }
])
const offers = renderOfferView([
  menuService.getItem('Double Meat Burguer'),
  menuService.getItem('Fry Chicken'),
  menuService.getItem('Ketchup Cup'),
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
