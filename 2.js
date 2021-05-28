// // use intersection types and union type
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
//     const pfizer = vaccine as Pfizer;
//     if(pfizer) 
//     {
//         //sigur ca primele doua randuri le-as fi putut crea o sg data si concatena apoi field-urile custom
//         console.log(`Pfizer details
//             side-effects: ${pfizer.SideEffects.join(', ')} 
//             tech:${pfizer.Technology}
//             days between shots: ${pfizer.DaysBetweenShots}
//             dilution[ml]: ${pfizer.DilutionInML}`);
//         return;
//     }
//     const astraZeneca = vaccine as AstraZeneca;
//     if(astraZeneca)
//     {
//         console.log(`AstraZeneca details \n side-effects: ${astraZeneca.SideEffects.join(', ')} \n 
//             tech:${astraZeneca.Technology} \n days between shots: ${astraZeneca.DaysBetweenShots} \n
//             dilution[ml]: ${astraZeneca.AgeLimit}`);
//         return;
//     }
// }
// const vaccine: AstraZeneca = { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, AgeLimit: 65} 
// vaccineSummary(vaccine);
