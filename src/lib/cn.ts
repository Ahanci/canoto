// Minimal className joiner. Filters falsy values and joins with spaces.
// Tailwind v4 doesn't need clsx/tailwind-merge for our usage — order is stable.
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
