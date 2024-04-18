import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { capitalizeWord } from '@/lib/utils';
import { Metadata } from 'next';

type EventsPageProps = {
  params: { city: string };
};

export function generateMetadata({ params }: EventsPageProps): Metadata {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalizeWord(city)}`,
    description: 'Browse more than 10,000 events worldwide',
  };
}

export default function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  return (
    <main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
      <H1 className='mb-28'>
        {city === 'all' ? 'All Events' : `Events in ${capitalizeWord(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
