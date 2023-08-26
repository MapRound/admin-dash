import React, { useCallback, useMemo, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { Grid } from '@mui/material'
import PageHeader from 'src/@core/components/page-header'
import Typography from 'src/@core/theme/overrides/typography'

const logo = require('../../../../public/images/logos/sketch.png')

const containerStyle = {
  width: '100%',
  height: '80vh',
  marginTop: '20px',
  borderRadius: '22px'
}

const OPTIONS = {
  minZoom: 10,
  maxZoom: 18
}

const LiveTracker = () => {
  const [map, setMap] = useState(null)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  })
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), [])
  console.log('key', process.env.NEXT_PUBLIC_GOOGLE_API_KEY)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentPosition = {
    lat: Number(6.43),
    lng: Number(3.437)
  }

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(currentPosition)
      map.fitBounds(bounds)
      setMap(map)
    },
    [currentPosition]
  )

  const customMarkerIcon = {
    url: '../../../../public/images/logos/sketch.png'
  }

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={OPTIONS}

            // onClick={e => {
            //   setValue('estateLatitude', e.latLng.lat(), {
            //     shouldValidate: true,
            //     shouldDirty: true
            //   })
            //   setValue('estateLongitude', e.latLng.lng(), {
            //     shouldValidate: true,
            //     shouldDirty: true
            //   })
            // }}
          >
            <Marker
              draggable={true}
              onDragEnd={e => {
                // setValue('estateLatitude', e.latLng.lat(), {
                //   shouldValidate: true,
                //   shouldDirty: true
                // })
                // setValue('estateLongitude', e.latLng.lng(), {
                //   shouldValidate: true,
                //   shouldDirty: true
                // })
                console.log(e)
              }}
              position={currentPosition}
            />
          </GoogleMap>
        )}
      </Grid>
      {/* <Grid item xs={12}>
      <Table />
    </Grid> */}
    </Grid>
  )
}

export default LiveTracker
