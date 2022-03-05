import React from 'react'

const Card = (props) => {
    return (
        <><div className="col-lg-4">
            <div className="card" >
                <img src={props.imgsrc} className="card-img-top img-fluid" alt="my work"/>
                <div className ="card-body">
                <h5 className ="card-title">{props.name}</h5>
                <p className="card-desc">{props.para}</p>
                <a href={props.links} target="_blank">
                    <button className="btn-visit">visit</button>
                </a>
                </div>
            </div>
            </div>

        </>
    )
}

export default Card
