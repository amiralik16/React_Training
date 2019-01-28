import React from 'react'
import PropTypes from 'prop-types'
import Button from '../UI/Button/Button';


const orderSummary = (props) => {
  const summary = Object.keys(props.ingredients).map(key=><li key={key}><strong>{key.capitalize()}</strong>: {props.ingredients[key]}</li>)
  return (
    <div>
      <p>You're ordering a dope burger with the following ingredients:</p>
      <ul>
      {summary}
      </ul>
      <p><strong>Total Price: {props.price} USD</strong></p>
      <Button clicked={props.cancel} type="Danger" >Cancel</Button>
      <Button clicked={props.continue} type="Success">Proceed</Button>
    </div>
  )
}

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  cancel: PropTypes.func.isRequired,
  continue: PropTypes.func.isRequired,
}

export default orderSummary
