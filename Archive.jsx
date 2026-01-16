import React from "react";

/* =========================
   Reusable Archive Card
========================= */
function ArchiveCard({
  title,
  account,
  hashtag,
  url,
  status = "Confirmed",
}) {
  const statusColor = {
    Confirmed: "text-green-400",
    Rumor: "text-yellow-400",
    Deleted: "text-red-400",
  };

  return (
    <article className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
      <h3 className="text-sm font-semibold tracking-wide">
        {title}
      </h3>

      <div className="text-xs text-neutral-400 mt-1">
        X Post · @{account}
      </div>

      <div className={`text-xs mt-1 ${statusColor[status]}`}>
        Status: {status}
      </div>

      <div className="mt-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:text-lightPrimary duration-500"
          aria-label={`Source: X ${hashtag}`}
          title={url}
        >
          Source: X · {hashtag}
        </a>
      </div>
    </article>
  );
}

/* =========================
   Archive Page
========================= */
export default function Archive() {
  return (
    <section
      id="archive"
      className="max-w-5xl mx-auto px-4 py-10"
    >
      <h2 className="text-xl font-bold tracking-wide mb-6">
        IST PROJECT ARCHIVE
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {/* ===== TUNEXX PROJECT ===== */}
        <ArchiveCard
          title="IST PROJECT · TUNEXX"
          account="ist_ent"
          hashtag="#TUNEXX"
          url="https://x.com/ist_ent/status/2011997468981092366"
          status="Confirmed"
        />

        {/* ===== TUNEXX MEMBERS (7) ===== */}

        <ArchiveCard
          title="TUNEXX Member · Park Donggyu"
          account="ist_ent"
          hashtag="#TUNEXX"
          url="https://x.com/ist_ent"
          status="Confirmed"
        />

        <ArchiveCard
          title="TUNEXX Member · Kim Inhu"
          account="ist_ent"
          hashtag="#TUNEXX"
          url="https://x.com/ist_ent"
          status="Confirmed"
        />

        <ArchiveCard
          title="TUNEXX Member · Kim Sihwan"
          account="ist_ent"
          hashtag="#TUNEXX"
          url="https://x.com/ist_ent"
          status="Rumor"
        />

        <ArchiveCard
          title="TUNEXX Member · Arctic"
          account="ist_ent"
          hashtag="#TUNEXX"
          url="https://x.com/ist_ent"
          status="Confirmed"
        />

        <ArchiveCard
          title="TUNEXX Member · Park Jaehon"
          account="ist_ent"
          hashtag="#TUNEXX"
          url="https://x.com/ist_ent"
          status="Rumor"
        />

        <ArchiveCard
          title="TUNEXX Member · Moonsungjun"
          account="ist_ent"
          hashtag="#TUNEXX"
          url="https://x.com/ist_ent"
          status="Rumor"
        />

        <ArchiveCard
          title="TUNEXX Member · Taira"
          account="ist_ent"
          hashtag="#TUNEXX"
          url="https://x.com/ist_ent"
          status="Rumor"
        />

      </div>
    </section>
  );
}
