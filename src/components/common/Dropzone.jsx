import { Typography } from '@mui/material';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';
import { promiseUploadFile } from '../../redux/queries/queries';
import { setAvatarTHC } from '../../redux/reducers/usersReducer';

const Dropzone = ({handleDrop, myId}) => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        handleDrop(acceptedFiles[0], myId)
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

const mapStateToProps = (state) => ({
    myId: state.auth.payload.sub.id
})

export default connect(mapStateToProps, {handleDrop: setAvatarTHC})(Dropzone);