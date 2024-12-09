// import Link from 'next/link'
// import { SignInButton } from './sign-in-button'
// import { UserAccountNav } from './user-account-nav'
// import { getServerSession } from 'next-auth/next'

// export async function Header() {
//   const session = await getServerSession()

//   return (
//     <header className="bg-white shadow-sm">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
//         <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
//           <div className="flex items-center">
//             <Link href="/" className="text-2xl font-bold text-indigo-600">
//               Logo
//             </Link>
//           </div>
//           <div className="ml-10 space-x-4">
//             {session ? (
//               <UserAccountNav user={session.user} />
//             ) : (
//               <SignInButton />
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }


import Link from 'next/link'
import { SignInButton } from './sign-in-button'
import { UserAccountNav } from './user-account-nav'
import { LogoutButton } from './logout-button'
import { getServerSession } from 'next-auth/next'

export async function Header() {
  const session = await getServerSession()

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              Logo
            </Link>
          </div>
          <div className="ml-10 space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <UserAccountNav user={session.user} />
                <LogoutButton />
              </div>
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}