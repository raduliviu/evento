import { EventoEventType } from '@/lib/types';
import EventCard from './event-card';

export default async function EventsList({ city }: { city: string }) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEventType[] = await response.json();

  return (
    <section className='max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
