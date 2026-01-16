export default function ArchiveCard({
  title,
  account,
  hashtag,
  url,
  status = "Confirmed", // Confirmed | Rumor | Deleted
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
