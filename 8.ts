// //continuare keyof - se poate rezolva sa mearga cu proprietati in functie de ce trimiti ca parametru?
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

// // const filterByProperty=(list:Vaccine[], property: any, value:any) : Vaccine[] =>
// //const filterByProperty=<T>(list:T[], property: keyof T, value: T[keyof T]) : T[] => //tot merge apelat cu 3
// const filterByProperty=<T, U extends keyof T>(list:T[], property: U, value: T[U]) : T[] =>
// {
//     return list.filter(v => v[property]===value);
// }

// type VaccineCommonProperty = keyof Vaccine;
// type VaccineValueType = Vaccine[VaccineCommonProperty];

// const vaccineList:Vaccine[] = 
// [{ SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'Pfizer', DilutionInML: 100},
// { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'AstraZeneca', AgeLimit: 60},
// { SideEffects : ['nausea', 'fever'], Technology : 'mRNA', DaysBetweenShots: 21, kind: 'AstraZeneca', AgeLimit: 60},
//  { SideEffects : ['nausea', 'fever'], Technology : 'mDNA', DaysBetweenShots: 21, kind: 'SputnikV', TrackingChip: 'SOV-5X'}];

//  console.log(filterByProperty(vaccineList,'Technology','mRNA'));
// //  console.log(filterByProperty(vaccineList,'Technology',3)); //nu mai merge, compiletime error
// //  console.log(filterByProperty(vaccineList,'DilutionInML','mRNA')); nu mere