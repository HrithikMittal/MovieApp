import React from 'react';
import {connect} from 'react-redux'

class Fav extends React.Component{
    checkDup(id){
        this.props.fav.fav.forEach((fav, index, arr)=>{
            if(fav.imdbID ===id && fav.isFav){
                return index
            }
        })  
    }
    remFavorite(e,rem){
        rem.fav.fav.splice(this.checkDup(e.target.id),1);
        
        this.props.store.dispatch({
            type:"REMFAV",
            payload:rem.fav.fav
          })
    }
    favItems(movie){
        if(movie.Title){
            
            return (<div style={this.styles.card} key={movie.imdbID}>
                <div style={this.styles.image}>
              
                    <img style={{width:"100%",height:"100%"}} src={movie.Poster} alt={movie.name} />
                </div>
                <div style={this.styles.content}>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Type} </p>
    
                    <h2>{movie.year}</h2>
                    
                    <button style={this.styles.button} onClick={(e)=>this.remFavorite(e,this.props)} >Remove Fav</button>
                </div>
            </div>)}
    
    }
    renderFavItems(){
        if(this.props.store.getState().fav.fav!==[]){
        return this.props.store.getState().fav.fav.map(movie =>(this.favItems(movie)) )
        }
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
                    {this.renderFavItems()}
                    
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
  )(Fav);