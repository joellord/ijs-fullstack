docker run -d --rm --name mymysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_PASSWORD=pass -p 3306:3306 mysql:5.7   