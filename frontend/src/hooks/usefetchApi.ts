const usefetchApi = async (url: string, options: RequestInit = {}) => {
	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error('Erro ao buscar os dados');
	}

	const data = await response?.json();
	return data;
};

export default usefetchApi;
	