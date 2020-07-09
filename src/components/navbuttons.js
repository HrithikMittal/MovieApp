import React from 'react';
import ReactDOM from 'react-dom';
import Item from "./item"
import Fav from "./fav"
export default function Navbuttons(props){
    function renderMovie(e){
        ReactDOM.render(
            <Item store={props.store}/>
            ,
            document.getElementById('main')
          );
          
    } 
    function renderFav(e){
        ReactDOM.render(
            <Fav store={props.store}/>
            ,
            document.getElementById('main')
          );
    }
    const styles = {
        
        nav:{
            paddingTop:5,
            paddingLeft:'10rem',
            paddingBottom:5,
            paddingRight:"10rem",
        },
        button:{
            padding:10,
            backgroundColor:"#24a0ed",
            border:0,
            color:"white",
            borderRadius:4,
            marginRight:10,
        },
    }
    return(
        <div>
            <div>
                <div style={styles.nav} >
                <button style={styles.button} onClick={renderMovie}>Movies</button>
                <button style={styles.button} onClick={renderFav}>Is Favorite</button>
                    
                </div>
            </div>
        </div>
    )

   
}