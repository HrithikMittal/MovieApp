import React,{ useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

export default function Navbar(props){
    // http://www.omdbapi.com/?apikey=90bfa9a&s=Aquaman
    const [searchmovies, setSearchMovies] = useState();
    function searchMovie(e){
        axios.get(`http://www.omdbapi.com/?apikey=90bfa9a&s=${e.target.value}`)
        .then(res => {
          const searchmovies = res.data;
          setSearchMovies({ searchmovies });
          
        //   ReactDOM.render(
        //     renderSearchMovies(),
        //     document.getElementById('search')
        //   );
          
        })
    }
    function clearSearch(e){
        e.target.value = ""
    }
    function removeDuplicates(data){
        return data.fiter((value,index) => data.indexOf(value) === index)
    }
    function addMovie(e){
        var check=false;
        console.log("Hello");
        var state = props.store.getState();
        state.movies.movies.forEach((movie) => {
            if(movie.imdbID ==e.target.id){
                check=true
            }
        })
        if(!check){
        axios.get(`http://www.omdbapi.com/?apikey=90bfa9a&i=${e.target.id}`)
        .then(res => {
            const searchmovie = res.data;
            
        //   console.log(searchmovie)
            props.store.dispatch({
            type:"ADDMOVIE",
            payload:searchmovie
          })
        })
    }
    }
    
    function renderSearchMovies(){
  

        if(searchmovies){
        console.log(searchmovies.searchmovies.Response)

            if(searchmovies.searchmovies.Response=="True"){


        return searchmovies.searchmovies.Search.map(movie =>(<div style={styles.card}>
            <div style={styles.image}>
            <img style={{width:"100%",height:"100%"}} src={movie.Poster} />
            </div>
            <div style={styles.content}>
                <h1>{movie.Title}</h1>
                <p>{movie.Type} </p>

                <h2>{movie.Year}</h2>
             
                <button style={styles.button}  id={movie.imdbID}  onClick={addMovie}>Add to movies</button>
            </div>
        </div>) )

}

    }
    }
    const styles = {
        navinp:{
            width:"70%",
            height:30,
            border:0,
            paddingTop:5,
            paddingLeft:10,
            paddingBottom:5,
            paddingRight:10,
            marginTop:"0.5rem",
            marginLeft:"1rem",
            marginBottom:"0.5rem",
            marginRight:"1rem",
            borderRadius:5,
            position:"relative"
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
            backgroundColor: "#0a0a33",
            width:"100%",
            position:"absolute",
            height:50
        },
        dropdown:{
            display: "inline-block",
            // position:"absolute",
            // width:"40%",
            // height:"100px",
            // top:50,
            // backgroundColor:"pink",
            // marginLeft:"11rem",
            // marginRight:"11rem",
            width:"70%",
            // height:30,
            // border:0,
            
            paddingLeft:10,
            
            paddingRight:10,
            marginTop:"0.5rem",
            marginLeft:"1rem",
            marginBottom:"0.5rem",
            marginRight:"1rem",
            position:"relative",
            top:-20,
            backgroundColor:"#f6f6f6"
        },
        card:{
            borderRadius:5,
            backgroundColor:"#efefef",
            display:"flex",
            marginTop:4,
            marginBottom:4,
        },
        image:{
            
            backgroundColor:"#2f2f2f",
            marginRight:100,
           
        },
        content:{
            marginTop:10,
            marginBottom:10,
            textAlign:"left"

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
                  
                    {/* <div style={styles.dropdown}></div> */}
                </div>
                <input style={styles.navinp} placeholder="Search..." onChange={searchMovie} onFocusOut={clearSearch} type="text" name="search" id="search" />
               
               <div style={styles.dropdown} id="search">
                     {renderSearchMovies()}
                     
               </div>
            </div>
        </div>
    )

   
}