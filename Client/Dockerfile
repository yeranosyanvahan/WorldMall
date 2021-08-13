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
        -e 's/^#\(LoadModule .*mod_rewrite.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_proxy.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_proxy_http.so\)/\1/' \
        conf/httpd.conf

RUN sed -e "s/<\/VirtualHost>//g" -i conf/extra/httpd-ssl.conf

RUN echo " \n\
ProxyPass /api http://api:8000 \n\
ProxyPass /apis https://api:8000 \n\

<IfModule rewrite_module> \n\
    RewriteEngine On \n\
        RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR] \n\
        RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d \n\
        RewriteRule ^ - [L] \n\
    RewriteRule ^ /index.html \n\
</IfModule> \n\
</VirtualHost> \n\
<VirtualHost *:80>  \n\
  ServerName sell.miom.am \n\
  ServerAlias www.sell.miom.am \n\
  Redirect permanent / https://sell.miom.am/  \n\
</VirtualHost> \n\
" >> conf/extra/httpd-ssl.conf

COPY --from=build /app/build /usr/local/apache2/htdocs/
