# Installations

- Prettier dans votre application et son extension VSCode
- Eslint dans votre application et son extension Prettier Eslint

## Docker

```bash
docker build -t mon-app-nginx .
docker run -d -p 8080:80 --name mon-app mon-app-nginx
```