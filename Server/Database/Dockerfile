FROM dgraph/dgraph:latest

RUN dgraph zero &
RUN dgraph alpha &

ADD ./ ./

# dropping all is not implemented
RUN curl "localhost:8080/alter" --request POST --data-binary @Preload/Schema
RUN curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Store  
RUN curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Properties
RUN curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Product
RUN curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Categories

CMD ['dgraph', 'zero', '&','&&','dgraph','alpha']