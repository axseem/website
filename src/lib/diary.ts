export interface Frontmatter {
    title: string
    date: string
    minutesRead: string
    mood?: number
}

export function moodToColor(mood?: number): string {
    if (mood === undefined) return '';
    
    if (mood <= 5) {
        const red = 255;
        const green = Math.floor(mood * 51);
        return `rgb(${red}, ${green}, 100)`;
    } else {
        const red = Math.floor(255 - (mood - 5) * 51);
        const green = 255;
        const blue = Math.floor((mood - 5) * 51);
        return `rgb(${red}, ${green}, ${blue})`;
    }
}
