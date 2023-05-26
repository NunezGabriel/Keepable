const DOMHandler = (parentSelect) => {
  const parent = document.querySelector(parentSelect);
  if (!parent) throw new Error("parent not found");

  return {
    load(module) {
      parent.innerHTML = module;
    },
  };
};

const CreateTitle = (title) =>{
    const temmplate = `<h1>${title}</h1>`

    return{
        render(){
            return temmplate
        }
    }
}

const CreateInput = () =>{
    const temmplate = 
    `
        <section class = 'inputBox'>
            <input type="text" placeholder="Title">
            <input type="textarea" placeholder="Take a note...">
            <div class = 'inputActions'>
                <img src="Assests/images/palet-icon.svg">
                <p style = 'color: black;'>Keep it!</p>
            </div>
        </section>
    `
    return{
        render(){
            return temmplate
        }
    }
}

const CreateCard = () =>{
    
}

const addListeners = () =>{
    
}
