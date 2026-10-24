# ============================================
# NyayaSetu Frontend — Dockerfile
# Multi-stage build: npm build → Nginx serve
# ============================================

# Stage 1: Build the React SPA
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --no-audit

COPY . .

# The API base URL the built JS will call at runtime.
# In production behind docker-compose, Nginx reverse-proxies /api → backend:5000.
ENV VITE_API_BASE_URL=/api

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.27-alpine AS runner

# Remove default Nginx site
RUN rm -rf /usr/share/nginx/html/*

# Copy built SPA assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Custom Nginx config for SPA routing + reverse proxy to backend API
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
