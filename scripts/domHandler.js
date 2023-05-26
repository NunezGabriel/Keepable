const DOMHandler = (parentSelect) => {
  const parent = document.querySelector(parentSelect);
  if (!parent) throw new Error("parent not found");

  return {
    load(module) {
      parent.innerHTML = module;
    },
  };
};

const CreateTitle = (title) => {
  const temmplate = `<h1>${title}</h1>`;

  return {
    render() {
      return temmplate;
    },
  };
};

const CreateInput = () => {
  const temmplate = `
        <section class = 'inputBox'>
            <input class = 'title' type="text" placeholder="Title">
            <input class = 'bodyText' type="textarea" placeholder="Take a note...">
            <div class = 'inputActions'>
                <div class = 'iconPaletArea'>
                    <img src="Assests/images/palet-icon.svg">
                </div>
                <p class= 'keepit' style = 'color: black;'>Keep it!</p>
            </div>
        </section>
    `;
  return {
    render() {
      return temmplate;
    },
  };
};

const keepitAction = () =>{
    const keepit = document.querySelector('.keepit')
    const title = document.querySelector('.title')
    const bodyText = document.querySelector('.bodyText')
    const notesContainer = document.querySelector('.notesContainer')
    keepit.addEventListener('click',()=>{
        let CreateCard = document.createElement('DIV')
        CreateCard.setAttribute('class', 'card')
        CreateCard.innerHTML = 
        `
                <h2>${title.value}</h2>
                <p>${bodyText.value}</p>
                <div class = 'actionsNotes'>
                    <div class="iconPaletArea iPA">
                        <img src="Assests/images/palet-icon.svg" alt="">
                    </div>
                    <div class="iconPaletArea">
                        <img src="Assests/images/trash.svg" alt="">
                    </div>
                </div>
        `
        notesContainer.appendChild(CreateCard)
    })
}

const actionEvent = () =>{
    const palet = document.querySelector('.iconPaletArea')
    let activador = false
    palet.addEventListener('click', ()=>{
        if(!activador){
            console.log('hola')
            activador = true
        }
        else{
            console.log('adios')
            activador = false
        }
    })
}


const CreateCard = () => {

};

const addListeners = () => {};
