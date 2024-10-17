
// 'loggedIn' is used in other parts of application. So, Don't forget to change there also
const userlogin = 'islogged'
const loginExpiryKey = 'tokenExpiry'
const Userinfo = 'userinfo'

class Auth  {
  localLogin(authResult) {
    this.tokenExpiry = new Date()
    useCookie(loginExpiryKey).value= this.tokenExpiry
    useCookie('userlogin').value=true
    useCookie(Userinfo).value= authResult.email
  
  }

  Logout() {

    useCookie(loginExpiryKey).value= undefined
    useCookie('userlogin').value=undefined
    useCookie(Userinfo).value= undefined
  }

  isAuthenticated() {
    return (
      new Date(Date.now()) !== new Date(localStorage.getItem(loginExpiryKey)) &&
      useCookie('userLogin').value === 'true'
    )
  }
}

export default new Auth()
