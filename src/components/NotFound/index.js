import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'
const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      // console.log(savedVideos)
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFindImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <div className="NotFoundContainer" background-color={bgColor}>
            <div className="NotFoundVideosView">
              <img className="NotFoundVideosImage" src={notFindImageUrl} alt="not found" />
              <h1 className="NotFoundVideosHeading" color={headingColor}>
                Page Not Found
              </h1>
              <p className="NotFoundVideosNote" color={noteColor}>
                We are sorry, the page you requested could not be found.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound