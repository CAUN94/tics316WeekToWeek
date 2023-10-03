import React from "react";

function Tweet(){
    return(
        <div class="col-md-6 ">
            <div class="card mb-3">
                <div class="card-body">
                <h5 class="card-title">Usuario de Twitter</h5>
                <p class="card-text">Este es un tweet de ejemplo. ¡Me encanta Bootstrap y Twitter!</p>
                <a href="#" class="btn btn-primary m-1"><i class="fas fa-heart"></i> 25</a>
                <a href="#" class="btn btn-primary m-1"><i class="fas fa-retweet"></i> 10</a>
                </div>
            </div>
        </div>
    )
}

export default Tweet;