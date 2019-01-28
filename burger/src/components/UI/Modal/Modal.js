import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import PropTypes from 'prop-types'

const modal = (props) => {
    if (props.show) {
        return (
            <>
                <Backdrop show={props.show} cancel={props.cancel} />
                <div className={classes.Modal}>
                    {props.children}
                </div>
            </>
        )
    }
    return (
        <>
            <Backdrop show={props.show} cancel={props.cancel} />
            <div className={[classes.Modal, classes.out].join(' ')}>
                {props.children}
            </div>
        </>
    )
}

// const modal2 = (props) => {
//     return (
//         <div class="modal" tabindex="-1" role="dialog">
//             <div class="modal-dialog" role="document">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h5 class="modal-title">{props.title}</h5>
//                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div class="modal-body">
//                         {props.children}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

modal.propTypes = {
    show: PropTypes.bool.isRequired,
    cancel: PropTypes.func.isRequired
}

export default modal


