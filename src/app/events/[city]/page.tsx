import H1 from '@/components/h1';
import { EventoEventType } from '@/lib/types';

type EventsPageProps = {
  params: { city: string };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;
  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

  const response = await fetch(
    'https://bytegrad.com/course-assets/projects/evento/api/events?city=austin'
  );
  const events: EventoEventType[] = await response.json();

  return (
    <main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
      <H1>{city === 'all' ? 'All Events' : `Events in ${capitalizedCity}`}</H1>

      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
}
