import axios from 'axios';

export const userService = {
    async getUserPage(username) {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response;
    },
    async getRepositories(username) {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return response;
    }
}