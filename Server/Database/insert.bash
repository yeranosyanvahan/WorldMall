echo Inserting Schema
curl -H "Content-Type: application/rdf" -4 --retry 3 --retry-connrefused --retry-delay 10 --connect-timeout 5 localhost:8080/alter --request POST --data-binary @DQL/Schema
echo Adding Files
echo "{set{" > ./DQL/Mutation
cat DQL/Store >>  ./DQL/Mutation
cat DQL/Properties >>  ./DQL/Mutation
cat DQL/Product >>  ./DQL/Mutation
cat DQL/Categories >>  ./DQL/Mutation
echo "}}" >> ./DQL/Mutation
curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @DQL/Mutation
curl -H "Content-Type: application/graphql" -X POST localhost:8080/mutate?commitNow=true --data-binary @Graphql/Gschema
curl -H "Content-Type: application/graphql" -X POST localhost:8080/mutate?commitNow=true --data-binary @Graphql/AddCategory
