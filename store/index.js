import { Octokit } from '@octokit/core';

export const state = () => ({
  projectArray: [],
});

export const mutations = {
  getProjectList (state, newValue) {
    state.projectArray = newValue;
  },
};

export const actions = {
  async nuxtServerInit ({ commit }, { error }) {
    try {
      const octokit = new Octokit({ auth: process.env.authKey });
      const response = await octokit.request('GET /users/{username}/repos', {
        username: 'chartlines',
        sort: 'created', // 依生成日期排序
        direction: 'asc', // 以升序的方向，也即早前晚後
      });
      commit('getProjectList', response.data);
    } catch (err) {
      error(err);
    }
  },
};
