function createElementFromHTML(HTMLstring) {
  const div = document.createElement('div')
  div.innerHTML = HTMLstring.trim()
  return div.firstChild
}

function btnComponent({ text, variant, onClick }) {
  const btn = createElementFromHTML(`
    <button class="btn btn-${variant}">${text}</button>
  `)
  if(onClick) btn.addEventListener('click', onClick) 
  return btn
}

function sectionComponent({ props, component, id, classList, title, description }) {
  const section = document.createElement('div')

  if(id && title && description) {
    const sectionTitle = createElementFromHTML(`
      <div class="${id}-header">
	<h1>${title}<h1>
	<p>${description}<p>
      </div>
    `)
    section.appendChild(sectionTitle)
  }

  if(props && component) {
    props.forEach((item) => {
      section.appendChild(component(item))
    })
  }

  if(id) section.setAttribute('id', id)
  
  if(classList) {
    classList.forEach((item) => {
      section.classList.add(item)
    })
  }

  return section 
}

export {
  btnComponent,
  sectionComponent,
  createElementFromHTML,
}
