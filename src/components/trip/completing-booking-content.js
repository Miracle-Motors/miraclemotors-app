import React from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { WrapperCard, RadioButton } from "../common"
import card_vendors from "../../assets/images/cards-vendo.png"

const CompletingBookingContent = ({ paymentMethod, changePaymentMethod }) => {
  return (
    <div className={styles.CompletingBookingContent}>
      <WrapperCard
        title="Passenger Details"
        className={styles.CompletingBookingContent__wrapperCard}
      >
        <div className={styles.CompletingBookingContent__profile}>
          <div className={styles.CompletingBookingContent__profile__info}>
            <p className={styles.CompletingBookingContent__profile__info__text}>
              Full Name:
            </p>
            <p
              className={styles.CompletingBookingContent__profile__info__value}
            >
              Philip Obosi
            </p>
          </div>
          <div className={styles.CompletingBookingContent__profile__info}>
            <p className={styles.CompletingBookingContent__profile__info__text}>
              Phone Number:
            </p>
            <p
              className={styles.CompletingBookingContent__profile__info__value}
            >
              08136353650
            </p>
          </div>
          <div className={styles.CompletingBookingContent__profile__info}>
            <p className={styles.CompletingBookingContent__profile__info__text}>
              Email Address:
            </p>
            <p
              className={styles.CompletingBookingContent__profile__info__value}
            >
              philip.c.obosi@gmail.com
            </p>
          </div>
          <div className={styles.CompletingBookingContent__profile__info}>
            <p className={styles.CompletingBookingContent__profile__info__text}>
              Address:
            </p>
            <p
              className={styles.CompletingBookingContent__profile__info__value}
            >
              8 Odoh lane, Benin, Nigeria
            </p>
          </div>
        </div>
      </WrapperCard>

      <WrapperCard
        title="Payment Method"
        className={styles.CompletingBookingContent__wrapperCard}
      >
        <form className={styles.CompletingBookingContent__payment}>
          <div className={styles.CompletingBookingContent__payment__selection}>
            <RadioButton
              name="payment"
              onChange={() => changePaymentMethod("card")}
              label="Debit / Credit Card"
              checked={paymentMethod === "card"}
              className={styles.CompletingBookingContent__payment__radio}
            />
            <img src={card_vendors} alt="Card Vendors" />
          </div>
          <RadioButton
            name="payment"
            label="Pay on Arrival"
            onChange={() => changePaymentMethod("arrival")}
            checked={paymentMethod === "arrival"}
            className={styles.CompletingBookingContent__payment__radio}
          />
        </form>
      </WrapperCard>
    </div>
  )
}

CompletingBookingContent.propTypes = {}

export default CompletingBookingContent
