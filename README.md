# kpmg-dogs-api
Build for dogs api.

## How to run the project
* Download the project from git.
* Run `cd kpmg-dogs-api` to get into the project folder;
* If you have docker and docker-compose installed in your local, then you may run `yarn & yarn build:start` to have the project started;
* If not or if you just want to run it in your local node enviroment, then you may run `yarn & yarn watch`;
* After startup the project with above both way, you may access the service with port of 3000: http://localhost:3000/list

## API Usage
### Fetch all the dog breeds and sub breeds:
```bash
curl http://localhost:3000/list
```

### Fetch all the images with breed only 
- http://localhost:3000/images/{nameOfBreed}, for example:
```bash
curl http://localhost:3000/images/hound
```
### Fetch all the images with breed and sub breed 
- http://localhost:3000/images/{nameOfBreed}/{nameOfSubBreed}, for example:
```bash
curl http://localhost:3000/images/hound/afghan
```

## Testing
* Execute `yarn & yarn test` in the project folder.