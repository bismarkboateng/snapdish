export interface SidebarMenuItemProps {
  item: {
    title: string;
    route: string;
    icon: React.ComponentType<{ className?: string }>;
  };
  pathname: string;
}
