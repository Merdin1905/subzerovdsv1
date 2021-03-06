const proxie = require('./proxie.js');

const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./proxie.js', {
  token: proxie.token,
  autoSpawn: true
});

shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));