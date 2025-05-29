import type { ReactNode, ElementType } from 'react';

interface TabsProps {
  children: ReactNode;
  buttons: ReactNode;
  ButtonsContainer?: ElementType;
}

export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }: TabsProps) {
  return (
    <>
      <ButtonsContainer className="flex items-center justify-center pt-4 pb-4 md:pb-8 xl:pb-16 gap-x-8 md:gap-x-12 xl:gap-x-16">
        {buttons}
      </ButtonsContainer>
      <div>{children}</div>
    </>
  );
}
