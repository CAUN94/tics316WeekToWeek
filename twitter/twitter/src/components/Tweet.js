import React from "react";

function Tweet(props){
    const {content} = props
    const {name} = props
    return(
        <div class="card mb-3">
            <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{content}</p>
            <a href="#" class="btn btn-primary m-1"><i class="fas fa-heart"></i> 0</a>
            <a href="#" class="btn btn-primary m-1"><i class="fas fa-retweet"></i> 0</a>
            </div>
        </div>
    )
}

export default Tweet;