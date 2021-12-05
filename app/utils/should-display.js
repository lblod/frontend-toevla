export default function shouldDisplay(maybeString) {
  return maybeString
    && ["undefined", "geen weergave"].includes(maybeString.toLowerCase());
}

export function whenShouldDisplay(maybeString) {
  return shouldDisplay(maybeString) ? maybeString : null;
}
