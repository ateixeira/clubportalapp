export default {
  // Functions return fixtures

  getUser: (username, token) => {
    const linkitUser = require('../Fixtures/linkitUser.json')
    const linkitAdmin = require('../Fixtures/linkitAdmin.json')
    return {
      ok: true,
      data: linkitUser
    }
  },
  authenticate: (username, password) => {
    return {
      ok: true,
      data: {
        "id_token": 'A1B2C3='
      }
    }
  }
}
