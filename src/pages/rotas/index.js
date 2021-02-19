import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Index da rota</h1>
      <Link href="/rotas/products">
        <a>Alterar para produtos sem renderizar o HTML novamente</a>
      </Link>
    </div>
  );
}