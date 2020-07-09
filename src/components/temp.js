import React from 'react';
export default function Navbar(){
    const styles = {
        navcontainer:{
            width:"100%",
            
            paddingTop:"1rem",
            paddingLeft:"2rem",
            paddingbottom:"1rem",
            paddingright:"2rem",
            marginTop:"0.5rem",
            marginLeft:"1rem",
            marginBottom:"0.5rem",
            marginRight:"1rem",
            borderRadius:5,
        },
        navsub:{
            height:35,
            border:0,
            marginTop:"0.5rem",
            marginLeft:"1rem",
            marginBottom:"0.5rem",
            marginRight:"1rem",
            borderRadius:5,
        },
        nav:{
            paddingTop:5,
            paddingLeft:'10rem',
            paddingBottom:5,
            paddingRight:"10rem",
            backgroundColor: "#0a0a33"
        }
    }
    return(
        <div>
            <div style={styles.container}>
                <div style={styles.flex} >
                    <div style={styles.card}>
                        <div style={styles.image}>
asdfasdasdfa
                        </div>
                        <div style={styles.content}>
asdfsadf
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )

   
}