import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Foto from "../model/Foto";

interface FotoDTO {
    filename: string;
    filepath: string;
    mimetype: string;
    size: BigInt;
}

class FotosController {
    uploadImage(filename: any, filepath: any, mimetype: any, size: any) {
        async (req: Request, res: Response) => {
            const FotoUpada : FotoDTO = {
                filename: filename,
                filepath: filepath,
                mimetype: mimetype,
                size: size,
            }
            
            const fotoRepository = getRepository(Foto);
            const fotoRequest: FotoDTO = req.body;
            const fotoParaEnviar: Foto = fotoRepository.create(FotoUpada);
    
            await fotoRepository.save(fotoParaEnviar);
    
            return res.json(fotoParaEnviar);
        } 
    }
}

export default FotosController
