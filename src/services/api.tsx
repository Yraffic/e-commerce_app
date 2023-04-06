import axios from 'axios'

export const api = axios.create({
    baseURL: "https://my-json-server.typicode.com/Yraffic/fake_api",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  })