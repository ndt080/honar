import { useFetchMenuListQuery } from '@entities/menu';
import { useFetchPageFooterQuery } from '@entities/page';
import { Separator } from '@shared/ui/lib/separator.tsx';
import { cn } from '@shared/utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();

  const { data: sitemap = [] } = useFetchMenuListQuery('');
  const { data } = useFetchPageFooterQuery('');

  return (
    <footer className="w-full text-black pt-5">
      <div className="flex justify-between gap-5 items-start py-5 flex-wrap md:flex-nowrap">
        <div className="flex flex-col">
          <div className="font-black text-xl mb-2.5">{t('_.sitemap')}</div>

          {sitemap.map((item) => (
            <Link
              key={item.id}
              className={cn(
                'text-base font-normal whitespace-nowrap hover:text-primary-accent',
                'transition-colors duration-200',
              )}
              to={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="w-full max-w-[300px]">
          <img className="w-full" src="/images/logo.png" alt="logo" />
        </div>

        <div className="w-full max-w-[760px] text-with-links">
          <div className="font-black text-xl mb-2.5">{data?.title}</div>
          <div dangerouslySetInnerHTML={{ __html: data?.description ?? '' }} />
        </div>
      </div>

      <div className="w-full">
        <Separator className="w-full" />
        <div className="flex justify-between items-center py-2.5">
          <div className="text-base">
            <span>{data?.copyright}</span>
            <div className="text-with-links inline">
              <span> | Developed by </span>
              <a href="https://www.instagram.com/unknown_andry" target="_blank">
                Petrov Andrey
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;