const mongoose = require('mongoose');
const Chef = mongoose.model('Chef')
module.exports = {
    all: async (req, res) => {
        try {
            const chefs = await Chef.find();
            res.json({chefs: chefs});
        }
        catch (err) {
            res.json(err);
        }
    },
    getOneById: (req, res) => {
        Chef.findById({ _id : req.params.id })
            .then((data) => {
                res.json({chef: data})
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const chef = new Chef(req.body);
        chef.save()
            .then((data) => {
                res.json({newChef: data});
            })
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        Chef.updateOne({ _id : req.params.id }, req.body)
            .then((data) => {
                res.json({updatedChef: data});
            })
            .catch(err => res.json(err));
    },
    delete: (req, res) => {
        Chef.findOneAndDelete({ _id : req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
}
