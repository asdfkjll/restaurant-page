import './menu.css'
import { createElementFromHTML, createSection } from './ui.js'
import buttonComponent from './button.js'
import menu from '../services/menu-service.json'
import { getCategory } from '../services/menu-utils.js'
import { imgContext, getImgFromContext } from './homepage.js'

function menuItemComponent(item) {
  const itemElement = createElementFromHTML(`
    <div class="menu-item">
      <div class="menu-item__img-wrapper">
        <img class="menu-item__img" src="${getImgFromContext(item.imgName, imgContext)}" alt="${item.title}">
      </div>

      <div class="menu-item__content">
        <div class="menu-item__text-wrapper">
          <h4 class="menu-item__title">${item.title}</h4>
          <span class="menu-item__price">$${item.priceUSD}</span>
        </div>
      </div>
    </div>
  `)

  if (item.offer) {
    const offerTag = createElementFromHTML(`
      <span class="menu-item__offer-tag">${item.offer.discount}% OFF!</span>  
    `)
    itemElement.appendChild(offerTag)
  }

  itemElement.querySelector('.menu-item__content').appendChild(
    buttonComponent({
      text: 'ORDER',
      variant: 'red',
      onClick: () => alert(`${item.title}, added to the order!`)
    })
  )

  return itemElement
}

const menuView = createSection({
  classList: ['menu'],
  header: {
    title: 'Menu'
  },
  propsList: getCategory(menu, 'burgers').items,
  component: menuItemComponent
})

export {
  menuView
}

