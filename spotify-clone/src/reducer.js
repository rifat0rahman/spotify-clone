export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:'',
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            };

        case 'SET_TOKEN':
            localStorage.setItem('token',action.token)
            return {
                ...state,
                token:action.token
            }

        case "SET_PLAYLISTS":
            localStorage.setItem('playlist_id',action.playlists.items[0].id)
            return {
                ...state,
                playlists: action.playlists,
                
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }

        case 'SET_ID':
            
            return{
                ...state,
                playlist_id:action.playlist_id,
            }
        case 'SET_ITEM':
            return {
                ...state,
                item:action.item,
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing:action.playing
            }
        
        default :
            return state
    }
}

export default reducer;