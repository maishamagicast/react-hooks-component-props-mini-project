// Make an ArticleList component as a child of App. It should return:

import  Article  from './Article'

// a <main> element with the following components inside:
// an array of Article components (one component for each of the posts passed down as props to ArticleList)
// make sure to assign a unique key attribute to each Article


 function ArticleList({posts}){
    return(
        <main>
             {/* {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    }, */}

            {posts.map((post)=>{
                return(
                    <Article
                     key={post.id}
                     title={post.title}
                     date={post.date}
                     preview={post.preview}
                     minutes={post.minutes}                  
                    
                    
                    />
                )
            })}
        </main>
    )
}

export default ArticleList;