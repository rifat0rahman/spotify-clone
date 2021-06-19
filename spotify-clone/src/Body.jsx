import React,{useEffect} from 'react';
import './body.css'
import { useDateLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';
import {useParams} from 'react-router-dom'

function Body({ spotify }) {
    let { playlist_id } = useParams();
    const [{ discover_weekly }, dispatch] = useDateLayerValue()

    if (!playlist_id){
        playlist_id = localStorage.getItem('playlist_id')
    }
    
    useEffect(()=>{
        dispatch({
            type:"SET_ID",
            playlist_id:playlist_id
        });
        spotify.getPlaylist(playlist_id).then(response => {
            dispatch({
              type: 'SET_DISCOVER_WEEKLY',
              discover_weekly: response
            });
          });

    },[playlist_id])

    const playPlaylist = () => {
        spotify.play({
            context_uri: `spotify:playlist:${playlist_id}`,
          }).then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          })
      };
      const playSong = () => {
        spotify
          .play({
            uris: [`spotify:track:${playlist_id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={discover_weekly?.images[0]?.url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__song">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} key={item} onClick={playSong} />
                ))}
            </div>
        </div>
    )

}
export default Body