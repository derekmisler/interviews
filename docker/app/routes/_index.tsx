import type { MetaFunction } from '@remix-run/node';
import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

const listAtom = atom(async (_, { signal }) => {
  const url = 'http://universities.hipolabs.com/search?country=United+States';
  try {
    const response = await fetch(url, { signal });
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
});
export default function Index() {
  const [universities = []] = useAtom(listAtom) || [];
  return (
    <div className="container mx-auto p-32">
      {universities.map((u) => (
        <p>{u}</p>
      ))}
      <label htmlFor="input" className="block text-sm font-medium leading-6 text-gray-900">
        label
      </label>
      <div className="relative mt-2">
        <input type="text" name="input" id="input" className="block w-full " placeholder="placeholder" />
        <div className="absolute flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select id="currency" name="currency" className="h-full bg-transparent">
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
}
