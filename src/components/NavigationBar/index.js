import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'
class NavigationBar extends Component {
  // const onClickTab = () => {}

  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickTabHome = () => {
          changeTab('Home')
        }
        const onClickTabTrending = () => {
          changeTab('Trending')
        }
        const onClickTabGaming = () => {
          changeTab('Gaming')
        }
        const onClickTabSaved = () => {
          changeTab('Saved')
        }

        return (
          <div className="NavBar">
            <div className="NavigationLgContainer" background-color={bgColor}>
              <ul className="NavOptions">
                <link className="NavLink"to="/">
                  <li className="NavLinkContainer"
                    key="home"
                    background-color={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickTabHome}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <p className="NavText" color={textColor}>Home</p>
                  </li>
                </link>

                <link className="NavLink"to="/trending">
                  <li className="NavLinkContainer"
                    key="trending"
                    background-color={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTabTrending}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <p className="NavText" color={textColor}>Trending</p>
                  </li>
                </link>

                <link className="NavLink"to="/gaming">
                  <li className="NavLinkContainer"
                    key="gaming"
                    background-color={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickTabGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <p className="NavText" color={textColor}>Gaming</p>
                  </li>
                </link>

                <link className="NavLink"to="/saved-videos">
                  <li className="NavLinkContainer"
                    key="saved"
                    background-color={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickTabSaved}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <p className="NavText" color={textColor}>Saved Videos</p>
                  </li>
                </link>
              </ul>
              <div className="ContactInfo">
                <p className="ContactHeading" color={textColor}>CONTACT US</p>
                <div className="ContactIcons">
                  <img className="ContactImage"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <img className="ContactImage"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <img className="ContactImage"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <p className="ContactNote" color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </p>
              </div>
            </div>
            <nav className="NavigationSmallContainer" background-color={bgColor}>
              <link className="NavLink"to="/">
                <AiFillHome
                  size={30}
                  onClick={onClickTabHome}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </link>
              <link className="NavLink" to="/trending">
                <HiFire
                  size={30}
                  onClick={onClickTabTrending}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </link>
              <link className="NavLink" to="/gaming">
                <SiYoutubegaming
                  size={30}
                  onClick={onClickTabGaming}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </link>
              <link className="NavLink" to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  onClick={onClickTabSaved}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </link>
            </nav>
          </div>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}
export default NavigationBar