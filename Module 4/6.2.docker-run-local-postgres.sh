#Run the following command
docker run --name myPostgresDb -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=veryverysecret -e POSTGRES_DB=SimpleAWSDB -d postgres
