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
        <section class="inputBox">
            <input class="title" type="text" placeholder="Title">
            <textarea class="bodyText" type="textarea" placeholder="Take a note..."></textarea>
            <div class="inputActions">
                <div class="iconPaletArea">
                    <img src="Assests/images/palet-icon.svg">
                </div>
                <button class="keepit" style="color: black;">Kepp it!</button>
            </div>
        </section>
    `;
  return {
    render() {
      return temmplate;
    },
  };
};