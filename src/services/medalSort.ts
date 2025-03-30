import Medal from '@/interfaces/Medal';
import medalTypes from '@/constants/medalType';

function sortMedalsByGold (medalList: Medal[]): Medal[] {
    return [...medalList].sort((a, b) => b.gold - a.gold || b.silver - a.silver);
}

function sortMedalsBySilver (medalList: Medal[]) {
    return medalList.sort((a, b) => b.silver - a.silver || b.gold - a.gold);
}

function sortMedalsByBronze (medalList: Medal[]) {
    return medalList.sort((a, b) => b.bronze - a.bronze || b.gold - a.gold);
}

function sortMedalsByTotal (medalList: Medal[]) {
    return medalList.sort((a, b) => b.total - a.total || b.gold - a.gold);
}

export function sortMedalListByType (type: string, medalList: Medal[]) {
    switch (type) {
        case medalTypes.GOLD:
            return sortMedalsByGold(medalList);
        case medalTypes.SILVER:
            return sortMedalsBySilver(medalList);
        case medalTypes.BRONZE:
            return sortMedalsByBronze(medalList);
        case medalTypes.TOTAL:
            return sortMedalsByTotal(medalList);
        default:
            return medalList;
    }
}

export function calculateTotalMedals (medalList: Medal[]): Medal[] {
    return medalList.map((medal) => {
        const total = medal.gold + medal.silver + medal.bronze;
        return { ...medal, total };
    });
}
