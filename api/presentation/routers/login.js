const HttpResponse = require('../helpers/httpResponse')
const MissingParamError = require('../helpers/missing-param-error')

module.exports = class LoginRouter {
  constructor (authUseCase) {
    this.authUseCase = authUseCase
  }

  async route (httpRequest) {
    try {
      if (!httpRequest || !httpRequest.body || !this.authUseCase || !this.authUseCase.auth) {
        return HttpResponse.serverError()
      }
      const { email, password } = httpRequest.body
      if (!email) {
        return HttpResponse.badRequest(new MissingParamError('email'))
      }
      if (!password) {
        return HttpResponse.badRequest(new MissingParamError('password'))
      }
      const accessToken = await this.authUseCase.auth(email, password)
      if (!accessToken) {
        return HttpResponse.unauthorizedError()
      }
      return HttpResponse.success({ accessToken })
    } catch (e) {
      return HttpResponse.serverError()
    }
  }
}
