"use strict";
// //mapped types - grouping per type
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
// const countVaccinesPerKind = (list: Vaccine[]) : VaccineNumbers => 
// {
//     const countedPerKind = {Pfizer:0,AstraZeneca:0,SputnikV:0}
//     list.forEach(v => {
//         countedPerKind[v.kind]++;
//     });
//     return countedPerKind;
// }
// // type VaccineNumbers = {
// //     Pfizer: number,
// //     AstraZeneca: number,
// //     SputnikV: number,
// // }
// type VaccineNumbers = { //mapped types
//     [Kind in VaccineKind] : number; 
// }
// const vaccineList:Vaccine[] = 
// [{ SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'Pfizer', DilutionInML: 100},
// { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'AstraZeneca', AgeLimit: 60},
// { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'AstraZeneca', AgeLimit: 60},
//  { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'SputnikV', TrackingChip: 'SOV-5X'}];
//  console.log(countVaccinesPerKind(vaccineList));
