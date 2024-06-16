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

**Step 3**: Go to [localhost:5800](http://localhost:5800/) i.e., Containerized Firefox Instance

**Step 4**: On the Firefox Instance (mentioned above), go to the following url
```url
http://wikinetes-frontend:3000/
```