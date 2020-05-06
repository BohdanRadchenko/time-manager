import React, {Component, createRef} from 'react';
import {connect} from 'react-redux'
import * as controllerSelectors
  from '../../redux/controller/controllerSelectors'
import * as controllerActions
  from '../../redux/controller/controllerActions'
import CreateForm from "../CreateForm/CreateForm";
import css from './Modal.module.css';

class Modal extends Component {
  state = {};

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleBackdropClick = e => {
    const {current} = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.onClose();
  };

  render() {
    const {createModal} = this.props
    return (
        <>
          {createModal && (
              <div
                  className={css.backdrop}
                  ref={this.backdropRef}
                  onClick={this.handleBackdropClick}
              >
                <div className={css.modal}>
                  <CreateForm/>
                </div>
              </div>
          )}
        </>
    );
  }
}

const mSTP = state => (
    {
      createModal: controllerSelectors.createModal(state)
    }
)

const mDTP = {
  onClose: controllerActions.createModalClose
}

export default connect(mSTP, mDTP)(Modal)
