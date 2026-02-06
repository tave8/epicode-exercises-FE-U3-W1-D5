import { Component } from "react"

// profile page components
import MyProfileTitle from "./components/profile/MyTitle"
import MyProfileSettings from "./components/profile/MySettings"
import MyProfileActions from "./components/profile/MyActions"

class ProfileMain extends Component {
  render() {
    return (
      <>
        <MyProfileTitle />
        <MyProfileSettings />
        <MyProfileActions />
      </>
    )
  }
}

export default ProfileMain
