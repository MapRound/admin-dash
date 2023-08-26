const baseUrl = process.env.NODE_ENV === 'production' ? 'servcies.mapround.co' : 'http://localhost:5556/api/v1'

export default {
  meEndpoint: baseUrl + '/admin/me',
  loginEndpoint: baseUrl + '/users/login',
  registerEndpoint: '/admin/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'logout' // logout | refreshToken
}
