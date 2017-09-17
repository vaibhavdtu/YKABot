import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import GoogleForm from '../Landing/GoogleForm'
import MessengerMenu from '../Landing/MessengerMenu'


const Main = () => (
        <Grid divided='vertically'>
        <Grid.Row columns={2}>
        <Grid.Column style={google}>
        <GoogleForm />
        </Grid.Column>
        <Grid.Column style={messenger}>
        <MessengerMenu />
        </Grid.Column>
        </Grid.Row>
        </Grid>
)

const styles = {
    body: {
        height:'100vh',
    },
    messenger:{
    },
    google:{
        backgroundColor:'#3949ab'
    }
},
      messenger = Object.assign({}, styles.body, styles.messenger),
      google = Object.assign({}, styles.body, styles.google);

export default Main
