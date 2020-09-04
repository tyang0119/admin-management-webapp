const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const multer = require('multer')
const sharp = require('sharp')

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).json(user)
    } catch (e) {
        res.status(400).json(e)
    }
})


router.get('/users/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (e) {
        res.status(500).json()
    }
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).json()
        }

        res.send(user)
    } catch (e) {
        res.status(500).json()
    }
})

router.put('/users/:id', async (req, res) => {
    // const updates = Object.keys(req.body)
    // const allowedUpdates = ['firstName', 'lastName', 'gender', 'age']
    // const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid updates!' })
    // }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).json()
        }

        res.send(user)
    } catch (e) {
        res.status(400).json(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).json()
        }

        res.json(user)
    } catch (e) {
        res.status(500).json()
    }
})

const upload = multer({
    limits: {
        fileSize: 1000000
    }
})

router.post('/users/avatar', upload.single('avatar'), async (req, res) => {
    const user = new User(req.body)
    const buffer = await sharp(req.file.buffer).resize({ width: 100, height: 100 }).png().toBuffer()

    user.avatar = buffer

    await user.save()
    res.status(200).send(user._id)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.put('/users/avatar/:id', upload.single('avatar'), async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        const buffer = await sharp(req.file.buffer).resize({ width: 100, height: 100 }).png().toBuffer()
        user.avatar = buffer

        if (!user) {
            return res.status(404).json()
        }

        await user.save()
        res.status(200).send()
    } catch (e) {
        res.status(400).json(e)
    }
})


router.get('/users/:id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user || !user.avatar) {
            throw new Error()
        }

        res.set('Content-Type', 'image/jpg')
        res.send(user.avatar)
    } catch (e) {
        res.status(404).send()
    }
})

module.exports = router