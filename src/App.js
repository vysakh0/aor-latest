import React from 'react';
import { Delete, Admin, Resource } from 'admin-on-rest';
import buildApolloClient from "aor-graphql-client-graphcool";

import { UserList, UserEdit } from './users';

class App extends React.Component {
  constructor() {
    super();
    this.state = { restClient: null };
  }
  componentDidMount() {
    buildApolloClient({ client: { uri: `${process.env.REACT_APP_URL}` } }).then(
      restClient => this.setState({ restClient })
    );
  }

  render() {
    const { restClient } = this.state;

    if (!restClient) {
      return <div>Loading</div>;
    }

    return <Admin restClient={restClient}>
      <Resource
        edit={UserEdit}
        remove={Delete}
        name="User" list={UserList} />
    </Admin>
  }
}

export default App;
