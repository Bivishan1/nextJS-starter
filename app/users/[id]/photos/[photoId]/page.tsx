import React from 'react'

interface Props {
    params: Promise<{ id: string; photoId: string }>; // Change number to string since URL params are strings
  }
  
const PhotosPage= async ({ params }: Props) => {
    const {id, photoId} = await params;
  return (
    <div>PhotosPage {id} {photoId} </div>
  )
}

export default PhotosPage