import axios from 'axios'

const token = localStorage.getItem('@EMTechs:token')
const serverUrl = 'https://api-frequencia-senador-sa.emsolucoestecnologicas.com.br/'
const localServer = 'http://localhost:4002/'

const localApi = axios.create({
  baseURL: localServer,
  timeout: 100000,
})

const apiServerSide = axios.create({
  baseURL: serverUrl,
  timeout: 100000,
})

if (token) {
  localApi.defaults.headers.authorization = `Bearer ${token}`
  apiServerSide.defaults.headers.authorization = `Bearer ${token}`
}

export const apiUsingNow = apiServerSide
