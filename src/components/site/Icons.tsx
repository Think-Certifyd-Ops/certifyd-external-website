type P = { size?: number };
const s = (size = 24) => ({ width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true as const, focusable: "false" as const });

export const Arrow = () => <span aria-hidden="true">→</span>;
export const ChatIcon = ({ size = 18 }: P) => <svg {...s(size)}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4A2.5 2.5 0 0 1 4 13.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
export const Chevron = ({ size = 14 }: P) => <svg {...s(size)} viewBox="0 0 16 16"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
export const Burger = ({ size = 20 }: P) => <svg {...s(size)}><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;

export const SegmentIcons = {
  health: () => <svg {...s()}><path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.7-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 9.5v5M9.5 12h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
  industrial: () => <svg {...s()}><path d="M3 8l9-5 9 5v10l-9 5-9-5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M3 8l9 5 9-5M12 13v10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
  hospitality: () => <svg {...s()}><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 21V3c-2 0-4 2.5-4 7h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  care: () => <svg {...s()}><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 18s-3-1.8-3-4a1.6 1.6 0 0 1 3-.9 1.6 1.6 0 0 1 3 .9c0 2.2-3 4-3 4z" fill="currentColor" /></svg>,
  security: () => <svg {...s()}><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
  facilities: () => <svg {...s()}><rect x="4" y="3" width="16" height="18" rx="1" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M10 21v-4h4v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
  platforms: () => <svg {...s()}><circle cx="6" cy="6" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="18" cy="6" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="18" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M8.2 7.5l2.6 8M15.8 7.5l-2.6 8M8.5 6h7" fill="none" stroke="currentColor" strokeWidth="2" /></svg>,
  construction: () => <svg {...s()}><path d="M4 15a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M3 15h18v3H3zM10 7V4h4v3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
  lock: () => <svg {...s(22)}><rect x="4" y="10" width="16" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="2" /></svg>,
  shieldCheck: () => <svg {...s(22)}><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
  people: () => <svg {...s(22)}><circle cx="9" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M2.5 20c.8-3.5 3.3-5.5 6.5-5.5s5.7 2 6.5 5.5M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c1.8.7 3 2.5 3.5 5.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
  clock: () => <svg {...s(22)}><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
};
export type SegmentIconKey = keyof typeof SegmentIcons;
