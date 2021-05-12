import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    return (
        <div className="card my-3 rounded border">
            <span className=" px-3 d-flex justify-content-between align-items-center">
                <p className="py-1 px-3">FEATURED</p>
                <FontAwesomeIcon icon={faHeart} size={'lg'} />
            </span>
            <img src={props.data['img-url']} className="d-block mx-auto" alt={props.data['product-id']} />
            <div className="product-details">
                <h3>Rs {props.data.price}</h3>
                <p>{props.data.title}</p>
                <div className="cardFooter d-flex justify-content-between">
                    <p>{props.data.location}</p>
                    <p>{props.data.date}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;