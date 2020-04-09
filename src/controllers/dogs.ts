import { Request, Response } from "express";
import express = require("express");
import axios, {AxiosError} from 'axios';
import parser from '../parser';
const host = 'https://dog.ceo/api';

const normalizeError = (error: AxiosError) => error.response ? error.response.data : ({ code: 500, message: 'Internal error.' })

export const list = (req: Request, res: Response) => {
    axios.get(`${host}/breeds/list/all`)
        .then(result => res.json(parser(result.data.message)))
        .catch(e => {
            res.send(normalizeError(e))
        })
};

export const imageRouter = express.Router()
    .get('/:breed', (req: Request, res: Response) =>
        axios.get(`${host}/breed/${req.params.breed}/images`)
            .then(result => res.json(result.data.message))
            .catch(e => res.send(normalizeError(e)))
    ).get('/:breed/:subBreed', (req: Request, res: Response) =>
        axios.get(`${host}/breed/${req.params.breed}/${req.params.subBreed}/images`)
            .then(result => res.json(result.data.message))
            .catch(e => res.send(normalizeError(e)))
    );