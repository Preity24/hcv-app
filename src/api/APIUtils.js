import axios from 'axios';

const ENDPOINT = {
	getOpportunitiesList: (name) => {
		const queryParams = name ? `/${name}` : '';
		return 'https://api.npoint.io/1cafdc07b52121a52c88';
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