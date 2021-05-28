// //use type predicates
// type VaccineBase = {
//     SideEffects: string[],
//     Technology: string,
//     DaysBetweenShots: number
// }

// type Pfizer = VaccineBase & { DilutionInML : number }
// type AstraZeneca = VaccineBase & {AgeLimit : number }
// type Vaccine = Pfizer | AstraZeneca;

// const vaccineSummary = (vaccine: Vaccine) =>
// {
//     //how to show all fields
//     //vaccine.Dilution?
//     if(isPfizer(vaccine)) 
//     {
//         //sigur ca primele doua randuri le-as fi putut crea o sg data si concatena apoi field-urile custom
//         console.log(`Pfizer details
//             side-effects: ${vaccine.SideEffects.join(', ')} 
//             tech:${vaccine.Technology}
//             days between shots: ${vaccine.DaysBetweenShots}
//             dilution[ml]: ${vaccine.DilutionInML}`);
//         return;
//     }

//     if(isAstraZeneca(vaccine))
//     {
//         console.log(`AstraZeneca details \n side-effects: ${vaccine.SideEffects.join(', ')}
//             tech:${vaccine.Technology} \n days between shots: ${vaccine.DaysBetweenShots}
//             dilution[ml]: ${vaccine.AgeLimit}`);
//         return;
//     }
// }

// function isPfizer(vaccine: Vaccine) : vaccine is Pfizer {
//     return vaccine.hasOwnProperty('DilutionInML');
// }
// function isAstraZeneca(vaccine: Vaccine) : vaccine is AstraZeneca {
//     return vaccine.hasOwnProperty('AgeLimit');
// }

// const vaccine = { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, AgeLimit: 65} 
// vaccineSummary(vaccine);


