export interface FooterProps {}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterLayoutProps extends FooterProps {
  columns: FooterColumn[]
}
