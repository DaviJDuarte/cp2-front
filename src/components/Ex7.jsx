// Ex7 — Dashboard simples com Grid (2 pontos)

// Considerando o layout abaixo, estilize com Tailwind:

// - O cabeçalho ocupa largura total (com título e botão “Logout” alinhados em extremidades).
// - O conteúdo é dividido em 2 colunas no desktop e 1 coluna no mobile.
// - Cada card deve ter borda, sombra e padding

export default function Ex7() {
  return (
    <div className="my-8 mx-4">
        <h1 className="text-2xl font-bold mb-4">Ex7 - Dashboard Simples</h1>
        <header className="flex justify-between w-full border p-1">
          <h1>Meu Dashboard</h1>
          <button>Sair</button>
        </header>
      <main className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-2 mt-2">
        <div className="border p-1 shadow shadow-black size-[100px]">Card 1</div>
        <div className="border p-1 shadow shadow-black size-[100px]">Card 2</div>
        <div className="border p-1 shadow shadow-black size-[100px]">Card 3</div>
        <div className="border p-1 shadow shadow-black size-[100px]">Card 4</div>

      </main>
    </div>
  );
}
