type AnimatedElysanaProps = {
  alt?: string;
};

export function AnimatedElysana({ alt = "" }: AnimatedElysanaProps) {
  return (
    <span className="elysana-continuity-portrait elysana-live" role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
      <img className="elysana-live-base" src="/assets/skins/elysana-busto-v2.png" alt="" />
    </span>
  );
}
