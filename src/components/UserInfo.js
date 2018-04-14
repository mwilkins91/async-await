import React, { Component } from 'react';

function UserInfo({ user, pokemon }) {
  return (
    <div className="userInfo">
      <section className="box user">
        <img src={user.avatar} alt={user.name} />
        <div className="content container is-fluid">
          <h2 className="title is-size-4">User Name: {user.name}</h2>
          <p className="is-size-4">
            Favorite Pokemon: <span className="capitalize">{pokemon.name}</span>
          </p>
          <p className="is-size-4">Type: Developer</p>
        </div>
      </section>
      <section className="box pokemon">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="content container is-fluid">
          <h2 className="title is-size-4">
            Pokemon Name: <span className="capitalize">{pokemon.name}</span>
          </h2>
          <p className="is-size-4">Height: {pokemon.height / 10} meters </p>
          <p className="is-size-4">
            Type{pokemon.types.length > 1 ? 's' : ''}:{' '}
            {pokemon.types.map((type, i) => (
              <span key={i}>{type.type.name} </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
}

export default UserInfo;
