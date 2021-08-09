FROM dgraph/dgraph:latest

RUN dgraph zero &
RUN dgraph alpha &

# drop all
RUN curl "localhost:8080/alter" --silent --request POST --data-binary @Preload/Schema
RUN curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Store  
RUN curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Properties
RUN curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Product
RUN curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true --data-binary @Preload/Categories

ADD ./ ./

RUN echo 'ping localhost &' > /bootstrap.sh
RUN echo 'sleep infinity' >> /bootstrap.sh
RUN chmod +x /bootstrap.sh

CMD ['dgraph', 'zero', '&','&&','dgraph','alpha']