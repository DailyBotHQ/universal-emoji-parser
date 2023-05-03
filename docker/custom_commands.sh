#!/bin/bash

function print.success {
	GREEN="\033[0;32m"
  RESET="\033[0m"
  echo -e "${GREEN}$1${RESET}"
}

function print.error {
	RED="\033[0;31m"
  RESET="\033[0m"
  echo -e "${RED}$1${RESET}"
}

# greet the user
function codecheck() {
	print.success "Running eslint checks..."
	npm run eslint:fix
  print.success "Running prettier checks..."
	npm run prettier:fix
  print.success "Running mocha tests..."
	npm run test
}
