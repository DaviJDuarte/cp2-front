// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:


// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
        <div className="h-[20rem] grid grid-rows-[80px_1fr_80px]">
          <header className="flex justify-center items-center bg-blue-400 max-h-[80px]">Header</header>
          <main className="flex justify-center bg-pink-400 row-span-1">Main</main>
          <footer className="flex justify-center items-center bg-red-400 max-h-[80px]">Footer</footer>
        </div>
    </div>
  );
}
