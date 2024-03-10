import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import VideoCard from '../VideoCard'
import './index.css'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      // console.log(savedVideos)

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <div className="SavedContainer" data-testid="savedVideos"  background-color={bgColor}>
            <div className="SavedVideoTitle">
              <div className="SavedTitleIconContainer">
                <CgPlayListAdd size={35} color="#ff0000" />
              </div>
              <h1 className="SavedText" color={textColor}>Saved Videos</h1>
            </div>
            {savedVideos.length > 0 ? (
              <ul className="SavedVideoList">
                {savedVideos.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </ul>
            ) : (
              <div className="NoSavedVideosView">
                <img className="NoSavedVideosImage"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <h1 className="NoSavedVideosHeading" color={headingColor}>
                  No saved videos found
                </h1>
                <p className="NoSavedVideosNote" color={noteColor}>
                  You can save your videos while watching them
                </p>
              </div>
            )}
          </div>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos