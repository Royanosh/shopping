import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    type:'success',
    data:'Hello From shopping'
  });
})

app.listen(8003, () => {
  console.log("Shopping server is running on Port Number: 8003");
})