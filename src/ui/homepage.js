import './homepage.css'
import { createElementFromHTML, createSection } from './ui.js'
import buttonComponent from './button.js'
import menu from '../services/menu-service.json'
import { getAllOffers } from '../services/menu-utils.js'
import heroVideo from '../vids/hero.mp4'

const imgContext = import.meta.webpackContext('../img/', {
  recursive: false,
  regExp: /\.(png|jpe?g|svg|webp|mp4)$/,
})

function getImgFromContext(imgName, context) {
  try {
    return context(`./${imgName}`)
  } catch (err) {
    console.warn(`${err}: cannot load the image, please check the context direction and the name of the img file`)
  }
}

function heroVideoComponent({ title, description, videoURL, btnList = [] }) {
  const hero = createElementFromHTML(`
    <section class="hero">
      <video autoplay muted loop playsinline class="hero__video">
	      <source src="${videoURL}" type="video/mp4">
	      Your browser does not support the video tag.
      </video>

      <div class="hero__overlay"></div>

      <div class="hero__content">
	      <h1 class="hero__title">${title}</h1>
	      <p class="hero__description">${description}</p>
	      <div class="hero__btn-container"></div>
      </div>
    </section>
  `)

  btnList.forEach((item) => {
    const btn = buttonComponent({
      text: item.text,
      variant: item.variant,
      onClick: item.onClick
    })

    hero.querySelector('.hero__btn-container').appendChild(btn)
  })

  return hero
}

function offerCardComponent(props) {
  const card = createElementFromHTML(`
    <div class="offers-card">
      <div class="offers-card__img-wrapper">
        <img class="offers-card__img" src="${getImgFromContext(props.imgName, imgContext)}" alt="${props.title}">
      </div>

      <div class="offers-card__content">
	      <h4 class="offers-card__title">${props.title}</h4>
	      <p class="offers-card__discount">${props.offer.discount}% OFF</p>
      </div>
    </div>
  `)

  card.querySelector('.offers-card__content').appendChild(buttonComponent({
    text: 'SEE MORE',
    variant: 'yellow',
    onClick: () => { alert('see more') }
  }))

  return card
}

function valuesItemComponent({ title, description, imgName }) {
  return createElementFromHTML(`
    <div class="values-item">
      <div class="values-item__content">
        <h2 class="values-item__title">${title}</h2>
        <p class="values-item__description">${description}</p>
      </div>
      
      <div class="values-item__img-wrapper">
        <img class="values-item__img" src="${getImgFromContext(imgName, imgContext)}" alt="${title}">
      </div>
    </div>
  `)
}

function promotionsItemComponent({ title, description, imgName, btnText, btnOnClick }) {
  const promotion = createElementFromHTML(`
    <div class="promotions-item">
      <div class="promotions-item__content">
	      <h2 class="promotions-item__title">${title}</h2>
	      <p class="promotions-item__description">${description}</p>
      </div>

      <div class="promotions-item__img-wrapper">
	      <img class="promotions-item__img" src="${getImgFromContext(imgName, imgContext)}" alt="${title}">
      </div>
    </div>
  `)

  promotion.querySelector('.promotions-item__content').appendChild(
    buttonComponent({
      text: btnText,
      variant: 'red',
      onClick: btnOnClick
    })
  )

  return promotion
}

function appComponent({ imgName, title, tagline }) {
  return createElementFromHTML(`
    <section class="app">
      <div class="app__container">
	      <div class="app__img-wrapper">
	        <img src="${getImgFromContext(imgName, imgContext)}" class="app__img">
	      </div>

	      <div class="app__content">
	        <h2 class="app__title">${title}</h2>
	        <p class="app__tagline">${tagline}</p>
	      </div>
      </div>
    </section>
  `)
}

const heroView = heroVideoComponent({
  title: 'HOT GRILLS',
  description: 'NO RESERVATIONS, JUST ORDER ONLINE AT ANY MOMENT AND ENJOY',
  videoURL: heroVideo,
  btnList:
    [
      { text: 'Order Now', variant: 'red', onClick: function () { alert('FUCK YOU! we aint taking your order') } },
      { text: 'Contact Us', variant: 'red', onClick: function () { alert('FUCK YOU! we aint contacting you') } }
    ]
})

const offersView = createSection({
  classList: ['offers'],
  header: {
    title: 'LIMITED TIME OFFERS',
    subtitle: 'MOST WANTED'
  },
  propsList: getAllOffers(menu),
  component: offerCardComponent
})

offersView.appendChild(createElementFromHTML(`
  <div class="offers__bg"></div>
`))

const valuesView = createSection({
  classList: ['values'],
  propsList: [
    {
      title: 'SOMETHING FOR EVERYONE',
      description: "Our menu caters to all tastes, offering a wide range of dishes so everyone in your group finds something they love.",
      imgName: 'together.jpg'
    },
    {
      title: "QUALITY IS OUR PRIORITY",
      description: "We partner only with suppliers who share our commitment to fresh, high-quality ingredients.",
      imgName: 'fresh.jpg'
    },
    {
      title: 'WE SHARE OUR CULTURE',
      description: "Food is our way of sharing tradition and history. We honor our community's diverse roots to offer a taste of true heritage.",
      imgName: 'culture.jpg'
    }
  ],
  component: valuesItemComponent
})

const aboutView = createSection({
  classList: ['about'],
  header: {
    title: 'WANT TO KNOW MORE ABOUT US?'
  },
  propsList: [
    {
      text: 'About Us',
      variant: 'white',
      onClick: () => { alert('about us') }
    },
    {
      text: 'Contact Us',
      variant: 'white',
      onClick: () => { alert('contact us') }
    }
  ],
  component: buttonComponent
})

const promotionsView = createSection({
  classList: ['promotions'],
  propsList: [
    {
      title: "GET REWARDED WITH EVERY BITE!",
      description: "Create a HOT GRILLS account today to unlock an exclusive welcome gift! Earn points every time you order online, in the app, or in-store. The more you taste, the more you earn! Sign Up Today & Claim Your Welcome Gift.",
      imgName: 'sign-up-rewards.png',
      btnText: 'SIGN UP',
      btnOnClick: () => { alert('ACCOUNT CREATED') }
    },
    {
      title: "GIVE THE GIFT OF FLAVOR!",
      description: "Treat your friends, family, or coworkers to their favorite flame-grilled meals. Choose any amount from $10 to $200, personalize your message, and send instantly online or pick up a physical card in-store! Send a Gift Today!",
      imgName: 'giftcard.png',
      btnText: 'BUY GIFTCARD',
      btnOnClick: () => { alert('$200 GIFTCARD') }
    }
  ],
  component: promotionsItemComponent
})

const appView = appComponent({
  imgName: 'app.png',
  title: '<span class="app__title--accent">REWARDS</span> WITH EVERY BITE',
  tagline: 'SOMETHING FOR EVERYONE | QUALITY IS OUR PRIORITY | WE SHARE OUR CULTURE'
})

const ctaView = createSection({
  classList: ['cta'],
  header: {
    title: 'READY TO ORDER?',
  },
  propsList: [
    {
      text: 'ORDER NOW',
      variant: 'red',
      onClick: () => { alert('order') }
    },
    {
      text: 'SEE MENU',
      variant: 'red',
      onClick: () => { alert('menu') }
    }
  ],
  component: buttonComponent
})

export {
  heroView,
  offersView,
  valuesView,
  aboutView,
  promotionsView,
  appView,
  ctaView,
  imgContext,
  getImgFromContext
}
