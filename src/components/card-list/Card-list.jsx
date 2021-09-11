
import './Card-list.css'
import { Card } from '../Card/Card'
export const CardList=(props)=>{
    return(
        <div className="card-list">

{
    props.monster.map((ele)=>(
<Card  key={ele.id} ele={ele} />

    ))
}
        </div>
    )

}