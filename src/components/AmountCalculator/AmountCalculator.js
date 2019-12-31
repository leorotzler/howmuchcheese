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
  margin-bottom: 1rem;
  padding-bottom: 0;
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
  font-family: 'Pacifico', cursive;
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

const Span = styled.span`
  width: 100%;
  text-align: center;
`

const AmountNumber = styled.span`
  font-size: 2.5rem;
  font-family: 'Pacifico', cursive;
`

const Divider = styled.span`
  padding: 0 0.4rem;
  font-size: 2.5rem;
`

const CompanionFood = styled.p`
  font-size: 1.8em;
`

const UnitSwitchButton = styled.button`
  display: flex;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  appearance: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  background-color: #f2d4ab;
  border: 0;
`

export default function AmountCalculator(props) {
  const [people, setPeople] = useState(props.minPersons)
  const [lessAmount, setLessAmount] = useState(props.minAmount)
  const [lessButtonDisabled, setLessButtonDisabled] = useState(true)
  const [moreAmount, setMoreAmount] = useState(props.maxAmount)
  const [moreButtonDisabled, setMoreButtonDisabled] = useState(false)

  const [isMetric, setMetric] = useState(true)

  const calculateAmount = persons => {
    setLessAmount(props.minAmount * persons)
    setMoreAmount(props.maxAmount * persons)
  }

  const switchUnits = () => {
    isMetric ? setMetric(false) : setMetric(true)
  }

  /**
   * Remove
   */
  const clickLess = () => {
    if (people === props.minPersons) {
      return
    }

    if (people - 1 === props.minPersons) {
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

    if (people + 1 >= props.maxPersons) {
      setMoreButtonDisabled(true)
    }

    setPeople(people + 1)
    setLessButtonDisabled(false)
    calculateAmount(people + 1)
  }

  const convertGramToOunce = (gram) => {
      return (gram / 28.35)
  }

  return (
    <Container>
      <H1>{props.foodName} for how many?</H1>
      <People>
        <MdPersonOutline />
        <AmountPeople>{people}</AmountPeople>
        <Button disabled={lessButtonDisabled} aria-label={`${props.foodName} for ${people - 1}`} left onClick={() => clickLess()}>
          <Span>-</Span>
        </Button>
        <Button disabled={moreButtonDisabled} aria-label={`${props.foodName} for ${people + 1}`} right onClick={() => clickMore()}>
          <Span>+</Span>
        </Button>
      </People>
      <div>
        <AmountNumber>
          {isMetric ? `${lessAmount}g` : `${Math.round(convertGramToOunce(lessAmount))}oz`}
        </AmountNumber>
        {props.maxAmount && (
          <>
            <Divider>-</Divider>
            <AmountNumber>
              {isMetric ? `${moreAmount}g` : `${Math.round(convertGramToOunce(moreAmount))}oz`}
            </AmountNumber>
          </>
        )}
      </div>
      <CompanionFood>
        And the same amount of {props.companionFood}
      </CompanionFood>
      <UnitSwitchButton onClick={() => switchUnits()}>
        <label>Switch to {isMetric ? 'Imperial' : 'Metric'}</label>
      </UnitSwitchButton>
    </Container>
  )
}
