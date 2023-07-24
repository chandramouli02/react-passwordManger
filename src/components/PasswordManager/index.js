import './index.css'
import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import AddPassword from '../AddPassword'
import PasswordItems from '../PasswordItems'
import SearchBar from '../SearchBar'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    searchInput: '',
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    showPasswords: false,
  }

  handleWebsiteInput = e => {
    this.setState({websiteInput: e.target.value})
  }

  handleUserNameInput = e => {
    this.setState({userNameInput: e.target.value})
  }

  handlePasswordInput = e => {
    this.setState({passwordInput: e.target.value})
  }

  handleAddBtn = e => {
    e.preventDefault()
    const {userNameInput, websiteInput, passwordInput} = this.state
    const newPassword = {
      id: uuidV4(),
      userNameInput,
      websiteInput,
      passwordInput,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  handleDeleteBtn = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  handleSearchInput = e => {
    e.preventDefault()
    this.setState({searchInput: e.target.value})
  }

  handleShowPasswords = e => {
    this.setState({showPasswords: e.target.checked})
  }

  render() {
    const {
      userNameInput,
      websiteInput,
      passwordInput,
      passwordsList,
      searchInput,
      showPasswords,
    } = this.state

    let filteredPasswordsList = passwordsList
    if (searchInput !== '') {
      filteredPasswordsList = passwordsList.filter(eachItem =>
        eachItem.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
      )
    }
    const doesPasswordsPresent = filteredPasswordsList.length > 0
    const passwordsCount = filteredPasswordsList.length
    return (
      <div className="main-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="password-container">
          <div className="add-password-main-container">
            <AddPassword
              handleAddBtn={this.handleAddBtn}
              handlePasswordInput={this.handlePasswordInput}
              handleUserNameInput={this.handleUserNameInput}
              handleWebsiteInput={this.handleWebsiteInput}
              userInput={userNameInput}
              websiteInput={websiteInput}
              passwordInput={passwordInput}
            />
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="passwords-container">
          <SearchBar
            count={passwordsCount}
            handleSearchInput={this.handleSearchInput}
          />
          <div className="show-passwords-container">
            <input
              id="checkbox1"
              type="checkbox"
              onChange={this.handleShowPasswords}
            />
            <label htmlFor="checkbox1">Show passwords</label>
          </div>
          <ul className="passwords-list">
            {doesPasswordsPresent &&
              filteredPasswordsList.map(eachItem => (
                <PasswordItems
                  key={eachItem.id}
                  passwordItem={eachItem}
                  handleDeleteBtn={this.handleDeleteBtn}
                  ShowPasswords={showPasswords}
                />
              ))}
          </ul>

          {!doesPasswordsPresent && (
            <>
              <div className="no-passwords-container">
                <img
                  className="no-passwords-img"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
