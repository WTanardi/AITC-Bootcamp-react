import React from "react"

const Card = ({id, ipk, firstName, lastName, desc}) => {
    return (
        <div className="md:basis-1/2 lg:basis-1/4 px-2 self-center pb-12">
            <img 
            src={require(`../img/${id}.png`)} 
            alt={`Person ${id}`}
            className="mx-auto"/>
            <span className="border-8 border-[#004681] bg-[#004681] text-white relative bottom-[32px] z-10 rounded-md text-center align-middle 2xl:left-[18px]">IPK {ipk}</span>
            <div className="2xl:pl-[18px]">
                <h2 className="font-bold text-2xl relative bottom-3">{firstName} {lastName}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card