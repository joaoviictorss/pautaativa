export interface MobileShowcaseProps {}

export interface MobileListItem {
  title: string
  description: string
}

export interface MobileShowcaseLayoutProps extends MobileShowcaseProps {
  items: MobileListItem[]
}
