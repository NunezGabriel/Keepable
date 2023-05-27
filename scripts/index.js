const Main = DOMHandler(".inputContainer");
const inputWhite = CreateInput();
Main.load(inputWhite.render());

const formInputs = document.querySelector(".inputBox");
const formBox = document.querySelector(".inputActions");
const notesContainer = document.querySelector(".notesContainer");
const trastView = document.querySelector(".trash");
const notesView = document.querySelector(".notes");

(titleTag = formInputs.querySelector("input")),
  (descTag = formInputs.querySelector("textarea")),
  (addBtn = formBox.querySelector("button"));

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
const trash = JSON.parse(localStorage.getItem("trash") || "[]");

function showNotes() {
  document.querySelectorAll(".card").forEach((note) => note.remove());
  const inputNote = document.querySelector(".inputContainer");
  inputNote.classList.remove("hidden");
  notes.forEach((note, index) => {
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
              <img onclick="showPalet(this)" src="Assests/images/palet-icon.svg" alt="">
            </div>
            <div class="iconPaletArea">
              <img onclick="trashNote(${index})" src="Assests/images/trash.svg" alt="">
            </div>
        </div>
      </div>
    `;
    notesContainer.insertAdjacentHTML("afterbegin", litNote);
  });
}
showNotes();

function showPalet(elem) {
  elem.parentElement.children[0].classList.add("show");
}

function trashNote(noteId) {
  var deletedNote = notes.splice(noteId, 1)[0];

  trash.push(deletedNote);

  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("trash", JSON.stringify(trash));
  showNotes();
}

function deleteNote(trashId) {
  trash.splice(trashId, 1);
  localStorage.setItem("trash", JSON.stringify(trash));
  showTrash();
}

function restoreNote(trashId) {
  var restoreNote = trash.splice(trashId, 1)[0];

  notes.push(restoreNote);
  localStorage.setItem("trash", JSON.stringify(trash));
  localStorage.setItem("notes", JSON.stringify(notes));
  showTrash();
}

function showTrash() {
  document.querySelectorAll(".card").forEach((trash) => trash.remove());
  const inputNote = document.querySelector(".inputContainer");
  inputNote.classList.add("hidden");
  trash.forEach((trash, index) => {
    let litNote = `
      <div class="card">
        <h2>${trash.title}</h2>
        <p>${trash.description}</p>
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
              <img onclick="deleteNote(${index})" src="Assests/images/trash.svg" alt="">
            </div>
            <div class="iconPaletArea">
              <img onclick="restoreNote(${index})"  src="Assests/images/restore-icon.svg" alt="">
            </div>
        </div>
      </div>
    `;
    notesContainer.insertAdjacentHTML("afterbegin", litNote);
  });
}

trastView.addEventListener("click", (e) => {
  showTrash();
});

notesView.addEventListener("click", (e) => {
  document.querySelectorAll(".card").forEach((note) => note.remove());
  showNotes();
});

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
