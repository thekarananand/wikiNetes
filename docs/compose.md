# WikiNetes on Docker Compose

![WikiNetes Application Layout](./composeLayout.svg)
<div align='center'><i>fig: WikiNetes Application Layout on Docker Compose </i></div>

## Steps to deploy on Docker Compose

**Step 1**: Clone this repo 
``` bash
git clone https://github.com/thekarananand/wikiNetes
```

**Step 2**: Build & Deploy Docker Compose Stack
``` bash
cd ./wikiNetes
docker compose up -d --build
```

**Step 3**: Connect to the Containerized Firefox Instance ( [localhost:5800](http://localhost:5800/) )