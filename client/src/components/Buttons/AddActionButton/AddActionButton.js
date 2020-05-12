import React from "react";
import {connect} from 'react-redux'
import * as listsOperations from '../../../redux/lists/listsOperations'
import TextareaAutosize from 'react-textarea-autosize';
import css from './AddActionButton.module.css'

class AddActionButton extends React.Component {
  state = {
    formOpen: false,
    formValue: '',
  }

  openForm = () => {
    this.setState({formOpen: true})
  }

  closeForm = e => {
    this.setState({formOpen: false})
  }

  changeForm = e => {
    this.setState({formValue: e.target.value})
  }

  createForm = e => {
    const name = e.target.name
    const {creteCards, creteLists, boardId, listId} = this.props
    if (name === 'card') {
      const form = {
        value : this.state.formValue,
        boardId,
        listId
      }
      creteCards(form)
      this.setState({formOpen: false, formValue: ''})
    }
    if (name === 'list') {
      const form = {
        title : this.state.formValue,
        boardId,
      }
      creteLists(form)
      this.setState({formOpen: false, formValue: ''})
    }
  }

  renderAddButton = () => {
    const {typeList} = this.props

    const buttonTitle = typeList
        ? 'Add new List'
        : 'Add new Card';

    const buttonType = typeList
        ? 'list'
        : 'card';

    return (
        <div
            attribute={buttonType}
            className={css.renderAddButtonContainer}
            onClick={this.openForm}>
          <p className={css.renderAddParagraph}>
            {buttonTitle}
          </p>
        </div>
    )
  }

  renderForm = () => {
    const {typeList} = this.props;
    const {formValue} = this.state

    const placeholder = typeList
        ? 'Enter list title...'
        : 'Enter title for this card...';

    const buttonTitle = typeList
        ? 'Add List'
        : 'Add Card';

    const buttonName = typeList
        ? 'list'
        : 'card';

    return (
        <div className={css.renderFormContainer}>
          <TextareaAutosize
              // onBlur={e => this.closeForm(e)}
              onChange={e => this.changeForm(e)}
              className={css.textarea}
              placeholder={placeholder}
              value={formValue}
              autoFocus/>
          <div className={css.renderFormControlWrapper}>
            <button
                type='submit'
                name={buttonName}
                onClick={e => this.createForm(e)}
                className={css.renderFormAddButton}>
              {buttonTitle}
            </button>
            <button
                onClick={e => this.closeForm(e)}
                className={css.renderFormCloseButton}>
              <div className={css.renderFormCloseButtonOne}/>
              <div className={css.renderFormCloseButtonTwo}/>
            </button>
          </div>
        </div>
    )
  }

  render() {
    return this.state.formOpen
        ? this.renderForm()
        : this.renderAddButton()
  }
}


const mDTP = {
  creteCards: listsOperations.handleCreateHomeCards,
  creteLists: listsOperations.handleCreateHomeLists,
}

export default connect(null, mDTP)(AddActionButton)