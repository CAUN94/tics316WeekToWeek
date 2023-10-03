import React from "react";

function Trends(){
    return(
        
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Tendencias</h5>
                    <ul class="list-group">
                        <Trend />
                        <Trend />
                        <Trend />
                    </ul>
                </div>
            </div>
    );
}

function Trend(){
    return(
        <li class="list-group-item">Trend 1</li>
    );
}

export default Trends;