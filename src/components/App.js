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
  async componentDidMount() {
    const { data } = await axios.get('/users');
    this.setState({
      users: data,
    });
  }
  render() {
    const { users, selectedUser, pokemon, loading } = this.state;
    if (!users.length || loading) {
      return <p className="loading is-size-1 title">Loading...</p>;
    } else if (!selectedUser || !pokemon) {
      return (
        <SelectUser handleSubmit={this.getUser} users={this.state.users} />
      );
    } else {
      return <UserInfo user={selectedUser} pokemon={pokemon} />;
    }
  }
}

export default App;
