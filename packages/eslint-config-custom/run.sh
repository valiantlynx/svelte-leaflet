git subtree add --prefix=packages/eslint-config-custom https://github.com/valiantlynx/eslint-config-custom.git valiantlynx-turborepo --squash
git subtree pull --prefix=packages/eslint-config-custom https://github.com/valiantlynx/eslint-config-custom.git valiantlynx-turborepo --squash

git subtree push --prefix=packages/eslint-config-custom https://github.com/valiantlynx/eslint-config-custom.git valiantlynx-turborepo
