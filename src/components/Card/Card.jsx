import './Card.css'
export const Card=(props)=>{
return(
    <div className="card-container">
<h1>{props.ele.name}</h1>
<img src={`https://robohash.org/set_set3/bgset_bg1/${props.ele.id}?size=150x150`} alt="s"></img>
    </div>
)
}