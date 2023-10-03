import React from "react";

function Trends(){
    return(
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Tendencias</h5>
                    <ul class="list-group">
                        <Trend trend="UAI"/>
                        <Trend trend="Panamericanos"/>
                        <Trend trend="TICS316"/>
                        <Trend trend="Prueba 2"/>
                    </ul>
                </div>
            </div>
    );
}

function Trend(props){
    const {trend} = props;
    return(
        <li class="list-group-item">{trend}</li>
    );
}

export default Trends;