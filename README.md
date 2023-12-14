### adding new projects with their own git history
```sh
git subtree add --prefix=apps/mongodb-ec2-auto-setup https://github.com/valiantlynx/mongodb-ec2-auto-setup.git master --squash
git subtree pull --prefix=apps/mongodb-ec2-auto-setup https://github.com/valiantlynx/mongodb-ec2-auto-setup.git master --squash
git subtree push --prefix=apps/mongodb-ec2-auto-setup https://github.com/valiantlynx/mongodb-ec2-auto-setup.git master

```
