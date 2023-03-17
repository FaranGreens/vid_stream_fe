import React from 'react';
import ReactPlayer from "react-player";
function Player({ id, onclick }) {
    // console.log(key)
    let x = window.innerHeight;
    // Hj1vP05HGOg
    return (
        <div style={{marginTop:'80px'}}>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                style={{ backgroundColor: "black" }}
                height="500px"
                width="100%"
                controls={true}
                playing={true}
            
            />
            <button style={{
                position: 'absolute', top: '-10px', right: '-10px', opacity: '0.1', cursor: 'pointer', backgroundColor:"white",width:"50px",
                zIndex:'100'
            }}
                onClick={()=>{onclick(false)}}
            >X</button>
        </div>
    );
}

export default Player;