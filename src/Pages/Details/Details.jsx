import React from 'react'
import Page from '../../components/Page/Page.jsx'
import PlaceDetail from '../../components/PlaceDetail/PlaceDetail.jsx'

const Details = () => {
  
  return (
    <Page>
      <div className="contariner-fluid" style={{marginTop: '10px', marginLeft:'10px'}}>
        <PlaceDetail />
      </div>
    </Page>
  )
}

export default Details