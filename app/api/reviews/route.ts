
import { NextResponse } from 'next/server';

export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) {
    return NextResponse.json({ ok: false, error: "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID" }, { status: 400 });
  }
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${key}`;
  const res = await fetch(url);
  const data = await res.json();
  const result = data?.result || {};
  const reviews = (result.reviews || []).slice(0, 8).map((r: any) => ({
    author: r.author_name,
    text: r.text,
    rating: r.rating,
    time: r.time
  }));
  return NextResponse.json({ ok: true, rating: result.rating, total: result.user_ratings_total, reviews });
}
