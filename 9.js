// //conditional types -> leading to Omit
// type VaccineBase = {
//     SideEffects: string[],
//     Technology: string,
//     DaysBetweenShots: number,
// }
// type Pfizer = VaccineBase & { DilutionInML : number, kind: 'Pfizer'}
// type AstraZeneca = VaccineBase & {AgeLimit : number, kind: 'AstraZeneca' }
// type SputnikV = VaccineBase & { TrackingChip: string, kind: 'SputnikV' }
// type Vaccine = Pfizer | AstraZeneca | SputnikV;
// type VaccineKind = Vaccine['kind']; //lookup type
// type VaccineNumbers = { //mapped types
//     [Kind in VaccineKind] : number; 
// }
// // const getSpecialProperties = (vaccine: Vaccine) : string =>
// // {
// //     switch(vaccine.kind)
// //     {
// //         case 'Pfizer': 
// //             return vaccine.DilutionInML.toString();
// //         case 'AstraZeneca':
// //             return vaccine.AgeLimit.toString();
// //         case 'SputnikV':
// //             return vaccine.TrackingChip;
// //     }
// // }
// const getSpecialProperties = (vaccine: Vaccine) : SpecialVaccineProperties<Vaccine> =>
// {
//     switch(vaccine.kind)
//     {
//         case 'Pfizer': 
//             return { DilutionInML : vaccine.DilutionInML };
//         case 'AstraZeneca':
//             return { AgeLimit : vaccine.AgeLimit };
//         case 'SputnikV':
//             return { TrackingChip: vaccine.TrackingChip };
//     }
// }
// // type SpecialVaccineProperties<T> = 
// //     T extends Pfizer ? { DilutionInML: number }
// //     : T extends AstraZeneca ? { AgeLimit : number }
// //     : T extends SputnikV ? { TrackingChip : string }
// //     : never;
// type CommonVaccineProperties = keyof (VaccineBase & {kind:string});
// // type SpecialVaccineProperties<T> = 
// //     T extends Pfizer ? Omit<Pfizer, CommonVaccineProperties>
// //     : T extends AstraZeneca ? Omit<AstraZeneca, CommonVaccineProperties>
// //     : T extends SputnikV ? Omit<SputnikV, CommonVaccineProperties>
// //     : never;
// type SpecialVaccineProperties<T> = Omit<T, CommonVaccineProperties>;
// const vaccineList:Vaccine[] = 
// [{ SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'Pfizer', DilutionInML: 100},
// { SideEffects : ['nausea'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'AstraZeneca', AgeLimit: 60},
// { SideEffects : ['nausea'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'AstraZeneca', AgeLimit: 60},
//  { SideEffects : ['nausea', 'fever'], Technology : 'mDNA', DaysBetweenShots: 21, kind: 'SputnikV', TrackingChip: 'SOV-5X'}];
//  console.log(getSpecialProperties(vaccineList[0]));
