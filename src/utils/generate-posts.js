import faker from "faker";
const allTags = [
  "health",
  "since",
  "gaming",
  "sports",
  "food",
  "comedy",
  "movies",
  "populars",
  "politics",
  "family",
];
const generateTags = () => {
  const times = faker.random.number({ min: 2, max: 5 });
  const tags = [];
  for (let i = 0; i < times; i += 1) {
      const tag = faker.random.arrayElement(allTags);
      if(!tags.includes(tag)) {
          tags.push(tag);

      }
  }
  return tags;
};
const generatePosts = (amount= 1) => {
    const posts = [];
    for(let i= 0; i < amount; i++){
        posts.push({
            id: faker.random.uuid(),
            // createAt: faker.data.recent(),
            text: faker.lorem.paragraph(3),
            author: {
                name: faker.name.findName(),
                avatar: faker.image.avatar(),
            },
            tags: generateTags(),
        })
    };
    return posts;
};
const items = JSON.stringify(generatePosts(6));
export default items;