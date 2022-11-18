FROM mcr.microsoft.com/vscode/devcontainers/java:0-17-bullseye
COPY ./ZscalerRootCertificate-2048-SHA256.crt /usr/share/ca-certificates/zscaler/ZscalerRootCertificate-2048-SHA256.crt
RUN echo "zscaler/ZscalerRootCertificate-2048-SHA256.crt" >> /etc/ca-certificates.conf && \
    update-ca-certificates
