'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type AddressSuggestion = {
  formattedAddress: string;
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
};

export default function CitySearch() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) return;

      try {
        const apikey = `prj_live_pk_69d79e13a0ec7daf697b471765afab8cfd946ac2`;
        const res = await fetch(
          `https://api.radar.io/v1/search/autocomplete?query=${query}`,
          {
            headers: {
              Authorization: apikey || '',
            },
          }
        );
        const data = await res.json();
        
        setSuggestions(data.addresses || []);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleSelect = (address: AddressSuggestion) => {
    const city = address.city || address.formattedAddress;
    if (city) {
      const slug = encodeURIComponent(city.toLowerCase().replace(/\s+/g, '-'));
      router.push(`/current-air-quality/${slug}`);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder= "Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {suggestions.length > 0 && (
        <ul className="border mt-2">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(s)}
            >
              {s.formattedAddress || 'Unknown'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}