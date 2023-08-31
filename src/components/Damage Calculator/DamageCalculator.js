import {useState} from "react";
import {Button} from "reactstrap";
import {useSelector} from "react-redux";

function CalculateBasicDamage(PokemonValues, MoveProperties, StatChanges, EVs, IVs, Flags, OtherPokemonValues, OtherMoveProperties, OtherStatChanges, OtherEVs, OtherIVs, OtherFlags, Weather, Terrain) {
    let effectiveAttack = calculateEffectiveAttack(MoveProperties, PokemonValues, StatChanges, EVs, IVs, Flags)
    let effectiveDefense = calculateEffectiveDefense(MoveProperties, PokemonValues, OtherPokemonValues, OtherStatChanges, OtherEVs, OtherIVs, OtherFlags)
    let typeeffectiveness = typeEffectiveness(MoveProperties.type, OtherPokemonValues.type, OtherPokemonValues.type2, MoveProperties.name)
    let STAB = SameTypeAttackBonus(PokemonValues.type, PokemonValues.type2, MoveProperties.type, PokemonValues.ability)
    let crit = (() => {return (Flags.isCriticalHit ? 1.5 : 1)})()
    let burnvalue = burn(PokemonValues.burned, PokemonValues.ability, MoveProperties.category, MoveProperties.name)
    let weatherBoost = WeatherEffects(Weather, PokemonValues.ability, OtherPokemonValues.ability, MoveProperties.type, MoveProperties.name)
    let other = (() => {
        let multiplier = 1
        if (OtherFlags.minimize && (["Body Slam", "Stomp", "Dragon Rush", "Heat Crash", "Heavy Slam", "Flying Press"].includes(MoveProperties.name))) {
            multiplier *= 2
        }
        if (OtherFlags.dig && ["Earthquake", "Magnitude"].includes(MoveProperties.name)) {
            multiplier *= 2
        }
        if (OtherFlags.dive && ["Surf", "Whirlpool"].includes(MoveProperties.name)) {
            multiplier *= 2
        }
        if (OtherFlags.lightscreen) {
            if (MoveProperties.category === "special" && !Flags.isCriticalHit && (PokemonValues.ability !== "Infiltrator")) {
                multiplier *= 0.5
            }
        }
        if (OtherFlags.reflect) {
            if (MoveProperties.category === "physical" && !Flags.isCriticalHit && (PokemonValues.ability !== "Infiltrator")) {
                multiplier *= 0.5
            }
        }
        if (OtherFlags.auroraveil) {
            if (!Flags.isCriticalHit && (PokemonValues.ability !== "Infiltrator")) {
                multiplier *= 0.5
            }
        }
        if (["Collision Course", "Electro Drift"].includes(MoveProperties.name) && (typeeffectiveness > 1)) {
            multiplier *= (5461/4096) // 1.3333
        }

        if ((OtherPokemonValues.ability === "Multiscale" || OtherPokemonValues.ability === "Shadow Shield") && (OtherPokemonValues.currentHP === OtherPokemonValues.maxHP)) {
            multiplier *= 0.5
        }

        if (OtherPokemonValues.ability === "Ice Scales" && MoveProperties.category === "Special") {
            multiplier *= 0.5
        }

        if (["Filter", "Prism Armor", "Solid Rock"].includes(OtherPokemonValues.ability) && typeeffectiveness > 1) {
            multiplier *= 0.75
        }

        if (PokemonValues.ability === "Neuroforce" && typeeffectiveness > 1) {
            multiplier *= 1.25
        }

        if (PokemonValues.ability === "Sniper" && crit === 1.5) {
            multiplier *= 1.5
        }

        if (PokemonValues.ability === "Tinted Lens" && typeeffectiveness < 1) {
            multiplier *= 2
        }

        if (PokemonValues.ability === "Fluffy" && MoveProperties.type === "fire") {
            multiplier *= 2
        }

        if (PokemonValues.item === "Expert Belt" && typeeffectiveness > 1) {
            multiplier *= (4915/4096) // 1.2
        }

        if (PokemonValues.item === "Life Orb") {
            multiplier *= (5324/4096) // 1.3
        }
        return multiplier
    })()

    return (((((((2*PokemonValues.level) / 5) + 2) * MoveProperties.power * (effectiveAttack / effectiveDefense)) / 50) + 2) * weatherBoost * crit * STAB * typeeffectiveness * burnvalue * other).toFixed(2)

}

