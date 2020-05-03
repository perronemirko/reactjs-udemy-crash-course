import React from 'react';
//import {dumplogs} from './Utils';
import classes from './BlogCard.module.css'


// import React, { Component } from 'react';
// class BlogCardOld extends Component {

//     state = {
//         likeCount: 0
//     }

//     addlikecount = () => {
//         this.setState({likeCount: this.state.likeCount + 1});
//         //this.setState((preState, prevProp)=>{return {likeCount: preState.likeCount +1} });
//     }

// render(){
//     //console.log(props);
//     //dumplogs( {...this.props});
//         return (
//             <div className={classes.NewBlogCard} key={this.props.id}>
//                 <h1>{this.props.title}</h1>
//                 <p>{this.props.description}</p>

//                 <p>Like count: <span className={classes.LikeCount}>{this.state.likeCount}</span></p>
//                 <button onClick={this.addlikecount}>Like</button>
//             </div>
//         )
//     }
// }

// export default BlogCardOld; // Default export 



const BlogCard = (props) => {

    // addlikecount = () => {
    //     this.setState({likeCount: state.likeCount + 1});
    //     //this.setState((preState, prevProp)=>{return {likeCount: preState.likeCount +1} });
    // }

    //dumplogs(props);

    return (
        <div className={classes.NewBlogCard} key={props.id}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>

            <p>Like count: <span className={classes.LikeCount}>{props.likeCount}</span></p>
            <button onClick={props.onLikeBtnClick}>Like</button>
            {/* {() => props.onLikeBtnClick(props.position)}>Like</button> */}
        </div>
    )
}


export default BlogCard;