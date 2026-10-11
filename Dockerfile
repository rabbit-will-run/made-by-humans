FROM node:22.12.0-slim AS base
WORKDIR /usr/src/app

# Install dependencies
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json package-lock.json /temp/dev/
RUN cd /temp/dev && npm ci


# Dev
FROM base AS dev
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Install common CLI tooling for development/debugging.
# RUN apt-get update \
# 	&& apt-get install -y --no-install-recommends git bash openssh-client ca-certificates \
# 	&& rm -rf /var/lib/apt/lists/*

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# # Serve (Nginx)
# # Note: The image used is not unprivileged, alpine, or slim so we can run dev container with tooling available (using devcontainer as the actual dev environment so we can keep our personal host laptop safe from supply chain attacks)
# FROM nginx:1.31.2 AS release

# # Bring Node.js tooling into the nginx runtime image.
# COPY --from=base /usr/local/ /usr/local/


# COPY --from=prerelease --chown=nginx:nginx /usr/src/app/build /usr/share/nginx/html

# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
