import React, { useState, useEffect } from 'react'
import LeafletMap from './LeafletMap'

const Location = props => {
    const [isLarge, setLarge] = useState(window.innerWidth > 1024)

    const updateMedia = () => {
        setLarge(window.innerWidth > 1024)
    }
    useEffect(() => {
        window.addEventListener('resize', updateMedia)
        return () => window.removeEventListener('resize', updateMedia)
    })
    return (
        <>
            {isLarge || props.showInSmallDevices ? (
                <div className="location">
                    <div className="location__container">
                        {typeof window !== 'undefined' && (
                            <LeafletMap
                                position={[39.16651, -0.24162]}
                                zoom={16}
                                markerText={'Rte. Salamanca'}
                            />
                        )}
                        <p className="location__address">
                            Av. Castelló, 6, 46400 Cullera, Valencia
                        </p>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Location
