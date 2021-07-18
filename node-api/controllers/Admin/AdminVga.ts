import { Request, Response } from 'express'
// import { VgaProduct } from '../../models/Vga/VgaProduct'
import { createVgaProduct } from './CreateVga'

export const insertVgaItemController = async (req: Request, res: Response) => {
   try {
      const createdVga = await createVgaProduct(req.body)
      console.log(createdVga)
      res.sendStatus(201)
   } catch (error) {
      res.status(500).json({ msg: error })
   }
}

//    const vga = new VgaProduct({
//       itemNumber: 'GIGGEFGTX1660SUPEROC',
//       type: 'GTX 1660 SUPER Gaming OC',
//       typeCode: 'GV-N166SGAMING OC-6GD',
//       manufacturer: 'Gigabyte',
//       price: 265000,
//       pictureUrls: [
//          'https://www.techpowerup.com/review/gigabyte-geforce-gtx-1660-super-gaming-pro-oc/images/card1.jpg',
//          'https://www.techpowerup.com/review/gigabyte-geforce-gtx-1660-super-gaming-pro-oc/images/card4.jpg',
//          'https://www.techpowerup.com/review/gigabyte-geforce-gtx-1660-super-gaming-pro-oc/images/card5.jpg'
//       ],
//       details: {
//          gpuManufacturer: 'NVIDIA',
//          pcieType: 'PCI-E 16x 4.0',
//          gpuBaseClock: 1700,
//          gpuPeakClock: 1860,
//          vramCapacity: 6,
//          vramType: 'GDDR6',
//          vramBandwidth: 192,
//          vramSpeed: 14,
//          powerConsuption: 125,
//          description:
//             'NVIDIA GeForce GTX 1660 chipsettel, 6GB GDDR6 memóriával, 1 darab HDMI kimenettel, 3 darab DisplayPort kimenettel',
//          powerPin: '8-pin x 1',
//          warranity: 24,
//          displayPort: 3,
//          DVI: 0,
//          HDMI: 1,
//          minPowerSupply: 750,
//          length: 332,
//          manufacturerPageUrl: 'https://www.gigabyte.com/hu/Graphics-Card/GV-N166SGAMING-OC-6GD#kf',
//          streamProcessors: 2560
//       }
//    })
//    return await vga.save()
