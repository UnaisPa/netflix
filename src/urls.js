import {API_KEY} from "./constants/constants"

export const trending=`/trending/all/week?api_key=${API_KEY}&language=en-US`
export const action =`/discover/movie?api_key=${API_KEY}&with_genres=28`
export const originals=`/discover/tv?api_key=${API_KEY}&with_networks=218`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentries = `/discover/movie?api_key=${API_KEY}&with_genres=99`

export const trendingTv = `/discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`
export const trendingT = `/discover/tv?api_key=${API_KEY}&include_adult=false&with_genres=99`

