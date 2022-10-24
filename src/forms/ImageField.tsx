import React, { ChangeEvent, useState } from 'react';

const ImageField = (props: imageFieldProps) => {
  const [imageBase64, setImageBase64] = useState('');

  const handleOnChange = (eventsArgs: ChangeEvent<HTMLInputElement>) => {
    if (eventsArgs.currentTarget.files) {
      const file = eventsArgs.currentTarget.files[0];
      if (file) {
        toBase64(file)
          .then((base64Representation: string) =>
            setImageBase64(base64Representation)
          )
          .catch((error) => console.error(error));
      } else {
        setImageBase64('');
      }
    }
  };
  //converting the image file to its basic 64 representation
  const toBase64 = async (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <div className="mb-5">
      <div>
        <label htmlFor="">{props.displayName}</label>
        <input type="file" accept=".jpg,.jpeg,.png" onChange={handleOnChange} />
      </div>
      {/* using imageBase64 to display image on the screen */}
      {imageBase64 ? (
        <div>
          <div className="mt-5">
            <img width="450px" src={imageBase64} alt="Actor" />
          </div>
        </div>
      ) : null}
      {/* ------------------------------------------------ */}
    </div>
  );
};
interface imageFieldProps {
  displayName: string;
  //in case we are in the edit mode
  imageURL: string;
}
ImageField.defaultProps = {
  ImageField: '',
};

export default ImageField;
