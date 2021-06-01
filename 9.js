// type VaccineKind = Vaccine['kind']; //lookup type
// type VaccineNumbers = { //mapped types
//     [Kind in VaccineKind] : number; 
// }
// const getSpecialProperties = (vaccine: Vaccine) : string =>
// {
//     switch(vaccine.kind)
//     {
//         case 'Pfizer': 
//             return vaccine.DilutionInML.toString();
//         case 'AstraZeneca':
//             return vaccine.AgeLimit.toString();
//         case 'SputnikV':
//             return vaccine.TrackingChip;
//     }
// }
var getSpecialProperties = function (vaccine) {
    switch (vaccine.kind) {
        case 'Pfizer':
            return { DilutionInML: vaccine.DilutionInML };
        case 'AstraZeneca':
            return { AgeLimit: vaccine.AgeLimit };
        case 'SputnikV':
            return { TrackingChip: vaccine.TrackingChip };
    }
};
var vaccineList = [{ SideEffects: ['nausea', 'fever'], Technology: 'mRNA', DaysBetweenShots: 21, kind: 'Pfizer', DilutionInML: 100 },
    { SideEffects: ['nausea'], Technology: 'mRNA', DaysBetweenShots: 21, kind: 'AstraZeneca', AgeLimit: 60 },
    { SideEffects: ['nausea'], Technology: 'mRNA', DaysBetweenShots: 21, kind: 'AstraZeneca', AgeLimit: 60 },
    { SideEffects: ['nausea', 'fever'], Technology: 'mDNA', DaysBetweenShots: 21, kind: 'SputnikV', TrackingChip: 'SOV-5X' }];
console.log(getSpecialProperties(vaccineList[0]));
