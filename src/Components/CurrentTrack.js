import React,{Fragment} from 'react';
import { useDataLayer } from '../DataLayer/DataLayerProvider';

function CurrentTrack() {
    const [{currentTrack}] = useDataLayer();
    console.log(currentTrack);
    return (
<Fragment>
        <img
        className="footer__albumLogo"
        src={currentTrack?.image}
        alt={currentTrack?.name }
          />
          <div className='footer__songInfo'>
          <h4>{currentTrack?.name || "No Song is Playing" }</h4>
          <p>{currentTrack?.artists.join(", ")}</p>
          </div>
</Fragment>
      );
}

export default CurrentTrack;