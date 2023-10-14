import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { RoutePath } from '@processes/navigation';
import { Button } from '@shared/ui/lib/button.tsx';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export interface BlockHeaderProps {
  title: string;
  viewAll?: boolean;
}

function BlockHeader({ title, viewAll }: BlockHeaderProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-end gap-2.5 w-full select-none">
      <div className="font-black text-2xl md:text-3xl uppercase whitespace-nowrap">{title}</div>

      <div className="invisible md:visible w-full h-[1px] bg-primary/10"></div>

      {viewAll ? (
        <Button
          variant="outline"
          className="whitespace-nowrap uppercase flex items-center gap-1.5 rounded-2xl text-xs py-1.5"
          onClick={() => navigate(RoutePath.Articles)}
        >
          <span>{t('_.viewAll')}</span>
          <ArrowUpRightIcon className="w-[16px]" />
        </Button>
      ) : null}
    </div>
  );
}

export default BlockHeader;