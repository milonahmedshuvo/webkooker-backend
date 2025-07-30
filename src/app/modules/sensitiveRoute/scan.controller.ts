import { NextFunction, Request, Response } from "express";
import { sensitiveServices } from "./scan.services";


const scanWebsite = async (req:Request, res:Response, next:NextFunction) => {
    const {baseUrl} = req.body
    if(!baseUrl){
        res.status(400).json({error: "BaseUrl is required"})
    }

    try {
        const results = await sensitiveServices.detectSensitiveRoutes(baseUrl)

        console.log({results})
        res.status(200).json({
            success: true,
            message: "Sensitive Routes is successfull",
            data: results
        })
    } catch (err) {
        console.log(`Sensitive routes is failed ${err}`)
        res.status(500).json({
            success: false,
            message: "Sensitive routes is fetch failed",
            data: ""
        })
    }
}



export const sensitiveControllers = {
    scanWebsite
}