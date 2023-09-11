import { clsx } from 'clsx';

export interface NavbarButtonProps {
  open?: boolean;
  onClick?: () => void;
}

function NavbarButton({ open, onClick }: NavbarButtonProps) {
  const pathClass = 'bg-black h-[2px] w-7 transform transition-all duration-300';
  const t500Class = 'transform transition-all duration-500';
  const crossClass = 'absolute bg-black h-[2px] w-5 delay-300';

  return (
    <div
      className="flex justify-center items-center w-[30px] h-[30px] cursor-pointer"
      onClick={onClick}
    >
      <button className="relative group">
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={clsx(pathClass, 'origin-left delay-100', open && 'translate-y-6')} />
            <div className={clsx(pathClass, 'rounded delay-75', open && 'translate-y-6')} />
            <div className={clsx(pathClass, 'origin-left', open && 'translate-y-6')} />

            <div
              className={clsx(
                t500Class,
                'absolute items-center justify-between top-2.5 -translate-x-10 flex w-0',
                open && '!translate-x-0 !w-12',
              )}
            >
              <div className={clsx(crossClass, t500Class, open ? 'rotate-45' : 'rotate-0')} />
              <div className={clsx(crossClass, t500Class, open ? '-rotate-45' : '-rotate-0')} />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default NavbarButton;