FROM dgraph/dgraph:latest
WORKDIR /dgraph
COPY ./ ./
RUN chmod +x insert.bash
RUN dgraph zero & dgraph alpha & bash insert.bash
RUN rm -r Preload
RUN rm insert.bash
EXPOSE 8080
CMD dgraph zero & dgraph alpha
