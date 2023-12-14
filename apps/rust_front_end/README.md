# counter
a simple webapp of a counter. its written in rust. using yew and trunk 

## how to run

assuming you have rust installed, and you have the wasm32 target  and trunk installed, you can run the following command to run the app.

```bash
trunk serve
```


### adding new projects with their own git history
```sh
git subtree add --prefix=apps/rust_front_end https://github.com/valiantlynx/rust_front_end.git master --squash
git subtree pull --prefix=apps/rust_front_end https://github.com/valiantlynx/rust_front_end.git master --squash
git subtree push --prefix=apps/rust_front_end https://github.com/valiantlynx/rust_front_end.git master

```
