import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'
import './index.css'
const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <ul className="VideoCardList">
            {homeVideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </ul>
        ) : (
          <p className="NoVideosView">
            <img className="NoVideosImage"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <h1 className="NoVideosHeading" color={headingColor}>
              No Search results found
            </h1>
            <p className="NoVideosNote" color={noteColor}>
              Try different keywords or remove search filter
            </p>
            <button className="RetryButton" type="button" onClick={onClickRetry}>
              Retry
            </button>
          </p>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideos