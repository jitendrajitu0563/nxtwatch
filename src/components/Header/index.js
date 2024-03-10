import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'
const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <nav className="NavbarHeader" background-color={bgColor}>
          <Link to="/">
            <img
              className="HeaderLogo"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <div className="ActionsContainer">
            <button
              className="ThemeButton"
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </button>
            <img
              className="ProfileImage"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <button
                  className="LogoutButton"
                  type="button"
                  background-color={bgColor}
                  color={color}
                >
                  Logout
                </button>
              }
            >
              {close => (
                <div className="ModalContainer">
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <div className="ButtonsContainer">
                    <button
                      className="CloseButton"
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>

                    <button
                      className="ConfirmButton"
                      type="button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <button className="LogoutIconButton" type="button">
                  <FiLogOut size={25} color={color} />
                </button>
              }
              className="popup-content"
            >
              {close => (
                <div className="ModalContainer">
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <div className="ButtonsContainer">
                    <button
                      className="CloseButton"
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>

                    <button
                      className="ConfirmButton"
                      type="button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </nav>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default Header
