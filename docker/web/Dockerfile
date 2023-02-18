# nginx
FROM nginx

# タイムゾーン 日本設定
ENV TZ=Asia/Tokyo
# システム時間等の書き換え
RUN echo "${TZ}" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

# nginx config file
COPY ./docker/web/*.conf /etc/nginx/conf.d/
COPY ./docker/web/*.conf.template /etc/nginx/conf.d/
COPY ./docker/web/security/*.conf /etc/nginx/conf.d/security/

# ドキュメントディレクトリパス
WORKDIR /var/www/html