import { Link } from 'react-router-dom'

export default function NavbarLogo() {
  return (
    <Link to="/" className="flex shrink-0" aria-label="Tejas home">
      <img
        src="/logotype.svg"
        className="h-8 w-20 object-contain"
        alt="Tejas"
      />
    </Link>
  )
}
