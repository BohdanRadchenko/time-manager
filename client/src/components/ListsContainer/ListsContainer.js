import React from "react";
import {connect} from 'react-redux'
import * as listsSelectors from '../../redux/lists/listsSelectors'
import DrawLists from "../DrawLists/DrawLists";
import css from './ListsContainer.module.css'

const ListsContainer = ({lists}) => {
  return (
      <div className={css.container}>
        {lists && lists.map(list => (
            <div
                key={list.id}
                className={css.listsContainer}>
              <DrawLists  {...list}/>
            </div>
        ))}
      </div>
  )
}

const mSTP = state => ({
  lists: listsSelectors.getLists(state)
})

export default connect(mSTP)(ListsContainer)