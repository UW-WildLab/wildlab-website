start:
	@npm start

test:
	@npm run test:watch

build:
	@make ready
	@npm run build

ready:
	@make prettier
	@make lint

prettier:
	@npm run prettier

lint:
	@npm run lint

server:
	@cd server && npm install && npm start

.PHONY: start ready build test prettier lint server
