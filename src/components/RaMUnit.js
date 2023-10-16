const RaMUnit=({unit})=>{


    return<div className='RaMUnit'>
        <img alt={unit.name} src={unit.image}></img>
        <div>
            <div>{unit.name}</div>
            <div>{`Species: ${unit.species}`}</div>
            <div>{`Gender: ${unit.gender}`}</div>
            <div>{`Status: ${unit.status}`}</div>
        </div>
        <div>
            {`ID: ${unit.id}`}
        </div>
    </div>
}

export {RaMUnit}