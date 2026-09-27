import './DisclosureBanner.css';

export type DisclosureVariant = 'info' | 'warning' | 'risk';

export interface DisclosureBannerProps {
  /** Visual + semantic severity. `risk` is announced assertively to screen readers. */
  variant?: DisclosureVariant;
  title: string;
  /** FCA-required disclosure copy. Must remain visible — never truncate. */
  children: React.ReactNode;
  linkLabel?: string;
  linkHref?: string;
}

/**
 * FCA disclosure banner — prominent, non-dismissible risk / regulatory messaging.
 * Figma: Components / Disclosure banner (synced via Figma MCP — see SYNC.md)
 */
export function DisclosureBanner({ variant = 'info', title, children, linkLabel, linkHref }: DisclosureBannerProps) {
  return (
    <section
      className={`disclosure-banner disclosure-banner--${variant}`}
      role={variant === 'risk' ? 'alert' : 'note'}
      aria-label={title}
    >
      <h2 className="disclosure-banner__title">{title}</h2>
      <p className="disclosure-banner__body">{children}</p>
      {linkLabel && linkHref && (
        <a className="disclosure-banner__link" href={linkHref}>{linkLabel}</a>
      )}
    </section>
  );
}
