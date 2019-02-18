import React from 'react'
// import axios from 'axios'

class MySportsFeed extends React.Component {
  state = {
    persons: []
  };


// componentDidMount() {
//   axios.get('https://jsonplaceholder.typicode.com/usershttps://api.mysportsfeeds.com/v1.0/pull/nba/2018-2019-regular/roster_players.json?fordate=20190213',
//   headers: {Authorization: `Basic ${process.env.REACT_APP_MSF_KEY+':'+process.env.REACT_APP_MSF_PASS}`})
//     .then(res => {
//       this.setState({ persons: res.data });
//     })
// }

componentDidMount() {
  fetch('https://api.mysportsfeeds.com/v1.0/pull/nba/2018-2019-regular/roster_players.json?fordate=20190213', {
    method: 'GET',
    headers: {
      Authorization: `Basic ${process.env.REACT_APP_MSF_KEY+':'+process.env.REACT_APP_MSF_PASS}`,
    },
  })
    .then(response => response.json())
    .then((response) => {
      this.setState({ persons: response })
      console.log('in response: ', response);
    })
    .catch((error) => {
      console.log('in fetchJobs error: ', error);
    });
  }



  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    )
  }
}


export default MySportsFeed


// componentDidMount() {
//   axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(res => {
//       this.setState({ persons: res.data });
//     })
// }


// componentDidMount() {
//   fetch('https://api.mysportsfeeds.com/v1.0/pull/nba/2018-2019-regular/roster_players.json?fordate=20190213', {
//     method: 'GET',
//     headers: {
//       Authorization: `Basic ${process.env.REACT_APP_MSF_KEY+':'+process.env.REACT_APP_MSF_PASS}`,
//     },
//   })
//     .then(response => response.json())
//     .then((response) => {
//       console.log('in response: ', response);
//     })
//     .catch((error) => {
//       console.log('in fetchJobs error: ', error);
//     });
//   }
