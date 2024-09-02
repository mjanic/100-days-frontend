import EventCard from "./EventCard";

export default function Day13() {
  return (
    <div className="h-[100vh] px-14 py-8 flex flex-col gap-3">
      <div className="pb-3">
        <h1 className="font-black text-2xl py-1">Music events</h1>
        <h2 className="text-sm font-medium py-1">in London, United Kingdom</h2>
      </div>
      <EventCard
        time="21:00"
        day="Today"
        title="Swiftogedon - The Taylor Swift Club Night"
        paragraph="Swiftogedon is a night dedicated to worshipping at the altar of
            Taylor Swift: non-stop Swifty all night: deep cuts, extended mixes,
            fun favories..."
        sold={true}
        color="#FFE4E4"
      />
      <EventCard
        time="22:00"
        day="17 December"
        title="Lana Del Rave"
        paragraph="Launching the first ever 'Lana Del Rave' at Heaven Nightclub. Join us for a night devoted to the Queen of Alternative as well as favourites from..."
        sold={false}
        color="#F9FFE4"
      />
      <EventCard
        time="18:30"
        day="19 December"
        title="MASSAOKE: XMAS LIVE at the Electric Ballroom"
        paragraph="Featuring all your favorite festive hits from WHAM, SLADE, MARIAH, WIZZARD, THE POGUES and many more - as well as hairbrush anthems..."
        sold={false}
        color="#E4F4FF"
      />
      <EventCard
        time="19:00"
        day="22 December"
        title="Eleni Tsaligopoulou full-band"
        paragraph="Eleni Tsaligopoulou is one of the most popular and beloved Greek singers with a wide range of repertoire and timeless hits. During her 30 year..."
        sold={false}
        color="#F2E4FF"
      />
    </div>
  );
}
