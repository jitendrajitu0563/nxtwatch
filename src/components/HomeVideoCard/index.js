import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="link">
            <li className="ListItem">
              <ing classNameThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <div className="VideoDetails">
                <img className="ProfileImage" src={profileImageUrl} alt="channel logo" />
                <div className="ContentSection">
                  <p className="Title" color={textColor}>{title}</p>
                  <p className="ChannelName" color={textColor}>{name}</p>
                  <p className="ViewsAndDate" color={textColor}>
                    {viewCount} views<span className="Dot"> &#8226; </span> {publishedAt}
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

export default HomeVideoCard