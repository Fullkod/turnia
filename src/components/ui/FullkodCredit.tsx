// "Desarrollado por Fullkod" (CREA0004): the same credit on every screen.
// tone="auto" follows the .dark theme class; tone="onDark" for fixed dark backgrounds.
export function FullkodCredit({
  tone = 'auto',
  className = '',
}: {
  tone?: 'auto' | 'onDark';
  className?: string;
}) {
  const onDark = tone === 'onDark';
  return (
    <a
      href="https://fullkod.com/?ref=turnia"
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-1.5 text-xs text-muted ${onDark ? 'hover:text-white' : 'hover:text-text-primary'} ${className}`}
    >
      Desarrollado por
      {!onDark && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/brand/fullkod-symbol.svg" alt="" className="fullkod-credit-light h-3.5 w-3.5" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/fullkod-symbol-reversed.svg"
        alt=""
        className={`h-3.5 w-3.5 ${onDark ? '' : 'fullkod-credit-dark'}`}
      />
      <span className={`font-semibold ${onDark ? 'text-white' : 'text-text-primary'}`}>Fullkod</span>
    </a>
  );
}
