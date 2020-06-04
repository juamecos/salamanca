import React from 'react'
import LeafletMap from './LeafletMap'

const Location = props => {
    return (
        <>
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
        </>
    )
}

export default Location
