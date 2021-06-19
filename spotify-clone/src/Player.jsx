import Body from './Body'
import Footer from './Footer'
import './player.css'
import Sidebar from './Sidebar'
import {Route,Switch} from 'react-router-dom'


function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar></Sidebar>
                   <Switch>
                       <Route exact path="/">
                            <Body spotify={spotify}></Body>
                       </Route>
                    <Route path="/:playlist_id">
                        <Body spotify={spotify}/>
                    </Route>
                </Switch>
                <Footer spotify={spotify}></Footer>
            </div>
        </div>
    )
}
export default Player