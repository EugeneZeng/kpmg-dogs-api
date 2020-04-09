interface BreedList { [propName: string]: Array<string>; }

export default (breedList: BreedList) =>
    Object.keys(breedList)
        .reduce((acc, key: string) =>
            acc.concat(breedList[key].length ?
                breedList[key].map((subBreed: string) => ({ breed: key, subBreed }))
                : [{ breed: key }])
            , []
        );