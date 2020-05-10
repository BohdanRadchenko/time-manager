import React, {Component, createRef} from 'react';
import {connect} from 'react-redux'
import * as boardsOperations from '../../../redux/boards/boardsOperations'
import * as controllerSelectors
  from '../../../redux/controller/controllerSelectors'
import * as controllerActions
  from '../../../redux/controller/controllerActions'
import css from './ModalCreateBoards.module.css';
import ModalCreateBoardsForm from "./ModalCreateBoardsForm";

class ModalCreateBoards extends Component {
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
    this.props.onCloseModalBoards();
  };

  handleBackdropClick = e => {
    const {current} = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.onCloseModalBoards();
  };

  render() {
    const {isCreateModalBoards, onCloseModalBoards, onBoardsCreate} = this.props
    if (isCreateModalBoards) {
      return (
          <>
            <div
                className={css.backdrop}
                ref={this.backdropRef}
                onClick={this.handleBackdropClick}
            >
              <div className={css.modal}>
                <ModalCreateBoardsForm
                    onCreate={onBoardsCreate}
                    onClose={onCloseModalBoards}/>
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
      isCreateModalBoards: controllerSelectors.createModalBoards(
          state)
    }
)

const mDTP = {
  onCloseModalBoards: controllerActions.createModalBoardsClose,
  onBoardsCreate : boardsOperations.boardsCreate
}

export default connect(mSTP, mDTP)(ModalCreateBoards)
