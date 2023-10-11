import { useFetchArticlesQuery } from '@entities/article';
import { HomeCard } from '@features/HomeCard';

function Component() {
  useFetchArticlesQuery('');
  // const { data } = useFetchLatestArticlesQuery('');
  //
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <main className="bg-white h-full pt-2.5">
      <HomeCard />
    </main>
  );
}

export { Component };