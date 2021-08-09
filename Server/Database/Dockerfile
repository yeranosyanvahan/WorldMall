FROM dgraph/dgraph:latest

RUN dgraph zero &
RUN dgraph alpha &

RUN echo 'ping localhost &' > /bootstrap.sh
RUN echo 'sleep infinity' >> /bootstrap.sh
RUN chmod +x /bootstrap.sh

CMD /bootstrap.sh
