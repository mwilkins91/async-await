import React, { Component } from 'react';

class SelectUser extends Component {
  state = {
    userId: '',
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { users, handleSubmit } = this.props;
    const { userId } = this.state;
    return (
      <form
        className="selectUser box"
        action=""
        onSubmit={e => handleSubmit(e, userId)}
      >
        <label className="is-size-3 title" htmlFor="selectUser">
          Select a user:
        </label>
        <select
          onChange={this.handleChange}
          name="userId"
          id="selectUser"
          value={this.state.userId}
          required
          className="is-size-4"
        >
          <option value=""> - </option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <input className="is-size-4" type="submit" value="Load User Info" />
      </form>
    );
  }
}

export default SelectUser;
