import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './ToastNotification.css';

/** Mirrors the Figma component property `Property` (Success | Fail | Warning | Default). */
export type ToastVariant = 'success' | 'fail' | 'warning' | 'default';

export interface ToastNotificationProps {
  variant?: ToastVariant;
  message: string;
  className?: string;
}

/** Icon from Figma layer "Icon/Font Awesome Free/Solid/C/check-circle". It is used by every variant, as in the design. */
function CheckCircleIcon() {
  const [w, h, , , path] = faCircleCheck.icon;
  return (
    <svg className="toast__icon" viewBox={`0 0 ${w} ${h}`} width="24" height="24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d={Array.isArray(path) ? path.join(' ') : path} />
    </svg>
  );
}

/**
 * Toast notification.
 * Figma: Figma-MCP-x-Claude-x-Storybook, node 1:838 (ToastNotification). Synced via Figma MCP; see SYNC.md.
 */
export function ToastNotification({ variant = 'success', message, className }: ToastNotificationProps) {
  return (
    <div
      className={['toast', `toast--${variant}`, className].filter(Boolean).join(' ')}
      role={variant === 'fail' ? 'alert' : 'status'}
      data-figma-node="1:838"
    >
      <span className="toast__bar" aria-hidden="true" />
      <div className="toast__content">
        <CheckCircleIcon />
        <p className="toast__message">{message}</p>
      </div>
    </div>
  );
}
