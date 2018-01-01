Package.describe({
  name: "mikkelking:presence",
  summary: "A package to help track users' presence",
  version: "1.0.6",
  git: "https://github.com/mikkelking/meteor-presence.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('tracker', 'client');
  api.use('mongo');
  api.use('underscore');

  api.addFiles('lib/common.js');
  api.addFiles('lib/client.js', 'client');
  api.addFiles('lib/server.js', 'server');

  api.export('Presences');
  api.export('Presence');
});
