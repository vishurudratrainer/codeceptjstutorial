Feature('GET tests');
var assert = require('assert')
Scenario('Verify a successful call', async ({ I }) => {
	const res = await I.sendGetRequest('/api/users?page=2');
	assert.equal(res.status, 200);
});

Scenario('Verify a not found call', async ({ I }) => {
	const res = await I.sendGetRequest('/api/users/266');
	assert.equal(res.status, 404);
});

Scenario('Verify getting a single user', async ({ I }) => {
	const res = await I.sendGetRequest('/api/users/2');
	//to get the reponse data, use res.data.data
	assert.equal(res.data.data.id, 2);
});

Scenario('Verify getting list of users', async ({ I }) => {
	const res = await I.sendGetRequest('/api/users?page=2');
	//to get the reponse data, use res.data.data
	assert.equal(res.data.data[0].id, 7);
});
