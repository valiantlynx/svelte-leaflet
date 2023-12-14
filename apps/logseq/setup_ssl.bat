@echo off
SET LOGSEQ_DIR=.
SET CERTS_DIR=%LOGSEQ_DIR%\certs
SET SSL_CONF=%LOGSEQ_DIR%\ssl.conf

IF NOT EXIST "%CERTS_DIR%" (
    mkdir "%CERTS_DIR%"
)

:: For Windows, mkcert must be manually installed before running the script, as the script does not handle its installation. Visit the mkcert GitHub repository(https://github.com/FiloSottile/mkcert) for installation instructions.
:: Check if mkcert is installed
where mkcert >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo mkcert is not installed. Please install mkcert and rerun this script.
    exit /b
)

:: The scripts generate certificates for localhost. Replace localhost with your actual domain name or IP address if needed.
:: Install and run mkcert
mkcert -install
mkcert -cert-file "%CERTS_DIR%\logseq.pem" -key-file "%CERTS_DIR%\logseq-key.pem" localhost

:: Create Nginx SSL configuration
(
echo server {
echo    listen  443 ssl;
echo    ssl_certificate /etc/nginx/certs/logseq.pem;
echo    ssl_certificate_key /etc/nginx/certs/logseq-key.pem;
echo.
echo    server_name localhost;
echo.
echo    location / {
echo        root   /usr/share/nginx/html;
echo        index  index.html index.htm;
echo    }
echo }
) > %SSL_CONF%

echo SSL setup complete.

