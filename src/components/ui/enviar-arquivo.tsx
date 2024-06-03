import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FileUploader } from './file-uploader';
import logo from '../../assets/logo.png';
import Menu from './menu';

function EnviarArquivo(): React.ReactElement {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="flex h-screen">
      <Menu /> 
      <main className="p-6 flex flex-col gap-8">
        <img src={logo} alt="Logo" className="w-80 h-auto mb-6" />
        <div className="flex flex-col gap-6">
          <label htmlFor="file" className="sr-only">
            Choose a file
          </label>
          <input
            id="file"
            type="file"
            accept="text/csv"
            onChange={handleFileChange}
          />
        </div>
        {file && <FileUploader file={file} />}
        <Outlet />
      </main>
    </div>
  );
}

export { EnviarArquivo };
