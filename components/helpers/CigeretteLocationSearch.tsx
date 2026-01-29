"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaSearchLocation } from "react-icons/fa";

interface RadarAddress {
  city?: string;
  formattedAddress: string;
  state?: string;
  country?: string;
}

interface RadarResponse {
  addresses?: RadarAddress[];
}

export default function CigeretteLocationSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<RadarAddress[]>([]);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const res = await fetch(
          `https://api.radar.io/v1/search/autocomplete?query=${encodeURIComponent(query)}`,
          {
            headers: {
              Authorization: "prj_live_pk_667f61d53d1fc82be88f89e64ec01b78a539d1ed",
            },
          }
        );
        const data = (await res.json()) as RadarResponse;
        setSuggestions(data.addresses || []);
      } catch (e) {
        console.error(e);
      }
    };

    const timer = setTimeout(fetchSuggestions, 400);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (s: RadarAddress) => {
    const name = s.city || s.formattedAddress;
    router.push(
      `/aqi-to-cigarette-calculator-app?city=${encodeURIComponent(name)}`,
      { scroll: false }
    );
    setSuggestions([]);
    setQuery("");
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md mx-auto">
      
      {/* 🔍 Icon */}
      <FaSearchLocation
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        size={18}
      />

      <input
        type="text"
        value={query}
        placeholder="Enter city (e.g. Los Angeles)"
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-12 p-4 pl-10 rounded-xl border-2 border-slate-200 text-white shadow-lg outline-none focus:border-red-500"
      />

      {suggestions.length > 0 && (
        <ul className="absolute w-full mt-2 bg-white border rounded-xl shadow-2xl z-50 text-left overflow-hidden">
          {suggestions.map((s, i) => (
            <li
              key={i}
              onClick={() => handleSelect(s)}
              className="p-4 hover:bg-slate-50 cursor-pointer border-b last:border-0"
            >
              <p className="font-bold text-slate-800 text-sm">
                {s.city || s.formattedAddress}
              </p>
              <p className="text-[10px] text-slate-400 uppercase">
                {s.state}, {s.country}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
