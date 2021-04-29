Feature('');

Scenario('test something', ({ I }) => {
    I.startMocking();
    I.mockServer((server) => {
      // mock request only from ap1.com and api2.com and
      // store recording into two different files
      server.any('https://api1.com/*').passthrough(false).recordingName('api1');
      server.any('https://api2.com/*').passthrough(false).recordingName('api2');
    });
    I.stopMocking()
});
