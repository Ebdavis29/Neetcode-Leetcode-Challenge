function insertionSortHairByLength(hairs) {
    const sortedHair = [];
    const result = [];

    for (const hair of hairs) {
        const { length } = hair;
        let i = 0;
        
        while (i < sortedHair.length && sortedHair[i].length < length) {
            i++;
        }

        sortedHair.splice(i, 0, hair);
        result.push([...sortedHair]);
    }

    return result;
}

const hairs = [
    { length: 12, pattern: "kinky curly", color: 1 },
    { length: 14, pattern: "deep wave", color: 4 },
    { length: 16, pattern: "loose wave", color: 1 },
    { length: 12, pattern: "straight", color: 2 },
    { length: 10, pattern: "body wave", color: 2 }
];

const sortedHairHistory = insertionSortHairByLength(hairs);
console.log(sortedHairHistory);