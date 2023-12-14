LAMBDA_ARCH = "linux/amd64"
RUST_TARGET = "aarch64-unknown-linux-gnu"
RUST_VERSION = "latest"
RUST_NAME = "rust_on_aws"

al2build () { 
     docker run --platform = $LAMBDA_ARCH \
     --rm --user "$(id -u):$(id -g)" \
     -v "$(pwd)":/user/src/myapp -w /user/src/myapp  rust: $RUST_VERSION \
        cargo build --release --target = $RUST_TARGET
 }

zipRustLambda () { 
     cp ./target/ $RUST_TARGET /release/ $RUST_NAME ./bootstrap \
        && zip lambda.zip bootstrap \
        && rm bootstrap
 }
 