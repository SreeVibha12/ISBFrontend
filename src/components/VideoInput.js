import React, { useState } from 'react';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-media-preview/dist/filepond-plugin-media-preview.min.css';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginMediaPreview from 'filepond-plugin-media-preview';

registerPlugin(FilePondPluginMediaPreview);

const VideoInput = () => {
    const [files, setFiles] = useState([]);

    return (
        <div>
            <h2>UPLOAD THE VIDEO</h2>
            <FilePond
                files={files}
                allowMultiple={false}
                acceptedFileTypes={['video/*']}
                onupdatefiles={setFiles}
                labelIdle='Drag & Drop your video or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    );
};

export default VideoInput;
