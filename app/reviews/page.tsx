
export const revalidate = 3600;

async function getReviews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/reviews`, { cache: "no-store" });
  return res.json();
}

export const metadata = { title: "Reviews", description: "What customers say about Manam Canteen." };

export default async function Page() {
  const data = await getReviews();
  const ok = data?.ok;
  const reviews = data?.reviews || [];
  const rating = data?.rating;
  const total = data?.total;

  return (
    <section className="container py-10">
      <h1 className="text-3xl font-extrabold mb-2">Customer Reviews</h1>
      {ok ? <p className="text-muted mb-4">Google rating: <b>{rating}</b> ({total} reviews)</p> : <p className="text-muted mb-4">Add Google API keys to show live reviews.</p>}
      <ul className="grid md:grid-cols-2 gap-3">
        {reviews.length ? reviews.map((r: any, i: number) => (
          <li key={i} className="card">
            <div className="text-[#F59E0B]" aria-label={`${r.rating} stars`}>{"★".repeat(Math.round(r.rating))}</div>
            <p className="mt-2">{r.text}</p>
            <p className="text-sm text-muted mt-1">— {r.author}</p>
          </li>
        )) : (
          <>
            <li className="card">“Real authentic Tamil Nadu taste. Quantity and quality were great!”</li>
            <li className="card">“Excellent dosas, highly recommended 👌”</li>
            <li className="card">“Masala dosa and vada were fantastic — will be back for more.”</li>
          </>
        )}
      </ul>
      <p className="mt-4"><a className="btn btn-ghost" href="https://www.google.com/search?q=Manam+Canteen+reviews" target="_blank" rel="noreferrer">Share your review on Google ⭐</a></p>
    </section>
  );
}
