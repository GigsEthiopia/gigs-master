# Gigs Webiste


This is a Gigs project. It is a web application that allows users to create jobs and apply to them. 

Documentation is provided [here](https://localhost/api/docs/designer/index.html).

The code documentation is written down in the /api directory using [rustdoc](https://doc.rust-lang.org/rustdoc/what-is-rustdoc.html). It can be generated by running `cargo doc --open` in the /api directory.

Additionally, there is an API documentation generated by Postman, which can be found at https://documenter.getpostman.com/view/13190321/2s8Z6zzBti

## Development

To run automatically, install Docker and run:

```
docker network create caddy
docker compose -f docker-compose.local.yml  up --build -d
```

This will start your services as close to production as possible, just not available at the normal domain but on localhost.

Docker will eat up all your disk space with build cache, so you might want to clean it up from time to time. To do so, run 
```
docker system prune
``` 

and confirm with `y`.

To run manually, install dependencies and run:

```
cd frontend
pnpm
pnpm dev
```

I like to use pnpm, but yarn or npm should work as well. To install pnpm, run 
```
npm install -g pnpm
```
which you might need superuser-rights for.

Rust API

Install Rust: https://www.rust-lang.org/learn/get-started

Development

```
cd api
cargo watch -x run
```

Production

```
cd api
cargo run --release
```

Of course, you can also install dependencies with npm (then the start script is npm run dev). To install yarn, run

```
npm install -g yarn
```

which you might need superuser-rights for.

## Production

When deploying to production, cd into the _momenTUM-json-maker_ directory (clone it first if you don't have it in your userspace), then run 
```
git pull  && docker network create caddy  && docker compose up -d --build
```

which will automatically pull the latest changes from GitHub, build the project for production, and start the docker containers. You can then access the project at https://make.momentumresearch.eu. The API is running on https://make.momentumresearch.eu.