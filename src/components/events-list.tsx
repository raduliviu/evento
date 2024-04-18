import EventCard from './event-card';
import { getEvents } from '@/lib/utils';

export default async function EventsList({ city }: { city: string }) {
  const events = await getEvents(city);

  return (
    <section className='max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
