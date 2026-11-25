import type { ReactNode } from "react";

type IconProps = { size?: number };

function Icon({ size = 28, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function IconMonitor(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="22" height="14" rx="2" />
      <path d="M9 24h10M14 19v5" />
    </Icon>
  );
}

export function IconCode(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 8l-6 6 6 6M19 8l6 6-6 6M16 5l-4 18" />
    </Icon>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="8" y="3" width="12" height="22" rx="3" />
      <path d="M12 21h4" />
    </Icon>
  );
}

export function IconTrend(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 22l7-8 5 4 8-11" />
      <path d="M18 7h6v6" />
    </Icon>
  );
}

export function IconPeople(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="10" cy="11" r="4" />
      <circle cx="20" cy="13" r="3" />
      <path d="M3 25c0-4 3-7 7-7s7 3 7 7M17 25c0-3 2-5 4-5s4 2 4 5" />
    </Icon>
  );
}

export function IconBulb(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 3a7.5 7.5 0 0 0-4 13.8V20h8v-3.2A7.5 7.5 0 0 0 14 3z" />
      <path d="M10 24h8" />
    </Icon>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="14" cy="15" r="9" />
      <path d="M14 10v5l4 3M11 3h6" />
    </Icon>
  );
}
