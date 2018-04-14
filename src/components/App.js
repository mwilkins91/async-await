import React, { Component } from 'react';
import axios from 'axios';
import SelectUser from './SelectUser';
import UserInfo from './UserInfo';

class App extends Component {
  state = {
    users: [],
    selectedUser: false,
    pokemon: false,
    loading: false,
  };
  
  // Fetch a single user by ID from the server and store it in state
  // Get the user's favorite pokemon from the pokemon API and store it in state
  getUser = (e, userId) => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .get(`/users/${userId}`)
      .then(res => {
        const pokeApi = res.data.pokemonEndpoint;
        this.setState({
          selectedUser: res.data,
        });
        console.log(pokeApi);
        return axios.get(pokeApi);
      })
      .then(res => {
        console.log(res);
        this.setState({
          pokemon: res.data,
          loading: false,
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  // Get an array of all user's IDs/Names from the server to populate our form
  componentDidMount() {
    axios
      .get('/users')
      .then(res => {
        this.setState({
          users: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { users, selectedUser, pokemon, loading } = this.state;

    if (!users.length || loading) {
      // Show the loading screen if we haven't fetched any users yet
      // Or if we're waiting for a request
      return <p className="loading is-size-1 title">Loading...</p>;

    } else if (!selectedUser || !pokemon) {
      // Show the user select screen if we have no user or no pokemon
      return (
        <SelectUser handleSubmit={this.getUser} users={this.state.users} />
      );

    } else {
      // Show the user info screen if we have everything!
      return <UserInfo user={selectedUser} pokemon={pokemon} />;

    }
  }
}

export default App;
