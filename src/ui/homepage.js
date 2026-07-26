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
  return createElementFromHTML(`
    <div class="offers-item">
      <div class="offers-item__img-container">
	<img class="offers-item__img" src="${data.imgURL}" alt="${data.title}">
      </div>
      <div class="offers-item__content">
	<h3 class="offers-item__content--title">${data.title}</h3>
	<p class="offers-item__content--discount">${data.discount}%</p>
      </div>
    </div>
  `)
}

function renderOfferView(data) {
  const section = sectionComponent({ 
    props: data, 
    component: offersItemComponent, 
    id: 'offers', 
    classList: ['section'],
    title: 'MOST WANTED',
    description: 'LIMITED TIME OFFERS'
  })
  return section 
}

function valuesItemComponent(data) {
  return createElementFromHTML(`
    <div class="values-item">
      <h2>${data.title}</h2>
      <p>${data.description}</p>
    </div>
  `)
}

function renderValuesView(data) {
  const section = sectionComponent({
    props: data, 
    component: valuesItemComponent, 
    id: 'values', 
    classList: ['section']
  })
  return section 
}

export { 
  heroComponent,
  renderValuesView,
  renderOfferView,
}
