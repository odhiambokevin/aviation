ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

build:
	docker compose up --build -d --remove-orphans
up:
	docker compose up
down:
	docker compose down
config:
	docker compose config
show-logs:
	docker compose logs
migrate:
	docker compose exec backend python manage.py migrate
makemigrations:
	docker compose exec backend python manage.py makemigrations
collectstatic:
	docker compose exec backend python manage.py collectstatic
down-v:
	docker compose down -v
inspect-db:
	docker volume inspect portfolio_postgres_data
psql:
	docker compose exec yaspidb psql -U=postgres -d=yaspigis

