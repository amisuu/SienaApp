export function setNonBreakingSpace(text: string) {
    return text.replace(/\b(w|i)\s+/g, (x) => x.trimEnd() + '\u00A0') //non-breaking space
}

export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
