import React from 'react'

interface Props {
    // params: { id: string, photoId : string }; // Change number to string since URL params are strings
  //new code
  params: Promise<{ id: string; photoId: string }>;
  }
  
const PhotosPage= async ({ params }: Props) => {
    const {id, photoId} = await params;
  return (
    <div>PhotosPage {id} {photoId} </div>
  )
}

export default PhotosPage