function calculateEffectiveAttack(MoveProperties, PokemonValues, StatChanges, EVs, IVs, Flags) {
    let attackNatureMult = 1.0
    let EV
    let IV
    let baseStat
    let attackStatChange

    if (MoveProperties.category === "physical") {
        if (["Lonely", "Adamant", "Naughty", "Brave"].includes(PokemonValues.nature)) {
            attackNatureMult = 1.1
        } else if (["Bold", "Modest", "Calm", "Timid"].includes(PokemonValues.nature)) {
            attackNatureMult = 0.9
        }
        EV = EVs.attack
        IV = IVs.attack
        baseStat = PokemonValues.attack
        if (StatChanges.attack >= 0) {
            attackStatChange = ((StatChanges.attack + 2) / 2)
        } else if (!Flags.isCriticalHit) {
            attackStatChange = (2 / (Math.abs(StatChanges.attack) + 2))
        }
    }
    if (MoveProperties.category === "special") {
        if (["Modest", "Mild", "Rash", "Quiet"].includes(PokemonValues.nature)) {
            attackNatureMult = 1.1
        } else if (["Adamant", "Impish", "Careful", "Jolly"].includes(PokemonValues.nature)) {
            attackNatureMult = 0.9
        }
        EV = EVs.spatk
        IV = IVs.spatk
        baseStat = PokemonValues.spatk
        if (StatChanges.spatk >= 0) {
            attackStatChange = ((StatChanges.spatk + 2) / 2)
        } else if (!Flags.isCriticalHit) {
            attackStatChange = (2 / (Math.abs(StatChanges.spatk) + 2))
        }
    }

    return (Math.floor((Math.floor(((2 * baseStat + IV + Math.floor(EV / 4)) * PokemonValues.level) / 100) + 5) * attackNatureMult) * attackStatChange)
}

function calculateEffectiveDefense(MoveProperties, OtherPokemonValues, PokemonValues, StatChanges, EVs, IVs, OtherFlags) {
    let defenseNatureMult = 1.0
    let EV
    let IV
    let baseStat
    let defenseStatChange

    if (MoveProperties.category === "physical") {
        if (["Bold", "Impish", "Lax", "Relaxed"].includes(PokemonValues.nature)) {
            defenseNatureMult = 1.1
        } else if (["Lonely", "Mild", "Gentle", "Hasty"].includes(PokemonValues.nature)) {
            defenseNatureMult = 0.9
        }
        EV = EVs.defense
        IV = IVs.defense
        baseStat = PokemonValues.defense
        if (StatChanges.defense >= 0) {
            if (!OtherFlags.isCriticalHit) {
                defenseStatChange = ((StatChanges.defense + 2) / 2)
            } else {
                defenseStatChange = 1
            }
        } else {
            defenseStatChange = (2 / (Math.abs(StatChanges.defense) + 2))
        }
    }
    if (MoveProperties.category === "special") {
        if (["Calm", "Gentle", "Careful", "Sassy"].includes(PokemonValues.nature)) {
            defenseNatureMult = 1.1
        } else if (["Naughty", "Lax", "Rash", "Naive"].includes(PokemonValues.nature)) {
            defenseNatureMult = 0.9
        }
        EV = EVs.spdef
        IV = IVs.spdef
        baseStat = PokemonValues.spdef
        if (StatChanges.spdef >= 0) {
            if (!OtherFlags.isCriticalHit) {
                defenseStatChange = ((StatChanges.spdef + 2) / 2)
            }
            else {
                defenseStatChange = 1
            }
        } else {
            defenseStatChange = (2 / (Math.abs(StatChanges.spdef) + 2))
        }
    }

    return (Math.floor((Math.floor(((2 * baseStat + IV + Math.floor(EV / 4)) * PokemonValues.level) / 100) + 5) * defenseNatureMult) * defenseStatChange)
}

