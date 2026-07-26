import { Menu, MenuItem } from '../utils/menu.js'

const menu = new Menu('Menu')

menu.addItemList([
  new MenuItem('Pizza', 'Pepperoni and extra cheese!', '../src/img/pizza.png', 19.99, 30),
  new MenuItem('Pizza1', 'Pepperoni and extra cheese!', '../src/img/pizza.png', 19.99),
  new MenuItem('Pizza2', 'Pepperoni and extra cheese!', '../src/img/pizza.png', 19.99),
  new MenuItem('Pizza3', 'Pepperoni and extra cheese!', '../src/img/pizza.png', 19.99),
  new MenuItem('Pizza4', 'Pepperoni and extra cheese!', '../src/img/pizza.png', 19.99),
])

export { menu as default }
