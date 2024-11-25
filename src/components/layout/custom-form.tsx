import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function CustomForm({ children }: Props) {
  return (
    <div>
      <div className="flex w-full flex-col space-y-1.5 sm:flex-row sm:items-center sm:space-x-1.5 sm:space-y-0">
        {children}
      </div>
    </div>
  );
}
