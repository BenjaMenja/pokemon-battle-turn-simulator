
function CalculateBasicDamage(PokemonValues, MoveProperties, StatChanges, EVs, IVs, OtherPokemonValues, OtherMoveProperties, OtherStatChanges, OtherEVs, OtherIVs) {
    let levelcomponent = ((2 * PokemonValues.level) / 5) + 2
    let effectiveAttack = calculateEffectiveAttack(MoveProperties, PokemonValues, StatChanges, EVs, IVs)
    let effectiveDefense = calculateEffectiveDefense(MoveProperties, PokemonValues, OtherPokemonValues, OtherStatChanges, OtherEVs, OtherIVs)

}

function calculateEffectiveAttack(MoveProperties, PokemonValues, StatChanges, EVs, IVs) {
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
        } else if (!PokemonValues.isCriticalHit) {
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
        } else if (!PokemonValues.isCriticalHit) {
            attackStatChange = (2 / (Math.abs(StatChanges.spatk) + 2))
        }
    }

    return (Math.floor((Math.floor(((2 * baseStat + IV + Math.floor(EV / 4)) * PokemonValues.level) / 100) + 5) * attackNatureMult) * attackStatChange)
}

function calculateEffectiveDefense(MoveProperties, OtherPokemonValues, PokemonValues, StatChanges, EVs, IVs) {
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
            if (!OtherPokemonValues.isCriticalHit) {
                defenseStatChange = ((StatChanges.defense + 2) / 2)
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
            if (!OtherPokemonValues.isCriticalHit) {
                defenseStatChange = ((StatChanges.spdef + 2) / 2)
            }
        } else {
            defenseStatChange = (2 / (Math.abs(StatChanges.spdef) + 2))
        }
    }

    return (Math.floor((Math.floor(((2 * baseStat + IV + Math.floor(EV / 4)) * PokemonValues.level) / 100) + 5) * defenseNatureMult) * defenseStatChange)
}


function DamageCalculator(props) {
    return (
        <>
            {CalculateBasicDamage(props.PokemonValuesLeft, props.MovePropertiesLeft, props.StatChangesLeft, props.EVsLeft, props.IVsLeft, props.PokemonValuesRight, props.MovePropertiesRight, props.StatChangesRight, props.EVsRight, props.IVsRight)}
        </>
    )
}

export default DamageCalculator
