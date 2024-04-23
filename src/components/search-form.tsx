'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';

const searchTextSchema = z
  .string()
  .min(1)
  .regex(/^[^@\/=:]*$/, {
    message: 'Must not contain @, /, =, : or $ characters',
  });

export default function SearchForm() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsedSearchText = searchTextSchema.safeParse(searchText);

    if (!parsedSearchText.success) {
      throw new Error(
        'Invalid search term: ' + parsedSearchText.error.errors[0].message
      );
    }

    router.push(`/events/${parsedSearchText}`);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full sm:w-[580px]'>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className='w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10'
        placeholder='Search events in any city...'
        spellCheck='false'
      />
    </form>
  );
}
