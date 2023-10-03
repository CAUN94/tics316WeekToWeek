import React from "react";

function Following(){
    return(
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">Siguiendo</h5>
                <ul class="list-group">
                    <User />
                </ul>
            </div>
        </div>
    )
}

function User(){
    return(
        <li class="list-group-item">
            <img src="https://picsum.photos/id/30/40/40" alt="Persona 3" class="img-thumbnail"></img>
            Javiera
        </li>
    );
}

export default Following;