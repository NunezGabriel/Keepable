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
            <input class = 'title' id = 'title' name = 'title' type="text" placeholder="Title">
            <input class = 'bodyText' id = 'bodyText' name = 'bodyText' type="textarea" placeholder="Take a note...">
            <div class = 'inputActions'>
                <img src="Assests/images/palet-icon.svg">
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
    const input = document.querySelector('.inputBox')
    input.addEventListener('click',()=>{
        
    })
}


const CreateCard = () => {

};

const addListeners = () => {};
