import { Typography } from '@mui/material';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';
import { promiseUploadFile } from '../../redux/queries/queries';

const Dropzone = ({handleDrop}) => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        handleDrop(acceptedFiles[0])
      }, [])
      const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    
      return (
        <div {...getRootProps()} style={{cursor: 'pointer'}}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <Typography variant="body2">Drop the image here ...</Typography> :
              <Typography variant="body2">Drag 'n' drop an image here, or click to select an image</Typography>
          }
        </div>
      )
}

export default connect(null, {handleDrop: promiseUploadFile})(Dropzone);