echo "Starting services..."

docker compose up -d postgres redis

npm run dev --workspace services/api-gateway &
npm run dev --workspace services/ai-router &
npm run dev --workspace apps/web
