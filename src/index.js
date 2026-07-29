import './styles.css'
import './reset.css'
import { heroComponent, renderAboutView, renderAppView, renderOfferView, renderPromotionsView, renderValuesView, renderCtaView } from './ui/homepage.js'
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
const offersBg = document.createElement('div') 
offersBg.classList.add('offers-bg')
const menu = renderMenuView(menuService)
const about = renderAboutView()
const promotions = renderPromotionsView([
  {
    title: "GET REWARDED WITH EVERY BITE!",
    description: "Create a HOT GRILLS account today to unlock an exclusive welcome gift! Earn points every time you order online, in the app, or in-store. The more you taste, the more you earn! Sign Up Today & Claim Your Welcome Gift.",
    imgURL: '../src/img/sign-up-rewards.png',
    btnText: 'SIGN UP',
    btnOnClick: () => { alert('ACCOUNT CREATED') }
  }, 
  {
    title: "GIVE THE GIFT OF FLAVOR!",
    description: "Treat your friends, family, or coworkers to their favorite flame-grilled meals. Choose any amount from $10 to $200, personalize your message, and send instantly online or pick up a physical card in-store! Send a Gift Today!",
    imgURL: '../src/img/giftcard.png',
    btnText: 'BUY GIFTCARD',
    btnOnClick: () => { alert('$200 GIFTCARD') }
  }, 
])
const app = renderAppView({
  imgURL: '../src/img/app.png',
  title: '<span class="app__title--accent">REWARDS</span> WITH EVERY BITE',
  tagline: 'SOMETHING FOR EVERYONE | QUALITY IS OUR PRIORITY | WE SHARE OUR CULTURE'
})
const callToAction = renderCtaView()

function renderHomePage() {
  content.appendChild(hero)
  content.appendChild(offers)
  content.appendChild(offersBg)
  content.appendChild(values)
  content.appendChild(about)
  content.appendChild(promotions)
  content.appendChild(app)
  content.appendChild(callToAction)
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
