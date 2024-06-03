import Menu from './menu';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from './table'; 
import logo from '../../assets/logo.png';

type ArquivoEnviado = {
    nome: string;
    tipo: string;
    tamanho: number;
    dataEnvio: string;
};

const ArquivosEnviados = () => {
    const arquivosEnviadosString = sessionStorage.getItem('arquivosEnviados');
    const arquivosEnviados: ArquivoEnviado[] = arquivosEnviadosString ? JSON.parse(arquivosEnviadosString) : [];
  
    return (
      <div className="flex h-screen">
        <Menu />
        <main className="p-6 flex flex-col gap-8">
          <img src={logo} alt="Logo" className="w-80 h-auto mb-6" />
          <Table>
            <TableCaption>Lista de Arquivos Enviados</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nome do Arquivo</TableHead>
                <TableHead>Tamanho</TableHead>
                <TableHead>Data de Envio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {arquivosEnviados.length > 0 ? (
              arquivosEnviados.map((arquivo, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{arquivo.nome}</TableCell>
                  <TableCell>{(arquivo.tamanho / (1024 * 1024)).toFixed(2)} MB</TableCell>
                  <TableCell>{new Date(arquivo.dataEnvio).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">Nenhum arquivo enviado</TableCell>
              </TableRow>
            )}
          </TableBody>
          </Table>
        </main>
      </div>
    );
  };

export { ArquivosEnviados };
