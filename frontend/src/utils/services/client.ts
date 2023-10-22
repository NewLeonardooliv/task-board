import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'token': token } = parseCookies();

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BOARD,
});

if (token) {
	api.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export { api }