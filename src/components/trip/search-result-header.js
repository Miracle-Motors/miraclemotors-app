import React from "react"
import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { Button } from "../common"

const SearchResultHeader = ({ header, btnOnClick, date, returnTrip }) => {
  return (
    <div className={styles.SearchResultHeader}>
      <h4>SEARCH RESULT</h4>
      <h2>{header}</h2>
      <p>{date}</p>
      {!returnTrip && <Button onClick={btnOnClick}>Modify Search</Button>}
    </div>
  )
}

// SearchResultHeader.propTypes = {
//   header: PropTypes.string,
// }

export default SearchResultHeader
