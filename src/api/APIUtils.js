import axios from 'axios';

const ENDPOINT = {
	getOpportunitiesList: (name) => {
		const queryParams = name ? `/${name}` : '';
		return 'http://localhost:3000/mockData.json';
	}
} 

export const getOpportunitiesListAPI = async () => {
	try {
		const res = await axios.get(ENDPOINT.getOpportunitiesList());
		return res;
	}
	catch (e) {
		throw e;
	}
}