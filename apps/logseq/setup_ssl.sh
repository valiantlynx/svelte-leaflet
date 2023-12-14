#!/bin/bash

# Define paths
LOGSEQ_DIR="."
CERTS_DIR="${LOGSEQ_DIR}/certs"
SSL_CONF="${LOGSEQ_DIR}/ssl.conf"

# Create certs directory if it doesn't exist
mkdir -p "$CERTS_DIR"

# Install mkcert
if ! command -v mkcert &> /dev/null; then
    echo "Installing mkcert..."
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get install libnss3-tools
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        brew install mkcert
    else
        echo "Unsupported OS for automatic mkcert installation."
        exit 1
    fi
fi

# The scripts generate certificates for localhost. Replace localhost with your actual domain name or IP address if needed.
# Install and run mkcert
mkcert -install
mkcert -cert-file "${CERTS_DIR}/logseq.pem" -key-file "${CERTS_DIR}/logseq-key.pem" localhost

# Create Nginx SSL configuration
cat > "$SSL_CONF" << EOF
server {
    listen  443 ssl;
    ssl_certificate /etc/nginx/certs/logseq.pem;
    ssl_certificate_key /etc/nginx/certs/logseq-key.pem;

    server_name localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
}
EOF

echo "SSL setup complete."
