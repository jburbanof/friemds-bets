export const formatName = (name: string) => {
	return name.toLowerCase().replace(/\b[a-z]/g, (l) => l.toUpperCase());
};
