import React from 'react'
import { Helmet } from 'react-helmet'
import ezraPic from '../../img/ezra.jpg'

const SEO = () => {
    return <Helmet>
        <title>Ezra Davis | Software Developer</title>
        <meta name='description' content='Ezra Davis is a Software Developer working in Los Angeles, California working primarily with Javascript tools like ReactJS and NodeJS.'/>
        <meta name='image' content={ezraPic}/>
        <meta name='twitter:card' content={ezraPic}/>
        <meta name='twitter:creator' content={''}/>
        <meta name='twitter:description' content='Ezra Davis is a Software Developer working in Los Angeles, California working primarily with Javascript tools like ReactJS and NodeJS.'/>
        <meta name='twitter:title' content={'Ezra Davis | Software Developer'}/>
        <meta name='twitter:image' content={ezraPic}/>
        
    </Helmet>
}

export default SEO