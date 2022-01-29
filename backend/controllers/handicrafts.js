const Handicrafts = require('../models/handicrafts');

exports.getHandicraft = (req,res) => {
    const id = req.params.id;

    Handicrafts.findOne({ _id: id })
    .then(user => res.json(user))
    .catch(err => res.status(400));
};

exports.getHandicraftsList = (req,res) => {
    Handicrafts.find()
    .then(list => 
        res.json(list.map(item => ({id: item._id, img: item.url, title: item.title})))
    )
    .catch(err => res.status(400));
/*    const pageOptions = {
        page: +req.query.page-1,
        limit: +req.query.limit,
    }

     Handicrafts.count({},(_,count) => {
        const totalPages = Math.ceil(count/pageOptions.limit);

        Handicrafts.find()
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)
            .exec((error, document) => {
                if(error) { res.status(500).json(error); return; }
                res.status(200).json({
                    "data":document,
                    "totalPages": totalPages,
                });
            });
    }); */
};
