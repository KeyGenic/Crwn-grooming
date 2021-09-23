import React from 'react'
import '../homepage/homepage.styles.scss'
import Main from '../../components/main/main.components'
import { HomePageConatiner } from './hompage.styles'

const HomePage = () => {
    return(
        <HomePageConatiner>
           <Main />
        </HomePageConatiner>
    )
}

export default HomePage