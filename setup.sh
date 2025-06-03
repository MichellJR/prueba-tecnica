#!/bin/bash
./vendor/bin/sail up -d        
./vendor/bin/sail composer install
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate
./vendor/bin/sail npm install react react-dom @vitejs/plugin-react --save-dev
./vendor/bin/sail npm install
./vendor/bin/sail npm install axios
./vendor/bin/sail npm install bootstrap @popperjs/core
./vendor/bin/sail npm install react-router-dom
./vendor/bin/sail npm install bootstrap-icons
