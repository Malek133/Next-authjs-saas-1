import { getServerSession } from 'next-auth/next'

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to our App</h1>
      {session ? (
        <p className="text-xl">You are signed in as {session.user?.name}</p>
      ) : (
        <p className="text-xl">Please sign in to access the app</p>
      )}
    </main>
  )
}

