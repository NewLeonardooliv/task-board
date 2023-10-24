import React, { useRef, useState } from "react";
import Icon from "./Icon";

type FileProps = {
  file: File
  fileName: string
}

type ImageUploadProps = {
  setFile: ({ file, fileName }: FileProps) => void;
  accept?: string;
}

const ImageInput: React.ForwardRefRenderFunction<any, React.PropsWithChildren<ImageUploadProps>> = ({
  accept = '.enc,.jpeg,.jpg,.png',
  ...props
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const fileName = file.name;

      props.setFile({ file, fileName });

      setSelectedFile(file.name);
    }
  };

  const deleteSelectedFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div onClick={openFileInput} className="border border-foreground/25 rounded text-center cursor-pointer hover:opacity-90">
      <div className="bg-current bg-opacity-50 p-4 rounded">
        {selectedFile ? (
          <div className="flex items-center justify-between">
            <p className="text-orange">
              {selectedFile}
            </p>
            <button
              className="text-foreground hover:opacity-60 transition-all"
              onClick={deleteSelectedFile}>
              <Icon iconName="faTimes" />
            </button>
          </div>
        ) : (
          <>
            <p className="text-orange">Adicionar arquivo</p>
            <p className="text-sm text-foreground">Tamanho máximo de 20MB</p>
          </>
        )}
      </div>
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default ImageInput;
