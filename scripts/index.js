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


showNotes();

function showPalet(elem) {
  elem.parentElement.children[0].classList.toggle("show");
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
