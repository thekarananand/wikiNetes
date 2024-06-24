// Runtime Varibles
import ClientSideEndpoint from "@/runtime_variables/ClientSideEndpoint";

// UI Components
import Editor from "@/components/common/Editor";

const NewArticle = async () => {

    return (
        <Editor
            reqMethod  = { "POST" }
            reqURL     = { ClientSideEndpoint + "/api/articles/new/" }
            title      = { "" }
            author     = { "" }
            md_content = { "" }
            heading    = { "Create a new Article" } />
    );

};

export default NewArticle;