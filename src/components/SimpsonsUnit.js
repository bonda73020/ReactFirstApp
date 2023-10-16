const SimpsonsUnit=({unit})=>{
    const {name,job,age,hobbies,friends,image} = unit
    return<div className="SimpsonsUnit">
        <img src={image} alt={`${name} Simpson`}></img>
        <div className="name">{`${name} Simpson`}</div>
        <div>
            <div>{`Age: ${age} years`}</div>
            <div>{`Job: ${job}`}</div>
            <div>{`Hobbies: ${hobbies}`}</div>
            <div>{`Friends: ${friends}`}</div>
        </div>

    </div>
}


export {SimpsonsUnit}