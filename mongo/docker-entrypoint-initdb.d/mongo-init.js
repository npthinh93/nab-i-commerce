print('START');

db = db.getSiblingDB('icommerce');
db.createUser(
  {
    user: 'user',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'icommerce' }],
  },
);
db.createCollection('user');

print('END');
