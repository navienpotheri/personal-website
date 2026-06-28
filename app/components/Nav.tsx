import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/projects', label: 'Projects' },
  { href: '/books', label: 'Books' }, // <-- Insert this line right here
  { href: '/now', label: 'Now' },
]
export default function Nav() {
  return (
    <nav className="mb-20 flex items-center justify-between border-b border-neutral-200 pb-5 text-sm">
      <Link href="/" className="font-medium no-underline">Navien Potheri</Link>
      <div className="flex gap-4 text-neutral-600">
        {links.slice(1).map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-black">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
