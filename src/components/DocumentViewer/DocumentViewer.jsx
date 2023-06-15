import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function DocumentViewer({fileName}) {
    return (
        <div  style={{
            width: '60%',
            margin: '0 auto',
            }}>

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={`/documents/${fileName}.pdf`}
                    defaultScale={SpecialZoomLevel.PageWidth}
                />
            </Worker>
            
        </div>
    )
}

export default DocumentViewer

