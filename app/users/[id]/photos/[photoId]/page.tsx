import React from 'react'

interface Props {
<<<<<<< HEAD
    // params: { id: string, photoId : string }; // Change number to string since URL params are strings
  //new code
  params: Promise<{ id: string; photoId: string }>;
=======
    params: Promise<{ id: string; photoId: string }>; // Change number to string since URL params are strings
>>>>>>> 6c8e438dc0b9e9551e4926b163c2dfdf15ac037c
  }
  
const PhotosPage= async ({ params }: Props) => {
    const {id, photoId} = await params;
  return (
    <div>PhotosPage {id} {photoId} </div>
  )
}

export default PhotosPage