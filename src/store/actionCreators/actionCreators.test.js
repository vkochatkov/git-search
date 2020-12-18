import configureMockStore from 'redux-mock-store';
import { setLoading, setRepos, search } from './actionCreators';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let store;
  let fetchedData = [
    {
      avatar_url: 'https://avatars1.githubusercontent.com/u/5108906?v=4',
      events_url: 'https://api.github.com/users/vitaly-t/events{/privacy}',
      followers_url: 'https://api.github.com/users/vitaly-t/followers',
      following_url:
        'https://api.github.com/users/vitaly-t/following{/other_user}',
      gists_url: 'https://api.github.com/users/vitaly-t/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/vitaly-t',
      id: 5108906,
      login: 'vitaly-t',
      node_id: 'MDQ6VXNlcjUxMDg5MDY=',
      organizations_url: 'https://api.github.com/users/vitaly-t/orgs',
      received_events_url:
        'https://api.github.com/users/vitaly-t/received_events',
      repos_url: 'https://api.github.com/users/vitaly-t/repos',
      score: 1,
      site_admin: false,
      starred_url:
        'https://api.github.com/users/vitaly-t/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/vitaly-t/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/vitaly-t',
    },
  ];

  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_TODO_SUCCESS when fetching to-dos has been done', () => {
    nock('https://localhost:8000').get('/api/users').reply(200, fetchedData);

    return store.dispatch(search('kochatkov')).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
