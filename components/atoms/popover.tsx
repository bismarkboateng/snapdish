"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PopoverProps {
  children: React.ReactNode;
}

interface PopoverTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
}

const PopoverContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

const Popover: React.FC<PopoverProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const contextValue = React.useMemo(() => ({
    isOpen,
    setIsOpen,
  }), [isOpen]);

  return (
    <PopoverContext.Provider value={contextValue}>
      <div className="relative">
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children, asChild }) => {
  const { isOpen, setIsOpen } = React.useContext(PopoverContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
    } as React.HTMLAttributes<HTMLElement>);
  }

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

const PopoverContent: React.FC<PopoverContentProps> = ({ 
  children, 
  className, 
  align = "center" 
}) => {
  const { isOpen, setIsOpen } = React.useContext(PopoverContext);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={contentRef}
      className={cn(
        "absolute top-full z-50 mt-1 rounded-md border bg-popover text-popover-foreground shadow-md",
        align === "start" && "left-0",
        align === "center" && "left-1/2 transform -translate-x-1/2",
        align === "end" && "right-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Popover, PopoverTrigger, PopoverContent };
