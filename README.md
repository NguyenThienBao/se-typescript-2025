# se-typescript-2025
The project use for training on TypeScript

Create file bash.sh

```shell
    filename=$(basename "$1")
    name="$(filename%.*)"
    js_file="$name.js"

    tsc && node bin/"$js_file"
```

Run this in terminal to change build.sh to executable

```shell
    chmod +x build.sh
```

Config script in package.json

```json
    "build": "./build.sh"
```

Run yarn to compiple and run .js file

```shell
yarn build ./src/[filename].ts
```