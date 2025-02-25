import apis from '../models/apis.js'; 

class ApiController {

    static getAllApis = (req, res, ) => {
        apis.find((err, apis) => {
            res.status(200).json(apis)
        })
       
    }
    static createApis = (req, res) => {
        let api = new apis(req.body);

        apis.bulkSave((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message}
                - falha ao cadastrar api`})
            } else {
                res.status(201).send(api.toJSON())
            }
        })
    }
}

export default  ApiController;