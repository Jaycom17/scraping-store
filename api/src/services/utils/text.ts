export const fixText = (text: string, separator: string) => {
    return text.split(" ").join(separator).trim();
}