import Medal from './Medal';
export default interface MedalTableProps {
	medalList: Medal[];
	sortBy: string;
	setSortBy: Function
}
