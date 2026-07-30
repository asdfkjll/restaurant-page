import { createElementFromHTML } from './ui.js'
import './button.css'

export default function({ text, variant, onClick }) {
  const btn = createElementFromHTML(`
    <button class="btn">${text}</button>
  `)
  if(onClick) btn.addEventListener('click', onClick) 
  if(variant) btn.classList.add(`btn--${variant}`) 

  return btn
}
