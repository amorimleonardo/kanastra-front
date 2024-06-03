import { useState } from 'react';
import axios from 'axios'; // Importe axios para fazer a requisição HTTP

type FileUploaderProps = {
  file: File;
}

const FileUploader = ({ file }: FileUploaderProps) => {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleUpload = async () => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:3000/ingestion/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: false,
      });

      if (response.status === 201) {
        setUploadStatus('Arquivo enviado com sucesso!');

        const arquivosEnviadosString = sessionStorage.getItem('arquivosEnviados');
        const arquivosEnviados = arquivosEnviadosString ? JSON.parse(arquivosEnviadosString) : [];
        
        arquivosEnviados.push({
          nome: file.name,
          tipo: file.type,
          tamanho: file.size,
          dataEnvio: new Date().toISOString(),
        });

        sessionStorage.setItem('arquivosEnviados', JSON.stringify(arquivosEnviados));
      } else {
        setUploadStatus('Erro ao enviar o arquivo.');
      }
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
      setUploadStatus('Erro ao enviar o arquivo.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className = "flex flex-col gap-6">
      {file && (
        <section>
          <p className="pb-6">Detalhes:</p>
          <ul>
            <li>Nome: {file.name}</li>
            <li>Tipo: {file.type}</li>
            <li>Tamanho: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {}
      {uploading && <p>Enviando arquivo...</p>}
      {uploadStatus && <p>{uploadStatus}</p>}
      {!uploading && !uploadStatus && file && <button onClick={handleUpload} className="rounded-lg bg-green-800 text-white px-4 py-2 border-none font-semibold">Enviar arquivo</button>}
    </div>
  );
};

export { FileUploader };
