CREATE TABLE users {
  _id serial PRIMARY KEY,
  _username varchar(255) NOT NULL,
  _email varchar(255) NOT NULL,
  _password varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
};