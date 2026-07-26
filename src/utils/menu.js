class Menu {
  constructor(title) {
    this.title = title
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  addItemList(itemList) {
    itemList.forEach((item) => {
      this.addItem(item)
    })
  }

  removeItem(item) {
    const index = this.items.indexOf(item)
    this.items.splice(index, 1)
  }

  getItem(title) {
    return this.items.filter((item) => {
      if(item.title === title) return true
    })[0]
  }
}

class MenuItem {
  static #itemNumber = 0 

  constructor(title, description, imgURL, priceUSD, discount = null) {
    this.id = ++MenuItem.#itemNumber
    this.title = title
    this.description = description
    this.imgURL = imgURL
    this.priceUSD = priceUSD
    this.discount = discount
  }

  get finalPriceUSD() {
    return this.priceUSD * (1 - (this.discount / 100))
  }
}

export { Menu, MenuItem }
