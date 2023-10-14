import dayjs from 'dayjs';
import dayjsRuLocale from 'dayjs/locale/ru';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);
dayjs.locale(dayjsRuLocale);