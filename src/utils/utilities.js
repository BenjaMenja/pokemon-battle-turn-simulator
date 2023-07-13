export function calculateMaxHP(Base, EV, IV, level) {
    return (Math.floor(((2 * Base + IV + Math.floor(EV / 4)) * level) / 100) + level + 10)
}