import React from 'react'
import "./ChannelCard.css"
function ChannelCard({id, channel}) {
    return (
        <div className="channelCard">
            <h4>
                <span className="sideChannel_texts">#</span>Javascript
            </h4>
        </div>
    )
}

export default ChannelCard
