
const axios = require('axios');
const { BASE_URL } = require("../Constants");

const api = axios.create({
    baseURL: BASE_URL
});


describe('fetching Data from Api', () => {
    it('successfully call the api', async () => {
        const post = await api();
        expect(post?.data?.message).toBe('Success');
    });

    it('checking data availibility', async () => {
        const post = await api();
        expect(post?.data?.data?.result?.length).toBe(50);
    });
})