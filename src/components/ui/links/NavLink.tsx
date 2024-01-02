import Link from 'next/link'

export function NavLink({href, children, className, ...props}: any) {
  return (
    <Link href={href} className={`tracking-wide text-slate-100 dark:text-slate-900 px-2 py-1 rounded-full text-lg
    hover:ring-2 hover:ring-blue-800 hover:text-blue-800 focus:outline-none  
    transition-all duration-200 transform ease-in-out delay-100 hover:scale-110 ${className}`}
    {...props}
    >
        {children}
    </Link>
  )
}
