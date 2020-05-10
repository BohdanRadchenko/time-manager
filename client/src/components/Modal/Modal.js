import React, {Component, createRef} from 'react';
import {connect} from 'react-redux'
import * as controllerSelectors
  from '../../redux/controller/controllerSelectors'
import * as controllerActions
  from '../../redux/controller/controllerActions'
import CreateCardsForm from "../CreateCardsForm/CreateCardsForm";
import CreateBoardsForm from "../CreateBoardsForm/CreateBoardsForm";
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
    this.props.onCloseModalCards();
  };

  handleBackdropClick = e => {
    const {current} = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.onCloseModalCards();
  };

  render() {
    const {isCreateModalCards} = this.props
    return (
        <>
          {isCreateModalCards && (
              <div
                  className={css.backdrop}
                  ref={this.backdropRef}
                  onClick={this.handleBackdropClick}
              >
                    <div className={css.modal}>
                      <CreateCardsForm/>
                    </div>
              </div>
          )}
        </>
    )}
}

const mSTP = state => ({
      isCreateModalCards: controllerSelectors.createModalCards(state),
})

const mDTP = {
  onCloseModalCards: controllerActions.createModalCardsCLose,
}

export default connect(mSTP, mDTP)(Modal)
