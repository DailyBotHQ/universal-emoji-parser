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

function fix() {
	print.success "Running eslint checks && apply automatic fixes..."
	npm run eslint:fix
	if [ $? != 0 ]; then
    echo ''
		print.error "⚠️ Eslint checks failed, skipping prettier checks..."
		return 1
	fi

	print.success "Running prettier checks && apply automatic fixes..."
	npm run prettier:fix
}

function test() {
  print.success "Running mocha tests..."
	npm run test
}

function codecheck() {
	fix
	if [ $? != 0 ]; then
    echo ''
		print.error "⚠️ Prettier checks failed, skipping mocha tests..."
		return 1
	fi
  test
}

function install() {
  print.success "Running npm install..."
	npm install
}