function typeEffectiveness(MoveType, OtherType1, OtherType2, MoveName) {
    let effectiveness = 1
    switch (MoveType) {
        case "normal":
            if (OtherType1 === 'ghost' || OtherType2 === 'ghost') {
                effectiveness = 0
                return effectiveness
            }
            if (["rock", "steel"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["rock", "steel"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "fighting":
            if (OtherType1 === 'ghost' || OtherType2 === 'ghost') {
                effectiveness = 0
                return effectiveness
            }
            if (["normal", "rock", "steel", "ice", "dark"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["normal", "rock", "steel", "ice", "dark"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["flying", "poison", "bug", "psychic", "fairy"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["flying", "poison", "bug", "psychic", "fairy"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "flying":
            if (["fighting", "bug", "grass"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["fighting", "bug", "grass"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["rock", "steel", "electric"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["rock", "steel", "electric"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "poison":
            if (OtherType1 === "steel" || OtherType2 === "steel") {
                effectiveness = 0
                return effectiveness
            }
            if (["grass", "fairy"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["grass", "fairy"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["poison", "ground", "rock", "ghost"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["poison", "ground", "rock", "ghost"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "ground":
            if (OtherType1 === "flying" || OtherType2 === "flying") {
                effectiveness = 0
                return effectiveness
            }
            if (["poison", "rock", "steel", "fire", "electric"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["poison", "rock", "steel", "fire", "electric"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["bug", "grass"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["bug", "grass"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "rock":
            if (["flying", "bug", "fire", "ice"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["flying", "bug", "fire", "ice"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["fighting", "ground", "steel"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["fighting", "ground", "steel"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "bug":
            if (["grass", "psychic", "dark"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["grass", "psychic", "dark"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "ghost":
            if (OtherType1 === "normal" || OtherType2 === "normal") {
                effectiveness = 0
                return effectiveness
            }
            if (OtherType1 === "dark" || OtherType2 === "dark") {
                effectiveness /= 2
            }
            if (["ghost", "psychic"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["ghost", "psychic"].includes(OtherType2)) {
                effectiveness *= 2
            }
            break
        case "steel":
            if (["rock", "ice", "fairy"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["rock", "ice", "fairy"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["steel", "fire", "water", "electric"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["steel", "fire", "water", "electric"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "fire":
            if (["bug", "steel", "grass", "ice"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["bug", "steel", "grass", "ice"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["rock", "fire", "water", "dragon"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["rock", "fire", "water", "dragon"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "water":
            if (["ground", "rock", "fire"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["ground", "rock", "fire"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["water", "grass", "dragon"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["water", "grass", "dragon"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "grass":
            if (["ground", "rock", "water"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["ground", "rock", "water"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["flying", "poison", "bug", "steel", "fire", "grass", "dragon"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["flying", "poison", "bug", "steel", "fire", "grass", "dragon"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "electric":
            if (OtherType1 === "ground" || OtherType2 === "ground") {
                effectiveness = 0
                return effectiveness
            }
            if (["flying", "water"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["flying", "water"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["grass", "electric", "dragon"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["grass", "electric", "dragon"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "psychic":
            if (OtherType1 === "dark" || OtherType2 === "dark") {
                effectiveness = 0
                return effectiveness
            }
            if (["fighting", "poison"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["fighting", "poison"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["steel", "psychic"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["steel", "psychic"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "ice":
            if (MoveName === "Freeze Dry") {
                if (["water", "flying", "ground", "grass", "dragon"].includes(OtherType1)) {
                    effectiveness *= 2
                }
                if (["water", "flying", "ground", "grass", "dragon"].includes(OtherType2)) {
                    effectiveness *= 2
                }
            }
            if (["flying", "ground", "grass", "dragon"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["flying", "ground", "grass", "dragon"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["steel", "fire", "water", "ice"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["steel", "fire", "water", "ice"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "dragon":
            if (OtherType1 === "fairy" || OtherType2 === "fairy") {
                effectiveness = 0
                return effectiveness
            }
            if (OtherType1 === "dragon" || OtherType2 === "dragon") {
                effectiveness *= 2
            }
            if (OtherType1 === "steel" || OtherType2 === "steel") {
                effectiveness /= 2
            }
            break
        case "dark":
            if (["ghost", "psychic"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["ghost", "psychic"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["fighting", "dark", "fairy"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["fighting", "dark", "fairy"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        case "fairy":
            if (["fighting", "dragon", "dark"].includes(OtherType1)) {
                effectiveness *= 2
            }
            if (["fighting", "dragon", "dark"].includes(OtherType2)) {
                effectiveness *= 2
            }
            if (["poison", "steel", "fire"].includes(OtherType1)) {
                effectiveness /= 2
            }
            if (["poison", "steel", "fire"].includes(OtherType2)) {
                effectiveness /= 2
            }
            break
        default:
            break
    }
    return effectiveness
}

function SameTypeAttackBonus(PokemonType, PokemonType2, MoveType, PokemonAbility) {
    if (PokemonType === MoveType || PokemonType2 === MoveType) {
        if (PokemonAbility === "Adaptability") {
            return 2
        } else return 1.5
    }
    return 1
}

function WeatherEffects(Weather, PokemonAbility, OtherPokemonAbility, MoveType, MoveName) {
    let weatherboost = 1
    let weatherAbilities = ["Air Lock", "Cloud Nine"]
    if (weatherAbilities.includes(PokemonAbility) || weatherAbilities.includes(OtherPokemonAbility)) return weatherboost
    if (Weather === "Rain" || Weather === "Heavy Rain") {
        if (MoveType === "water") {
            weatherboost = 1.5
        } else if (MoveType === "fire") {
            if (Weather === "Rain") {
                weatherboost = 0.5
            }
            else if (Weather === "Heavy Rain") {
                weatherboost = 0
            }
        }
    }
    if (Weather === "Harsh Sunlight" || Weather === "Extremely Harsh Sunlight") {
        if (MoveType === "fire") {
            weatherboost = 1.5
        } else if (MoveType === "water") {
            if (MoveName === "Hydro Steam") {
                weatherboost = 1.5
            } else if (Weather === "Extremely Harsh Sunlight") {
                weatherboost = 0
            } else {
                weatherboost = 0.5
            }
        }
    }

    return weatherboost
}

function burn(BurnStatus, Ability, MoveCategory, MoveName) {
    let burnvalue = 1
    if (BurnStatus && MoveCategory === "Physical" && Ability !== "Guts" && MoveName !== "Facade") {
        burnvalue = 0.5
    }
    return burnvalue
}


function DamageCalculator(props) {
    let [DamageDealt, setDamageDealt] = useState(0)
    const PokemonValuesLeft = useSelector((state) => state.pokemon.PokemonValuesLeft)
    const PokemonValuesRight = useSelector((state) => state.pokemon.PokemonValuesRight)
    const MovePropertiesLeft = useSelector((state) => state.moveField.movePropertiesLeft)
    const MovePropertiesRight = useSelector((state) => state.moveField.movePropertiesRight)
    const StatChangesLeft = useSelector((state) => state.statChanges.StatChangesLeft)
    const StatChangesRight = useSelector((state) => state.statChanges.StatChangesRight)
    const EVsLeft = useSelector((state) => state.evs.EVsLeft)
    const EVsRight = useSelector((state) => state.evs.EVsRight)
    const IVsLeft = useSelector((state) => state.ivs.IVsLeft)
    const IVsRight = useSelector((state) => state.ivs.IVsRight)
    const OtherFlagsLeft = useSelector((state) => state.otherFlags.otherFlagsLeft)
    const OtherFlagsRight = useSelector((state) => state.otherFlags.otherFlagsRight)
    const Weather = useSelector((state) => state.environment.weather)
    const Terrain = useSelector((state) => state.environment.terrain)
    return (
        <>
            <Button onClick={() => {
                setDamageDealt(CalculateBasicDamage(PokemonValuesLeft, MovePropertiesLeft, StatChangesLeft, EVsLeft, IVsLeft, OtherFlagsLeft, PokemonValuesRight, MovePropertiesRight, StatChangesRight, EVsRight, IVsRight, OtherFlagsRight, Weather, Terrain))
            }}>
                Calculate
            </Button>

            <h1><u>Damage Dealt</u></h1>
            <h2>{(DamageDealt * 0.85).toFixed(2)}-{DamageDealt}</h2>

        </>
    )
}

export default DamageCalculator
