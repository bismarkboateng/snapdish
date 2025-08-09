import { Donation } from "./my-donations-mock";

export interface DonationCardProps {
  donation: Donation;
}

export interface SettingsMenuItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
}
