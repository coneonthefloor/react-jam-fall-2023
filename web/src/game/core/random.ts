export const randomInt = (min: number, max: number): number => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

export const sample = <T>(arr: T[]): T =>
    arr[Math.floor(Math.random() * arr.length)]

export const choose = (a, b) => (Math.random() > 0.5 ? a : b)
