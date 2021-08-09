FROM dgraph/dgraph:latest

RUN dgraph zero &
RUN dgraph alpha &
ADD ./ ./

RUN echo 'ping localhost &' > /bootstrap.sh
RUN echo 'sleep infinity' >> /bootstrap.sh
RUN chmod +x /bootstrap.sh

CMD /bootstrap.sh


# Drop all
#RUN curl "localhost:8080/alter" --silent --request POST --data-binary "./Schema"
#RUN curl "localhost:8080/mutate" --silent --request POST | cat Categories Product Store Properties

