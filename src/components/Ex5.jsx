// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8 mx-4">
        <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
        <div className="border border-gray-400 flex justify-center">
          <ul className="flex flex-col lg:flex-row gap-3">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Sobre</a></li>
          </ul>
        </div>
    </div>
  );
}