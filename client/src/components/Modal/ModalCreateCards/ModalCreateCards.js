import React, {Component, createRef} from 'react';
import {connect} from 'react-redux'
import * as listsOperations from '../../../redux/lists/listsOperations'
import * as controllerSelectors
  from '../../../redux/controller/controllerSelectors'
import * as controllerActions
  from '../../../redux/controller/controllerActions'
import ModalCreateCardsForm from "./ModalCreateCardsForm";
import css from './ModalCreateCards.module.css';

class ModalCreateCards extends Component {
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
    const {isCreateModalCards, onCloseModalCards, onCardsCreate} = this.props
    if (isCreateModalCards) {
      return (
          <>
            <div
                className={css.backdrop}
                ref={this.backdropRef}
                onClick={this.handleBackdropClick}
            >
              <div className={css.modal}>
                <ModalCreateCardsForm
                    onCreate={onCardsCreate}
                    onClose={onCloseModalCards}/>
              </div>
            </div>
          </>
      )
    }
    return null
  }
}

const mSTP = state => (
    {
      isCreateModalCards: controllerSelectors.createModalCards(
          state)
    }
)

const mDTP = {
  onCloseModalCards: controllerActions.createModalCardsCLose,
  onCardsCreate : listsOperations.handleCreateCards
}

export default connect(mSTP, mDTP)(ModalCreateCards)
