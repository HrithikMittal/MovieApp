import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import thunk from 'redux-thunk'
class Item extends React.Component{
    //Api - http://www.omdbapi.com/?apikey=90bfa9a
    // http://www.omdbapi.com/?apikey=90bfa9a&t=Aquaman

    // state = {
    //     movies: []
    //   }
   
  saveFav(id){ 
    var check=false;
    var state = this.props.store.getState();

    state.fav.fav.forEach((movie) => {
        if(movie.imdbID ==id){
            check=true
        }
    })
    if(!check){
      return axios.get(`http://www.omdbapi.com/?apikey=90bfa9a&i=${id}`)
            .then(res => {
              const searchmovie = res.data;
              searchmovie.isFav = true;
              console.log("isfav "+ searchmovie.isFav)
            
            //   console.log(searchmovie)
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
        //   console.log(searchmovie)
        //    return {
        //     type:"ADDFAV",
        //     payload:searchmovie
        //   }
        this.props.saveFav(searchmovie)
        })
    }

   
    renderMovieItems(){
        // console.log(this.state.movies);
        // var currentstate = this.props.getState()
        console.log( "hellos")
        
        console.log( this.props)
        return this.props.movies.movies.map(movie =>( <div style={this.styles.card}>
            <div style={this.styles.image}>
       
                <img style={{width:"100%",height:"100%"}} src={movie.Poster} />
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
            {/* <div>
                <div style={this.styles.nav} >
                <button style={this.styles.button} onClick={}>Movies</button>
                <button style={this.styles.button} onClick={}>Favorites</button>
                </div>
            </div> */}
                <div style={this.styles.flex} >
                    {this.renderMovieItems()}
                    {/* <div style={this.styles.card}>
                        <div style={this.styles.image}>

                        </div>
                        <div style={this.styles.content}>
                            <h1>Hello</h1>
                            <p> lorem jsdhfs sjhfe fwejhfw fwuehrfw fwihefiuwf wufhwbfw efbwf wnmefbwef wefui </p>

                            <h2>9.5</h2>
                            <button style={this.styles.button} >Click Me</button>
                        </div>
                    </div> 
                    <div style={this.styles.card}>
                        <div style={this.styles.image}>

                        </div>
                        <div style={this.styles.content}>
                            <h1>Hello</h1>
                            <p> lorem jsdhfs sjhfe fwejhfw fwuehrfw fwihefiuwf wufhwbfw efbwf wnmefbwef wefui </p>

                            <h2>9.5</h2>
                            <button style={this.styles.button} >Click Me</button>
                        </div>
                    </div> 
                    <div style={this.styles.card}>
                        <div style={this.styles.image}>

                        </div>
                        <div style={this.styles.content}>
                            <h1>Hello</h1>
                            <p> lorem jsdhfs sjhfe fwejhfw fwuehrfw fwihefiuwf wufhwbfw efbwf wnmefbwef wefui </p>

                            <h2>9.5</h2>
                            <button style={this.styles.button} >Click Me</button>
                        </div>
                    </div>  */}
                </div>
            </div>
        </div>
    )}

   
}


//     axios.get(`http://www.omdbapi.com/?apikey=90bfa9a&i=${id}`)
//         .then(res => {
//           const searchmovie = res.data;
//           searchmovie.isFav = true;
//           console.log(searchmovie)
//            return {
//             type:"ADDFAV",
//             payload:searchmovie
//           }
//         })
//     // console.log(movie)
//     //     return {
//     //         type:"ADDFAV",
//     //         payload:movie
//     //       }
// }
const mapStateToProps = state => ({
    movies: state.movies,
    fav:state.fav
  });

const mapDispatchToProps = () => {
    return {
    //   saveFav
    };
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps()
  )(Item);