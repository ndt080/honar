import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Button } from '@shared/ui/lib/button.tsx';
import { useTranslation } from 'react-i18next';

export interface BlockHeaderProps {
  id?: string;
  title: string;
  viewAll?: boolean;
  onClick?: () => void;
}

function BlockHeader({ id, title, viewAll, onClick }: BlockHeaderProps) {
  const { t } = useTranslation();
  return (
    <div id={id} className="flex justify-between items-end gap-2.5 w-full select-none">
      <div className="font-black text-xl md:text-3xl uppercase whitespace-nowrap">{title}</div>

      <div className="invisible md:visible w-full h-[1px] bg-primary/10"></div>

      {viewAll ? (
        <Button
          variant="outline"
          className="whitespace-nowrap uppercase flex items-center gap-1 rounded-2xl text-[10px] md:text-xs md:w-fit h-7 md:h-9 px-2 md:px-4 md:py-1.5"
          onClick={onClick}
        >
          <span>{t('_.viewAll')}</span>
          <ArrowUpRightIcon className="w-[16px]" />
        </Button>
      ) : null}
    </div>
  );
}

export default BlockHeader;