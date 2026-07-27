import { btnComponent, createElementFromHTML, sectionComponent } from './ui.js' 

function heroComponent({ title, description, btnList = [] }) {
  const hero = document.createElement('div')
  const heroContent = document.createElement('div')
  const heroContentBtn = document.createElement('div')

  hero.classList.add('hero')
  heroContent.classList.add('hero-content')
  heroContentBtn.classList.add('hero-content__btn')
  hero.innerHTML = `
    <video autoplay muted loop playsinline class="hero-video">
      <source src="../src/vids/hero.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="hero-overlay"></div>
  `
  heroContent.innerHTML = `
    <h1>${title}</h1>
    <p>${description}</p>
  `
  btnList.forEach((item) => {
    const btn = btnComponent({ 
      text: item.text, 
      variant: item.variant,
      onClick: item.onClick 
    }) 
    heroContentBtn.appendChild(btn)
  })

  heroContent.appendChild(heroContentBtn)
  hero.appendChild(heroContent)

  return hero
}

function offersItemComponent(data) {
  const offerItem = createElementFromHTML(`
    <div class="offers-item">
      <div class="offers-item__img-container">
        <img class="offers-item__img" src="${data.imgURL}" alt="${data.title}">
      </div>
    </div>
  `)

  const offerContent = createElementFromHTML(`
    <div class="offers-item__content">
      <h3 class="offers-item__title">${data.title}</h3>
      <p class="offers-item__discount">${data.discount}% OFF</p>
    </div>
  `)

  const btn = btnComponent({
    text: 'SEE MORE',
    variant: 'yellow',
    onClick: () => { alert('SEE MORE') }
  })

  offerContent.appendChild(btn)
  offerItem.appendChild(offerContent)

  return offerItem
}

function renderOfferView(data) {
  const section = sectionComponent({ 
    props: data, 
    id: 'offers', 
    classList: ['section'],
    title: 'LIMITED TIME OFFERS',
    description: 'MOST WANTED ',
    component: offersItemComponent
  })
  return section 
}

function valuesItemComponent({ title, description, imgURL }) {
  return createElementFromHTML(`
    <div class="values-item">
      <div class="values-item__text">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
      
      <div class="values-item__img-container">
        <img class="values-item__img" src="${imgURL}" alt="${title}">
      </div>
    </div>
  `)
}

function renderValuesView(data) {
  const section = sectionComponent({
    props: data, 
    id: 'values', 
    classList: ['section'],
    component: valuesItemComponent
  })
  return section 
}

export { 
  heroComponent,
  renderValuesView,
  renderOfferView,
}
