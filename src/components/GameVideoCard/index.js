// import {Link} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './index.css'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
const VideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`}>
            <li className="GamingListItem">
              <img className="GamingThumbNailImage" src={thumbnailUrl} alt="video thumbnail" />
              <div className="GamingContentSection">
                <p className="GamingTitle" color={textColor}>{title}</p>
                <p className="GamingViewsAndDate" color={textColor}>
                  {viewCount} Watching Worldwide
                </p>
              </div>
            </li>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard