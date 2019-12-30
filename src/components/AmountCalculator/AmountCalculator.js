import React, { useState } from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import { MdPersonOutline } from 'react-icons/md'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H1 = styled.h1`
  padding-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
`

const People = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 12rem;
  height: 12rem;
  margin-top: 2rem;
  background-color: #f2d4ab;
  border: 0;
  border-radius: 50rem;
  text-align: center;

  a {
    color: black;
  }

  svg {
    font-size: 6rem;
  }
`

const AmountPeople = styled.span`
  font-size: 2rem;
  line-height: 3rem;
`

const Button = styled.button`
  display: flex;
  position: absolute;
  width: 5rem;
  height: 5rem;
  bottom: 0;
  ${props => (props.left ? `left` : 'right')}: -2.5rem;
  padding: 0;
  background-color: #f2d4ab;
  border: 0;
  border-radius: 50rem;
  text-align: center;
  font-size: 3rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  appearance: none;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const AmountNumber = styled.span`
  font-size: 2.5rem;
`

const Divider = styled.span`
  padding: 0 0.4rem;
  font-size: 2.5rem;
`

export default function AmountCalculator(props) {
  const [people, setPeople] = useState(props.minPersons)
  const [lessAmount, setLessAmount] = useState(props.minAmount)
  const [lessButtonDisabled, setLessButtonDisabled] = useState(true)
  const [moreAmount, setMoreAmount] = useState(props.maxAmount)
  const [moreButtonDisabled, setMoreButtonDisabled] = useState(false)

  const calculateAmount = (persons) => {
      setLessAmount(props.minAmount * persons)
      setMoreAmount(props.maxAmount * persons)
  }

  /**
   * Remove
   */
  const clickLess = () => {
    if (people === props.minPersons) {
      return
    }

    if ((people - 1) === props.minPersons) {
        setLessButtonDisabled(true)
    }

    setPeople(people - 1)
    setMoreButtonDisabled(false)
    calculateAmount(people - 1)
  }

  /**
   * Add
   */
  const clickMore = () => {
    if (people >= props.maxPersons) {
        return
    }

    if ((people + 1) >= props.maxPersons) {
        setMoreButtonDisabled(true)
    }

    setPeople(people + 1)
    setLessButtonDisabled(false)
    calculateAmount(people + 1)
  }

  return (
    <Container>
      <H1>{props.foodName} for how many?</H1>
      <People>
        <MdPersonOutline />
        <AmountPeople>{people}</AmountPeople>
        <Button
          disabled={lessButtonDisabled}
          left
          onClick={() => clickLess()}
        >
          <span>-</span>
        </Button>
        <Button
          disabled={moreButtonDisabled}
          right
          onClick={() => clickMore()}
        >
          <span>+</span>
        </Button>
      </People>
      <div>
        <AmountNumber>{lessAmount}g</AmountNumber>
        {props.maxAmount && (
          <>
            <Divider>-</Divider>
            <AmountNumber>{moreAmount}g</AmountNumber>
          </>
        )}
      </div>
    </Container>
  )
}
