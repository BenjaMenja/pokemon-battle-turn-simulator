export function calculateMaxHP(Base, EV, IV, level) {
    return (Math.floor(((2 * Base + IV + Math.floor(EV / 4)) * level) / 100) + level + 10)
}

export function uppercaseFormat(word) {
    if (!word) return ''
    const words = word.split("-")
    for (let i=0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }

    return words.join(" ")
}