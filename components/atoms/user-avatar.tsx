"use client";

import { UserRound } from "lucide-react";
import { UserAvatarProps } from "./user-avatar.types";
import { sizeConfig, variantConfig } from "./user-avatar.config";

export const UserAvatar = ({
  src,
  name,
  size = "md",
  showBorder = false,
  variant = "default",
  className = "",
  onClick,
}: UserAvatarProps) => {
  const sizeClasses = sizeConfig[size];
  const variantClasses = variantConfig[variant];

  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((word) => word.charAt(0))
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  const borderClass = showBorder ? `border-2 ${variantClasses.border}` : "";
  const clickableClass = onClick ? "cursor-pointer hover:scale-105" : "";
  const combinedClasses = `
    ${sizeClasses.container} 
    ${borderClass}
    rounded-full 
    overflow-hidden
    ${variantClasses.shadow}
    transition-all 
    duration-200 
    ${clickableClass}
    ${className}
  `.trim();

  const Component = onClick ? "button" : "div";
  const buttonProps = onClick
    ? {
        onClick,
        "aria-label": `${name}'s profile`,
        type: "button" as const,
      }
    : {};

  const getAvatarContent = () => {
    if (src) {
      return (
        <UserRound
          className={`${variantClasses.textColor} ${sizeClasses.icon}`}
        />
      );
    }

    if (name) {
      return (
        <span
          className={`${variantClasses.textColor} ${sizeClasses.text} font-semibold`}
        >
          {getInitials(name)}
        </span>
      );
    }

    return (
      <UserRound
        className={`${variantClasses.textColor} ${sizeClasses.icon}`}
      />
    );
  };

  return (
    <Component
      className={`
        ${combinedClasses}
        ${variantClasses.background} 
        flex 
        items-center 
        justify-center 
      `}
      {...buttonProps}
    >
      {getAvatarContent()}
    </Component>
  );
};
