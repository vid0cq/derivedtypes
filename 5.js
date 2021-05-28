"use strict";
// //lookup types - filter by kind
// type VaccineBase = {
//     SideEffects: string[],
//     Technology: string,
//     DaysBetweenShots: number,
// }
// type Pfizer = VaccineBase & { DilutionInML : number, kind: 'Pfizer'}
// type AstraZeneca = VaccineBase & {AgeLimit : number, kind: 'AstraZeneca' }
// type Vaccine = Pfizer | AstraZeneca | SputnikV;
// // type VaccineKind = 'Pfizer' | 'AstraZeneca';
// const filterByKind = (list: Vaccine[], kind: VaccineKind) : Vaccine[] => 
// {
//     return list.filter(v=>v.kind===kind);
// }
// const vaccineList:Vaccine[] = 
// [{ SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'Pfizer', DilutionInML: 100},
// { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'AstraZeneca', AgeLimit: 60}]
// // { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'SputnikV', AgeLimit: 60}];
// filterByKind(vaccineList, 'Pfizer')
// filterByKind(vaccineList, 'AstraZeneca')
// //all good but what if another vaccine appears?
// //we introduce SputnikV
// type SputnikV = VaccineBase & {
//     TrackingChip: string,
//     kind: 'SputnikV'
// }
// console.log(filterByKind(vaccineList, 'SputnikV'))
// //need to add it to VaccineKind
// type VaccineKind = Vaccine['kind']; //lookup type
