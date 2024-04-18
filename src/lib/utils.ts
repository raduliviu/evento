import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EventoEventType } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export async function getEvents(city: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEventType[] = await response.json();
  return events;
}

export async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEventType = await response.json();
  return event;
}
