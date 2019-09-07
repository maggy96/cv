import React from 'react';
import axios from 'axios';
import Repo from './Repo';

const query = `{
    user(login: "maggy96") {
      followers {
        totalCount
      }
      pinnedItems(types: REPOSITORY, first: 6) {
        nodes {
          __typename
          ... on Repository {
            name
            description
            url
            forkCount
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }`;

const getRepos = () => axios({
  url: 'https://api.github.com/graphql',
  auth: {
    username: 'maggy96',
    password: 'bb0088960fbda08db1e26313258e9cbc70390bc9',
  },
  method: 'post',
  data: {
    query,
  },
});

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const repos = await getRepos();
      this.setState({
        repos: repos.data.data.user.pinnedItems.nodes,
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false });
      console.error("Couldn't fetch repos", error);
    }
  }

  render() {
    const { repos, loading } = this.state;
    return (
      <div className="repositories">
        <ul className="list-unstyled">
          {loading && (
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {repos.map((repo) => (
            <Repo
              key={repo.name}
              name={repo.name}
              description={repo.description}
              url={repo.url}
              stars={repo.stargazers.totalCount}
            />
          ))}
        </ul>
        {/* <style jsx>
          {`
            .repositories {
              width: 30rem;
            }
          `}
        </style> */}
      </div>
    );
  }
}

export default Repos;
