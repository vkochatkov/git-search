export interface Props {
  prop?: undefined;
}

export interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
  bio: null;
  blog: string;
  company: null;
  created_at: string;
  email: null;
  followers: number;
  following: number;
  hireable: null;
  location: null;
  name?: string;
  public_gists: number;
  public_repos: number;
  twitter_username: null;
  updated_at: string;
}

export interface Users {
  users: User[];
}

export interface UserState {
  user: User;
}

export interface Repo {
  id: number;
  html_url: string;
  name: string;
  [key: string]: any;
}

export interface ReposProps {
  repos: Repo[];
}

export interface Loading {
  loading: boolean;
}
