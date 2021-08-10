echo Inserting Schema
curl -H "Content-Type: application/rdf" -4 --retry 3 --retry-connrefused --retry-delay 10 --connect-timeout 5 localhost:8080/alter --request POST --data-binary @Preload/Schema
echo Adding Files
echo "{set{" > ./Preload/Mutation
cat Preload/Store >>  ./Preload/Mutation
cat Preload/Properties >>  ./Preload/Mutation
cat Preload/Product >>  ./Preload/Mutation
cat Preload/Categories >>  ./Preload/Mutation
echo "}}" >> ./Preload/Mutation
curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Mutations
