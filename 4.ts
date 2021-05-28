// //get rid of the casts by using discriminated union type + fixing types and const context

// type VaccineBase = {
//     SideEffects: string[],
//     Technology: string,
//     DaysBetweenShots: number,
// }

// type Pfizer = VaccineBase & { DilutionInML : number, kind: 'Pfizer'}
// type AstraZeneca = VaccineBase & {AgeLimit : number, kind: 'AstraZeneca' }
// type Vaccine = Pfizer | AstraZeneca;

// const vaccineSummary = (vaccine:Vaccine) => //once changed to union type compile problem (good!) -> pune si DilutionInML => compiling fine
// {

//     switch(vaccine.kind) {
//         case 'Pfizer': //autocomplete too
//             console.log(`Pfizer details
//                 side-effects: ${vaccine.SideEffects.join(', ')}     tech:${vaccine.Technology}
//                 days between shots: ${vaccine.DaysBetweenShots}     dilution[ml]: ${vaccine.DilutionInML}`);
//                 break;
//         case 'AstraZeneca':
//             console.log(`AstraZeneca details 
//                 side-effects: ${vaccine.SideEffects.join(', ')}     tech:${vaccine.Technology}
//                 days between shots: ${vaccine.DaysBetweenShots}     dilution[ml]: ${vaccine.AgeLimit}`);
//                 break;
//         default:
//             throw new Error('Not aware of this kind of vaccine');
//         }
// }

// //this is no longer working even if we add the kind
// const vaccine = { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'Pfizer', DilutionInML: 100}
// //  vaccineSummary(vaccine);
// //we need to fixate the type
// const pfizer: Pfizer = { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'Pfizer', DilutionInML: 100}
// vaccineSummary(pfizer);
// //alternatively can fixate the kind property and cast to the value type 'conference'
// const vaccineWithPfizerValueType = { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'Pfizer' as 'Pfizer', DilutionInML: 100}
// vaccineSummary(vaccineWithPfizerValueType);
// //or even better use const context
// const vaccineWithConstContext = { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'Pfizer' as const, DilutionInML: 100}
// vaccineSummary(vaccineWithConstContext);