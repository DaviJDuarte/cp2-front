// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8 mx-4">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
        <div className="flex flex-col gap-2 border w-[100%] lg:w-[24rem] p-2 rounded shadow-lg">
          <h1 className="font-bold">Título</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero, officia ut doloremque consectetur asperiores</p>
          <button className={'bg-blue-700 hover:brightness-80 cursor-pointer text-white p-2 rounded w-[60px] self-end'}>Botão</button>
        </div>
    </div>
  );
}