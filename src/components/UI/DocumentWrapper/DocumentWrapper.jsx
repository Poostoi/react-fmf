import { useParams } from "react-router-dom";
import DocumentViewer from "../../DocumentViewer/DocumentViewer";

function DocumentWrapper() {
    const {docsName} = useParams()

    console.log(docsName)

    return (
        <div style={{
            backgroundColor: '#eee'
        }}>
            <DocumentViewer fileName={docsName} />
        </div>
    )
}

export default DocumentWrapper