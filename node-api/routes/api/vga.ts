import express from 'express'
const vgaObject = require('./VgaItems')
const router = express.Router()
const { Vga, VgaDetails } = require('../../models/VgaProducts')

const vga = new Vga({
   itemNumber: 'ASRX57008GBROGSTR',
   type: 'RX 5700 ROG STRIX',
   typeCode: 'ROG-STRIX-RX5700-O8G-GAMING',
   manufacturer: 'Asus',
   price: 468700,
   pictureUrls: ['képURL1', 'KépURL2']
})

router.get('/', (req, res) => {
   vga.save()
   res.json(vgaObject)
   console.log(req.body)
})

module.exports = router
