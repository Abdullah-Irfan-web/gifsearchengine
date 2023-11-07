import React from 'react'
import { useContext } from 'react'
import FavoriteContext from '../Fav'
import Image from 'next/image'
const gif = (props) => {
    const Favctx=useContext(FavoriteContext);
    const itemisfav=Favctx.isFvrt(props.data.images.fixed_height.url);
    function togglefavbtn(){
      console.log(props.data.images.fixed_height.url)
      if(itemisfav){
        Favctx.removeFvrt(props.data.images.fixed_height.url)
      }
      else{
        Favctx.addFvrt(props.data.images.fixed_height.url);
      }
    }
  return (
    <div>
        
           <Image height={100} width={100}  alt="gif" className='img' src={props.data.images.fixed_height.url} />
           <div className='favbtn'>
        <button className='favrbtn' onClick={togglefavbtn}>{itemisfav?'Remove from Favorites':'To Favorite'}</button>
    </div>
        </div>
  )
}

export default gif
