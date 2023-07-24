import './index.css'
import {Component} from 'react'

class PasswordItems extends Component {
  render() {
    const {passwordItem, handleDeleteBtn, ShowPasswords} = this.props

    const {id, userNameInput, websiteInput, passwordInput} = passwordItem

    const onClickDelete = () => {
      handleDeleteBtn(id)
    }

    return (
      <li className="details-container" key={id}>
        <h1 className="profile">{userNameInput[0].toUpperCase()}</h1>
        <div className="password-details">
          <p>{websiteInput}</p>
          <p>{userNameInput}</p>
          {ShowPasswords && <p>{passwordInput}</p>}
          {!ShowPasswords && (
            <img
              className="hide-password"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
        <button
          className="delete-btn-style"
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            className="delete-btn"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default PasswordItems
