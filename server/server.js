const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/fb', (req, res) => {
    const query = 'SELECT * FROM "feedback" ORDER BY "id" DESC;';
    pool.query(query)
        .then((results) => {
            res.send(results.rows);
        }).catch((err) => {
            console.log('GET error:', err);
            res.sendStatus(500);
        });
});
app.post('/fb', (req, res) => {
    const query = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")'
        + 'VALUES ($1, $2, $3, $4);';
    console.log('POST req.body:', req.body);
    pool.query(query, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then( (results) => {
            res.sendStatus(204);
        }).catch( (err) => {
            console.log('POST error:', err);
            res.sendStatus(500);
        });
});
app.put('/fb/flag/:id', (req, res) => {
    const id = req.params.id;
    console.log('PUT body:', req.body.flagged, 'id:', id);
    const query = 'UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2';
    pool.query(query, [req.body.flagged, id])
        .then( (results) => {
            console.log('PUT success');
            res.sendStatus(200);
        }).catch( (err) => {
            console.log('PUT error:', err);
            res.sendStatus(500);
        })
});
app.delete('/fb/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM "feedback" WHERE "id" = $1';
    pool.query(query, [id])
        .then((results) => {
            console.log('DELETE success');
            res.sendStatus(200);
        }).catch((err) => {
            console.log('DELETE error:', err);
            res.sendStatus(500);
        })
});
/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});