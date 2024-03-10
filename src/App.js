// import {Route,BrowserRouter,Routes} from 'react-router-dom'
// import ProtectedRoute from './components/ProtectedRoute'
// import LoginForm from './components/LoginForm'
// import Home from './components/Home'
// import VideoDetailView from './components/VideoDetailView'
// import TrendingVideos from './components/TrendingVideos'
// import GamingVideos from './components/GamingVideos'
// import SavedVideos from './components/SavedVideos'
// import NotFound from './components/NotFound'
// import ThemeAndVideoContext from './context/ThemeAndVideoContext'
// import './App.css'
// // class App extends Component {
// //   state = {
// //     savedVideos: [],
// //     isDarkTheme: false,
// //     activeTab: 'Home',
// //   }
// //   changeTab = tab => {
// //     this.setState({activeTab: tab})
// //   }
// //   toggleTheme = () => {
// //     this.setState(prevState => ({
// //       isDarkTheme: !prevState.isDarkTheme,
// //     }))
// //   }
// //   addVideo = video => {
// //     const {savedVideos} = this.state
// //     const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
// //     if (index === -1) {
// //       this.setState({savedVideos: [...savedVideos, video]})
// //     } else {
// //       savedVideos.splice(index, 1)
// //       this.setState({savedVideos})
// //     }
// //   }
// //   removeVideo = id => {
// //     const {savedVideos} = this.state
// //     const updatedSavedVideos = savedVideos.filter(
// //       eachVideo => eachVideo.id !== id,
// //     )
// //     this.setState({savedVideos: updatedSavedVideos})
// //   }
// //   render() {
// //     const {savedVideos, isDarkTheme, activeTab} = this.state
// //     return (
// //       <ThemeAndVideoContext.Provider
// //         value={{
// //           savedVideos,
// //           isDarkTheme,
// //           activeTab,
// //           toggleTheme: this.toggleTheme,
// //           addVideo: this.addVideo,
// //           changeTab: this.changeTab,
// //         }}
// //       >
// //         <BrowserRouter>
// //         <Routes>
// //           <Route path="/login" element={<LoginForm />} />
// //           <Route
// //             path="/"
// //             element={
// //             <ProtectedRoute>
// //                 <Home />
// //             </ProtectedRoute>
// //             }
// //         />
// //           <Route
// //             path="/videos/:id"
// //             element={
// //             <ProtectedRoute>
// //                 <VideoDetailView />
// //             </ProtectedRoute>
// //             }
// //         />
// //         <Route
// //             path="/trending"
// //             element={
// //             <ProtectedRoute>
// //                 <TrendingVideos />
// //             </ProtectedRoute>
// //             }
// //         />
// //           <Route
// //             path="/gaming"
// //             element={
// //             <ProtectedRoute>
// //                 <GamingVideos />
// //             </ProtectedRoute>
// //             }
// //         />
// //           <Route
// //             path="/saved-videos"
// //             element={
// //             <ProtectedRoute>
// //                 <SavedVideos />
// //             </ProtectedRoute>
// //             }
// //         />
// //           <Route path="*" element={<NotFound />} />
// //            </Routes>
// //         </BrowserRouter>
// //       </ThemeAndVideoContext.Provider>
// //     )
// //   }
// // }
// class App extends Component {
//   render() {
//     return (
//         <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//             <ProtectedRoute>
//                 <Home />
//             </ProtectedRoute>
//             }
//         />
//           <Route path="*" element={<NotFound />} />
//            </Routes>
//         </BrowserRouter>
//     )
//   }
// }
// export default App
import './App.css'

// Replace your code here
const App = () => <div>Hello World</div>

export default App