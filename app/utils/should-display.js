export default function shouldDisplay(maybeString) {
  return maybeString
    && ["undefined", "geen weergave"].includes(maybeString.toLowerCase());
}

/**
 * Returns the canonical form of the template string.
 *
 * If the template says undefined or geen weergave or it doesn't
 * exist, we shouldn't render it.  This function provides such
 * cleanup.
 */
export function whenShouldDisplay(maybeString) {
  return shouldDisplay(maybeString) ? maybeString : null;
}
