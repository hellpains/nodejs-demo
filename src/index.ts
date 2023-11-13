import express, {Request, Response} from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    let helloMessage = '123123123';
    res.send(helloMessage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})