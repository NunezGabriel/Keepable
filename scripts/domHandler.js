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

/*
const actionEvent = () => {
  const palets = document.querySelector(".iconPaletArea");
  const colorSelector = document.querySelector(".colorS");
  let activador = false;

  const clickHandler = () => {
    if (!activador) {
      colorSelector.classList.toggle("show");
      colorSelector.classList.toggle("hidden");
      activador = true;
    } else {
      colorSelector.classList.toggle("hidden");
      colorSelector.classList.toggle("show");
      activador = false;
    }
  };
  palets.addEventListener("click", clickHandler);
};

const keepitAction = () => {
  const keepit = document.querySelector(".keepit");
  const title = document.querySelector(".title");
  const bodyText = document.querySelector(".bodyText");
  const notesContainer = document.querySelector(".notesContainer");
  keepit.addEventListener("click", () => {
    let CreateCard = document.createElement("DIV");
    CreateCard.setAttribute("class", "card");
    CreateCard.innerHTML = `
                <h2>${title.value}</h2>
                <p>${bodyText.value}</p>
                <div class="actionsNotes">
                    <div class="iconPaletArea iPA">
                        <div class ='colorS hidden'>
                            <div class="selectColor blanco"></div>
                            <div class="selectColor rojo"></div>
                            <div class="selectColor naranja"></div>
                            <div class="selectColor amarillo"></div>
                            <div class="selectColor verde" ></div>
                            <div class="selectColor acua"></div>
                            <div class="selectColor celeste"></div>
                            <div class="selectColor azul"></div>
                            <div class="selectColor morado"></div>
                            <div class="selectColor rosado"></div>
                        </div>
                        <img src="Assests/images/palet-icon.svg" alt="">
                    </div>
                    <div class="iconPaletArea">
                        <img src="Assests/images/trash.svg" alt="">
                    </div>
                </div>
        `;
    notesContainer.appendChild(CreateCard);

    // Volver a llamar a actionEvent para agregar event listeners a los nuevos elementos
    actionEvent();
  });
};

const CreateCard = () => {};

const addListeners = () => {};
*/
