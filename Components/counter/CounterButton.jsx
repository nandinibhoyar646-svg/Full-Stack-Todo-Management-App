 
 import {PropTypes} from 'prop-types'
 
 export default function CounterButton({by,incrementMethod,decrementMethod}){
    
    return(
        <div className="Counter">
        
            <div>
                <button className="CounterButton"
                        onClick={()=>incrementMethod(by)}
                        
                >+{by}</button>

                <button className="CounterButton"
                        onClick={()=>decrementMethod(by)}      
                >-{by}</button>
            </div>
         </div>
    )
}
CounterButton.propTypes={
    by:PropTypes.number
}
CounterButton.defaultProps={
    by:5
}

