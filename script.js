const form = document.querySelector("#post-form");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");
const tituloRenderizar = document.querySelector("#renderizador-titulo");
const conteudoRenderizar = document.querySelector("#renderizador-conteudo");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const result = await response.json();

    // Render the post returned from the API
    tituloRenderizar.innerHTML = result.title;
    conteudoRenderizar.innerHTML = result.body;
  } catch (error) {
    tituloRenderizar.innerHTML = "Falha ao enviar o post.";
    conteudoRenderizar.innerHTML = "Tente novamente em instantes.";
  }
});
