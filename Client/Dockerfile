FROM node:16.4 as build
WORKDIR /app
COPY . ./
RUN npm install 
RUN npm run build

FROM httpd:2.4
EXPOSE 80
EXPOSE 443

RUN sed -i \
        -e 's/^#\(Include .*httpd-ssl.conf\)/\1/' \
        -e 's/^#\(LoadModule .*mod_ssl.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_socache_shmcb.so\)/\1/' \
        conf/httpd.conf

RUN echo "<VirtualHost *:80>  \n\
	  ServerName example.com \n\
	  ServerAlias www.example.com \n\
	  Redirect permanent / https://example.com/  \n\
	</VirtualHost>" >> conf/extra/httpd-ssl.conf

COPY --from=build /app/build /usr/local/apache2/htdocs/
