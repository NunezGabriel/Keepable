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
                  <div class="colorSContainer">
                    <li class="selectColor blanco" style="background-color: #FFFFFF;" onclick = "setColorWhite(this)"></li>
                    <li class="selectColor rojo" style="background-color: #F28B82;" onclick = "setColorRed(this)"></li>
                    <li class="selectColor naranja" style="background-color: #FBBC04;" onclick = "setColorOrange(this)"></li>
                    <li class="selectColor amarillo" style="background-color: #FFF475;" onclick = "setColorYellow(this)"></li>
                    <li class="selectColor verde"  style="background-color: #CCFF90;" onclick = "setColorGreen(this)"></li>
                    <li class="selectColor acua" style="background-color: #A7FFEB;" onclick = "setColorAqua(this)"></li>
                    <li class="selectColor celeste" style="background-color: #CBF0F8;" onclick = "setColorSoftBlue(this)"></li>
                    <li class="selectColor azul" style="background-color: #AECBFA;" onclick = "setColorBlue(this)"></li>
                    <li class="selectColor morado" style="background-color: #D7AEFB;" onclick = "setColorPurple(this)"></li>
                    <li class="selectColor rosado" style="background-color: #FDCFE8;" onclick = "setColorPink(this)"></li>
                  </div>
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