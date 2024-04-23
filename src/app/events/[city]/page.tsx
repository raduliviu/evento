import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { capitalizeWord } from '@/lib/utils';
import { Metadata } from 'next';
import { z } from 'zod';

type Props = {
  params: { city: string };
};

type EventsPageProps = Props & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalizeWord(city)}`,
    description: 'Browse more than 10,000 events worldwide',
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default function EventsPage({ params, searchParams }: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error('Invalid page number');
  }

  return (
    <main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
      <H1 className='mb-28'>
        {city === 'all' ? 'All Events' : `Events in ${capitalizeWord(city)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
