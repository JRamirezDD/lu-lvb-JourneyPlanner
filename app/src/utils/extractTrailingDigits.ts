export default function extractTrailingDigits(input: string): string {
    const match = input.match(/(\d+)$/);
    return match ? match[1] : "";
}