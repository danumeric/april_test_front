import axios from 'axios'

const API_URL = 'http://localhost:8080/api/auth/'

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + 'signin', {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {

        }

        return response.data
      })
  }

  logout() {
    
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password
    })
  }
}

export default new AuthService()
