import faker from "faker";

const generateType = () => {
    return Math.floor(Math.random() * 10) % 2 === 0 ? "article" : "question";
}

const generateEntry = () => {
    return {
        type: generateType(),
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        image: faker.image.image(),
        notes: faker.lorem.paragraph(),
    }
}

export function getAllPosts(nrOfRecords: number) {
    let allPosts = [];
    while (allPosts.length < nrOfRecords) {
        const entry = generateEntry();
        allPosts.push(entry);
    }
    return allPosts;
}