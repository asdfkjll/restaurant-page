function createElementFromHTML(HTMLstring = 'div') {
  //
  // CREATES AN ELEMENT FROM A STRING THAT CONTAINS HTML MARKUP, RETURNS THE ELEMENT
  // THE STRING IS NOT CHECKED THOUGH. CONTENT WITH VALID HTML SYNTAX IS ASSUMED TO BE PROVIDED BY THE USER
  // HTMLstring:	String
  //
  const element = document.createElement('div')
  element.innerHTML = HTMLstring.trim()
  return element.firstChild
}

function createSection({ classList, id, component, propsList, header }) {
  //
  // CREATES A VIEW FOR A COMPONENT TO RENDER IT, RETURNS A SECTION ELEMENT
  // classList: 	Array
  // id: 		String
  // propsList: 	Array
  // header: 		Object { title, subtitle, description }
  //
  const prefix = classList ? classList[0]
    : id ? id
      : 'section'
  const section = document.createElement('section')

  if (classList) classList.forEach(cls => section.classList.add(cls))
  if (id) section.setAttribute('id', id)

  if (header) {
    const sectionHeader = createElementFromHTML(`<div class="${prefix}__header"></div>`)
    const title = header.title
    const subtitle = header.subtitle
    const description = header.description

    if (title) {
      sectionHeader.appendChild(createElementFromHTML(`
	<h2 class="${prefix}__title">${title}</h2>
      `))
    }

    if (subtitle) {
      sectionHeader.appendChild(createElementFromHTML(`
	<h3 class="${prefix}__subtitle">${subtitle}</h3>
      `))
    }

    if (description) {
      sectionHeader.appendChild(createElementFromHTML(`
	<p class="${prefix}__description">${description}</p>
      `))
    }

    section.appendChild(sectionHeader)
  }

  if (component && propsList) {
    const sectionContent = createElementFromHTML(`<div class="${prefix}__content"></div>`)

    propsList.forEach((props) => {
      const componentItem = component(props)
      sectionContent.appendChild(componentItem)
    })

    section.appendChild(sectionContent)
  }

  console.log(`Section '${prefix}' created successfully.`)

  return section
}

export {
  createElementFromHTML,
  createSection
}
