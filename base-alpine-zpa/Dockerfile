FROM mcr.microsoft.com/devcontainers/base:0-alpine-3.16
COPY ./ZscalerRootCertificate-2048-SHA256.crt /usr/share/ca-certificates/zscaler/ZscalerRootCertificate-2048-SHA256.crt
RUN apk update && \
    apk add ca-certificates && \
    rm -rf /var/cache/apk/* && \
    echo "zscaler/ZscalerRootCertificate-2048-SHA256.crt" >> /etc/ca-certificates.conf && \
    update-ca-certificates
