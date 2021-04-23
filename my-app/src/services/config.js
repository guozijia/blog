const devBaseURL = 'http://localhost:8000'
const proBaseURL = 'http://112.74.38.199:8000'
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 50000