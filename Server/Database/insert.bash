sleep 50s
echo Inserting Schema
curl  --connect-timeout 5  --max-time 10  --retry 5  --retry-delay 0  --retry-max-time 40 localhost:8080/alter --request POST --data-binary @Preload/Schema 
echo ADDING Files
curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Store  
curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Properties 
curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Product 
curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Categories
