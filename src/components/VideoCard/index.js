import {Link} from 'react-router-dom'
import './index.css'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'
const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link className="ItemLink" to={`/videos/${id}`} className="link">
            <li className="TrendingListItem">
              <img className="TrendingThumbNailImage"
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <div className="TrendingVideoDetails">
                <img className="TrendingProfileImage"
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <div className="TrendingContentSection">
                  <p className="TrendingTitle" color={textColor}>{title}</p>
                  <p className="TrendingChannelName" color={textColor}>
                    {name}
                  </p>
                  <p className="TrendingViewsAndDate" color={textColor}>
                    {viewCount} views<span className="TrendingDot"> &#8226; </span>
                    {publishedAt}
                  </p>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard