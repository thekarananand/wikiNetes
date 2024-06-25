// Runtime Varibles
import ServerSideEndpoint from "@/runtime_variables/ServerSideEndpoint";
import ClientSideEndpoint from "@/runtime_variables/ClientSideEndpoint";

// UI Components
import Editor from "@/components/common/Editor";

const EditArticle = async ( props: { id :string } ) => {

    const getArticlesMD = async () => {
        let response = await fetch( ServerSideEndpoint + `/api/articles/${ props.id }/md/`, { cache: "no-store" } );
        
        if ( response.ok ) {
            let x = await response.json();
            return x;
        };
    };

    let ArticleContent = await getArticlesMD();

    return (
        <Editor
            reqMethod  = { "PUT" }
            reqURL     = { ClientSideEndpoint + `/api/articles/${ props.id }/` }
            title      = { ArticleContent.title }
            author     = { ArticleContent.author }
            md_content = { ArticleContent.md_content }
            heading    = { "Edit Article" } />
    );

};

export default EditArticle;