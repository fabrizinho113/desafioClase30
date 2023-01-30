# Desafio clase 30

- npm install

## Clusters

pm2 start ./src/server.js --name="Cluster8082" --watch -i 2  -- -p 8082
pm2 start ./src/server.js --name="Cluster8083" --watch -i 2  -- -p 8083
pm2 start ./src/server.js --name="Cluster8084" --watch -i 2  -- -p 8084
pm2 start ./src/server.js --name="Cluster8085" --watch -i 2  -- -p 8085

--------------------------------------

pm2 list

--------------------------------------

sudo nvim nginx.conf

sudo nginx -t

sudo service nginx stop

sudo service nginx start

pm2 monit

