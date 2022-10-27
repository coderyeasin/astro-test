const dotenv = require('dotenv')
const fs = require('fs');
const path = require('path');
const algoliasearch = require('algoliasearch');
const matter = require('gray-matter');

try {
    dotenv.config()
    if(!process.env.ASTRO_ALGOLIA_APP_ID){
      throw new Error('api id not define') 
    }
    if(!process.env.ASTRO_ALGOLIA_API_KEY){
        throw new Error('api key not define') 
    }
} catch (error) {
    console.log(error);
    process.exit(1)
}

const CONTENT_PATH = path.join(process.cwd(), "src/pages/posts/en");
const contentFilePaths = fs.readdirSync(CONTENT_PATH).filter((path) => /\.{md,mx}?$/.test(path))

async function getAllBlogPosts() {
    const articles = contentFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(CONTENT_PATH, filePath))
        const {content, data} = matter(source)
        return{
            content,
            data,
            filePath
        }
    })
    return articles
}

function transformPostsToSearchObjects(articles){
    const transform = articles.map(article => {
        return {
            objectId: article.data.title,
            title: article.data.title,
            description: article.data.excerpt,
            slug:article.filePath,
            date: article.data.date
        };
    });
    return transform;
}

(async function(){
    dotenv.config();
    try{
        const articles = await getAllBlogPosts();
        const transform = transformPostsToSearchObjects(articles);

        const client = algoliasearch(process.env.ASTRO_ALGOLIA_APP_ID, process.env.ASTRO_ALGOLIA_API_KEY);
        const index = client.initIndex("netlify_f7c3c02f-9e4e-41fc-a0ba-3b2b050640c8_algo-test_all");
        
        const algoliaResponse = await index.saveObjects(transform);
        console.log(`successfully added ${algoliaResponse.objectId.length} records`);
    }
    catch(err){
        console.log(err);
    }
})
