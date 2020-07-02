  // console.log(document)
  const myButton = document.getElementById('myButton')

  myButton.addEventListener('click', function () {
    alert('ada yang nge klik event mas')
  })

  const myInput = document.getElementById('myInput')

  // Mengambil parent dari sebuah element
  // console.log(myButton.parentElement)


  myInput.addEventListener('keyup', function (event) {
    console.log('inputnya berubah', event)

    // // Mendapatkan key yang di pencet
    console.log('key yang dipencet adalah', event.key)
    // // Mendapatkan value dari input nya
    console.log('value nya adlaah', event.target.value)
  })

  const parent = document.getElementById('parent')

  // console.log(parent.children);

  const id = document.getElementById('myHeading')
  // console.log(id);

  // id.innerText = '<span>Belajar DOM</span>'
  // id.innerHTML = '<span>Belajar DOM</span>'

  // id.className = 'description'
  // id.[namaAtrribute] = ''
  id.style.color = 'blue'
  // background-color
  // backgroundColor
  id.style.backgroundColor = 'magenta'


  const pElement = document.getElementsByTagName('p')

  for (let i = 0; i < pElement.length; i++) {
    pElement[i].style.color = 'blueviolet'
  }

  const descriptionClass = document.getElementsByClassName('description')

  // descriptionClass = 1
  // console.log(descriptionClass)


  // Prompt
  const name = prompt('Masukan nama')
  console.log(name)
  // Selamat datang { name}

  id.innerText = `Selamat datang ${name}`

