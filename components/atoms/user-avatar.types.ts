export interface UserAvatarProps {
  src?: string | null;
  alt?: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  showBorder?: boolean;
  variant?: "default" | "gradient" | "minimal" | "success" | "premium";
  className?: string;
  onClick?: () => void;
}

export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarVariant =
  | "default"
  | "gradient"
  | "minimal"
  | "success"
  | "premium";
