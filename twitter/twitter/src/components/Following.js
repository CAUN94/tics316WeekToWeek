import React from "react";

function Following(){
    const followers = ['John','Thomas','Arthur','Michael']

    return(
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">Siguiendo</h5>
                <ul class="list-group">
                    {followers.map((follower,index) => (
                        <User key={index} userId={index} name={follower} />
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

function User(props){
    const {name} = props
    const {userId} = props
    const url = "https://picsum.photos/id/"+ 7*userId +"/40/40"
    return(
        <li class="list-group-item">
            <img src={url} alt="Persona 3" class="img-thumbnail"></img>
            {name}
        </li>
    );
}

export default Following;