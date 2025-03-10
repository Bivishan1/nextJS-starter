"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState(""); // we are going to store the public_id of the uploaded image in the state
  return (
    <>
      <h1>UploadPage</h1> 
      {publicId && 
        <CldImage
          src={publicId}
          width={200}
          height={180}
          alt="webpage_image"
        />
      }
      <CldUploadWidget
        uploadPreset="first_upload"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
          cropping: true,
          croppingAspectRatio: 1,
        styles: { // for additional styles property, refer to the documentation of cloudinary docs
          menuIcons : "#5A616A"
        }
        
      }}
        onSuccess={(res, widget) => {
          //just to see the response
          // const t1 = res.event;
          console.log('uploading');
          if (res.event!== "success") return;
          const info = res.info as CloudinaryResult; //using type assertation to tell the typescript compiler about the type of this property in this case i.e. CloudinaryResult
          setPublicId(info.public_id);

        }
         
      }
        
      >
        {/* it doesn't have any user interface so it renders anything we pass as a children.if we try to pass a button as a jsx it doesn't work because this component expects a component's function as it's children. */}
        {/*function returning a button */}
        {/* next-cloudinary has an object that is function. we desctructure that object and can grab various feature from here. */}
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
        
      </CldUploadWidget>
      {console.log(publicId,'image public id')}
    </>
  );
};

export default UploadPage;
