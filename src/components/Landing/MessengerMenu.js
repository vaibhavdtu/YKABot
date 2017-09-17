import React from 'react';
import { Grid, Image,Item } from 'semantic-ui-react';


const MessengerMenu = () => (
        <div style={styles.page}>
        <Image src='../../../assets/gif/demo.gif' style={styles.image}/>
        <Grid columns={1} style={styles.Content}>
            <Grid.Row>
                <Grid.Column>
                    <h2 style={styles.h2}>Get better opportunities by connecting with uplifting people</h2>
                </Grid.Column>
                    
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Item.Image style={styles.logo}
                        as='a'
                        href='https://www.messenger.com/t/1931708453750930'
                        src='https://cdn.worldvectorlogo.com/logos/facebook-messenger.svg'
                        size='tiny'
                        />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
);

const styles = {
    logo:{
        display: 'block',
        margin: 'auto'
    },
    page: {
        marginTop:'2em'
    },
    h2:{
        fontSize: '0.8em'
    },
    image:{
        height:'60vh',
        display: 'block',
        margin: 'auto'
    },
    Content:{
        marginTop:'10px',
        color:'#E91E63',
        fontSize:'3em',
        fontWeight:'600',
        textAlign:'center' 
    }
}
export default MessengerMenu;





