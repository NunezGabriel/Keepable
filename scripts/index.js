const Main = DOMHandler(".inputContainer");
const inputWhite = CreateInput();
Main.load(inputWhite.render());

const formInputs = document.querySelector(".inputBox");
const formBox = document.querySelector(".inputActions");
const notesContainer = document.querySelector(".notesContainer");
(titleTag = formInputs.querySelector("input")),
  (descTag = formInputs.querySelector("textarea")),
  (addBtn = formBox.querySelector("button"));

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

function showNotes() {
  document.querySelectorAll(".card").forEach((note) => note.remove());
  notes.forEach((note) => {
    let litNote = `
      <div class="card">
        <h2>${note.title}</h2>
        <p>${note.description}</p>
        <div class="actionsNotes">
            <div class="iconPaletArea">
              <ul  class ='colorS hidden'>
                <li class="selectColor blanco"></li>
                <li class="selectColor rojo"></li>
                <li class="selectColor naranja"></li>
                <li class="selectColor amarillo"></li>
                <li class="selectColor verde" ></li>
                <li class="selectColor acua"></li>
                <li class="selectColor celeste"></li>
                <li class="selectColor azul"></li>
                <li class="selectColor morado"></li>
                <li class="selectColor rosado"></li>
              </ul>
              <img onclick="showMenu(this)" src="Assests/images/palet-icon.svg" alt="">
            </div>
            <div class="iconPaletArea">
              <img src="Assests/images/trash.svg" alt="">
            </div>
        </div>
      </div>
    `;
    notesContainer.insertAdjacentHTML("afterbegin", litNote);
  });
}
showNotes();

function showMenu(elem) {
  elem.parentElement.children[0].classList.add("show");
  document.addEventListener("click", (e) => {});
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let noteTitle = titleTag.value,
    noteDesc = descTag.value;

  if (noteTitle && noteDesc) {
    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
    };
    notes.push(noteInfo);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  showNotes();
});
