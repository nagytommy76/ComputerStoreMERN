import { Request, Response } from "express";
import { MemoryProduct } from "../../../models/Products/Memory/Memory";
import baseAdminController from "../BaseController";

const AdminController = baseAdminController(MemoryProduct)

export const insertMemoryProduct = (request: Request, response: Response) => {
    try {
        // AdminController.
        
    } catch (error) {
        response.status(500).json(error)
    }
}