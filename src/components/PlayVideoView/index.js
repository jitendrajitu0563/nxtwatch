import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'
const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props
  const onClickLike = () => {
    clickLiked()
  }
  const onClickDislike = () => {
    clickDisLiked()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        // const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        const likeIconColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <div className="VideoPlayer">
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <p className="PlayVideoTitle" color={textColor}>
              {videoDetails.title}
            </p>
            <div className="PlayVideoStatusContainer">
              <p className="PlayVideoStatus" color={textColor}>
                {videoDetails.viewCount} views
                <span className="PlayVideoDot"> &#8226; </span>
                {videoDetails.publishedAt}
              </p>
              <div className="PlaySocialButtonsContainer">
                <div className="BtnContainer">
                  <button className="SocialButton"
                    type="button"
                    color={likeIconColor}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <span className="ButtonText">Like</span>
                  </button>
                </div>
                <div className="BtnContainer">
                  <button className="SocialButton"
                    type="button"
                    color={dislikeIconColor}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size={25} />
                    <span className="ButtonText">Dislike</span>
                  </button>
                </div>
                <div className="BtnContainer">
                  <button className="SocialButton"
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <span classNam="ButtonText">{isSaved ? 'Saved' : 'Save'}</span>
                  </button>
                </div>
              </div>
            </div>
            <hr className="HrLine" />
            <div className="ChannelContainer">
              <img className="ChannelImage"
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <div className="ChannelInfo">
                <p className="ChannelName" color={textColor}>{videoDetails.name}</p>
                <p className="ChannelSubscribers" color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </p>
                <p className="ChannelDescription" color={textColor}>
                  {videoDetails.description}
                </p>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideoView