const state = {
  currentUser: localStorage.getItem('username') || null,
  setCurrentUser(username) {
    state.currentUser = username
    localStorage.setItem('username', username)
  },
  logout() {
    state.currentUser = null
    localStorage.removeItem('username')
  },
}

export default state
