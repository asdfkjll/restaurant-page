function getCategory(menu, categoryTitle) {
  if (!menu) console.warn('getCategory func: menu parameter is missing')
  if (!categoryTitle) console.warn('getCategory func: categoryTitle parameter is missing')

  const category = menu.find(item => {
    return item.category === categoryTitle
  })
  return category
}

function getItem(categoryObj, itemTitle) {
  if (!categoryObj) console.warn('getItem func: categoryObj parameter is missing')
  if (!itemTitle) console.warn('getItem func: itemTitle parameter is missing')

  return categoryObj.items.find(element => element.title === itemTitle)
}

function getOffersCategory(categoryObj) {
  if (!categoryObj) console.warn('getOffersCategory func: categoryObj parameter is missing')

  const offers = categoryObj.items.filter(item => {
    return item.offer
  })

  return offers
}

function getAllOffers(menu) {
  if (!menu) console.warn('getOffersCategory func: categoryObj parameter is missing')

  const offers = []

  menu.forEach(category => {
    getOffersCategory(category).forEach(element => {
      offers.push(element)
    })
  })

  return offers
}

export {
  getCategory,
  getItem,
  getOffersCategory,
  getAllOffers
}
