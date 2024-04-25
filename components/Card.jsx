import React from 'react'

export default function Card(props){
    return (
        <>
            <section className='card'>
                <img className='card-img' src={props.item.imageUrl} alt={props.item.title} />
                <div className='card-info'>
                    <div className='location-info'>
                        <img className='location-img' src="../images/placeholder.png" alt="Location map icon" />
                        <p>{props.item.location}</p>
                        <a href={props.item.googleMapsUrl}
                        target='_blank'>View on Google Maps</a>
                    </div>
                    <h3>{props.item.title}</h3>
                    <p className='card-date'>{props.item.startDate} - {props.item.endDate}</p>
                    <p className='card-desc'>{props.item.description}</p>
                </div>
            </section>
        </>
    )
}


