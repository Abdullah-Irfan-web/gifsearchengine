import { createContext,useState } from "react";


const FavoriteContext=createContext({
    Favorites:[],
    FavoriteCount:0,
    addFvrt:(FavGif)=>{},
    removeFvrt:(GifSrc)=>{},
    isFvrt:(GifSrc)=>{}

});

export function FavoriteContextProvider(props){
    const[userFavorite,setUserFavorite]=useState([]);
   
    function addFavorite(FavGif){
        setUserFavorite((prev)=>{
            return prev.concat(FavGif);
        })


    }
    function removeFavorite(GifSrc){
        setUserFavorite(prev=>{
            return prev.filter(gif=>gif!==GifSrc)
        });
    }
    function isFavorite(GifSrc){
        return userFavorite.some(gif=> gif===GifSrc)

    }
    const context={
        Favorites:userFavorite,
        FavoriteCount:userFavorite.length,
        addFvrt:addFavorite,
        removeFvrt:removeFavorite,
        isFvrt:isFavorite
    }
return(
    <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
)

}
export default FavoriteContext;