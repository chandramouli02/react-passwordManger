import './index.css'
import {Component} from 'react'

class AddPassword extends Component {
  render() {
    const {
      handleAddBtn,
      handlePasswordInput,
      handleUserNameInput,
      handleWebsiteInput,
      userInput,
      websiteInput,
      passwordInput,
    } = this.props

    return (
      <div className="add-password-container">
        <h1>Add New Password</h1>
        <form>
          <div>
            <label htmlFor="website-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
            </label>
            <input
              value={websiteInput}
              onChange={handleWebsiteInput}
              id="website-input"
              placeholder="Enter Website"
            />
          </div>
          <div>
            <label htmlFor="username">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
            </label>
            <input
              value={userInput}
              onChange={handleUserNameInput}
              id="username"
              placeholder="Enter Username"
            />
          </div>
          <div>
            <label htmlFor="password-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
            </label>
            <input
              value={passwordInput}
              onChange={handlePasswordInput}
              type="password"
              id="password-input"
              placeholder="Enter Password"
            />
          </div>
          <div className="add-button-container">
            <button onClick={handleAddBtn} type="submit" data-testid="add">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddPassword
