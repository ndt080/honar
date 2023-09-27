import { PropsWithChildren } from 'react';

interface HomeCardContentProps {
  title?: string;
  description?: string;
}

function HomeCardContent({
  title = '',
  description = '',
  children,
}: PropsWithChildren<HomeCardContentProps>) {
  return (
    <div className="">
      <div className="flex flex-col gap-1 md:gap-2.5 py-5 max-w-2xl">
        <h1
          className="text-2xl md:text-4xl font-black"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div
          className="text-base md:text-xl font-normal"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      {children}
    </div>
  );
}

export default HomeCardContent;