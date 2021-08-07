const Clarifai = require('clarifai');
const { json } = require('express');

const app = new Clarifai.App({
    apiKey:'ac51797c8c34431b84ddfaace46b9d46'
  });

  const handleApiCall = (req,res) =>{
    app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json('unable to use API'))

  }
  

const handleImage = (req, res, db)=>{
    const {id} = req.body;
    db('users').where('id', '=', id).increment('entries', 1)
    .returning('entries')
    .then(entries => res.json(entries[0]))
.catch(err => res.status(400).json('unable to increment'))
}

module.exports= {
    handleImage: handleImage,
    handleApiCall:handleApiCall
}