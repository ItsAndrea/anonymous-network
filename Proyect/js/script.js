agregar_evento()

function agregar_evento() {
    let array_btn_arriba = document.querySelectorAll(
        "section article .estadisticas .contador .farriba"
      );
      
      array_btn_arriba.forEach((elem) => {
        elem.addEventListener("click", () => {
          let padre = elem.parentNode;
          let pHTML = padre.children[1];
          pHTML.innerHTML = parseInt(pHTML.textContent) + 1;
        });
      });
      
      let array_btn_abajo = document.querySelectorAll(
        "section article .estadisticas .contador .fabajo"
      );
      
      array_btn_abajo.forEach((elem) => {
        elem.addEventListener("click", () => {
          let padre = elem.parentNode;
          let pHTML = padre.children[1];
          pHTML.innerHTML = parseInt(pHTML.textContent) - 1;
        });
      });
}

let btn_publicar1 = document.getElementById("agregar");

btn_publicar1.addEventListener("click", () => {
  let div_formulario = document.getElementById("formulario");

  if (div_formulario.hasAttribute('hidden')) {
    div_formulario.removeAttribute("hidden");
  } else {
    div_formulario.setAttribute("hidden", 'true');
  }

});

let btn_publicar2 = document.getElementById('publicar2')

btn_publicar2.addEventListener('click', () => {
    let contenido_titulo = document.getElementById('titulo').value
    let contenido_autor = document.getElementById('autor').value
    let contenido_tag = document.getElementById('tag').value

    let nodo_article = document.createElement('article');

    let plantilla = `<div class="post">
      <div class="imagen">
        <img src="img/2_-13.jpg" alt="" />
      </div>
      <div class="contenido">
        <div class="titulo-autor">
          <h1>${contenido_titulo}</h1>
          <p>by <a href="#">${contenido_autor}</a></p>
        </div>
        <div class="tag-tiempo">
          <div class="tag">${contenido_tag}</div>
          <div class="tiempo">
            <p>Hace <span>20</span> min</p>
          </div>
        </div>
      </div>
    </div>
    <div class="estadisticas">
      <div class="contador">
        <span class="farriba">&#xea1c</span>
        <p>9</p>
        <span class="fabajo">&#xea1c</span>
      </div>
      <div class="puntuacion">
        <p>10</p>
        <span class="estrella">&#xe9d8</span>
      </div>
    </div>`

    nodo_article.innerHTML = plantilla

  let sectionHTML = document.querySelector('section')
  sectionHTML.appendChild(nodo_article)
  agregar_evento()
})
