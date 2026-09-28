export interface HeaderProps {}

export interface NavLink {
  href: string
  label: string
}

export interface HeaderLayoutProps extends HeaderProps {
  navLinks: NavLink[]
}
