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
  getUser = async (e, userId) => {
    try {
      e.preventDefault();

      // Turn loading screen on
      this.setState({ loading: true });

      // Get the user, store it in selectedUser (off of data)
      const { data: selectedUser } = await axios.get(`/users/${userId}`);

      // Get the pokemon, store it in pokemon (off of data)
      const { data: pokemon } = await axios.get(selectedUser.pokemonEndpoint);

      // Save fetched data to state, loading screen off, and we're done!
      this.setState({
        pokemon,
        selectedUser,
        loading: false,
      });
    } catch (err) {
      //log any errors!
      console.log(err);
    }
  };

  // Get an array of all user's IDs/Names from the server to populate our form
  async componentDidMount() {
    try {
      // Get the list of users, store it in "users" off of data
      const { data: users } = await axios.get('/users');

      // Set the state
      this.setState({ users });
    } catch (err) {
      //log any errors!
      console.log(err);
    }
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
