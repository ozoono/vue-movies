import axios from 'axios'

export const key = '5fd51bf2e1f0d2c7ef0470a0e4788414'
export const API = axios.create({
	baseURL: `https://api.themoviedb.org/3/`
})
