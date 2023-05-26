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

}

const CreateCard = () =>{

}

const addListeners = () =>{
    
}
