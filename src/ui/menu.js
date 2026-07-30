import buttonComponent from './button.js'

function menuItemComponent(menuItem) {
  const element = document.createElement('div')
  element.classList.add('menu-item')

  element.innerHTML = `
    <h2>${menuItem.title} (${menuItem.id})</h2>
    <img src="${menuItem.imgURL}" alt="${menuItem.title}">
    <p>${menuItem.description}</p>
    <p>$${menuItem.priceUSD}</p>
  `

  const orderBtn = buttonComponent('ADD TO THE ORDER', () => alert(`${menuItem.title} added to the order`))
  element.appendChild(orderBtn)

  return element
}

export function renderMenuView(menu) {
  const menuContainer = document.createElement('div')
  menuContainer.classList.add('menu')

  menu.items.forEach((item) => {
    const menuItem = menuItemComponent(item)
    menuContainer.appendChild(menuItem)
  })

  return menuContainer
}
