# helpful commands

.PHONY: up
up:
	docker compose up

.PHONY: down
down:
	docker compose down

.PHONY: shell
shell:
	docker run -it --mount type=bind,src=./,dst=/opt/app nuxt-blog-test-frontend:latest /bin/sh