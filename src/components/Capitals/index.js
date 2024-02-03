import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activateId: countryAndCapitalsList[0].id}

  onChangeCountry = event => {
    this.setState({activateId: event.target.value})
  }

  getCountry = () => {
    const {activateId} = this.state
    const activateCountryId = countryAndCapitalsList.find(
      each => each.id === activateId,
    )
    return activateCountryId.country
  }

  render() {
    const {activateId} = this.state
    const country = this.getCountry(activateId)
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="option-container">
            <select
              className="select-class"
              onChange={this.onChangeCountry}
              value={activateId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  key={eachCountry.id}
                  value={eachCountry.id}
                  className="option-items"
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital-details">is capital of which country?</p>
          </div>

          <p className="capital">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
