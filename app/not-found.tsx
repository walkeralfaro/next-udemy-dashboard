import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Página no encontrada</h1>
      <Link href='/dashboard/counter'>Retornar</Link>
    </div>
  )
}     