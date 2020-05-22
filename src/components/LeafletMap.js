import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class LeafletMap extends Component {
    static propTypes = {
        /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
        position: PropTypes.array,

        /** Initial zoom level for the map (default 13) **/
        zoom: PropTypes.number,

        /** If set, will display a marker, which when clicked will display this text **/
        markerText: PropTypes.string,
    }

    static defaultProps = {
        position: [39.16651, -0.24162],
        zoom: 16,
        markerText: 'Rte. Salamanca',
    }

    render() {
        return (
            <Map center={this.props.position} zoom={this.props.zoom}>
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {this.props.markerText !== '' && (
                    <Marker position={this.props.position}>
                        <Popup>{this.props.markerText}</Popup>
                    </Marker>
                )}
            </Map>
        )
    }
}

export default LeafletMap
