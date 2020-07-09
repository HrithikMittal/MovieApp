import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
class Item extends React.Component{

  saveFav(id){ 
    var check=false;
    var state = this.props.store.getState();

    state.fav.fav.forEach((movie) => {
        if(movie.imdbID ===id){
            check=true
        }
    })
    if(!check){
      return axios.get(`http://www.omdbapi.com/?apikey=90bfa9a&i=${id}`)
            .then(res => {
              const searchmovie = res.data;
              searchmovie.isFav = true;
            
              this.props.store.dispatch({
                type:"ADDFAV",
                payload:searchmovie
              })
            })
        }
  }
    addFavorite(e){
        axios.get(`http://www.omdbapi.com/?apikey=90bfa9a&i=${e.target.id}`)
        .then(res => {
          const searchmovie = res.data;
          searchmovie.isFav = true;

        this.props.saveFav(searchmovie)
        })
    }

    checkDup(id){
        this.props.movies.movies.forEach((fav, index, arr)=>{
            if(fav.imdbID ===id && fav.isFav){
                return index
            }
        })  
    }
    remFavorite(e,rem){
        rem.movies.movies.splice(this.checkDup(e.target.id),1);

        this.props.store.dispatch({
            type:"REMOVE",
            payload:rem.movies.movies
          })
    }
   
    renderMovieItems(){
        return this.props.movies.movies.map(movie =>( <div key={movie.imdbID} style={this.styles.card}>
            <div style={this.styles.image}>
       
                <img style={{width:"100%",height:"100%"}} src={movie.Poster} alt={movie.name} />
            </div>
            <div style={this.styles.content}>
                <h1>{movie.Title}</h1>
                <p>{movie.Plot} </p>

                <h2>{movie.imdbRating}</h2>
                <h3>{movie.Year}</h3>
                
                <button style={this.styles.button}  id={movie.imdbID} onClick={()=> this.saveFav(movie.imdbID)} >Add to Fav</button>
            </div>
        </div>) )
    }
    
    styles = {
        container:{
            
            paddingTop:30,
            paddingLeft:100,
            paddingBottom:30,
            paddingRight:100,
            borderRadius:5,
        },
        flex:{
            display:"flex",
            flexDirection:"column",
            flexWrap:"true"
        },
        card:{
            marginTop:30,
            marginLeft:100,
            marginBottom:30,
            marginRight:100,
            borderRadius:5,
            backgroundColor:"#efefef",
            display:"flex"
        },
        image:{
            width:230,
            height:300,
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
        nav:{
            marginTop:30,
            marginLeft:100,
            marginBottom:30,
            marginRight:100,
            textAlign:"left"
        }
       
    }
    render(){
    return(
        <div>
            <div style={this.styles.container}>
                <div style={this.styles.flex} >
                    {this.renderMovieItems()}
                    
                </div>
            </div>
        </div>
    )}

   
}
const mapStateToProps = state => ({
    movies: state.movies,
    fav:state.fav
  });

const mapDispatchToProps = () => {
    return {
    };
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps()
  )(Item);