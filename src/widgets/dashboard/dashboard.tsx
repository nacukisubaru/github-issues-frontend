import { FC, ReactNode } from "react";
import { Menu } from "shared/ui/menu";

interface DasboardProps {
  children: ReactNode;
}

export const Dashboard: FC<DasboardProps> = function Dashboard({
  children
}) {
  const menuItems = [
    { id: 1, label: 'Issues', path: '/issues' },
    { id: 2, label: 'Logs', path: '/logs' },
  ];

  return (
    <>
      {children}
      <Menu 
        menuItems={menuItems}
      />
    </>
  );
}