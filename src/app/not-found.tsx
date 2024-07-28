import Link from "next/link"

function NotFound() {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, но запрашиваемая вами страница не существует.</p>
      <Link
        href="/"
        className="mt-4 rounded-xl bg-teal-700 px-4 py-2 duration-75 hover:bg-teal-500"
      >
        На главную 🏠
      </Link>
    </div>
  )
}

NotFound.theme = "dark"

export default NotFound
