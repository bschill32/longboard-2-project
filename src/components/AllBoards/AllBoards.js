import React, { Component } from "react"
import { connect } from "react-redux"
// import Carousel from 'react-bootstrap/Carousel'

import "./AllBoards.css"
import EachBoard from "../EachBoard/EachBoard"
import { getAllBoards } from "../../ducks/reducers/boardReducer"

class AllBoards extends Component {
  componentDidMount() {
    this.props.getAllBoards()
  }

  render() {
    // console.log("11111", this.props)
    let allBoards = this.props.allBoards.map((val, i, arr) => {
      return <EachBoard key={val.id} board={val} />
    })

    return (
      <div id="boards">
        {/* <div className="page-container">
          <h1 className="page-title">Longboards</h1>
        </div> */}
        <div className="boards-container">
          <div className="longboards">{allBoards}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxStoreState) {
  return {
    allBoards: reduxStoreState.allBoards.boards
  }
}

export default connect(
  mapStateToProps,
  { getAllBoards }
)(AllBoards)
