import './index.css'
import {Component} from 'react'

class SearchBar extends Component {
  render() {
    const {handleSearchInput, count} = this.props
    return (
      <div className="search-bar-container">
        <div className="your-passwords">
          <h1>Your Passwords</h1>
          <p>{count}</p>
        </div>

        <div>
          <label htmlFor="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
          </label>
          <input
            id="search"
            placeholder="Search"
            type="search"
            onChange={e => handleSearchInput(e)}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar
