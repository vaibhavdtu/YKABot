import React from 'react';
import { Grid, Button, Image } from 'semantic-ui-react';

var openModal = () => {
    location.href = "https://www.google.com";
}

const GoogleForm = () => (
    <div>
        <Grid.Row style={styles.heading}>
            <h2 style={styles.h2}>Sign Up as a mentor</h2>
        </Grid.Row>
        <Grid.Row style={styles.assistance}>
                <Button
                    content='Join'
                    onClick={()=>openModal()} 
                />
        </Grid.Row>
        <Grid.Row style={styles.marginTop}>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <Image src='http://dream.bayyinah.com/wp-content/uploads/2015/09/nouman1.jpg' size='small' shape='circular' style={styles.image}/>
                        <span className="assistance">Nouman Ali Khan</span>

                    </Grid.Column>
                    <Grid.Column>
                        <Image src='../../../assets/img/satyaguru.jpg' size='small' shape='circular'  style={styles.image} />
                        <span className="assistance">Sadhguru</span>

                    </Grid.Column>
            <Grid.Column>
                <Image src='https://images.bwwstatic.com/columnpic6/20089F3C7-B42E-A1DC-7982CCE2664211FE.jpg' size='small' shape='circular' style={styles.image}/>
                <span className="assistance">Ellen Degeneres</span>
            </Grid.Column>
                </Grid.Row>
            </Grid>
        </Grid.Row>
    </div>
);

const styles = {
    heading : {
        marginTop:'27%',
        color:'white',
        fontWeight:'600',
        textAlign:'center'
    },
    h2:{
        fontSize: '3em'
    },
    assistance:{
        height:'5em',
        marginTop:'7%'
    },
    button:{
        color:'#00000',
        weight:'500',
        width:'100px',
        backgroundColor: '#E91E63',
        display: 'block',
        margin: 'auto'
    },
    marginTop:{
        paddingLeft:'10px',
        marginTop:'5%'
    },
    image:{
        marginBottom:'10px'
    }
}

export default GoogleForm;

