import { Menu, MenuItem } from '../utils/menu.js'

const menu = new Menu('Menu')

menu.addItemList([
  new MenuItem('Double Meat Burguer', 'Sink your teeth into the ultimate comfort food experience with this double meat burger, featuring two juicy, seasoned beef patties seared to perfection and stacked high for maximum flavor in every bite. Melted cheddar cheese cascades down the sides, seamlessly binding the rich, savory layers together, while crisp lettuce, ripe tomatoes, and tangy pickles add a fresh, satisfying crunch. Wrapped in a warm, toasted brioche bun with a generous slather of signature sauce, this hearty creation is a delicious, indulgent feast designed to satisfy even the biggest appetites.', '../src/img/offer-burguer.png', 19.99, 20),
  new MenuItem('Fry Chicken', "Craving the ultimate crunch? Treat yourself to our golden, crispy fried chicken, marinated to perfection in a secret blend of herbs and spices and fried fresh to order. Every bite delivers an irresistible shatter of seasoned batter on the outside, giving way to juicy, tender chicken bursting with flavor on the inside. Whether you're fueling up for lunch or satisfying late-night cravings, this is comfort food done right—pure, savory goodness that hits the spot every single time. Order now and taste the crisp for yourself!", '../src/img/offer-chicken.jpg', 9.99, 65),
  new MenuItem('Ketchup Cup', "Meet the ultimate sidekick to your favorite bites: our rich, velvety ketchup, now packed in a perfectly portable cup made for effortless dipping. Crafted from sweet, ripe tomatoes and balanced with just the right touch of tangy spice, every dip delivers bold, classic flavor without the mess or hassle. Whether you are slathering it on hot golden fries, dunking tender chicken tenders, or taking it on the go, this little cup packs a mighty punch of taste. Rip off the lid, take a dip, and elevate every single bite!", '../src/img/offer-ketchup.jpg', 1.99, 35),

])

export { menu as default }
