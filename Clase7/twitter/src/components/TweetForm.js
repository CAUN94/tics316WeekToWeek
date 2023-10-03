import React from "react";

function TweetForm(){
    return(
        <div class="col-md-3 mb-3">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Nueva publicación</h5>
                <form>
                <div class="mb-3">
                    <textarea class="form-control" rows="3" placeholder="¿Qué estas pensando?"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Publicar</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default TweetForm;