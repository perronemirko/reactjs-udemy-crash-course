import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {isArrayEmpty} from './Utils';
import BlogCard from './BlogCard-component';
import classes from './BlogCard.module.css';

// class App extends React.Component
class App extends Component {

  // Overriding of state of Component
  state = {
    showBlogs: true,
    blogArr : [
      {
        id: 1,
        title: "Blog object title1",
        description:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        likeCount: 0,
      },
      {
        id: 2,
        title: "Blog object title2",
        description:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        likeCount: 0,
      },
      {
        id: 3,
        title: "Blog object title3",
        description:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        likeCount: 0,
      },
    ],

  }


  // onLikeBtnClick = (position) => {
  //   alert(`Like Button Clicked on position ${position +1 }`);
  //   //this.setState({likeCount: state.likeCount + 1});
  //   //this.setState((preState, prevProp)=>{return {likeCount: preState.likeCount +1} });
  // }



  onLikeBtnClick = (position) => {
    //alert(`Like Button Clicked on position ${position +1 }`);
    
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[position];
    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[position] = updatedBlogObj;
    //console.log(updatedBlogObj);
    
    this.setState({blogArr: updatedBlogList});
    //this.setState({likeCount: state.likeCount + 1});
    //this.setState((preState, prevProp)=>{return {likeCount: preState.likeCount +1} });
  }


  onHideBtnClick = () => {
    this.state.showBlogs ? this.setState({showBlogs: false }) : this.setState({showBlogs: true });
  }


  render(){
    console.log("Render App called");
    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard key={item.id} id={item.id} title={item.title} description={item.description} 
        likeCount={item.likeCount} onLikeBtnClick={()=> this.onLikeBtnClick(pos)} /> // onLikeBtnClick={this.onLikeBtnClick}  position={pos} />
      )
    });
  
    return (
        <div className="App">
            <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
            <div style={classes.BlogCard}>
            {
              this.state.showBlogs ? blogCards : null
            }
            </div>

          </div>
        );
    } 
}

export default App;