import React from 'react'

export default function Cards(props) {
    return (
        <div className='my-2'>
            <div class="card" >
                    <div class="card-body container">
                        <h5 class="card-title ">{props.placename}</h5>
                        <p class="card-text ">{props.state}</p>
                        <p class="card-text ">Latitude:{props.latitude}</p>
                        <p class="card-text ">longitude:{props.longitude}</p>
                    </div>
            </div>
        </div>
    )
}
